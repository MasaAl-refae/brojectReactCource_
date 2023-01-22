let massg;
let sum = 0 ;
let hasBlackjack = false ;
let isLive = false;
let massage = document.getElementById("mssg");
let sumv = document.getElementById("sum") ;
let cards = document.getElementById("cards") ;
let card ;
 let player = document.getElementById("player") ;


 let players =
{
    playerName: "masa",
        playerchip: 0
}


function randomv ()
{
    let num =Math.floor(Math.random()*13+1) ;
    if (num ===1 )
    {
        num =11 ;
    }
    else if ( num === 12 || num === 13 || num === 11)
    {
        num =10 ;
    }
    return num

}




function startgame()
{
    hasBlackjack = false ;
    let firstCard  = randomv () ;
    let secandCard = randomv() ;
     card=[firstCard , secandCard ] ;


    player.innerText = players.playerName + " : " + players.playerchip+ "$" ;
    isLive = true;
    rendergame(card) ;

}
function rendergame(card)
{
   //alert( hasBlackjack) ;
    sum = 0 ;
    if (isLive === true && hasBlackjack === false) {


        let sumst = "";
        for (let i = 0; i < card.length; i++) {
            sumst += card[i] + " ";
            sum += card[i];

        }

        if (sum === 21) {
            massg = "Wohoo! you are get a blackjack ";
            hasBlackjack = true;
            players.playerchip  += 200 ;
        } else if (sum > 21) {
            massg = "you are out of the game ";
            isLive = false ;

        } else
            massg = "do you want to draw a new card";

        massage.innerText = massg;

        cards.innerText = "cards:" + sumst;
        sumv.innerText = "sum:" + sum ;
    }
    else
    {
        sum = 0 ;
        for (let i = 0 ; i < card.length ; i++)
        {
            card.pop();

        }
        massage.innerText = "want to play around ?";

        cards.innerText = "cards:" ;
        sumv.innerText = "sum:"  ;

    }
}

function newCard()
{

    let therdCard = randomv() ;
    card.push(therdCard);
    rendergame(card);


}