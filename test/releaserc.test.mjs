import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { analyzeCommits } from "@semantic-release/commit-analyzer";
import { generateNotes } from "@semantic-release/release-notes-generator";

const releaserc = JSON.parse(
  readFileSync(new URL("../configs/releaserc.json", import.meta.url), "utf8"),
);

const pluginOptions = (name) => {
  const plugin = releaserc.plugins.find(
    (entry) => (Array.isArray(entry) ? entry[0] : entry) === name,
  );
  return Array.isArray(plugin) ? plugin[1] : {};
};

const context = (messages) => ({
  cwd: process.cwd(),
  commits: messages.map((message, index) => ({
    hash: `${index}`.padStart(7, "0"),
    message,
  })),
  logger: { log() {} },
});

describe("releaserc commit-analyzer", () => {
  const cases = [
    ["feat!: drop legacy API", "major"],
    ["fix!: change default value", "major"],
    ["feat(button)!: rename slot", "major"],
    ["feat: add option\n\nBREAKING CHANGE: removes old option", "major"],
    ["feat: add option", "minor"],
    ["fix: correct spacing", "patch"],
    ["docs(README): update usage", "patch"],
    ["refactor: simplify render", "patch"],
    ["style: reorder properties", "patch"],
    ["docs: update guide", null],
    ["chore: update deps", null],
  ];

  for (const [message, expected] of cases) {
    it(`${JSON.stringify(message)} -> ${expected}`, async () => {
      const release = await analyzeCommits(
        pluginOptions("@semantic-release/commit-analyzer"),
        context([message]),
      );
      assert.equal(release, expected);
    });
  }
});

describe("releaserc release-notes-generator", () => {
  it("lists ! commits under breaking changes", async () => {
    const notes = await generateNotes(
      pluginOptions("@semantic-release/release-notes-generator"),
      {
        ...context(["feat!: drop legacy API"]),
        options: {
          repositoryUrl: "https://github.com/AlaskaAirlines/auro-config",
        },
        lastRelease: { gitTag: "v1.0.0" },
        nextRelease: { gitTag: "v2.0.0", version: "2.0.0" },
      },
    );
    assert.match(notes, /BREAKING CHANGES[\s\S]*drop legacy API/);
  });
});
