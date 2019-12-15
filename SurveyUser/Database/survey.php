<?php

    include 'connection.php';

    session_start();
    
    
    $q1 = $_POST['ques1'];
    $q2 = $_POST['ques2'];
    $q3 = $_POST['ques3'];
    $q4 = $_POST['ques4'];
    $q5 = $_POST['ques5'];
    $q6 = $_POST['ques6'];
     

    $results = $conn-> query("select * from surveyuserans where id = '".$_SESSION['id']."'");


    if($results->num_rows > 0){
         $sql = "UPDATE surveyuserans SET ques1 = '$q1', ques2 ='$q2', ques3 = '$q3', ques4 = '$q4',
             ques5 = '$q5', ques6 ='$q6' WHERE id = '".$_SESSION['id']."'";
          if ($conn->query($sql) === TRUE) {
            echo "it worked!";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }  

    }

    else{
        $sql = "INSERT INTO surveyuserans(id, ques1,ques2,ques3,ques4,ques5,ques6) VALUES('".$_SESSION['id']."', '$q1','$q2','$q3',"
            . "'$q4','$q5','$q6')";
        if ($conn->query($sql) === TRUE) {
            echo "it worked!";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }  
    }
 
    $conn->close();
    
?>
