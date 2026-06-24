-- V502 Synonym Drill — Leaderboard & User Data Schema
-- Run this in Supabase SQL Editor to create or reset the database
-- Last updated: 2026-06-24 (audit — synced with actual DB state)

-- 1. Table
create table if not exists public.leaderboard_scores (
  id bigint generated always as identity primary key,
  nickname text not null,
  quiz_set text not null default '001-010',
  correct_count integer not null check (correct_count >= 0),
  total_count integer not null check (total_count > 0),
  accuracy integer not null check (accuracy >= 0 and accuracy <= 100),
  payload text,  -- JSON blob for USERDATA sync (pw, word_knowledge, progress, etc.)
  created_at timestamptz not null default now()
);

-- 2. Unique constraint — prevents duplicate (nickname, quiz_set) rows
-- If this fails because duplicates already exist, clean them first (see cleanup-duplicates.sql)
alter table public.leaderboard_scores
  add constraint if not exists leaderboard_scores_nickname_quiz_set_key
  unique (nickname, quiz_set);

-- 3. Row-Level Security
alter table public.leaderboard_scores enable row level security;

-- Drop all existing policies to reset
do $$
declare
  pol record;
begin
  for pol in select policyname from pg_policies
             where tablename = 'leaderboard_scores' and schemaname = 'public'
  loop
    execute format('drop policy if exists %I on public.leaderboard_scores', pol.policyname);
  end loop;
end $$;

-- Permissive policies (public read, insert, update, delete)
create policy "Allow public read"
  on public.leaderboard_scores for select using (true);

create policy "Allow public insert"
  on public.leaderboard_scores for insert with check (true);

create policy "Allow public update"
  on public.leaderboard_scores for update using (true) with check (true);

create policy "Allow public delete"
  on public.leaderboard_scores for delete using (true);

-- 4. Indexes
create index if not exists leaderboard_scores_rank_idx
  on public.leaderboard_scores (accuracy desc, correct_count desc, created_at asc);

create index if not exists leaderboard_scores_set_rank_idx
  on public.leaderboard_scores (quiz_set, accuracy desc, correct_count desc, created_at asc);

create index if not exists leaderboard_scores_nickname_idx
  on public.leaderboard_scores (nickname);

create index if not exists leaderboard_scores_quiz_set_idx
  on public.leaderboard_scores (quiz_set);
