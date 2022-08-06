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
		tags: 'pasta, greek, cheese, baking, baked, beef, mediterranean',
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
		cuisine: "Asian"
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
		tags: 'vegetarian, vegetables, baked, baking',
	},
	{
		img: "/thumb-shakshuka.jpeg",
		title: "Shakshuka",
		url: "https://www.loveandlemons.com/shakshuka-recipe/",
		tags: 'egg, vegetables, vegetarian, mediterranean, middle eastern',
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
		img: "/thumb-corn-dip.jpeg",
		title: "Mexican Corn Dip",
		url: "https://www.halfbakedharvest.com/street-corn-dip/",
		tags: 'snack, appy, dip, mexican',
	},
	{
		img: "/thumb-fried-rice.jpeg",
		title: "Fried Rice",
		url: "https://www.gimmesomeoven.com/fried-rice-recipe/",
		tags: 'rice, chinese, asian',
	},
	{
		img: "/thumb-hummus.jpeg",
		title: "Hummus",
		url: "https://cookieandkate.com/best-hummus-recipe/",
		tags: 'snack, cold, dip, mediterranean, middle eastern',
	},
	{
		img: "/thumb-basque-cheesecake.webp",
		title: "Basque Cheesecake",
		url: "https://www.kingarthurbaking.com/blog/2022/05/03/how-to-make-basque-cheesecake-baked-in-air-fryer",
		tags: 'snack, dessert, cold, baked, air fryer',
	},
	{
		img: "/thumb-butter-chicken.jpeg",
		title: "Butter Chicken",
		url: "https://www.recipetineats.com/butter-chicken/",
		tags: 'chicken, indian, stew',
	},
	{
		img: "/thumb-cantonese-beef-noodles.jpeg",
		title: "Cantonese Beef Noodles",
		url: "https://www.marionskitchen.com/cantonese-beef-chow-fun-noodles/",
		tags: 'asian, chinese, noodles',
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
		tags: 'filipino, mom, vegetables, vegetarian, pork',
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
	{
		img: "/thumb-sinigang.jpeg",
		title: "Sinigang",
		url: "",
		tags: 'filipino, mom, soup, pork',
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
		img: "/thumb-beef-with-bok-choy.jpeg",
		title: "Beef with Bok Choy",
		url: "",
		tags: 'filipino, mom, stew, beef, bok choy',
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
		img: "/thumb-menudo.jpeg",
		title: "Menudo",
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
	{
		img: "/thumb-beef-nilaga.jpeg",
		title: "Beef Nilaga",
		url: "",
		tags: 'filipino, mom, soup, beef',
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
		img: "/thumb-beef-mami.jpeg",
		title: "Beef Mami",
		url: "",
		tags: 'filipino, mom, soup, beef, noodles',
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
		img: "/thumb-beef-with-broccoli.jpeg",
		title: "Beef with Broccoli",
		url: "",
		tags: 'filipino, mom, beef, broccoli',
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
		img: "/thumb-taho.jpeg",
		title: "Taho",
		url: "",
		tags: 'filipino, mom, snack, dessert',
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
		img: "/thumb-leche-flan.jpeg",
		title: "Leche Flan",
		url: "",
		tags: 'filipino, mom, snack, dessert',
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
		img: "/thumb-binagoongan.jpeg",
		title: "Binagoongan",
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
	{
		img: "/thumb-chicken-adobo.jpeg",
		title: "Chicken Adobo",
		url: "",
		tags: 'filipino, mom, chicken',
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
		img: "/thumb-kare-kare.jpeg",
		title: "Kare Kare",
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
		img: "/thumb-paksiw-na-pata.webp",
		title: "Paksiw na Pata",
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
	{
		img: "/thumb-lechon-paksiw.jpeg",
		title: "Lechon Paksiw",
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
	{
		img: "/thumb-lugaw.webp",
		title: "Lugaw",
		url: "",
		tags: 'filipino, mom, soup, porridge',
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
		img: "/thumb-tinola.jpeg",
		title: "Tinola",
		url: "",
		tags: 'filipino, mom, soup, chicken',
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
		img: "/thumb-champorado.jpeg",
		title: "Champorado",
		url: "",
		tags: 'filipino, mom, snack, chocolate',
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
		img: "/thumb-pork-adobo.gif",
		title: "Pork Adobo",
		url: "",
		tags: 'filipino, mom, pork, stew',
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
		img: "/thumb-mongo.jpeg",
		title: "Mongo",
		url: "",
		tags: 'filipino, mom, beans, stew, vegetables',
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
		img: "/thumb-ginataang-gulay.jpeg",
		title: "Ginataang Gulay",
		url: "",
		tags: 'filipino, mom, stew, vegetables',
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
		img: "/thumb-sisig.jpeg",
		title: "Sisig",
		url: "",
		tags: 'filipino, mom, pork',
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
		img: "/thumb-pinakbet.webp",
		title: "Pinakbet",
		url: "",
		tags: 'filipino, mom, vegetables',
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
		img: "/thumb-sopas.jpeg",
		title: "Sopas",
		url: "",
		tags: 'filipino, mom, soup, chicken',
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
		img: "/thumb-sotanghon.jpeg",
		title: "Sotanghon",
		url: "",
		tags: 'filipino, mom, soup, chicken',
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
		img: "/thumb-ginisang-sayote.jpeg",
		title: "Ginisang Sayote",
		url: "",
		tags: 'filipino, mom, vegetables, pork',
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
		img: "/thumb-cassava.jpeg",
		title: "Cassava",
		url: "",
		tags: 'filipino, mom, dessert',
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