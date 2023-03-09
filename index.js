const dice_btn=document.getElementById('dice-btn')
        
        function dicegame() {
            // Dice 1
            // Generate random number upto 6
            var randomNum = Math.floor(Math.random() * 6) + 1;
            var randomDice = "img/dice"+randomNum+".png";
            var img1 = document.querySelectorAll('img')[0];
            img1.setAttribute("src", randomDice);
            // Dice 2
            var randomNum2 = Math.floor(Math.random() * 6) + 1;
            var randomDice2 = "img/dice"+randomNum2+".png";
            var img2 = document.querySelectorAll('img')[1];
            img2.setAttribute("src", randomDice2);
        
            if(randomDice>randomDice2){
            document.querySelector("h1").innerHTML="&#127942; Player Wins"
            } else if(randomDice2>randomDice){
                document.querySelector("h1").innerHTML="Bot Wins &#127942;"
            } else if(randomDice2=randomDice){
                document.querySelector("h1").innerHTML="&#127942; Draw! &#127942;"
            } else {
                document.querySelector("h1").innerHTML="Something Error..."
            }
            dice_btn.innerHTML="Play Again"
        }