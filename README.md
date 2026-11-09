# pi-command-aliases

Adds `/exit` and `/clear` to [Pi](https://github.com/earendil-works/pi) as aliases of the built-in `/quit` and `/new` commands.

## Install

From npm (recommended):

```sh
pi install npm:@crossoverjie/pi-command-aliases@1.0.1
```

From git:

```sh
pi install git:github.com/crossoverJie/pi-command-aliases@v1.0.1
```

Try it for one session without changing your settings:

```sh
pi -e npm:@crossoverjie/pi-command-aliases
```

If Pi is already running, run `/reload`, then type `/` to see both commands in the menu.

## Commands

| Command | Equivalent built-in | Behavior |
| --- | --- | --- |
| `/exit` | `/quit` | Gracefully quit Pi |
| `/clear` | `/new` | Start a new session |

`/quit` and `/new` remain available. Pi does not let extensions rename or hide built-in commands, so this package adds two new commands rather than replacing the originals.

## Manage

```sh
pi list
pi config
pi update --extensions
pi remove npm:@crossoverjie/pi-command-aliases
```

Pinning an exact npm version keeps installs reproducible; upgrade by installing a newer version or running `pi update --extensions` after a new release.

## Requirements

A Pi version that provides `ctx.shutdown()` and `ctx.newSession()` in extension command handlers. Run `pi update` if `/clear` does nothing.

## How it works

The extension registers two commands with `pi.registerCommand()`. `/exit` calls `ctx.shutdown()` and `/clear` calls `ctx.newSession()` — the same entry points the built-in commands use. There are no runtime dependencies and no build step: Pi loads the TypeScript source directly with jiti.

## Publishing (maintainers)

Pushing a `v*` tag runs `.github/workflows/publish.yml`. It verifies that the tag matches `version` in `package.json`, checks that the tarball contains `extensions/aliases.ts`, then publishes to npm. The workflow needs an `NPM_TOKEN` repository secret with publish rights:

```sh
gh secret set NPM_TOKEN
```

To cut a release, bump `version`, add a `CHANGELOG.md` entry, commit, then:

```sh
git tag v1.0.1
git push origin v1.0.1
```

The workflow pins the registry to `https://registry.npmjs.org`. If you publish locally instead and your npm is configured to use a mirror, pass `--registry=https://registry.npmjs.org`.

## License

MIT
