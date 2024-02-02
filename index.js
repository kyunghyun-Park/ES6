const arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

arr.unshift(8, 9);
console.log(arr); // [8, 9, 1, 2, 3, 4, 5]

arr.shift();
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]

//함수 선언 후 사용
const print = (number, index) => {
    console.log(`${index} 위치의 요소 : ${number}`);
};
arr.forEach(print);

//바로 사용
arr.forEach((number, index) => {
    console.log(`${index} 위치의 요소 : ${number}`);
});

//find() : 조건을 만족하는 첫 번째 요소만 반환
console.log(arr.find((number) => number > 3)); //4

//findIndex() : 조건을 만족하는 첫 번째 요소의 인덱스를 반환, 없다면 -1 반환
console.log(arr.findIndex((number) => number > 3)); //3

arr.fill(10, 3); //3번 인덱스부터 끝까지 10으로 채워라
console.log(arr); // [1, 2, 10, 10, 10]

console.log(arr.join()); // 1,2,3,10,10