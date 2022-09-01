<?php
    

    $server = "sql312.epizy.com";
    $username = "epiz_30443054";
    $password = "qxTsKPyOxv07";
    $dbname = "epiz_30443054_tulsiportfolio";
    

    $conn = mysqli_connect($server, $username, $password, $dbname);

    if(!$conn){
        die("Connection Failed:" .mysqli_connect_error());

    }



?>
