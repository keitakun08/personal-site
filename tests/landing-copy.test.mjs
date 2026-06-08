import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('Home uses the approved landing copy and emphasis', async () => {
  const page = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');

  assert.match(page, /<span class="name" id="home-title">Keita Eriawan<\/span>/);
  assert.match(page, /class="keyword keyword-data"/);
  assert.match(page, /class="keyword keyword-code"/);
  assert.match(page, /class="keyword keyword-curiosity"/);
  assert.match(page, /This is where I share projects, experiments, and what I learn while building them\./);
  assert.doesNotMatch(page, /It’s nice to meet you/);
  assert.doesNotMatch(page, /type-break/);
  assert.doesNotMatch(page, /class="marker"/);
});
