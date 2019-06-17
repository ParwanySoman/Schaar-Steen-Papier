const game = ()=> 
{ 
	let pScore = 0;
	let cScore = 0;

	const startGame = () => 
	{ 
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEvenListener('click', function())
		{ 
			introScreen.classList.add('fadeOut');
		});

	};
		
	//call al the inner functions
	startGame();
		
	

};

//here starts the game funcion
game()










































}