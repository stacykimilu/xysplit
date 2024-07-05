function solution(S) {
  const counts = { x: 0, y: 0 };
  for (const char of S) {
    counts[char]++;
  }

  if (!counts.x && !counts.y) return 0;
  if (counts.x === counts.y) return S.length - 1;

  let prefixX = 0, prefixY = 0, suffixX = counts.x, suffixY = counts.y, validSplits = 0;
  for (let i = 1; i < S.length; i++) {
    prefixX += S[i - 1] === 'x';
    prefixY += S[i - 1] === 'y';
    suffixX -= S[S.length - i] === 'x';
    suffixY -= S[S.length - i] === 'y';
    validSplits += prefixX === suffixY && prefixY === suffixX;
  }

  return validSplits;
}