-- V502 Synonym Drill — Unified Ranking Migration
-- Run this in Supabase SQL Editor to update the leaderboard table

-- 1. Add unique constraint for upsert (best score per nickname + quiz_set)
ALTER TABLE leaderboard_scores
ADD CONSTRAINT leaderboard_scores_nickname_quiz_set_key
UNIQUE (nickname, quiz_set);

-- 2. Update RLS policy: allow reading ALL quiz_sets (not filtered by active set)
-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Enable read access for all users" ON leaderboard_scores;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON leaderboard_scores;
DROP POLICY IF EXISTS "Enable read for all" ON leaderboard_scores;
DROP POLICY IF EXISTS "Enable insert for all" ON leaderboard_scores;

-- Create new permissive policies
CREATE POLICY "Allow public read" ON leaderboard_scores
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON leaderboard_scores
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public upsert" ON leaderboard_scores
  FOR UPDATE USING (true) WITH CHECK (true);
