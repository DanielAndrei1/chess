import {PawnWhite} from './pawnWhite.js';
import {PawnBlack} from './pawnBlack.js';
import Chess from './chess.js';


// Create instances of the imported classes
const chess = new Chess();
let turnValidMoves = [true, 0];
let turnValidMoves2 = true;

$(document).on("click", ".PlayerWhite", function() {

    if(turnValidMoves[0] == true){
        PawnWhite(chess , turnValidMoves2, turnValidMoves[1], setTurn, this);
        console.log("Player White" + turnValidMoves2);
        


    } });
    $(document).on("click", ".PlayerBlack", function() {

        PawnBlack(chess, turnValidMoves2, turnValidMoves[1], setTurn, this);
        console.log("Player Black" + turnValidMoves2);
    
    });    
  
        export function setTurn(turn){
            turnValidMoves2 = turn;
        }
   


  
 
