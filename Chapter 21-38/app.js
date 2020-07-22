
   //==========================\\
  //---->>>Chapter 21-25 <<<----\\
 //---->>> String Method <<<-----\\
//================================\\

     //======================\\
    //---->>> Task # 1 <<<----\\
   //==========================\\

// var FirstName = prompt("Enter first Name");
// var LastName = prompt("Enter Last Name");

// function FullName(greeting){
//     alert(greeting)
// }

// FullName(FirstName + " " +  LastName)


     //======================\\
    //---->>> Task # 2 <<<----\\
   //==========================\\

// var phone = prompt("Please Enter your favorite mobile phone model: ")
// document.write("My favourate phone is : "+phone+", <br>")
// var Index = phone.length;
// document.write("Length of String : "+Index+", <br>")


     //======================\\
    //---->>> Task # 3 <<<----\\
   //==========================\\

// var string = "Pakistani";
// document.write("String : "+string+" <br>")
// var IndexOfN = string.indexOf("n");
// document.write("Index of n : "+IndexOfN+" <br>")


     //======================\\
    //---->>> Task # 4 <<<----\\
   //==========================\\

// var string = "Hello World";
// document.write("String : "+string+" <br>")
// var firstWord = string.slice(0,5);
// var indexOfFirstWord = firstWord.length;
// var secondWord = string.slice(5); 
// var IndexOfL = secondWord.indexOf("l");
// var IndexOfN = indexOfFirstWord + IndexOfL
// document.write("Index of n : "+IndexOfN+" <br>")


     //======================\\
    //---->>> Task # 5 <<<----\\
   //==========================\\

// var string = "pakistani";
// document.write("String : "+string+" <br>")
// var IndexOf3 = string.charAt(3)
// document.write("Character at Index 3 : "+IndexOf3+" <br>")


     //======================\\
    //---->>> Task # 6 <<<----\\
   //==========================\\

// var FirstName = prompt("Enter first Name");
// var LastName = prompt("Enter Last Name");
// var FullName = FirstName.concat(" "+ LastName)
// document.write("Full Nmae is : "+FullName+" <br>")


     //======================\\
    //---->>> Task # 7 <<<----\\
   //==========================\\

