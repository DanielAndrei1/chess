// Chess game
const button = document.querySelector("#pawn7");

let testClicked = false;
const container = document.querySelector("#treeA");
let x;

button.addEventListener("click", async () =>{

  testClicked = true;
 // x = button.offsetLeft, button.offsetTop;

  let pawn = document.getElementById("pawn7");
 //let divContains_P = document.getElementById('treeA').contains(pawn);
 //let divContains_pawn = document.getElementById("board").contains(pawn) && document.getElementById('treeA').contains(pawn);

 console.log(x);
  
  test();
})

function pawnMovement(){
  let pawn = document.getElementsByClassName("PawnWhite")


}



function test () {


if(x === 60){

  container.style.backgroundColor = "Green";

}



};


 
$( function() {

  
  var dict = {
    FirstName: "Chris",
    "one": 1,
    1: "some value"
  };

    $( ".PawnWhite" ).draggable({
      axis: "y"
      
    });
    $( ".PawnBlack" ).draggable({
      axis: "y"
      
    });

  
 


  $( ".PawnWhite" ).draggable({ snap: ".container", snapMode: "inner",
                              stop: function(event, ui) { 
    /* Get the possible snap targets: */
    var snapped = $(this).data('ui-draggable').snapElements;
   
    /* Pull out only the snap targets that are "snapping": */
    var snappedTo = $.map(snapped, function(element) {
        return element.snapping ? element.item : null;
    });
   //console.log(snappedTo);
    /* Display the results: */
    var result= '';
    $.each(snappedTo, function(idx, item) {
        result += $(item).text() + ", ";

    });
        console.log(result);

    $("#results").html("Snapped to: " + (result === '' ? "Nothing!" : result));
    

    

    $("#pawn8").on("click", () =>{
    if(result = "3b,"){
      $("#treeA").css("background-color", "blue");
      var result= ' ';

    }else {
      $("#treeA").css("background-color", "rgb(247, 247, 243)");
      alert("hello");
      var result= '';

    }

    if(result = "4a,"){
      $("#pawn8").css("background-color", "purple");

    }

    } )
    
  }
  
  });
  $( ".PawnBlack" ).draggable({ snap: ".container", snapMode: "inner",
  stop: function(event, ui) { 
/* Get the possible snap targets: */
var snapped = $(this).data('ui-draggable').snapElements;

/* Pull out only the snap targets that are "snapping": */
var snappedTo = $.map(snapped, function(element) {
return element.snapping ? element.item : null;
});

/* Display the results: */
var result= '';
$.each(snappedTo, function(idx, item) {
result += $(item).text() + ", ";
});
console.log(result);




  $( "div" ).find( "#pawn8" ).css( "background-color", "red" ); //makes piece red if on div
    //setInterval($( "div:has(img)" ).addClass( "test" ),1000); make div blue if it has img
   // $( "#twoB:has(#pawn7)" ).addClass( "test" );
   //setInterval($( "#treeA:has(#pawn7)" ).addClass( "test" ), 1000); 
  //  let element = $("#treeA");
   //element.children(".PawnWhite").css("background-color","yellow");


 
}})});

