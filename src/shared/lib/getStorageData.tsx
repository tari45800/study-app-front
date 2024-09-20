// <T,> JSX가 아닌 타입스크립트 문법임을 명시
export const getStoragedData = <T,>(key: string): T | null => {
  const storageData = localStorage.getItem(key);
  return storageData ? JSON.parse(storageData) : null;
};
