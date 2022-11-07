let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let obj = JSON.parse(json);

let body = document.querySelector('body');
let table = document.createElement('table');
body.prepend(table);

for (rows of obj){
	let trow = document.createElement('tr');
	// console.log(rows);
	for(cell in rows) {
		let tcell = document.createElement('td');
		tcell.innerText = rows[cell];
		trow.append(tcell);
	}
	table.append(trow);
}

`<table>
<tr>
  <td>...</td>
</tr>
</table>`

