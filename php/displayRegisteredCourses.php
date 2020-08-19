<?php
    include('database.php');
    $cemail = $_GET['email'];
    //$request = json_decode($postdata);
    //$cemail = trim($request->cemail);

    $q="select * from courses join students on courses.name=students.course where students.email='$cemail' and courses.status='on'";
    $r = @mysqli_query ($mysqli, $q);
    $myArray=array();
    while($result = mysqli_fetch_array($r)){
        //echo "<br>First col: " . $result['courseID'] . "<br>";
        //echo "Third col: " . $result['upload'];
        //c join students s on c.name=s.course where s.email='$cemail'
        $myArray[]=$result;
    }
    print json_encode($myArray);
?>