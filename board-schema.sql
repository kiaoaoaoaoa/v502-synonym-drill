-- V502 Synonym Drill — Board Schema
-- Run this in Supabase SQL Editor
-- 2026-06-25

-- Board posts table
create table if not exists public.board_posts (
  id bigint generated always as identity primary key,
  nickname text not null,
  title text not null,
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Board comments table
create table if not exists public.board_comments (
  id bigint generated always as identity primary key,
  post_id bigint not null references public.board_posts(id) on delete cascade,
  nickname text not null,
  content text not null,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.board_posts enable row level security;
alter table public.board_comments enable row level security;

-- Permissive policies (public read, insert, delete)
create policy "Allow public read" on public.board_posts for select using (true);
create policy "Allow public insert" on public.board_posts for insert with check (true);
create policy "Allow public delete" on public.board_posts for delete using (true);
create policy "Allow public update" on public.board_posts for update using (true) with check (true);

create policy "Allow public read" on public.board_comments for select using (true);
create policy "Allow public insert" on public.board_comments for insert with check (true);
create policy "Allow public delete" on public.board_comments for delete using (true);

-- Indexes
create index if not exists board_posts_created_at_idx on public.board_posts (created_at desc);
create index if not exists board_comments_post_id_idx on public.board_comments (post_id, created_at asc);
