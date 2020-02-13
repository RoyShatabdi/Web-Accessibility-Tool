<?php

$storeLines = "";

$flag1 = false;
$flag2 = false;

/* FUNCTIONALITY OF GETTING storeLines WITH  IMAGE TAG */
if (isset($_GET['imageFunc'])) {
    try{
        $storeData = file_get_contents($_GET['imageFunc']);// storing data from whole file can converting into string format

      // Crawling through the page Character by character
      for($charCounter = 0; $charCounter<strlen($storeData); $charCounter++){
        // Condition: whenever finding comments in the code  it's skipping the comments parts
            if(substr($storeData, $charCounter, 4) === "<!--"){
                $flag1 = true; 
            }
            if(substr($storeData, $charCounter, 3) === "-->"){
                $flag1 = false;
            }
            if($flag1 === true){
                continue;
            }

            // Condition : whenever <imag> its there if true
            if(substr($storeData, $charCounter, 4) === "<img"){
                $flag2 = true; 
            }

            if(substr($storeData, $charCounter, 1) === ">"){
                $flag2 = false;
                $storeLines = $storeLines."^";
            }
            if($flag2 === true){
                $storeLines = $storeLines.substr($storeData, $charCounter, 1);
            }
        }

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