//클래스 생성
let myPet={
    name: "Momo",
    type: "Cat"
}
console.log(myPet.name)
console.log(myPet.type)

//클래스 생성
class Person{
    constructor(name, age){   //생성자
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Hello, my name is "+this.name+" and I am "+this.age+" years old.")
    }
}
const person=new Person("Jane Doe",25)
person.greet()

//reduce 메소드 사용
const number=[1,2,3,4,5];
let result=number.reduce((acc, el, i)=>{
    console.log(`누적 합: ${acc}
현재 값: ${el}`);
    return acc + el;
}, 0)
console.log("--------------");
console.log(result);

//map 메소드 사용
let double=number.map((item)=>{
    return item*2
})
console.log(double)

//화살표 함수 사용
const add=(num1, num2)=>{
    return num1+num2;
}
const sum=add(2,3);
console.log(sum);

//화살표 함수 사용2
const sumArray=(arr)=>{
    const total=arr.reduce((sum, curr)=>{
        return sum+curr;
    },0);
    return total
};
console.log(sumArray([1,2,3,4,5]));