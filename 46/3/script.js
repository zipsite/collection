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

let obj  = JSON.parse(json);

obj[3] = {
	"name": "user4",
	"age": 36,
	"salary": 3500
};

let res = JSON.stringify(obj);
console.log(res);