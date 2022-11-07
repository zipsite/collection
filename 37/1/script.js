let elems = document.querySelectorAll('input');

let map = new Map();
let i = 0;
for (elem of elems){
    map.set(elem, i++);
    elem.addEventListener('click', (e) => {
        e.currentTarget.setAttribute('value', map.get(e.currentTarget));
    });
}

