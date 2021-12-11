const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let tie =0;
    let moves = 0;
    let rockcount=0;
    let papercount=0;
    let scissorcount=0;
    // Function to Play Game
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors'];
          
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
  
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                // Function to check who wins
                winner(this.innerText,computerChoice)
                  
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie';
            tie++;
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                rockcount++;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                scissorcount++;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                papercount++;
            }
        }
    }
  
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
  
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        const historybtn = document.querySelector('.history');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
  
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game ' +playerScore +"Times"
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'darkcyan'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
        /* History Button Starts */
        historybtn.innerHTML='History';
        historybtn.style.display='flex';
        historybtn.addEventListener('click',() => {
        document.querySelector(".score").style.display="flex";
        document.querySelector(".playermoves").innerText= "Total No.of Matches Played " + moves;
        document.querySelector(".playerwin").innerText= "Win_Ratio " + playerScore +":"+moves;
        document.querySelector(".playertie").innerText= "Total No.of Ties " + tie;
        document.querySelector(".result").style.display="none";
        chooseMove.innerText="";
        historybtn.style.display = 'none';
        if(papercount>scissorcount| papercount>rockcount){
            document.querySelector(".playermostplayed").innerHTML="Most Played Hand is: Papper" ;
        }
        else if(scissorcount>papercount| scissorcount>rockcount){
            document.querySelector(".playermostplayed").innerHTML="Most Played Hand is: Scissor" ;}
            else{
                document.querySelector(".playermostplayed").innerHTML="Most Played Hand is: Rock"
            }
        })
    }
    // Calling playGame function inside game
    playGame();
      
}
// Calling the game function
game();