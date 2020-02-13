<?php
$flag=false;
$storeLine=""; // storing lines from html source code
$lineStringValue=""; // String value to add ','

/* FUNCTIONALITY OF GETTING LINES WITH ACCESS KEYS */

if (isset($_GET['callFunc'])) {
    try{
        $storeData = file_get_contents($_GET['callFunc']); // storing data from whole file can converting into string format
        $storedLineArray = explode("\n",$storeData); // splitting the lines and storing inside an array
        for($counter = 0; $counter<sizeof($storedLineArray); $counter++)
        {
            $accessedArray = $storedLineArray[$counter]; //accessing each line of the array
            //$start = strpos($accessedArray, '<');

            if (strpos($accessedArray, 'accesskey') !== false) {
                $flag = true;
                $storeLine=$accessedArray.$storedLineArray[$counter+1];
                $lineStringValue=$lineStringValue.$storeLine.",";
            }
        }
        if($flag==true)
        {
            echo "List of Access keys:      ";
            echo htmlspecialchars($lineStringValue);
        }
        else
        {
            echo "Congratulations! The Website Has No Access Key";
        }
        //echo $storedLineArray[147];
    } catch(Exception $e){
        echo $e->getMessage();
    }
}
?>