let json = '["user1","user2","user3","user4","user5"]';

let ul = document.querySelector('ul');

let arr = JSON.parse(json);
console.log(arr);
for(let i = 0; i < arr.length; i++){
	ul.innerHTML += `<li>${arr[i]}</li>`;
}