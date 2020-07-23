
   //==========================\\
  //---->>>Chapter 58-67 <<<----\\
 //------->>>    DOM   <<<-------\\
//================================\\

     //======================\\
    //---->>> Task # 1 <<<----\\
   //==========================\\

// // part 1

var mainContent=document.getElementById("main-content")

// // part 2

console.log(mainContent.childNodes)

// // part 3

var ren=document.getElementsByClassName("render")
// console.log(ren[2].innerHTML)
for (let index = 0; index < ren.length; index++) {
    const element = ren[index].innerHTML;
    document.write(element+"<br>")
}

// // part 4

document.getElementById("first-name").value="Muhammad"

// // part 5

document.getElementById("last-name").value="Ahsan"
document.getElementById("email").value="ahsan.muh123@gmail.com"

