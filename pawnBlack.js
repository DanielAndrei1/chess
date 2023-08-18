

   export function PawnBlack(chesss, turnBlack, pawnBlackValidMoves, setTurn, thisSelectedSquare){
    const chess = chesss; // Access the chess property using 'this'
    let PawnBlackValidMovesCounter = pawnBlackValidMoves;
    let PawnWhiteValidMovesCounter;
    let turn = turnBlack;
    $(function() {
      let countClickedPieces = 0;
      let PlayerBlack = "PlayerBlack";
      let nextValidPawnSquare;
      let nextNextValidPawnSquare;
      let rightValidTake;
      let leftValidTake;

        if (!turn) {
          console.log(countClickedPieces);

          if ($("div:has(.Active)") && countClickedPieces == 1) {
            $("div").find(".Active").removeClass("Active");
            countClickedPieces -= 1;
            nextValidPawnSquare.off('click');
            nextNextValidPawnSquare.off('click');
          }

          $(thisSelectedSquare).toggleClass('Active');

          if ($(thisSelectedSquare).hasClass("PawnBlack")) {
            console.log($('#3g'));
            let currentSquare = $(thisSelectedSquare);
            let currentPiece = $(thisSelectedSquare).find("img");
            nextValidPawnSquare = chess.splitId(currentSquare, -1, "FowardPawn");
            nextNextValidPawnSquare = chess.splitId(currentSquare, -2, "FowardPawn");

            if (!$(nextValidPawnSquare).hasClass("PawnWhite")) {
              nextValidPawnSquare.toggleClass('Active');
              nextNextValidPawnSquare.toggleClass('Active');

              nextValidPawnSquare.on("click", function() {
                if (PawnBlackValidMovesCounter != 2) {
                  chess.addClassesToNextSquare(this, currentPiece, PlayerBlack);
                  chess.removeClassesFromPrevSquare(currentSquare, PlayerBlack);
                  turn = true;
                  nextNextValidPawnSquare.removeClass('Active');
                  PawnBlackValidMovesCounter = 1;
                  PawnWhiteValidMovesCounter = 0;
                  setTurn(turn);

                }
              });

              nextNextValidPawnSquare.on("click", function() {
                if (PawnBlackValidMovesCounter != 1) {
                  chess.addClassesToNextSquare(this, currentPiece, PlayerBlack);
                  chess.removeClassesFromPrevSquare(currentSquare, PlayerBlack);
                  turn = true;
                  nextValidPawnSquare.removeClass('Active');
                  PawnBlackValidMovesCounter = 2;
                  PawnWhiteValidMovesCounter = 0;
                  setTurn(turn);

                }
              });
            }
            countClickedPieces += 1;
       
          }
        }
      });
    
}


