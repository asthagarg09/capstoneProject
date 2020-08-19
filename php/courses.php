<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata))
{
$request = json_decode($postdata);
//$file = trim($request->file);
$name="abc";
$file = $_FILES['upload']['name'];
mkdir("uploads/".$name);
$sql = "INSERT INTO courses(upload) VALUES ('$file')";
$file1 = $_FILES['upload']['tmp_name'];
              
if (move_uploaded_file($file1,'uploads/'.$name."/".$_FILES["upload"]["name"])) { 
    print "Uploaded file moved"; 
    

} else { 
    print "Move failed"; 
} 
if ($mysqli->query($sql) === TRUE) {
    echo "success";
}
else{
    echo "error";
}
}

?>