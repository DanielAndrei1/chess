class Chess {

    
    splitId(currentSquare, squareNumber, typeOfMove, squareNumberDiagonally) {
      let id = $(currentSquare).attr("id");
      let characters = id.split('');
      if (typeOfMove == "FowardPawn") {
        return ($("#" + (parseInt(characters[0]) + squareNumber) + characters[1]));
      } else if (typeOfMove == "PawnDiagonally") {
        characters.forEach(function (entry){console.log(entry);})
        if(id != "2a"){
        return ($("#" + (parseInt(characters[0]) + squareNumber) + String.fromCharCode(characters[1].charCodeAt(0) + squareNumberDiagonally)));
      }
        return null;
      
      }
    }
  
    addClassesToNextSquare(clickedSquare, currentPiece, Player) {
      $(clickedSquare).append(currentPiece);
      if ($(clickedSquare).hasClass("Active")) {
        $(clickedSquare).removeClass("Active");
      }
      if (Player == "PlayerWhite") {
        $(clickedSquare).addClass("PlayerWhite");
        $(clickedSquare).addClass("PawnWhite");
      } else {
        $(clickedSquare).addClass("PlayerBlack");
        $(clickedSquare).addClass("PawnBlack");
      }
    }
  
    removeClassesFromPrevSquare(prevSquare, Player) {
      if (Player == "PlayerWhite") {
        $(prevSquare).removeClass("PawnWhite");
        $(prevSquare).removeClass("PlayerWhite");
      } else {
        $(prevSquare).removeClass("PawnBlack");
        $(prevSquare).removeClass("PlayerBlack");
      }
      if ($(prevSquare).hasClass("Active")) {
        $(prevSquare).removeClass('Active');
      }
    }
  
    removeClassesToNextSquareDiagonally(diagonallySquare, Player) {
      if (Player == "PlayerWhite") {
        $(diagonallySquare).removeClass("PawnBlack");
        $(diagonallySquare).removeClass("PlayerBlack");
        $(diagonallySquare).find(".Black.Pawn").remove("img");
      } else {
        $(prevSquare).removeClass("PawnBlack");
        $(prevSquare).removeClass("PlayerBlack");
      }
    }
  }
  
  export default Chess;
  