<?php

$storeLines = "";

$flag1 = false; // Condition: whenever finding comments in the code  it's skipping the comments parts
$flag2 = false; // Condition : whenever H1-H2 its there if true

/* FUNCTIONALITY OF GETTING LINES WITH Heading structure */

if (isset($_GET['callFunc'])) {
    try{
        $storeData = file_get_contents($_GET['callFunc']);  // storing data from whole file can converting into string format

           
// Crawling through the page Character by character

            for($charCounter = 0; $charCounter<strlen($storeData); $charCounter++){
                if(substr($storeData, $charCounter, 4) === "<!--"){
                    $flag1 = true;
                }
                if(substr($storeData, $charCounter, 3) === "-->"){
                    $flag1 = false;
                }
                if($flag1 === true){
                    continue;
                }


                if(substr($storeData, $charCounter, 3) === "<h1" || substr($storeData, $charCounter, 3) === "<h2" || substr($storeData, $charCounter, 3) === "<h3" || substr($storeData, $charCounter, 3) === "<h4" || substr($storeData, $charCounter, 3) === "<h5" || substr($storeData, $charCounter, 3) === "<h6"){
                    $flag2 = true;
                }
                if(substr($storeData, $charCounter, 4) === "</h1" || substr($storeData, $charCounter, 4) === "</h2" || substr($storeData, $charCounter, 4) === "</h3" || substr($storeData, $charCounter, 4) === "</h4" || substr($storeData, $charCounter, 4) === "</h5" || substr($storeData, $charCounter, 4) === "</h6"){
                    $flag2 = false;
                    $storeLines = $storeLines.substr($storeData, $charCounter, 5);
                    $storeLines = $storeLines."~"; //adding '~' to separate the Lines
                }
                if($flag2 === true){
                    $storeLines = $storeLines.substr($storeData, $charCounter, 1);
                }
            }
            //$storeLines = $storeLines."~";

        if(!empty($storeLines))
        {
            echo htmlspecialchars($storeLines);
        }
        else
        {
            echo "Not Found";
        }
    } catch(Exception $e){
        echo $e->getMessage();
    }
}
?>