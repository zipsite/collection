let ul = document.querySelector('ul');

let arr = [];
for (elem of ul.children){
	arr.push(elem.innerText);
}

let json = JSON.stringify(arr);
console.log(json)
