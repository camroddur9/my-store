const username: string = "camroddur";
const sum = (a: number, b: number) => {
  return a + b
}

sum(1, 2);

class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName
  }
}

const cam = new Person(15, "Rodriguez")
