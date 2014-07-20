var character = {
	Create: function ( player, id, x, y, face ) {
		// player: 1 or 2;
		this.player = player;
		// a id for character
		this.id = id;
		// posture: stand, squat or jump
		this.posture = 'stand';
		// state: attacking, normal or crick
		this.state = 'normal';
		this.defense = false;
		// moveId: null or the id of current move
		this.moveId = null;
		// Is the character can be persued in the air
		this.pursue = false;
		/*
			todo: set hp with the infor in config file
		*/
		this.hp = null;
		this.power = null;
		// the position of the character`s heel
		this.x = x;
		this.y = y;
		if(player == 1){
			this.face = 'right';
		}else if(player == 2){
			this.face = 'left';
		}
	},
	objList: [];
};