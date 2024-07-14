import React from 'react';

const StudyTypeScript = () => {
  type Score = 'A' | 'B' | 'C' | 'D';

  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Score;
  }

  let user: User = {
    name: 'lee',
    age: 27,
    birthYear: 1998,
    1: 'A',
    2: 'B',
  };

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (x, y) => {
    return x + y;
  };

  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  class Bmw implements Car {
    color;
    wheels = 4;

    constructor(c: string) {
      this.color = c;
    }

    start() {
      console.log('go');
    }
  }

  const b = new Bmw('green');

  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  interface Toy {
    name: string;
  }

  interface ToyCar extends Car, Toy {
    price: number;
  }

  return (
    <>
      <div>안녕안녕 나는 지수야!</div>
      <div>헬륨가스 먹어서 요로케됐지</div>
    </>
  );
};

export default StudyTypeScript;
