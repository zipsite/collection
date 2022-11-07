let json = '[1,2,3,4,5]';
let arr = JSON.parse(json);

let sum = 0;

for(elem of arr) {
    sum += elem;
}

console.log(sum);
