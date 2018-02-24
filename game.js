
$(document).ready(function() {
//global variables
//create random # that will be the sum total for the user to try to obtain

var randomNumber=(Math.floor(Math.random()*100)+52);     //+52 so 52 is the min random number - close to guarantees winable game
$('#gameNumber').text(randomNumber)



//create 4 smaller random numbers for the gems

var gemBlue = (Math.floor(Math.random() * 12) + 1);
var gemRed = (Math.floor(Math.random() * 12) + 1);
var gemYellow = (Math.floor(Math.random() * 12) + 1);
var gemGreen = (Math.floor(Math.random() * 12) + 1);


    // Test random #s =======================================================
    console.log("randomNumber: " + randomNumber);
    console.log("gemBlue " + gemBlue);
    console.log("gemRed"  + gemRed);
    console.log("gemYellow " + gemYellow);
    console.log("gemGreen " + gemGreen);
    console.log("********** end of random numbers ************");
    // ========================================================

var gameTotal = 0;
var wins= 0;                        //tally of wins
var losses = 0;                     //tally of losses
$('#wins').text(wins);              //display wins
$('#losses').text(losses);          //display losses



//need a reset for random values

function reset(){
    //create random # that will be the sum total for the user to try to obtain

    randomNumber=(Math.floor(Math.random()*100)+52);     //+52 so 52 is the min random number - close to guarantees winable game
    $('#gameNumber').text(randomNumber)



    //create 4 smaller random numbers for the gems

    gemBlue = (Math.floor(Math.random() * 12) + 1);
    gemRed = (Math.floor(Math.random() * 12) + 1);
    gemYellow = (Math.floor(Math.random() * 12) + 1);
    gemGreen = (Math.floor(Math.random() * 12) + 1);


    //clear total during reset
    gameTotal = 0;
    $('#gemsTotal').text(gameTotal);


        // Test #s =======================================================
        console.log("randomNumber: " + randomNumber);
        console.log("gemBlue " + gemBlue);
        console.log("gemRed"  + gemRed);
        console.log("gemYellow " + gemYellow);
        console.log("gemGreen " + gemGreen);
        console.log("gameTotal: " + gameTotal);
        console.log("********** end of #s ************");
        // ========================================================

}




//adding number from gems

$('#buttonBlue').on ('click', function(){
    gameTotal = gameTotal + gemBlue;
    console.log("New total= " + gameTotal);
    $('#gemsTotal').text(gameTotal);	

                //sets win/lose conditions
            if (gameTotal == randomNumber){
                win();
            }
            else if ( gameTotal > randomNumber){
                loss();
            }		
})	

$('#buttonGreen').on ('click', function(){
    gameTotal = gameTotal + gemGreen;
    console.log("New total= " + gameTotal);
    $('#gemsTotal').text(gameTotal);	

            if (gameTotal == randomNumber){
                win();
            }
            else if ( gameTotal > randomNumber){
                loss();
            }	
})	

$('#buttonRed').on ('click', function(){
    gameTotal = gameTotal + gemRed;
    console.log("New total= " + gameTotal);
    $('#gemsTotal').text(gameTotal);
                if (gameTotal == randomNumber){
                win();
            }
            else if ( gameTotal > randomNumber){
                loss();
            }	
})	

$('#buttonYellow').on ('click', function(){
    gameTotal = gameTotal + gemYellow;
    console.log("New total= " + gameTotal);
    $('#gemsTotal').text(gameTotal);	

        
                if (gameTotal == randomNumber){
                win();
            }
            else if ( gameTotal > randomNumber){
                loss();
            }
});  	

//tallies wins and losses records
function win () {
    alert("Way to go - you won!!");
    wins++;                                 //add one to win tally
    $('#wins').text(wins);                  //display
    reset();                                //reset game
};

function loss (){
    alert("Oh no - you lost.  Better luck next time.");
    losses++; 
    $('#losses').text(losses);
    reset();   
        
};



}) 