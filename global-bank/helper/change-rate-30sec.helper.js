
const executeRandom = () => {
  const date = new Date();
  const seconds = date.getSeconds(); // 현재 초를 가져옴
  if (seconds >= 0 && seconds < 30) {
    return 0.9 + Math.random() * 0.2; // 전역 상태 업데이트
  } else if (seconds >= 30 && seconds < 60) {
    return 0.9 + Math.random() * 0.2; // 전역 상태 업데이트
  }

};setInterval (executeRandom, 1000)

const randomRate = executeRandom();

export { randomRate };
