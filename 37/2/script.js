let elems = document.querySelectorAll('input');

let map  = new Map();

function addNumber(inpt){
    let arr = map.get(inpt);
    arr.push(inpt.value);
    map.set(inpt, arr);
}

for (elem of elems) {
    map.set(elem, []);
    elem.addEventListener('keypress', (e) => {
        let inpt = e.currentTarget;
        if(e.which === 13) {
            addNumber(inpt);
            inpt.value = "";
        }
    });
    elem.addEventListener('blur', (e) => {
        let inpt = e.currentTarget;
        console.log(map.get(inpt));
    });
}