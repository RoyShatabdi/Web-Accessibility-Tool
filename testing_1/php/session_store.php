<?php include("config.php");?>

<?php

if (isset($_GET['SessionStart'])) { /* Determines if $_GET['SessionStart']is set and is not NULL*/
    try{
        $_SESSION['session']=$_GET['SessionStart']; // Saving the session
    } catch(Exception $e){
        echo $e->getMessage(); 
    }
}
?>




