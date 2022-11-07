let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;

let obj = JSON.parse(json);

let sum = 0;

for(data in obj) {
	for(elem in data) {
		sum += Number(elem);
	}
}

console.log(sum);
