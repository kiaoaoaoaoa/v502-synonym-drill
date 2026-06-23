-- V502 Synonym Drill — Cleanup duplicate USERDATA rows
-- Run this BEFORE applying the unique constraint if duplicates exist
-- This keeps the latest entry per (nickname, quiz_set)

delete from public.leaderboard_scores a
using public.leaderboard_scores b
where a.nickname = b.nickname
  and a.quiz_set = b.quiz_set
  and a.id < b.id;
