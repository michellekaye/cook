const data = [
	{
		img: "/thumb-lasagna.webp",
		title: "Lasagna",
		url: "https://www.simplyrecipes.com/recipes/lasagna/",
		tags: 'italian, pasta, cheese, baking, baked, beef',
	},
	{
		img: "/thumb-pasticcio.jpeg",
		title: "Pasticcio",
		url: "https://www.foodnetwork.com/recipes/michael-symon/pasticcio-11247525",
		tags: 'italian, pasta, greek, cheese, baking, baked, beef',
	},
	{
		img: "/thumb-banana-bread.jpeg",
		title: "Banana Bread",
		url: "https://natashaskitchen.com/banana-bread-recipe-video/",
		tags: 'baking, baked, pastry, chocolate, vegetarian, snack',
		notes: "- Use 3-4 bananas (more the mushier). Usually use 7 bananas when doubling the recipe. \n - Do 1/2 cup white and 1/2 cup brown sugar to make it sweeter (but if you add chocolate chips it is already sweet). \n - Do all dry in a bowl. Cream sugar and butter, then add vanilla to mixture. Mash bananas in another bowl and eggs. Then add wet into dry. Then add toppings.",
	},
	{
		img: "/thumb-salmon-rice.jpeg",
		title: "Salmon Rice Bowl",
		url: "https://getonmyplate.com/salmon-and-rice-bowl/",
		tags: 'asian, japanese, fish, vegetarian, seafood, salmon',
	},
	{
		img: "/thumb-palak-paneer.webp",
		title: "Palak Paneer",
		url: "https://www.indianhealthyrecipes.com/palak-paneer-recipe-easy-paneer-recipes-step-by-step-pics/",
		tags: 'cheese, indian, vegetarian',
	},
	{
		img: "/thumb-masala-chai.webp",
		title: "Masala Chai",
		url: "https://www.feastingathome.com/authentic-masala-chai-recipe/",
		tags: 'indian, drink, vegetarian, snack',
	},
	{
		img: "/thumb-garlic-confit.jpeg",
		title: "Garlic Confit",
		url: "https://www.foodandwine.com/recipes/garlic-confit",
		tags: 'appy, bread, vegetarian',
	},
	{
		img: "/thumb-salad-roll.jpeg",
		title: "Salad Roll",
		url: "https://www.recipetineats.com/vietnamese-rice-paper-rolls-spring-rolls/",
		tags: 'asian, vietnamese, appy, cold, seafood, shrimp',
	},
	{
		img: "/thumb-roast-pork.jpeg",
		title: "Crispy Roast Pork & Slaw",
		url: "https://www.marionskitchen.com/crispy-roast-pork-with-asian-slaw/",
		tags: 'asian, filipino, pork, vegetables',
	},
	{
		img: "/thumb-pork-noodles.jpeg",
		title: "Fragrant Pork Noodles",
		url: "https://www.marionskitchen.com/15-minute-fragrant-pork-noodles/",
		tags: 'asian, pasta, pork',
	},
	{
		img: "/thumb-roasted-brussel-sprouts.jpeg",
		title: "Roasted Brussel Sprouts",
		url: "https://www.foodnetwork.com/recipes/food-network-kitchen/the-best-roasted-brussels-sprouts-8611632",
		tags: 'vegetarian, vegetable, baked, baking',
	},
	{
		img: "/thumb-shakshuka.jpeg",
		title: "Shakshuka",
		url: "https://www.loveandlemons.com/shakshuka-recipe/",
		tags: 'egg, vegetable, vegetarian, mediterranean, middle eastern',
	},
	{
		img: "/thumb-loco-moco.jpeg",
		title: "Loco Moco",
		url: "https://www.spoonforkbacon.com/loco-moco-with-mushroom-gravy/",
		tags: 'beef, rice, hawaiian, gravy, mushrooms',
	},
	{
		img: "/thumb-musubi.jpeg",
		title: "Musubi",
		url: "https://www.allrecipes.com/recipe/49785/spam-musubi/",
		tags: 'spam, pork, rice, seaweed, hawaiian, snack',
	},
	{
		img: "/thumb-dalgona-coffee.webp",
		title: "Dalgona Coffee",
		url: "https://mykoreankitchen.com/dalgona-coffee-whipped-coffee/",
		tags: 'drink, cold, snack, coffee',
	},
	{
		img: "/thumb-macaroni-salad.jpeg",
		title: "Macaroni Salad",
		url: "",
		tags: 'pasta, cold, filipino, momn, snack',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
	{
		img: "/thumb-laing.jpeg",
		title: "Laing",
		url: "",
		tags: 'filipino, mom, vegetable, vegetarian, pork',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
	{
		img: "/thumb-lumpia-shanghai.jpeg",
		title: "Lumpiang Shanghai",
		url: "",
		tags: 'filipino, mom, appy, snack, pork',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
	{
		img: "/thumb-lumpiang-togue.jpeg",
		title: "Lumpiang Togue",
		url: "",
		tags: 'filipino, mom, appy, snack, pork',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
	{
		img: "/thumb-lumpiang-sariwa.jpeg",
		title: "Lumpiang Sariwa",
		url: "",
		tags: 'filipino, mom, cold',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
	{
		img: "/thumb-beef-kaldereta.jpeg",
		title: "Beef Kaldereta",
		url: "",
		tags: 'filipino, mom, stew, beef',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
	{
		img: "/thumb-bicol-express.webp",
		title: "Bicol Express",
		url: "",
		tags: 'filipino, mom, stew, pork, spicy',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
	{
		img: "/thumb-dinuguan.jpeg",
		title: "Dinuguan",
		url: "",
		tags: 'filipino, mom, stew, pork',
		ingredients: [
			'lorem ipsum',
			'dolor sit amet consectetur',
			'adipiscing sed do eiusmod tempor incididunt',
			'nisi lacus sed viverra tellus in hac habitasse platea dictumst',
			'donec et odio pellentesque diam volutpat'
		],
		steps: [
			'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.',
		]
	},
];
	
export default data;