<?php
    
    include 'connection.php';

    session_start();
    
    
    $lake = $_POST['item1'];
    $jsm  = $_POST['item2'];
    $km   = $_POST['item3'];
    $e    = $_POST['item4'];

    if(!is_numeric($lake)){
        $lake = 0;
    }
    if(!is_numeric($jsm)){
        $jsm = 0;
    }
    if(!is_numeric($km)){
        $km = 0;
    }
    if(!is_numeric($e)){
        $e = 0;
    }

    $results = $conn-> query("select * from shopuserbought where bought = '".$_SESSION['id']."'");


    if($results->num_rows > 0){
         $sql = "UPDATE shopuserbought SET item1 = '$lake', item2 ='$jsm', item3 = '$km', item4 = '$e' "
                 . "WHERE bought = '".$_SESSION['id']."'";
          if ($conn->query($sql) === TRUE) {
            $total = ($lake*3100) + ($jsm*1000) + ($km*1500) + ($e*15);
            echo $total;
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }  
    }

    else{
        $sql = "INSERT INTO shopuserbought(bought, item1,item2,item3,item4) VALUES('".$_SESSION['id']."', '$lake','$jsm','$km',"
            . "'$e')";
        if ($conn->query($sql) === TRUE) {
            $total = ($lake*3100) + ($jsm*1000) + ($km*1500) + ($e*15);
            echo $total;
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }  
    }
 
    $conn->close();
    

?>

