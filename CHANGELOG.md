# Changelog

## [1.0.1]

### Fixed

- `/clear` no longer throws "This extension ctx is stale after session replacement": post-`newSession()` work now runs in the `withSession` callback.

## [1.0.0] - 2026-11-09

### Added

- `/exit` command, equivalent to `/quit`.
- `/clear` command, equivalent to `/new`.