// var city = "Hyderabad";
// var rep = "Islam";
// document.write("City : "+city+" <br>")
// var repslice = city.slice(0,5)
// var remslice = city.slice(5)
// document.write("After Replacement : "+rep+remslice+" <br>")


     //======================\\
    //---->>> Task # 8 <<<----\\
   //==========================\\

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for (var i = 0; i < message.length; i++) {
//     var IndexNo = message.indexOf('and')
//     var FirstText = message.slice(0, IndexNo)
//     var RepalcingText = '&';
//     var ThirdText = message.slice(IndexNo + 3)
//     var ans = FirstText + RepalcingText + ThirdText;
// }
// for (var i = 0; i < ans.length; i++) {
//     var IndexNo = ans.indexOf('and')
//     var FirstText = ans.slice(0, IndexNo)
//     var RepalcingText = '&';
//     var ThirdText = ans.slice(IndexNo + 3)
// }
// document.write("" + FirstText + RepalcingText + ThirdText + " <br>")


     //======================\\
    //---->>> Task # 9 <<<----\\
   //==========================\\

// var value = "472";
// document.write("Value : "+value+" <br><br>")
// document.write("Type : "+typeof value+" <br><br>")
// var changeType = parseInt(value);
// document.write("Value : "+changeType+" <br><br>")
// document.write("Type : "+typeof changeType+" <br><br>")


     //======================\\
    //---->>> Task # 10 <<<----\\
   //==========================\\

// var UserInput = prompt('Input any word');
// document.write("User Input : "+UserInput+" <br><br>")
// var UpperCase = UserInput.toUpperCase();
// document.write("Upper Case : "+UpperCase+" <br><br>")


     //======================\\
    //---->>> Task # 11 <<<----\\
   //==========================\\

// var UserInput = prompt('Input any word');
// document.write("User Input : "+UserInput+" <br><br>")
// var UpperSlice = UserInput.slice(0,1);
// var UpperCase = UpperSlice.toUpperCase();
// var LowerSlice = UserInput.slice(1);
// var LowerCase = LowerSlice.toLowerCase();
// document.write("Upper Case : "+UpperCase+LowerCase+" <br><br>")


     //======================\\
    //---->>> Task # 12 <<<----\\
   //==========================\\

// var value = 45.36;
// document.write("Number : "+value+" <br><br>")
// var ConvertNo = value.toString();
// document.write("Type : "+typeof ConvertNo+" <br><br>")


     //======================\\
    //---->>> Task # 13 <<<----\\
   //==========================\\



     //======================\\
    //---->>> Task # 14 <<<----\\
   //==========================\\

// var Inp = prompt("Welcome to ABC backrey, what do ypu wantt to order sir/ma'am? ");
// var LowerCase = Inp.toLowerCase();
// var arr =["cake" , "apple pie" , "cookies" , "chips" , "patties"];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === LowerCase){
//         alert(""+Inp+" is avalable in index"+" "+i+" in our backrey")
//     }else{
//         alert("We are sorry "+Inp+" is not avalable in our backrey")
//     }
// }



     //======================\\
    //---->>> Task # 15 <<<----\\
   //==========================\\



     //======================\\
    //---->>> Task # 16 <<<----\\
   //==========================\\

// var university = "University of Karachi";
// for(var i = 0; i < university.length; i++){
//     var Str_Split = university.slice(i,i+1);
//     document.write("  "+Str_Split+"<br>")
// }


     //======================\\
    //---->>> Task # 17 <<<----\\
   //==========================\\

// var UserInput = prompt("Enter a Word");
// document.write("User Input : "+UserInput+"<br><br>")
// var i = UserInput.length
// var strSlice1 = UserInput.slice(0 , i-1)
// var strSlice2 = UserInput.slice(i-1)
// document.write("Last Character of input : "+strSlice2+"<br><br>")


     //======================\\
    //---->>> Task # 18 <<<----\\
   //==========================\\

// function count(main_str, sub_str) {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) {
//         return main_str.length + 1;
//     }

//     subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// }

// var InputWord = prompt("Enter a Word");
// var ans1 = count("The quick brown fox jumps over the lazy dog", InputWord);

// document.write("There are " + ans1 + " occurance of word " + InputWord + " .")


//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
                             //Chapter # 21-25 End\\
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\



   //==========================\\
  //---->>>Chapter 26-30 <<<----\\
 //---->>> Mathes Method <<<-----\\
//================================\\

     //======================\\
    //---->>> Task # 1 <<<----\\
   //==========================\\

// var Number = prompt("Enter a Positive integer Number");
// document.write("Number :"+Number+"<br>");
// var Round_Number = Math.round(Number);
// document.write("Round off value :"+Round_Number+"<br>");
// var Floor_Number = Math.floor(Number);
// document.write("Floor value :"+Floor_Number+"<br>");
// var Ceil_Number = Math.ceil(Number);
// document.write("Ceil value :"+Ceil_Number+"<br>");


     //======================\\
    //---->>> Task # 2 <<<----\\
   //==========================\\

// var Number = prompt("Enter a Positive integer Number");
// document.write("Number :"+Number+"<br>");
// var Round_Number = Math.round(Number);
// document.write("Round off value :"+Round_Number+"<br>");
// var Floor_Number = Math.floor(Number);
// document.write("Floor value :"+Floor_Number+"<br>");
// var Ceil_Number = Math.ceil(Number);
// document.write("Ceil value :"+Ceil_Number+"<br>");


     //======================\\
    //---->>> Task # 3 <<<----\\
   //==========================\\


// var Number = prompt("Enter a Positive integer Number");
// var Abs_Number = Math.abs(Number);
// document.write("Absolute value of :"+Number+" is "+Abs_Number+"<br>");


     //======================\\
    //---->>> Task # 4 <<<----\\
   //==========================\\


// var number = 6;
// var Random_Number = Math.random() * number;
// var Ceil_Random_Number = Math.ceil(Random_Number)
// document.write("Random dice value : "+Ceil_Random_Number+"<br>");


     //======================\\
    //---->>> Task # 5 <<<----\\
   //==========================\\


// var number = 2;
// var Random_Number = Math.random() * number;
// var Ceil_Random_Number = Math.ceil(Random_Number)
// document.write("Random dice value : "+Ceil_Random_Number+"<br>");
// if(Ceil_Random_Number === 2){
//     document.write("Random coin value : Heads");
// }else{
//     document.write("random coin value : tails");
// }


     //======================\\
    //---->>> Task # 6 <<<----\\
   //==========================\\


// var number = 100;
// var Random_Number = Math.random() * number;
// var Ceil_Random_Number = Math.ceil(Random_Number)
// document.write("Random number between 1 and 100 : "+Ceil_Random_Number+"<br>");


     //======================\\
    //---->>> Task # 7 <<<----\\
   //==========================\\


// var Weight = prompt("Enter your weight in kilograms")
// var i = 0;
// while(i < Weight.length){
//     var num = Weight.slice(i,i+1)
//     if(num === " "){
//         var weight_kilo = Weight.slice(0,i)
//         document.write("The weight of user is "+weight_kilo+" Kilograms")
//     }else{
//         var Match_Weight = Weight.match(/[0-9]+/g);
//         document.write("The weight of user is "+Match_Weight+" Kilograms")
//     }
//     i++
//     break;
// }


     //======================\\
    //---->>> Task # 8 <<<----\\
   //==========================\\


// var number = 10;
// var Random_Number = Math.random() * number;
// var Ceil_Random_Number = Math.ceil(Random_Number)
// document.write("Seccrate Number : "+Ceil_Random_Number+"<br>");
// var Secrate_Number = prompt("Enter a Number between 1 and 10 ")
// if(Ceil_Random_Number != Secrate_Number){
//     alert("Try Again!");
// }else{
//     alert("You win!")
// }


//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
                             //Chapter # 26-30 End\\
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\



   //==========================\\
  //---->>>Chapter 31-34 <<<----\\
 //---->>>  Date Methods <<<-----\\
//================================\\

     //======================\\
    //---->>> Task # 1 <<<----\\
   //==========================\\


// var today = new Date();
// document.write("Current date : "+today+"<br>")


     //======================\\
    //---->>> Task # 2 <<<----\\
   //==========================\\


// var today = new Date();
// var month = today.getMonth()+1
// document.write("Current date : "+month+"<br>")
// if(month === 1){
//     document.write("Corrent Month : January")
// }if(month === 2){
//     document.write("Corrent Month : Febraury")
// }if(month === 3){
//     document.write("Corrent Month : March")
// }if(month === 4){
//     document.write("Corrent Month : April")
// }if(month === 5){
//     document.write("Corrent Month : May")
// }if(month === 6){
//     document.write("Corrent Month : June")
// }if(month === 7){
//     document.write("Corrent Month : July")
// }if(month === 8){
//     document.write("Corrent Month : August")
// }if(month === 9){
//     document.write("Corrent Month : Septamber")
// }if(month === 10){
//     document.write("Corrent Month : Octuber")
// }if(month === 11){
//     document.write("Corrent Month : November")
// }if(month === 12){
//     document.write("Corrent Month : December")
// }


     //======================\\
    //---->>> Task # 3 <<<----\\
   //==========================\\


// var today = new Date();
// // document.write("Current date : "+today+"<br>")
// var Str = today.toString();
// var slice = Str.slice(0,3);
// document.write("Current day : "+slice+"<br>")


     //======================\\
    //---->>> Task # 4 <<<----\\
   //==========================\\


// var today = new Date();
// var Str = today.toString();
// var slice = Str.slice(0,3);
// document.write("Current day : "+slice+"<br>")
// var Fun_Day1 = "Sat";
// var Fun_Day2 = "Sun";
// if(slice === Fun_Day1 && Fun_Day2){
//     alert("Its fin day!");
// }else{
//     alert("Not a Fun DAy!");
// }


     //======================\\
    //---->>> Task # 5 <<<----\\
   //==========================\\


// var today = new Date();
// document.write(today+"<br>")
// var Str = today.toString();
// var slice = Str.slice(8,10);
// document.write("Current date : "+slice+"<br>")
// if(slice <= 15){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last day of the month");
// }

   
     //======================\\
    //---->>> Task # 7 <<<----\\
   //==========================\\


// var hours = new Date().getHours();
// var hours = (hours+24)%24;
// var mid='am';
// if(hours==0){ //At 00 hours we need to show 12 am
//     hours=12;
// }
// else if(hours>12)
//   {
//     hours=hours%12;
//     mid='pm';
//   }
// alert ("It's " + mid);


     //======================\\
    //---->>> Task # 8 <<<----\\
   //==========================\\


// var later_date = new Date("Dec 31, 2020")
// document.write("leter date : "+later_date)

   
     //======================\\
    //---->>> Task # 9 <<<----\\
   //==========================\\


// var starting_date = new Date("june 18, 2015")
// var Strt_date_mili = starting_date.getTime()
// var today = new Date()
// var today_mili = today.getTime()
// var diff = today_mili - Strt_date_mili
// var accuage = Math.floor(diff/(1000*60*60))
// document.write(accuage)

   
     //======================\\
    //---->>> Task # 10 <<<----\\
   //==========================\\



// var starting_date = new Date("dec 5, 2015")
// var Strt_date_mili = starting_date.getTime()
// var today = new Date()
// var today_mili = today.getTime()
// var diff = today_mili - Strt_date_mili
// var accuage = Math.floor(diff/(1000))
// document.write(accuage)

   
     //=======================\\
    //---->>> Task # 11 <<<----\\
   //===========================\\

//    var d = new Date();
//    var oneday = 1000*60*60
//    var pastYear = d.getFullYear() - oneday;
//    d.setFullYear(pastYear);
//    document.write(d);

   
     //======================\\
    //---->>> Task # 12 <<<----\\
   //==========================\\

   
//    var d = new Date();
//    var pastYear = d.getFullYear() - 100;
//    d.setFullYear(pastYear);
//    document.write(d);


     //======================\\
    //---->>> Task # 13 <<<----\\
   //==========================\\

// var input = prompt("Enter yor date of birth");
// var starting_date = new Date(input)
// var Strt_date_mili = starting_date.getTime()
// var today = new Date()
// var today_mili = today.getTime()
// var diff = today_mili - Strt_date_mili
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage)



