countClickedBlackPieces = 0;
classActive = [0,1];
gameStart = true;

$( function() {
   
        $("div").find(".White.Pawn").on( "click", function() {
         alert( "Handler for `click` called." );
      } );


      $(document).on("click", ".Pawn", function() {
        //alert( "Handler for `click` called." );
       // $(this).css( "border", "3px solid yellow" );
       if( $("div:has(.Active0)") && countClickedBlackPieces == 1){

        $("div").find(".Active0").removeClass("Active0");
        countClickedBlackPieces-= 1;

    }
        $(this).toggleClass('Active' + classActive[countClickedBlackPieces]);

        console.log(countClickedBlackPieces);

       
        if($(this).hasClass("Pawn")){
            console.log($('#3g'));
            let currentSquare = $(this);
            let currentPiece = $(this).find("img");
            let id = $(this).attr("id");
            var characters = id.split('');
            console.log(characters);
            $("#" + (parseInt(characters[0]) + 1) + characters[1]).toggleClass('Active' + classActive[countClickedBlackPieces]);
            $("#" + (parseInt(characters[0]) + 2) + characters[1]).toggleClass('Active' + classActive[countClickedBlackPieces]);

            $("#" + (parseInt(characters[0]) + 1) + characters[1]).on("click", function(){
                $(this).append(currentPiece);
                $(this).addClass("Pawn");
                
                if($(".Pawn").hasClass("Active0"));
                {
                    $(this).removeClass("Active0");

                } 

                $(currentSquare).removeClass("Pawn");
               
                if($(currentSquare).hasClass("Active0")){
                    $(currentSquare).removeClass('Active0')

                } else {
                    $(currentSquare).removeClass('Active1')

                }

            });


            $("#" + (parseInt(characters[0]) + 2) + characters[1]).on("click", function(){
                $(this).append(currentPiece);
                $(this).addClass("Pawn");
                if($(this).hasClass("Active0"))
                {
                    $(this).removeClass("Active0");

                }else{
                    $(this).removeClass("Active1");

                }

                $(currentSquare).removeClass("Pawn");
                if($(currentSquare).hasClass("Active0")){
                    $(currentSquare).removeClass('Active0')

                } else {
                    $(currentSquare).removeClass('Active1')

                }

            });

        }
        countClickedBlackPieces+= 1;
        
      });

    
    
   
   
//append(imagge);
   
   
   
});