<?php
$string="";
if (isset($_GET['robotFunc'])) {
    try {
        $data = file_get_contents($_GET['robotFunc']);

        $array = explode("\n",$data);

        for($counter = 0; $counter<sizeof($array); $counter++)
        {
            $gc = $array[$counter];
            $line=$gc;
            $string=$string.$line."^";
        }

        if ($data == '') {
            echo "Sorry! The Site Has No Robots.txt";
        } else {
            echo $string;
        }
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}