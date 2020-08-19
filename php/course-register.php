<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$cname = trim($request->cname);
$cemail = trim($request->cemail);
$sql = "Update students SET course='$cname' where email='$cemail'";
//header("Location: http://localhost/capstoneProject/php/displayRegisteredCourses.php?email='$cemail'");
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'cname' => $cname,
'email' =>$cemail
];
echo json_encode($authdata);
}

}?>