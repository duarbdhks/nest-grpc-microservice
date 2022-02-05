CREATE TABLE IF NOT EXISTS comments (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization UUID NOT NULL,
  comment      TEXT NOT NULL
);

COMMENT ON COLUMN comments.id IS 'The identifier for the comment record';
COMMENT ON COLUMN comments.organization IS 'Ref: Organization. The organization the comment is associated with';
COMMENT ON COLUMN comments.comment IS 'The comment text';
