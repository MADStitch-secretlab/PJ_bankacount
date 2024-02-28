import crypto from "crypto";

function generateSeed(intervalInSeconds) {
  const now = Date.now();
  const seed = Math.floor(now / (intervalInSeconds * 1000));
  return Math.floor(now / (intervalInSeconds * 1000));
}

function generateRandomNumber(seed , min , max) {
    const hash = crypto.createHash('sha256').update(String(seed)).digest('hex');
    const rand = parseInt(hash.substring(0, 8), 16);
    const maxi = 0xffffffff;
    return (rand / maxi) * (max - min) + 0.9;
}

function getRandomNumber(intervalInSeconds , min, max) {
    const seed = generateSeed(intervalInSeconds);
    return generateRandomNumber(seed , min , max);
}

export { getRandomNumber };