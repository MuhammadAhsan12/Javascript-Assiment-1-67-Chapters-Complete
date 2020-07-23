
     //======================\\
    //---->>> Task # 2 <<<----\\
   //==========================\\

// // part 1

var formContent = document.getElementById("form-content").nodeType;
console.log("form content nodetype: "+formContent)

// // part 2

var lastname=document.getElementById("lastName")
console.log("last name nodetype: "+lastname.nodeType)
console.log(lastname.childNodes)

// // part 3

var update = "Last Name: Ahsan";
lastname.innerHTML = update;


// // part 4

var firstchild=document.getElementById("main-content").firstChild
var lastchild=document.getElementById("main-content").lastChild

// // part 5

var prevsib=document.getElementById("lastName").previousSibling
var nextsib=document.getElementById("lastName").nextSibling

// // part 6

var parentnode=document.getElementById("email").parentNode
var nodetype2=document.getElementById("email").nodeType


//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
                             //Chapter # 58-67 End\\
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
