<?php

$line="";
$string="";
$lines = "";

$flag1 = false;
$flag2 = false;


if (isset($_GET['imageFunc'])) {
    try{
        $data = file_get_contents($_GET['imageFunc']);

        $gc = $data;

        for($charCounter = 0; $charCounter<strlen($gc); $charCounter++){
            if(substr($gc, $charCounter, 4) === "<!--"){
                $flag1 = true;
            }
            if(substr($gc, $charCounter, 3) === "-->"){
                $flag1 = false;
            }
            if($flag1 === true){
                continue;
            }


            if(substr($gc, $charCounter, 7) === "<title>"){
                $flag2 = true;
            }

            if(substr($gc, $charCounter, 8) === "</title>"){
                $flag2 = false;
            }
            if($flag2 === true){
                $lines = $lines.substr($gc, $charCounter, 1);
            }
        }
        //$lines = $lines."~";

        if(!empty($lines))
        {
            echo htmlspecialchars($lines);
        }
        else
        {
            echo "No Title Found";
        }
    } catch(Exception $e){
        echo $e->getMessage();
    }
}
 ?>