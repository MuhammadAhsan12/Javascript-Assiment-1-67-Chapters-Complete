
   //==========================\\
  //---->>>Chapter 43-48 <<<----\\
 //---=->>>    EVENTS   <<<--=---\\
//================================\\

     //======================\\
    //---->>> Task # 1 <<<----\\
   //==========================\\

function hello() {
   alert("Hello there")
}


     //======================\\
    //---->>> Task # 2 <<<----\\
   //==========================\\

function phoneclick() {
   alert("Thanks for purchasing a phone from us")
}


     //======================\\
    //---->>> Task # 3 <<<----\\
   //==========================\\

function removeRow(row) {
   var d = document.getElementById("delbtn").parentNode.parentNode.rowIndex
   document.getElementById('dsTable').deleteRow(d);
}


     //======================\\
    //---->>> Task # 4 <<<----\\
   //==========================\\

var counter=0
function increase(){
   counter++
   document.getElementById('counter').innerHTML=counter
}
function decrease(){
   counter--
   document.getElementById('counter').innerHTML=counter
}

//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
                             //Chapter # 43-48 End\\
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
