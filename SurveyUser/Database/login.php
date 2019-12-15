<?php

    include 'connection.php';
    
    session_start();
    
    $user = $_POST['usr'];
    $pass = $_POST['ps'];
    
    
    $error = "";
    $results = $conn-> query("select * from surveyuser where username = '$user' and password = '$pass'");
    
    if($results->num_rows > 0){
       //set the id to session so it can be passed around and used to insert into the correct row   
       $test = $conn->query("select id from surveyuser where username = '$user' and password = '$pass'");
       $sessid = mysqli_fetch_array($test);
       $_SESSION['id'] = $sessid['id'];
      
       $link = "home.html";
       echo $error = "Success! Click <a href='$link'> here </a> to proceed!";
    }
    else{
       echo $error = "Wrong username/password!";
    }
   
    $conn->close();

?>
