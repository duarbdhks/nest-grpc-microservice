CREATE TABLE IF NOT EXISTS comments (
  id           UUID PRIMARY KEY         DEFAULT gen_random_uuid(),
  organization UUID                                   NOT NULL,
  comment      TEXT                                   NOT NULL,
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at   TIMESTAMP WITH TIME ZONE
);

COMMENT ON COLUMN comments.id IS 'The identifier for the comment record';
COMMENT ON COLUMN comments.organization IS 'Ref: Organization. The organization the comment is associated with';
COMMENT ON COLUMN comments.comment IS 'The comment text';
