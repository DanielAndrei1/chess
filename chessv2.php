<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Chess Game</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='chessStyle.css'>

</head>

<body>

<h1 id="heading">Chess version 2</h1>

   

<?php
$board = array(
    8 => array(

    ), 7, 6, 5, 4, 3, 2, 1);
$boardSquareNumbers = array("h", "g", "f", "e", "d", "c", "b", "a");
$boardColors = array("Squarewhite", "Squareblack");
$piecesBlack = array("./Img/RookBlack.png", "./Img/KnightBlack.png","./Img/BishopBlack.png","./Img/Queen.png","./Img/King.png","./Img/BishopBlack.png","./Img/KnightBlack.png","./Img/RookBlack.png");
$pawnsBlack = "./Img/PawnBlack.png";
$piecesWhite = array("./Img/RookWhite.png", "./Img/KnightWhite.png","./Img/BishopWhite.png","./Img/QueenWhite.png","./Img/KingWhite.png","./Img/BishopWhite.png","./Img/KnightWhite.png","./Img/RookWhite.png");
$pawnsWhite = "./Img/PawnWhite.png";
$colorIndexNumber = 0;
$containerBool = false;
?>
    <div id="board">
        <?php for ($i = 8; $i > 0; $i--) { ?>
            <?php for ($j = 8; $j > 0; $j--) { ?>
                <?php $wholeNumberRow = $j%2; $wholeNumberColumn = $i%2; 
                if ($wholeNumberColumn == 0 && $wholeNumberRow == 1) { $colorIndexNumber = 1;}
                else if ($wholeNumberColumn == 0 && $wholeNumberRow == 0) { $colorIndexNumber = 0;}
                else if ($wholeNumberColumn == 1 && $wholeNumberRow == 0) { $colorIndexNumber = 1;}
                else if ($wholeNumberColumn == 1 && $wholeNumberRow == 1) { $colorIndexNumber = 0;}
                ?>
        <div column=<?php  $i; echo $i; ?> row=<?php  $j;  echo $j;  ?> class="Square <?php echo $boardColors[$colorIndexNumber]; ?>
                                                                        <?php 
                                                                              if ($i == 8 || $i == 7) {echo "PlayerBlack";}
                                                                              else if($i == 2 || $i == 1) {echo "PlayerWhite";}
                                                                              if ($i == 2) { echo " Pawn";}
                                                                              if ($i == 7) { echo " Pawn";} 
                                                                              if($i == 8 || $i == 1){
                                                                              switch($i . $boardSquareNumbers[$j-1]){
                                                                                case '1a':
                                                                                case '8a':
                                                                                     echo " RookLeft";
                                                                                     break;
                                                                                case '1b':
                                                                                case '8b':
                                                                                     echo " KnightLeft";
                                                                                     break;
                                                                                case '1c':
                                                                                case '8c':
                                                                                     echo " BishopLeft";
                                                                                     break;
                                                                                case '1d':
                                                                                case '8d':
                                                                                     echo " Queen";
                                                                                     break;
                                                                                case '1e':
                                                                                case '8e':
                                                                                    echo " King";
                                                                                    break;
                                                                                case '1f':
                                                                                case '8f':
                                                                                    echo " BishopRight";
                                                                                    break;
                                                                                case '1g':
                                                                                case '8g':
                                                                                    echo " KnightRight";
                                                                                    break;
                                                                                case '1h':
                                                                                case '8h':
                                                                                    echo " RookRight";
                                                                                    break;
                                                                                }}?>"
                                                                              id = <?php echo $i . $boardSquareNumbers[$j - 1]; ?>
                                                                              >

        <span><?php echo $i . $boardSquareNumbers[$j - 1] ?></span>
            <img  src="<?php if($i == 8) {echo $piecesBlack[$j-1];}
                             else if ($i == 7) { echo $pawnsBlack;} 
                             else if ($i == 2) { echo $pawnsWhite;}
                             else if ($i == 1) { echo $piecesWhite[$j-1];} ?>" 
                  class="<?php if ($i == 8 || $i == 7) { echo "Black"; }
                               else if ($i == 2 || $i == 1) { echo "White";} 
                               if ($i == 2) { echo " Pawn";}
                               if ($i == 7) { echo " Pawn";}
                               switch($i . $boardSquareNumbers[$j-1]){
                                    case '1a':
                                    case '8a':
                                         echo " RookLeft";
                                         break;
                                    case '1b':
                                    case '8b':
                                         echo " KnightLeft";
                                         break;
                                    case '1c':
                                    case '8c':
                                         echo " BishopLeft";
                                         break;
                                    case '1d':
                                    case '8d':
                                         echo " Queen";
                                         break;
                                    case '1e':
                                    case '8e':
                                        echo " King";
                                        break;
                                    case '1f':
                                    case '8f':
                                        echo " BishopRight";
                                        break;
                                    case '1g':
                                    case '8g':
                                        echo " KnightRight";
                                        break;
                                    case '1h':
                                    case '8h':
                                        echo " RookRight";
                                        break;
                               }
                               ?>">
            </div>
      
        <?php }  ?>
        <?php }  ?>
    </div>

    
    <div id="results"></div>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script async src="chess.js"></script>

</body>

</html>