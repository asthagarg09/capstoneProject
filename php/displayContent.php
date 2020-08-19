<?php
    include('database.php');
    $q = 'select * from courses';
    $r = @mysqli_query ($mysqli, $q);
    $myArray=array();
    while($result = mysqli_fetch_array($r)){
        //echo "<br>First col: " . $result['courseID'] . "<br>";
        //echo "Third col: " . $result['upload'];
        $myArray[]=$result;

    }
    print json_encode($myArray);
?>