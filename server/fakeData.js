const UserList = [
	{
		id: 1,
		name: 'John',
		username: 'john',
		age: 20,
		nationality: 'CANADA',
		friends: [
			{
				id: 2,
				name: 'Pedro',
				username: 'PedroTech',
				age: 20,
				nationality: 'BRAZIL',
			},
			{
				id: 5,
				name: 'Kelly',
				username: 'kelly2019',
				age: 5,
				nationality: 'CHILE',
			},
		],
	},
	{
		id: 2,
		name: 'Pedro',
		username: 'PedroTech',
		age: 20,
		nationality: 'BRAZIL',
	},
	{
		id: 3,
		name: 'Sarah',
		username: 'cameron',
		age: 25,
		nationality: 'INDIA',
		friends: [
			{
				id: 2,
				name: 'Pedro',
				username: 'PedroTech',
				age: 20,
				nationality: 'BRAZIL',
			},
		]
	},
	{
		id: 4,
		name: 'Rafe',
		username: 'refe123',
		age: 60,
		nationality: 'GERMANY',
		friends: [
			{
				id: 3,
				name: 'Sarah',
				username: 'cameron',
				age: 25,
				nationality: 'INDIA',
				friends: [
					{
						id: 2,
						name: 'Pedro',
						username: 'PedroTech',
						age: 20,
						nationality: 'BRAZIL',
					},
				]
			},
		]
	},
	{
		id: 5,
		name: 'Kelly',
		username: 'kelly2019',
		age: 5,
		nationality: 'CHILE',
	},
];

const MovieList = [
	{
		id: 1,
		name: "Avengers Endgame",
		year: 2019,
		isInTheaters: true,
	},
	{
		id: 2,
		name: "Interstellar",
		year: 2007,
		isInTheaters: true,
	},
	{
		id: 3,
		name: "Superbad",
		year: 2009,
		isInTheaters: true,
	},
	{
		id: 4,
		name: "PedroTech the Musical",
		year: 2035,
		isInTheaters: false,
	},
]


module.exports = { UserList, MovieList };
