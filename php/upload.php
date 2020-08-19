<?php

 include_once("database.php");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: PUT, GET, POST");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// $uploadFolder =  "uploads/";
 $name  = $_POST["name"];
 $files = $_FILES["file"]["name"];
 mkdir("uploads/".$name);
 for  ($i =  0; $i < count($files); $i++)  {
    $filename=$files[$i];
    $ext =  end(explode(".", $filename));
    $original = pathinfo($filename, PATHINFO_FILENAME);
    $fileurl = $original . "."  . $ext;
    move_uploaded_file($_FILES["file"]["tmp_name"][$i], 'uploads/'.$name."/". $fileurl);
    $sql = "INSERT INTO courses (upload, name) VALUES ('$files[$i]','$name')";
    if ($mysqli->query($sql) === TRUE) {
        echo "success";
        }
        else{
            echo "error";
        }
  }
   /*$sql = "INSERT INTO courses(upload) VALUES ('$files[0]')";


  //if ($mysqli->query($sql) === TRUE) {
    //echo "success";
    //}
    else{
        echo "error";
    }
   include_once("database.php");
    $postdata = file_get_contents("php://input");
    if(isset($postdata))
    {
    $request = json_decode($postdata);
    $file = trim($request->file);
    $name="abcdefgh";
    $file = $_FILES['file']['name'];
    $sql = "INSERT INTO courses(upload) VALUES ('$file')";
    $file1 = $_FILES['file']['tmp_name'];
                

    for  ($i =  0; $i < count($file); $i++)  {
        move_uploaded_file($_FILES["file"]["tmp_name"][$i], 'uploads/'.$_FILES["file"]["name"]);
    }
    if ($mysqli->query($sql) === TRUE) {
        echo "success";
    }
    else{
        echo "error";
    }
     }*/
  
?>