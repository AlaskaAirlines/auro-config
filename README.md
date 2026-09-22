# Auro Config

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-config/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-config/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-config.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-config)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-config.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

Shared config for every Auro tool. Extend it and every repo lints, formats, and releases the same way.

Published as `@aurodesignsystem/auro-config`.

## Install

```bash
npm install --save-dev @aurodesignsystem/auro-config
```

## Usage

Point each config file at the shared version with `extends`. Do not copy the rules into your repo, and do not deviate from them. The whole point is that every Auro repo stays aligned.

## What's in here

| Config | Extend it from | Used for |
|--------|----------------|----------|
| `biome.json` | `@aurodesignsystem/auro-config/biome` | lint and format |
| `.stylelintrc` | `@aurodesignsystem/auro-config/stylelint` | CSS lint |
| `.releaserc` | `@aurodesignsystem/auro-config/releaserc` | semantic-release |
| `.commitlintrc` | `@aurodesignsystem/auro-config/commitlint` | commit message rules |
| `.lintstagedrc` | `@aurodesignsystem/auro-config/lintstaged` | pre-commit checks |

### Examples

`biome.json`

```json
{ "extends": ["@aurodesignsystem/auro-config/biome"] }
```

`.stylelintrc`

```json
{ "extends": ["@aurodesignsystem/auro-config/stylelint"] }
```

`.releaserc`

```json
{ "extends": ["@aurodesignsystem/auro-config/releaserc"] }
```

`.commitlintrc`

```json
{ "extends": ["@aurodesignsystem/auro-config/commitlint"] }
```

`.lintstagedrc`

```json
{ "extends": ["@aurodesignsystem/auro-config/lintstaged"] }
```

## The release config

`releaserc` is the one that drives publishing. It sets:

- **Branches**: `main` publishes to npm `latest`. `rc/*` publishes a prerelease to the `rc` dist-tag.
- **Commit rules**: conventional commits, plus `docs(README)`, `refactor`, and `style` each bump a patch.
- **Plugins**: commit-analyzer, release-notes-generator, changelog, npm, github.

One thing to know: there is no `@semantic-release/git` plugin. The changelog and version bump are not committed back to the repo. They live in the npm package and the GitHub release. This is the recommended way semantic-release suggests you use their tool.
