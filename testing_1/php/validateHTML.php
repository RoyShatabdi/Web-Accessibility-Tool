<?php
    function checkPageSpeed($url){
        if (function_exists('file_get_contents')) {
            $result = @file_get_contents($url);
        }
        if ($result == '') {
            $agent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)';

            $ch = curl_init();
            $timeout = 60;
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_USERAGENT, $agent);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
            $result = curl_exec($ch);
            curl_close($ch);
        }
        return $result;
    }

    if (isset($_GET['callFunc'])) {
        try{
            echo checkPageSpeed($_GET['callFunc']);
            //echo $_GET['callFunc'];
        } catch(Exception $e){
            echo $e->getMessage();
        }
    }
?>