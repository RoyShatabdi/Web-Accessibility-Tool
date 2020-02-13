<?php include("config.php"); ?>

<?php
if (isset($_GET['SessionRetrieve'])) {
    try{
        if(!empty($_SESSION['session'])){
            echo $_SESSION['session'];
        }
        else
        {
            echo 0;
        }
    } catch(Exception $e){
        echo $e->getMessage();
    }
}
?>
