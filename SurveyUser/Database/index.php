<?php
    
    include 'connection.php';


    $usN = $_POST["na"];
    $paN = $_POST["ln"];
    
    
    $error = "";
    $results = $conn-> query("select * from surveyuser where username = '$usN'");
    
    if($results->num_rows > 0){ 
        
        echo $error = "User exists! Please choose another username!";
        
    }
    else if($paN!==""){
        
      $sql = "INSERT INTO surveyuser(username, password) VALUES('$usN','$paN')";

      if ($conn->query($sql) === TRUE) {
          echo $error = "Registered, please log in!";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }  
    }
    else{
        echo $error = "Please input a password!";
    }
   
    $conn->close();

?>
