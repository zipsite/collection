let arr = [1, 2, 3, 1, 3, 4];

function deleteDublicate(arr) {
    return [...new Set(arr)];
}

console.log(deleteDublicate(arr));
