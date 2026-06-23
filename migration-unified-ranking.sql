-- V502 Synonym Drill — Unified Ranking Migration (HISTORICAL)
-- This migration was applied to the production Supabase database.
-- It has been consolidated into supabase-schema.sql as of 2026-06-24.
-- For new deployments, use supabase-schema.sql instead.
-- For existing deployments that ran this migration, no further action needed.

-- Original migration (already applied):
-- 1. Added unique constraint on (nickname, quiz_set) — NOTE: constraint may not exist if duplicates were present
-- 2. Replaced restrictive RLS policies with permissive ones (any quiz_set allowed)
-- 3. Added UPDATE policy for upsert operations
