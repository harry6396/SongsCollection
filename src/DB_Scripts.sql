CREATE DATABASE SongsCollection;

CREATE TABLE SongDetails (
  name varchar(1024),
  artists varchar(1024),
  danceability float,
  energy float,
  keyss INT,
  loudness float,
  modes float,
  speechiness float,
  acousticness float,
  instrumental float,
  liveness float,
  valence float,
  tempo float,
  duration_ms float,
  time_signature float,
  rank INT
);
