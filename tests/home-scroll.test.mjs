import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('the Home page container does not lock or clip vertical scrolling', async () => {
  const css = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8');
  const homePageRule = css.match(/\.home-page\s*\{(?<declarations>[^}]*)\}/)?.groups?.declarations;

  assert.ok(homePageRule, 'Expected a .home-page rule');
  assert.doesNotMatch(homePageRule, /\bheight:\s*100vh\b/);
  assert.doesNotMatch(homePageRule, /\boverflow:\s*hidden\b/);
});
