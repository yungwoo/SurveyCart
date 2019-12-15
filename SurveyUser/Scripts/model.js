
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function updateCart(){
    
    var cook1 = document.getElementById("q1");
    var cook2 = document.getElementById("q2");
    var cook3 = document.getElementById("q3");
    var cook4 = document.getElementById("q4");
    
    setCookie("item1", cook1, 365);
    setCookie("item2", cook2, 365);
    setCookie("item3", cook3, 365);
    setCookie("item4", cook4, 365);
    
    }