//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
                             //Chapter # 31-34 End\\
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\



   //==========================\\
  //---->>>Chapter 35-38 <<<----\\
 //---->>>    Function   <<<-----\\
//================================\\

     //======================\\
    //---->>> Task # 1 <<<----\\
   //==========================\\


// function date_time(){
//     var today = new Date()
//     document.write("Current date and time : "+today)
// }
// date_time()


     //======================\\
    //---->>> Task # 2 <<<----\\
   //==========================\\


// var FirstName = prompt("Enter first Name");
// var LastName = prompt("Enter Last Name");

// function FullName(greeting){
//     alert(greeting)
// }

// FullName(FirstName + " " +  LastName)


   
     //======================\\
    //---->>> Task # 3 <<<----\\
   //==========================\\


// var first_num = +prompt("Enter first number");
// var sec_num = +prompt("Enter second number")

// function add(a , b){
//     var z = a + b;
//     alert(z)
// }

// add(first_num , sec_num)

   
     //======================\\
    //---->>> Task # 4 <<<----\\
   //==========================\\



// var first_num = +prompt("Enter first number");
// var operator = prompt("Enter operator")
// var sec_num = +prompt("Enter second number")

// function add(a , b , c){
//     if(b === "+"){
//         var x = a + c
//         alert(x)
//     }
//     if(b === "-"){
//         var x = a - c
//         alert(x)
//     }
//     if(b === "*"){
//         var x = a * c
//         alert(x)
//     }
//     if(b === "/"){
//         var x = a / c
//         alert(x)
//     }
//     if(b === "%"){
//         var x = (a / c)* 100
//         alert(x)
//     }
// }

