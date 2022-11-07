let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let obj1 = {1:1, 2:2};
let obj2 = {3:3, 4:4};
let obj3 = {5:5, 6:6};

map.set(obj1, arr1);
map.set(obj2, arr2);
map.set(obj3, arr3);

let values = map.values();

for (let value of values) {
    console.log(value);
}