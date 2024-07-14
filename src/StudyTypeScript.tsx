import React from 'react';

const StudyTypeScript = () => {
  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: 'a', age: 10 };
  const car: Car = { name: 'bmw', color: 'red' };
  const book: Book = { price: 3000 };

  // 제네릭 함수에서 타입 매개변수 T를 사용하고 있으며,
  // T가 어떤 타입인지 명확히 지정하지 않아서
  // data 객체에 name 속성이 있는지 타입스크립트가 알 수 없기 때문
  // 이를 해결하기 위해 T가 name 속성을 가진 객체임을 명시적으로 지정해야 한다.
  // 코드 설명 : 어떠한 T타입의 데이터가 올 것인데 이는 name이라는 속성을 확장한 형태이다
  // 다양한 모습의 데이터가 올 수 있겠지만 항상 name:string을 가지고 있어야 한다.
  const showName = <T extends { name: string }>(data: T) => {
    return data.name;
  };

  showName(user);
  showName(car);
  // showName(book); 애러 발생

  return (
    <>
      <div>안녕안녕 나는 지수야!</div>
      <div>헬륨가스 먹어서 요로케됐지</div>
    </>
  );
};

export default StudyTypeScript;
