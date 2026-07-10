-- Fix IRT scores that were written with the legacy 40x display multiplier.
-- 2154 / 40 = 53.85, rounded to 54 because leaderboard_scores stores integers.

update public.leaderboard_scores
set
  correct_count = 54,
  total_count = 54,
  accuracy = 100
where nickname = '서성한'
  and quiz_set = 'IRT'
  and correct_count = 2154
  and total_count = 2154;

update public.leaderboard_scores
set payload = (
  payload::jsonb ||
  jsonb_build_object('irt_ability', '54', 'updated_at', now()::text)
)::text
where nickname = '서성한'
  and quiz_set = 'USERDATA'
  and payload is not null;
