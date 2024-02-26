// 난수 생성 -> seed
// train, test 데이터셋 분리 -> 랜덤으로 분리 -> seed

// second 는 시드가 변경될 시점
const generateSeed = (second) => {
  const date = new Date();
  const seed = Math.floor(date.getTime() / (second * 1000));
  return seed;
};

// crypto 라이브러리로 구현 가능
const getRandomNumber = (seed) => {
  const number = Math.sin(seed);
  return Math.abs(number);
};

const getRandomRateBy30Seconds = () => {
  const seed = generateSeed(30);
  return 0.9 + getRandomNumber(seed) * 0.2;
};

const executeRandom = () => {
  const date = new Date();
  const seconds = date.getSeconds(); // 현재 초를 가져옴
  if (seconds % 30 === 0) {
    return 0.9 + Math.random() * 0.2;
  }
  if (seconds >= 0 && seconds < 30) {
    return 0.9 + Math.random() * 0.2; // 전역 상태 업데이트
  } else if (seconds >= 30 && seconds < 60) {
    return 0.9 + Math.random() * 0.2; // 전역 상태 업데이트
  }
};


export { getRandomRateBy30Seconds };
