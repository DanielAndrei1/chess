
var turn;
let countClickedPieces = 0;
var a = [];
var counter = 0;
  export function PawnWhite(chesss, turnWhite, pawnValidMoves, setTurn, thisSelectedSquare) {
    const chess = chesss; // Access the chess property using 'this'
    turn = turnWhite;
    let PawnWhiteValidMovesCounter = pawnValidMoves;
    $(function() {
      let PlayerWhite = "PlayerWhite";
      let nextValidPawnSquare;
      let nextNextValidPawnSquare;
      let rightValidTake;
      let leftValidTake;
  


      $("div").find(".White.Pawn").on("click", function() {
        // alert( "Handler for `click` called." );
      });
      a.push(thisSelectedSquare);
     
        if (turn) {
          // $(this).css( "border", "3px solid yellow" );
            $(thisSelectedSquare).toggleClass('Active');

         


          if ($(thisSelectedSquare).hasClass("PawnWhite Active")) {
            console.log($('#3g'));
            let currentSquare = $(thisSelectedSquare);
            let currentPiece = $(thisSelectedSquare).find("img");
            nextValidPawnSquare = chess.splitId(currentSquare, 1, "FowardPawn");
            nextNextValidPawnSquare = chess.splitId(currentSquare, 2, "FowardPawn");
              leftValidTake = chess.splitId(currentSquare, 1, "PawnDiagonally", -1);
              rightValidTake = chess.splitId(currentSquare, 1, "PawnDiagonally", 1);

              if (a.length > 1) {
              $(a[counter]).removeClass("Active");
              countClickedPieces -= 1;
              chess.removeClassesFromPrevSquare(a[counter], PlayerWhite);
              console.log(thisSelectedSquare);
              let prevnextYellowSquare = chess.splitId(a[counter],1,"FowardPawn");
              let prevnextnextYellowSquare = chess.splitId(a[counter],2,"FowardPawn");
              prevnextYellowSquare.removeClass('Active');
              prevnextnextYellowSquare.removeClass('Active');

              nextValidPawnSquare = chess.splitId(currentSquare, 1, "FowardPawn");
              nextNextValidPawnSquare = chess.splitId(currentSquare, 2, "FowardPawn");
              leftValidTake = chess.splitId(currentSquare, 1, "PawnDiagonally", -1);
              rightValidTake = chess.splitId(currentSquare, 1, "PawnDiagonally", 1);


                
             
              counter ++;

    
                
              }  
            
      
            console.log(rightValidTake);

            if ($(leftValidTake).hasClass("PawnBlack")) {
              leftValidTake.toggleClass('Active');
              if (PawnWhiteValidMovesCounter != 2) {

                leftValidTake.on("click", function() {
                  if (PawnWhiteValidMovesCounter != 2) {
                    chess.addClassesToNextSquare(this, currentPiece, PlayerWhite);
                    chess.removeClassesFromPrevSquare(currentSquare, PlayerWhite);
                    nextNextValidPawnSquare.removeClass('Active');
                    nextValidPawnSquare.removeClass('Active');
                    PawnWhiteValidMovesCounter = 1;
                    chess.removeClassesToNextSquareDiagonally(this, "PlayerWhite");
                    turn = false;
                    setTurn(turn);
                  }
                });

              }
            }

            if ($(rightValidTake).hasClass("PawnBlack")) {
              rightValidTake.toggleClass('Active');

              rightValidTake.on("click", function() {
                if (PawnWhiteValidMovesCounter == 0) {
                  chess.addClassesToNextSquare(this, currentPiece, PlayerWhite);
                  chess.removeClassesFromPrevSquare(currentSquare, PlayerWhite);
                  nextValidPawnSquare.removeClass('Active');
                  PawnWhiteValidMovesCounter = 2;
                  turn = false;
                  setTurn(turn);

                }
              });

            }

            if (!$(nextValidPawnSquare).hasClass("PawnBlack")) {
              nextValidPawnSquare.toggleClass('Active');
              nextNextValidPawnSquare.toggleClass('Active');

              nextValidPawnSquare.on("click", function() {
                if (PawnWhiteValidMovesCounter != 2) {
                  chess.addClassesToNextSquare(this, currentPiece, PlayerWhite);
                  chess.removeClassesFromPrevSquare(currentSquare, PlayerWhite);
                  nextNextValidPawnSquare.removeClass('Active');
                  PawnWhiteValidMovesCounter = 1;
                  turn = false;
                  setTurn(turn);
                }
              });

              nextNextValidPawnSquare.on("click", function() {
                if (PawnWhiteValidMovesCounter != 1) {
                  chess.addClassesToNextSquare(this, currentPiece, PlayerWhite);
                  chess.removeClassesFromPrevSquare(currentSquare, PlayerWhite);
                  nextValidPawnSquare.removeClass('Active');
                  PawnWhiteValidMovesCounter = 2;
                  turn = false;
                  setTurn(turn);

                }
              });
             
              if(a.length > 1){
                nextValidPawnSquare.off('click');
                nextNextValidPawnSquare.off('click');
                
                leftValidTake.off('click');
                rightValidTake.off('click');
              }
             
            }
            countClickedPieces += 1;
          }
        }

      });

      

  }



