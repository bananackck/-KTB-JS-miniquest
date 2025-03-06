console.log("Start")
console.log("Processing")
console.log("End")

console.log("----------------")

//비동기
function async(){
    setTimeout(()=>{
        console.log("---- Async Operation Complete");
    },1000);
}
console.log("Start");
async();
console.log("End");


//프로미스
const myFirstPromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!")
});
  
myFirstPromise.then(message => {
    console.log(message);
});

//async/await
function waitForMessage(){
    setTimeout(()=>{
        console.log("-----Hello, Async/Await!")
    },1000)
}
waitForMessage();

//자바스크립트엔진
// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); // 무엇이 출력될까요?
let messageLet = "Hello with let!";

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); // 무엇이 출력될까요?
const messageConst = "Hello with const!";

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // 무엇이 출력될까요?
const greet = () => "Hello, Arrow Function!";