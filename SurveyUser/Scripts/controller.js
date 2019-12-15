/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function register(){
    
    var name = document.getElementById("user").value;
    var lname = document.getElementById("pass").value;
     
    var reg = new RegExp('^.{4,10}$');
    var rex = new RegExp('^.{5,40}$');
    if(!name.match(reg)){
        alert("Username must be more than 4 letters.");
    }
    if(!lname.match(rex)){
        alert("Password must be greater than 5 letters.");
    }
    
    var xhttp;
    
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
        document.getElementById("valid").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "Database/index.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("na="+name +"&ln="+lname);

}


function login(){
    
    var usW = document.getElementById("userN").value;
    var paW = document.getElementById("passW").value;

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
        document.getElementById("valid").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "Database/login.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("usr="+usW +"&ps="+paW);
    
    
}

function survey(){
    
    var q1 = document.getElementById("quest1").value;
    var q2 = document.getElementById("quest2").value;
    var q3 = document.getElementById("quest3").value;
    var q4 = document.getElementById("quest4").value;
    var q5 = document.getElementById("quest5").value;
    var q6 = document.getElementById("quest6").value;
    
    xhttp = new XMLHttpRequest();

    xhttp.open("POST", "Database/survey.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ques1="+q1 +"&ques2="+q2+"&ques3="+q3+"&ques4="+q4
            +"&ques5="+q5+"&ques6="+q6);
    
}

/*
function updateCart(){
    
    var one = document.getElementById("q1").value;
    var two = document.getElementById("q2").value;
    var three = document.getElementById("q3").value;
    var four = document.getElementById("q4").value;
    
    xhttp = new XMLHttpRequest();

    xhttp.open("POST", "cart.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("lakew="+one+"&jsm="+two+"&km="+three+"elix="+four);
    
}
*/

function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}


function alt(){
    alert("There's nothing to be added");
}


/*
function updateTable(str, temp, price){
    
    var table = document.getElementById("table");
     
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = str;
    cell2.innerHTML = temp;
    cell3.innerHTML = temp * price;
    cell4.innerHTML ="<button onclick=remove(this); width = '50'>Remove</button>";
 
    updateTotal((temp*price));
}



function remove(o){
      var p=o.parentNode.parentNode;
      p.parentNode.removeChild(p);   
}
*/


function tota(){
    
    var one = document.getElementById("q1").value;
    var two = document.getElementById("q2").value;
    var three = document.getElementById("q3").value;
    var four = document.getElementById("q4").value;

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
        document.getElementById("total").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "Database/cart.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("item1="+one +"&item2="+two+"&item3="+three+"&item4="+four);
    
    
}

function addLake(){
    var num = document.getElementById("q1").value;
    var prc = 3100;
    document.getElementById("lakeq").innerHTML = num;
    document.getElementById("lakep").innerHTML = num * prc;   
    total((num*prc));
    
}

function addGt(){
    var num = document.getElementById("q2").value;
    var prc = 1000;
    document.getElementById("jsmq").innerHTML = num;
    document.getElementById("jsmp").innerHTML = num * prc;
    total((num*prc));
    
}
function addkm(){
    var num = document.getElementById("q3").value;
    var prc = 1500;
    document.getElementById("kmq").innerHTML = num;
    document.getElementById("kmp").innerHTML = num * prc;
    total((num*prc));
    
}

function addElix(){
    
    var num = document.getElementById("q4").value;
    var prc = 15;
    document.getElementById("eq").innerHTML = num;
    document.getElementById("ep").innerHTML = num * prc;
    total((num*prc));
    
}
function finish(){
    
    document.location.href = "home.html";
}

function toJS(){
    
    var one = document.getElementById("q1").value;
    var two = document.getElementById("q2").value;
    var three = document.getElementById("q3").value;
    var four = document.getElementById("q4").value;
    
    var dict ={first: one, snc: two, thrd: three, fth: four};
    var dictstring = JSON.stringify(dict);
    var fs = require('fs');
    fs.writeFile("thing.json", dictstring);
    
}

/*
function removel(){
    document.getElementById("lakeq").innerHTML = 0;
    document.getElementById("lakep").innerHTML = 0;
}
function removej(){
    document.getElementById("jsmq").innerHTML = 0;
    document.getElementById("jsmp").innerHTML = 0;
}
function removek(){
    document.getElementById("kmq").innerHTML = 0;
    document.getElementById("kmp").innerHTML = 0;
}
function removee(){
    document.getElementById("eq").innerHTML = 0;
    document.getElementById("ep").innerHTML = 0;
}



/*
function addLake(){
    
    var one = document.getElementById("q1").value;
    if(one==0){
        alt();     
    }
    else{
        updateTable("Lakewood M35CP", one, 3100);
    }
}

function addGt(){
    
    var two = document.getElementById("q2").value;
    if(two == 0){
        alt();
    }
    else{
        updateTable("Ibanez JSM20", two, 1000);
    }  
}

function addkm(){
    var three = document.getElementById("q3").value;
    if(three == 0){
        alt();
    }
    else{
        updateTable("KM184", three, 1500);
    }   
}

function addElix(){

    var four = document.getElementById("q4").value;
    if(four == 0){
        alt();
    }
    else{
        updateTable("Elixir Strings", four, 15);
    }
    
}
*/

/*
function getTotal(){
    
    var total = 0;
    var oTable = document.getElementById("table");

    //gts rows of table
    var rowLength = oTable.rows.length;

    //loops through rows    
    for (i = 0; i < rowLength; i++){

      //gets cells of current row  
       var oCells = oTable.rows.item(i).cells;

       //gets amount of cells of current row
       var cellLength = oCells.length;

       //loops through each cell in current row
       for(var j = 0; j < cellLength; j++){     
            if(j==3){
              total= oCells.item(j).innerHTML + total;          
            }
        }
    }
        var row =   oTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
      
        cell1.innerHTML = "Total:";
        cell3.innerHTML = total;
        cell4.innerHTML ="<button onclick=remove(this); width = '50'>Remove</button>";
    
    
}
*/

