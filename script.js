const game = ()=> //is a function
{
	let pScore = 0;
	let cScore = 0;

	// Start the game
	const startGame = function() 
	{
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', function()
		{
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};
// Play match
const playMatch = function() 
{
	const options = document.querySelectorAll('.options button');
	const playerHand = document.querySelector('.player-hand');
	const computerHand = document.querySelector('.computer-hand');
	// computer options
	const computerOptions = ['rock', 'paper', 'scissors'];

	options.forEach(option=> 
	{
		option.addEventListener('click', function() 
		{
			// computer Choice
			const computerNumber = Math.floor(Math.random() * 3);
			const computerChoice = computerOptions[computerNumber];
			//here is where we call compare hands
			compareHands(this.textContent, computerChoice);


			//Update images
			playerHand.src = `./img/${this.textContent}.png`;
			computerHand.src =  `./img/${computerChoice}.png`

		});
	});	
};

const compareHands = function(playerChoice, computerChoice) 
{
	const winner = document.querySelector('.winner');
	//We are checing for a tie
	if (playerChoice === computerChoice)
	{
		winner.textContent = "It's a tie";
		return;
	}
	//check for rock
	if (playerChoice === 'rock');
	{
		if (computerChoice === 'scissors')
			{

			 	winner.textContent = 'Player wins'
			 	return;
			}
		else 
		{
			winner.textContent = 'Computer wins';
			return;
		}
	}
	//check for papier
	if(playerChoice === 'scissors')
	{
		if(computerChoice === 'rock')
		{
			winner.textContent = 'Computer wins'
			return; 
		}
		else 
		{
			winner.textContent = 'Player wins';
			return;
		}
	}
}
	// call all the inner functions
	startGame();
	playMatch()
};

// Here starts the game function
game();


