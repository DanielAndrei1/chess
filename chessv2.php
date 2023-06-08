<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Chess Game</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='chessStyle.css'>
    <link rel="stylesheet" href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css"
        integrity="sha384-q94+BZtLrkL1/ohfjR8c6L+A6qzNH9R2hBLwyoAfu3i/WCvQjzL2RQJ3uNHDISdU" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha384-ZvpUoO/+PpLXR1lu4jmpXWu80pZlYUAfxl5NsBMWOEPSjUn/6Z/hRTt8+pR6L4N2"
        crossorigin="anonymous"></script>

    <script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"
        integrity="sha384-8Vi8VHwn3vjQ9eUHUxex3JSN/NFqUg3QbPyX8kWyb93+8AC/pPWTzj+nHtbC5bxD"
        crossorigin="anonymous"></script>
</head>

<body>

<h1 id="heading">Chess version 2</h1>

   

<?php
$board = array(
    8 => array(

    ), 7, 6, 5, 4, 3, 2, 1);
$boardSquareNumbers = array("h", "g", "f", "e", "d", "c", "b", "a");
$boardColors = array("squarewhite", "squareblack");
$piecesBlack = array("./Img/Castle.png", "./Img/KnightBlack.png","./Img/BishopBlack.png","./Img/Queen.png","./Img/King.png","./Img/BishopBlack.png","./Img/KnightBlack.png","./Img/Castle.png");
$pawnsBlack = array(
              "PawnBlack" => "./Img/PawnBlack.png",
);
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
        <div column=<?php  $i; echo $i; ?> row=<?php  $j;  echo $j;  ?> class="<?php echo $boardColors[$colorIndexNumber]; ?> <?php if ($i != 8) { echo " container"; } ?> ";>
        <span><?php echo $i . $boardSquareNumbers[$j - 1] ?></span>
            <img  src="<?php if($i == 8) {echo $piecesBlack[$j-1]; } ?>">
            </div>
      
        <?php }  ?>
        <?php }  ?>
    </div>

    
    <div id="results"></div>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script async src="chess1.js"></script>

</body>

</html>