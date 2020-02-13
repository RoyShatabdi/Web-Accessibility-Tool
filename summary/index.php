<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" href="logo/favicon.png" type="image/png" sizes="32x32">
    <link rel="icon" href="logo/favicon.png" type="image/png" sizes="32x32">
    <title>
        </Apollyon>
    </title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- jQuery UI -->
    <link href="https://code.jquery.com/ui/1.10.3/themes/redmond/jquery-ui.css" rel="stylesheet" media="screen">

    <!-- styles -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/logo.css " rel="stylesheet">
    <link href="css/dropdown.css " rel="stylesheet">
    <link href="/testing_1/css/styles.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    

    <script type="text/javascript" src="/summary/js/_SessionCheck.js"></script>
    <script type="text/javascript" src="/summary/js/_ShowSnackBar.js"></script>
</head>
<body>
    <?php
// PHP code goes here
?>
<div class="header">
    <div class="container">

        <nav class="navbar navbar-default row" role="navigation">
            <div class="container-fluid navbar-border">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>


                    </button>
                    <a class="navbar-brand col-lg-2" href="/landing_page/index.php"> &lt/Apollyon></p></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul class="nav navbar-nav navbar-right">

                        <li>
                            <a class="btn btn-success" href="/testing_1/index.php" role="button" style="margin-right: 10px;"><i class="fa fa-stethoscope" aria-hidden="true"></i> <strong>Site Check Up</strong></a>
                        </li>
                        <li>
                            <a class="btn btn-success" id="pdf" role="button" ><i class="fa fa-file-pdf-o" aria-hidden="true"></i> <strong>Export pdf</strong></a>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>

    </div>

</div>



<!--Manual test Script Starts here-->
<div id="ParentDiv">
    <input type="search" name="url" id="url" class="form-control" placeholder="URL" style="display:none"><!--style="display:none"-->
    <button name="summary" id="summary" class="btn btn-primary btn-block" style="display:none"><!--style="display:none"-->Summary</button>
    <br>
    <!--<button name="pdf" id="pdf" class="btn btn-success btn-block">Create PDF</button>-->
    <br>
    <!--Table Results Start here-->
    <div class="container-fluid">
        <table class="table table-hover table-bordered" id="contents">
            <thead>
            <tr>
                <th><strong>ID</strong></th>
                <th><strong>Test Cases</strong></th>
                <th><strong>Results</strong></th>

            </tr>
            </thead>
            <tbody>
            <tr class="bg-danger">
                <th scope="row">1</th>
                <td colspan="1">Google Page Speed</td>
                <td class="pageSpeed" id="pageSpeed">Result</td>
            </tr>
            <tr class="bg-warning">
                <th scope="row">2</th>
                <td colspan="1">Meta Tag Analysis</td>
                <td class="metatag">Result</td>
            </tr>
            <tr class="bg-success">
                <th scope="row">3</th>
                <td colspan="1">Analyze a HTML Semantic Structure.</td>
                <td class="headingStructure">Result</td>
            </tr>
            <tr class="bg-info">
                <th scope="row">4</th>
                <td colspan="1">alt" attributes are provided for images.</td>
                <td class="results">Result</td>
            </tr>
            <tr class="bg-warning">
                <th scope="row">5</th>
                <td colspan="1">Site has a <strong>SSL</strong> Certificate.</td>
                <td class="SSL">Result</td>
            </tr>
            <tr class="bg-danger">
                <th scope="row">6</th>
                <td colspan="1">Site has a <strong>Robot.txt</strong>.</td>
                <td class="robotTXT">Result</td>
            </tr>
            <tr class="bg-success">
                <th scope="row">7</th>
                <td colspan="1">HTML Validation</td>
                <td class="htmlValidation">Result</td>
            </tr>
            <tr class="bg-info">
                <th scope="row">8</th>
                <td colspan="1">Check Site has Access key</td>
                <td class="accessKey">Result</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

<footer>
    <div class="container">
        <div class="copy text-center">
            <p>Shatabdi Dutta Roy &copy; Apollyon 2017</p>
        </div>
    </div>
</footer>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://code.jquery.com/jquery.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="bootstrap/js/bootstrap.min.js"></script>

<!--Write Scripts Here-->
<script type="text/javascript" src="//cdn.rawgit.com/MrRio/jsPDF/master/dist/jspdf.min.js">
</script>
<script type="text/javascript" src="//cdn.rawgit.com/niklasvh/html2canvas/0.5.0-alpha2/dist/html2canvas.min.js">
</script>

<script src="https://code.jquery.com/jquery.js"></script>

<script type="text/javascript" src="/summary/js/PageSpeed.js"></script>
<script type="text/javascript" src="/summary/js/MetaTag.js"></script>
<script type="text/javascript" src="/summary/js/HTML.js"></script>
<script type="text/javascript" src="/summary/js/AccessKey.js"></script>
<script type="text/javascript" src="/summary/js/HeadingStructure.js"></script>
<script type="text/javascript" src="/summary/js/RobotTXT.js"></script>
<script type="text/javascript" src="/summary/js/SSL.js"></script>
<script type="text/javascript" src="/summary/js/ImageALT.js"></script>
<script type="text/javascript" src="/summary/js/CreatePDF.js"></script>
</body>
</html>
