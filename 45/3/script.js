let table = document.querySelector('table');
let nodesTb = table.children[0].children;
console.log(nodesTb.length)
let obj = {};

for(let i = 1; i < nodesTb.length; i++) {
	obj[`user${i}`] = {};
	let user = nodesTb[i].children;
	obj[`user${i}`].surname = user[0].innerText
	obj[`user${i}`].name = user[1].innerText;
	obj[`user${i}`].patronymic = user[2].innerText
}

let json = JSON.stringify(obj);
console.log(json)