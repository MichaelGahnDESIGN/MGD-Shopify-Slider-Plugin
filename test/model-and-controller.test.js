// Tests Model + Controller (Logik ohne DOM) > node --test test/
const test = require('node:test');
const assert = require('node:assert');
const M = require('../extensions/mgd-slider/assets/mgd-slider-model.js');
const S = require('../extensions/mgd-slider/assets/mgd-slider.js');

test('normalize klemmt Werte und setzt Defaults', () => {
  const n = M.normalize({ mode: 'xx', interval: 1, speed: 99999, prime: { count: 50, source: 'bestseller' } });
  assert.strictEqual(n.mode, 'classic');
  assert.strictEqual(n.interval, 2000);
  assert.strictEqual(n.speed, 2000);
  assert.strictEqual(n.prime.count, 12);
});

test('selectPrime: nur Produkte mit Bild, Duplikate raus, Anzahl begrenzt', () => {
  const c = [
    { id: 1, url: '/a', image: 'i', sales: 1 }, { id: 1, url: '/a', image: 'i' },
    { id: 2, url: '/b', image: '' }, { id: 3, url: '/c', image: 'i', sales: 9 }, { id: 4, url: '/d', image: 'i', inStock: false }
  ];
  const r = M.selectPrime(c, { prime: { source: 'bestseller', count: 5 } });
  assert.deepStrictEqual(r.map(x => x.id), [3, 1]);
});

test('Controller: Loop, kein Autoplay bei reduced motion, Pause stoppt', () => {
  const c = S.createController({ count: 3, loop: true, autoplay: true });
  assert.strictEqual(c.isPlaying(), true);
  c.goTo(2); c.next();
  assert.strictEqual(c.state.index, 0);
  c.togglePause();
  assert.strictEqual(c.isPlaying(), false);
  const r = S.createController({ count: 3, autoplay: true, reducedMotion: true });
  assert.strictEqual(r.isPlaying(), false);
});

test('Controller: ohne Loop an den Enden Schluss', () => {
  const c = S.createController({ count: 2, loop: false });
  assert.strictEqual(c.canPrev(), false);
  c.next();
  assert.strictEqual(c.canNext(), false);
});

test('swipeDirection: nur waagerecht zählt', () => {
  assert.strictEqual(S.swipeDirection(-80, 5), 1);
  assert.strictEqual(S.swipeDirection(80, 5), -1);
  assert.strictEqual(S.swipeDirection(80, 90), 0);
  assert.strictEqual(S.swipeDirection(10, 0), 0);
});