// add(first_num , operator , sec_num)

   
     //======================\\
    //---->>> Task # 5 <<<----\\
   //==========================\\


// function sumOfSquares(num) {

// for (var i=0; i <= num; i++){
//     var sum=0;
//     var i = i*i;
//     sum = i;
// }
//     document.write("The sum of squares for numbers up to and including " +num+ " is " +sum )
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);

   
     //======================\\
    //---->>> Task # 6 <<<----\\
   //==========================\\


   // function factorial(n){
   //    let answer = 1;
   //    if (n == 0 || n == 1){
   //      return answer;
   //    }else{
   //      for(var i = n; i >= 1; i--){
   //        answer = answer * i;
   //      }
   //      return answer;
   //    }  
   //  }
   //  let n = 3;
   //  answer = factorial(n)
   //  document.write("The factorial of " + n + " is " + answer);

   
     //======================\\
    //---->>> Task # 7 <<<----\\
   //==========================\\


// var Start = prompt("Enter starting number");
// var End = prompt("Enter ending number");

// for (var i = Start; i <= End; i++){
//    document.write(i+"<br>")
// }

   
     //======================\\
    //---->>> Task # 8 <<<----\\
   //==========================\\


// var base = prompt("Enter base");
// var Perp = prompt("Enter Perpandicular");

