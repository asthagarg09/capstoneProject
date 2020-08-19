<?php

 include_once("database.php");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: PUT, GET, POST");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// $uploadFolder =  "uploads/";
 $status  = $_POST["status"];
 $idname = $_POST["idname"];
     $sql = "Update courses set status='$status' where courseId='$idname'";
    if ($mysqli->query($sql) === TRUE) {
        echo "success";
        }
        else{
            echo "error";
        }
    
  ?>