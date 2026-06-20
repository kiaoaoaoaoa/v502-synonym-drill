create table if not exists public.leaderboard_scores (
  id bigint generated always as identity primary key,
  nickname text not null,
  quiz_set text not null default '001-010',
  correct_count integer not null check (correct_count >= 0),
  total_count integer not null check (total_count > 0),
  accuracy integer not null check (accuracy >= 0 and accuracy <= 100),
  created_at timestamptz not null default now()
);

alter table public.leaderboard_scores enable row level security;

drop policy if exists "Public rankings are readable" on public.leaderboard_scores;
create policy "Public rankings are readable"
on public.leaderboard_scores
for select
using (true);

drop policy if exists "Anyone can submit a score" on public.leaderboard_scores;
create policy "Anyone can submit a score"
on public.leaderboard_scores
for insert
with check (
  nickname <> ''
  and quiz_set in ('001-010', '011-020')
  and correct_count >= 0
  and total_count > 0
  and correct_count <= total_count
  and accuracy >= 0
  and accuracy <= 100
);

create index if not exists leaderboard_scores_rank_idx
on public.leaderboard_scores (accuracy desc, correct_count desc, created_at asc);

create index if not exists leaderboard_scores_set_rank_idx
on public.leaderboard_scores (quiz_set, accuracy desc, correct_count desc, created_at asc);