// function calcHypotenus(base,  perp) {
//    return Math.sqrt(base*base  + perp*perp) ;
// }

// document.write("Hypothesis : "+calcHypotenus(base , Perp))

   
     //======================\\
    //---->>> Task # 9 <<<----\\
   //==========================\\


// var width = prompt("Enter a width");
// var height = prompt("Enter a height");

// function Area(width , height){
//    var A = width*height;
//    return(A);
// }

// document.write("Area : "+Area(width , height))

   
     //=======================\\
    //---->>> Task # 10 <<<----\\
   //===========================\\


// var word = prompt("Enter your word");

// function palandirome(){
//    var check = " "
//    for (var i = word.length-1; i >= 0; i--){
//       check += word[i]
//    }
//    if (word === check){
//       document.write(word + " ia palindrome word");
//    }
// }

// palandirome();


     //=======================\\
    //---->>> Task # 11 <<<----\\
   //===========================\\


// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.write(capitalize_Words(prompt('Enter yor words')));

   
     //=======================\\
    //---->>> Task # 12 <<<----\\
   //===========================\\


// var sentence = prompt("Enter a sentence")
// var parts = sentence.split(' ');
// var longestIndex = 0;
// var longestWord = 0;

// for(var i=0; i < parts.length; i++){
//     if(parts[i].length > longestWord){
//         longestWord = parts[i].length;
//         longestIndex = i;
//     }
// }
// alert("longest word is " + parts[longestIndex] + " : " + longestWord + " characters");


     //=======================\\
    //---->>> Task # 13 <<<----\\
   //===========================\\


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
   
// console.log(char_count('JSResourceS.com', 'o'));



   
     //=======================\\
    //---->>> Task # 14 <<<----\\
   //===========================\\


// var pi = 3.14;
// var radius = prompt("Enter a radius");

// function calArea(radius){
//    var calar = pi*(Math.pow(radius,2));
//    return calar;
// }

// function calCirdumference(radius){
//    var cilcir = 2*pi*radius;
//    return cilcir;
// }

// alert("circumference of circle is : "+calCirdumference(radius));
// alert("Area of circle is : "+calArea(radius));


   
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
                             //Chapter # 35-38 End\\
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\