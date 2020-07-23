
   //==========================\\
  //---->>>Chapter 49-52 <<<----\\
 //----->>>    EVENTS   <<<------\\
//================================\\

     //======================\\
    //---->>> Task # 1 <<<----\\
   //==========================\\

function submit() {
   var username = document.getElementById("username");
   var email = document.getElementById("email");
   var showusername = document.getElementById("showusername");
   var showemail = document.getElementById("showemail");
   showusername.innerHTML = username.value;
   showemail.innerHTML = showemail.value;
}


     //======================\\
    //---->>> Task # 2 <<<----\\
   //==========================\\

function readMore() {
   var moretext = " Cum quo, sequi vitae quidem incidunt quae nobis nihil error repellat veritatis odit minus doloribus at eligendi aliquid consequatur molestias debitis! Vel."
   document.getElementById("sometext").innerHTML += moretext
   document.getElementById("read").hidden = true
}


     //======================\\
    //---->>> Task # 3 <<<----\\
   //==========================\\

var arrHead = new Array();
arrHead = ['', 'Student Name', 'Class', 'Roll no.'];


function createTable() {
   var empTable = document.createElement('table');
   empTable.setAttribute('id', 'empTable');

   var tr = empTable.insertRow(-1);
   for (var h = 0; h < arrHead.length; h++) {
       var th = document.createElement('th');
       th.innerHTML = arrHead[h];
       tr.appendChild(th);
   }

   var div = document.getElementById('cont');
   div.appendChild(empTable); 
}

function addRow() {
   var empTab = document.getElementById('empTable');

   var rowCnt = empTab.rows.length;   
   var tr = empTab.insertRow(rowCnt); 
   tr = empTab.insertRow(rowCnt);

   for (var c = 0; c < arrHead.length; c++) {
       var td = document.createElement('td'); 
       td = tr.insertCell(c);

       if (c == 0) {
           var button = document.createElement('input');

           button.setAttribute('type', 'button');
           button.setAttribute('value', 'Delete');

           button.setAttribute('onclick', 'removeRow(this)');

           td.appendChild(button);
       }
       else {
           
           var ele = document.createElement('input');
           ele.setAttribute('type', 'text');
           ele.setAttribute('value', '');

           td.appendChild(ele);
       }
   }
}

function removeRow(oButton) {
   var empTab = document.getElementById('empTable');
   empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function submit() {
   var myTab = document.getElementById('empTable');
   var arrValues = new Array();

   
   for (row = 1; row < myTab.rows.length - 1; row++) {
       for (c = 0; c < myTab.rows[row].cells.length; c++) {
           var element = myTab.rows.item(row).cells[c];
           if (element.childNodes[0].getAttribute('type') == 'text') {
               arrValues.push("'" + element.childNodes[0].value + "'");
           }
       }
   }

   
   document.getElementById('output').innerHTML = arrValues; 
}

//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\
                             //Chapter # 49-52 End\\
//-------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------\\

