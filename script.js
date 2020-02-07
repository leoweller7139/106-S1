
//var input = document.getElementById("txtTest");
//console.log(input);

//console.log(document.getElementById("txtTest"))

function init(){
    console.log($);
    console.log("Website Page has loaded");
/*     var input = document.getElementById("txtTest");
    // console.log(input);
    console.log(input.value);
    
    sayHello(); */
//////////////////////////////////////////////////////////////////////////////////////////////
    // Get the text from the input field
/*     var text = document.getElementById("txtText").value;
    console.log("JS way", text); */

//    var text2 = $("#txtText").val(); // <-- This $("#") get me elementID but for jquery as above
//    console.log("jq way", text2);

    // hook events
    $("#btnSave").click( createToDo ); // ENG: When a click happens on elem btnSave, exec createToDo Function
    $("#txtText").keypress( function(e){
        // console.log(e); <-- Shows us information of keys that are  pressed!!!

        if(e.key == "Enter" ){
            createToDo();
        }
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////
/* function sayHello(){
    console.log("Leonardo Weller");
}
 */

function createToDo(){
    // get the text
    var text2 = $("#txtText").val(); // The val here is Reading
    // create an li
    var li = '<li>' + text2 + '<button>Done!</button> </li>';
    // add the li to the ul
    $("#pending").append(li);
    // removing previous text "input field"
    $("#txtText").val(""); // The blank in val is to write "" meaning nothing
    // set the focus to the field
    $("#txtText").focus();
}



// when the browser finish rendering all HTML elements
// will execute a function called init
window.onload = init;