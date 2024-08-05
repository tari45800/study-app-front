export const convertTimeString = (timeStr: string) => {
  // 정규 표현식을 사용하여 시간과 분 추출
  const timeRegex = /(\d{2})h(\d{2})m|(\d{2})h|(\d{2})m/;
  const match = timeStr.match(timeRegex);

  if (!match) {
    throw new Error('Invalid time format');
  }

  // 시간과 분을 추출
  const hours = parseInt(match[1] || '0', 10); // '00' 또는 '01'
  const minutes = parseInt(match[2] || match[4] || '0', 10); // '30' 또는 '00'

  // 시간과 분을 문자열로 변환
  let result = '';
  if (hours > 0) {
    result += `${hours}시간 `;
  }
  if (minutes > 0) {
    result += `${minutes}분`;
  }

  return result.trim();
};
