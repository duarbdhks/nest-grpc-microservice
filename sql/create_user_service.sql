CREATE TABLE IF NOT EXISTS users (
  id           UUID PRIMARY KEY         DEFAULT gen_random_uuid(),
  organization UUID                                   NOT NULL,
  login_id     varchar(100)                           NOT NULL,
  avatar       varchar(255)                           NOT NULL,
  followers    INTEGER                  DEFAULT 0     NOT NULL,
  following    INTEGER                  DEFAULT 0     NOT NULL,
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at   TIMESTAMP WITH TIME ZONE
);

COMMENT ON COLUMN users.id IS 'TThe identifier for the user record';
COMMENT ON COLUMN users.organization IS 'Ref: Organization. The organization the comment is associated with';
COMMENT ON COLUMN users.login_id IS 'The login id of the user';
COMMENT ON COLUMN users.avatar IS 'The avatar url of the user';
COMMENT ON COLUMN users.followers IS 'The number of followers of the user';
COMMENT ON COLUMN users.following IS 'The number of people being followed by the user';
