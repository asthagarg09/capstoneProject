<?php

 include_once("database.php");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: PUT, GET, POST");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// $uploadFolder =  "uploads/";
 $name  = $_POST["name"];
 $files = $_FILES["file"]["name"];
 mkdir("quiz/".$name);
 for  ($i =  0; $i < count($files); $i++)  {
    $filename=$files[$i];
    $ext =  end(explode(".", $filename));
    $original = pathinfo($filename, PATHINFO_FILENAME);
    $fileurl = $original . "."  . $ext;
    move_uploaded_file($_FILES["file"]["tmp_name"][$i], 'quiz/'.$name."/". $fileurl);
    $sql = "INSERT INTO teacherquiz (name,filename, status) VALUES ('$name','$files[$i]','0')";
    if ($mysqli->query($sql) === TRUE) {
        echo "success";
        }
        else{
            echo "error";
        }
  }
  ?>