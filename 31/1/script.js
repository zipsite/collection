let elems = document.querySelectorAll('p');

function way1(obj) {
    let arr = [];

    for (let elem of obj) {
        arr.push(elem);
    }
    return arr;
}

function way2(obj) {
    return [...obj];
}

function way3(obj) {
    return Array.from(elems);
}

console.log(way1(elems));
console.log(way2(elems));
console.log(way3(elems));