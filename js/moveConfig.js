var moveConfig = [
	//template
	{
		'id': 1,
		'throw': false,
		'pursue': true,
		'move':{
			// the key is frame number
			"1-10": {
				// speed in two direction
				'speed': [10, 0],
				'damage': 100,
				'pursueDamage': 20,

				// area list
				'attack': [
					// first two number is the relative position to the charater`s heel,
					// and the 3rd and 4th number is the width and height of the attack area
					[20,70,20,20]
				],
				// deffense area list
				'defense': [],
				'beingAttacked': [],
				'collision': []
			},
			'11-12': {

			}
		}
	}
];