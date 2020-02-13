<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Apollyon">
    <meta name="author" content="Shatabdi Dutta Roy">

    <link rel="shortcut icon" href="img/favicon.png" type="image/png" sizes="32x32">
    <link rel="icon" href="img/favicon.png" type="image/png" sizes="32x32">
    <title></Apollyon> </title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

    <!-- Theme CSS -->
    <link href="css/grayscale.min.css" rel="stylesheet">
    <link href="/testing_1/css/search.css " rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <?php
// PHP code goes here
?>

    <!-- Navigation -->
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <i class="fa fa-play-circle"></i> <span class="light">Apollyon</span> Web testing tool
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#about">About</a>
                    </li>
                    <!--<li>
                        <a class="page-scroll" href="#extensions">Site Check Up</a>
                    </li> -->
                    <li>
                        <a class="page-scroll" href="#manual">Free tools</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#demo">Demo</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#feedback">Feedback</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Intro Header -->
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="display-1"> <a href="#bottom"> &lt/Apollyon> </a> </h1>
                        <p class="intro-text">A free, responsive, One Click, one page Web Testing tool.
                            <br>Created by Shatabdi Dutta Roy.</p>
                        <a href="#about" class="btn btn-circle page-scroll">
                            <i class="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- About Section -->
    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>About &lt/Apollyon></h2>
                <p>This web page analyzer breaks down the structure and content of your web page and assesses the build quality and content quality from an accessibility, usability and search engine point of view.

                    Where appropriate, a pass (green tick) or fail (red cross) icon will be displayed for each section of the report. Question marks indicate areas that cannot be scored and need further human interaction.</p>

                    <p>
                        Analyze your web page urls and make them better.Please click the <b>Analyze your website</b> button and go to <b>Site Check up</b>.
                    </p>
                <a href="/testing_1/index.php" class="btn btn-default btn-lg"><i class="fa fa-stethoscope" aria-hidden="true"></i>  Analyze Your Website</a>
            </div>
        </div>
    </section>

    <!-- Extension Section 
    <section id="extensions" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Site Check Up</h2>
                    <p>
                        Analyze your web page urls and make them better.Please type your webpage url in the Search field & press ENTER.
                    </p>
                    <form id="form" action="" method="post">
                        <input type="text" required class="search-box btn btn-default btn-lg" placeholder="Enter search webpage" name="header-search-field" id= "header-search-field" style="border-radius: 1px;"/>
                        <button class="close-icon" type="reset" name="search" id="search"></button>
                    </form>
                </div>
            </div>
        </div>
    </section> --> 
    <!-- Manual Testing -->
     <section id="manual" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Free Tools</h2>
                    <p>All of the tools right at your fingertips. With one quick click, you can see how your site is doing.Tools will analyze  of a page to see how it can be improved.You can analyze any page, on any website as often as you wish. No installation required, no need to wait for hours, as this tool is instantaneous!</p>
                    <!--<a href="#" class="btn btn-default btn-lg">List of Free Tools </a>-->
                    <ul class="list-inline banner-social-buttons">
                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip"  title="The WAVE Chrome toolbar allows you to evaluate web content for accessibility issues directly within Chrome. Because the extension runs entirely within your web browser, no information is sent to the WAVE server. This ensures 100% private and secure accessibility reporting. The extension can check intranet, password-protected, dynamically generated, or sensitive web pages."><i class="fa fa-wikipedia-w" aria-hidden="true"></i> <span class="network-name">Wave Tool</span></a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="Check your website&#39;s loading speed. Page speed is an important factors in search engine rankings and overall site success. Pages that take longer than 5 seconds to load can lose up to 50% of users. Faster webpages result in higher traffic, better conversions and increased sales over slower loading pages."><i class="fa fa-google" aria-hidden="true"></i> <span class="network-name">Google Page Speed</span></a>
                        </li>

                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="Your page&#39;s meta title is an HTML tag that defines the title of your page. This tag displays your page title in search engine results, at the top of a user&#39;s browser, and also when your page is bookmarked in a list of favorites. A concise, descriptive title tag that accurately reflects your page&#39;s topic is important for ranking well in search engines"><i class="fa fa-tags" aria-hidden="true"></i> <span class="network-name">Meta Tag Analysis</span></a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document. First level headings should contain the most important heading(s) on the page (generally the document title)." style="margin-top:5px;"><i class="fa fa-file-text-o" aria-hidden="true"></i> <span class="network-name">HTML Semantic Structure</span></a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="Check if images on your webpage are using alt attributes. If an image cannot be displayed (e.g., due to broken image source, slow internet connection, etc), the alt attribute provides alternative information. Using relevant keywords and text in the alt attribute can help both users and search engines better interpret the subject of an image." style="margin-top:5px;"><i class="fa fa-picture-o" aria-hidden="true"></i> <span class="network-name">Image ALT Test</span></a>
                        </li>

                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="Check if your website is using HTTPS, a secure protocol for sending/receiving data over the Internet. Using HTTPS indicates that an additional encryption/authentication layer was added between client and server. HTTPS should be used by any site that collects sensitive customer data such as credit card information.Google is increasingly using https as a positive ranking factor." style="margin-top:5px;"><i class="fa fa-shield" aria-hidden="true"></i> <span class="network-name">HTTPS Test</span></a>
                        </li>

                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="Check if your website is using a robots.txt file. When search engine robots crawl a website, they typically first access a site&#39;s robots.txt file. Robots.txt tells Googlebot and other crawlers what is and is not allowed to be crawled on your site." style="margin-top:5px; "><i class="fa fa-check-square-o" aria-hidden="true"></i> <span class="network-name">Robot.txt Test</span></a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="The Validation tool is a validator by the World Wide Web Consortium (W3C) that allows Internet users to check HTML documents for well-formed markup. Markup validation is an important step towards ensuring the technical quality of web pages." style="margin-top:5px;"><i class="fa fa-file-code-o" aria-hidden="true"></i> <span class="network-name">HTML Validation</span></a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-default btn-lg" data-toggle="tooltip" title="The accessKey property sets or returns the accesskey attribute of an element. The accesskey attribute specifies a shortcut key to activate/focus an element." style="margin-top:5px;"><i class="fa fa-key" aria-hidden="true"></i> <span class="network-name">Access Key Test</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="demo" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Apollyon Webpage Demo</h2>
                    <p>
                        Watch how to use &lt/Apollyon> for Testing your Webpage</p>
                    <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" width="660" height="450"  src="https://www.youtube.com/embed/agIrobiQ2P4" frameborder="0" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section id="feedback" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Your Feedbacks matter</h2>
                <p>Feel free to email to provide some feedbacks on &lt/Apollyon>, give suggestions for new ideas or to just say Hello!</p>
                <p><a href="mailto:shatabdi.roy@jadu.co.uk">shatabdi.roy@jadu.co.uk</a>
                </p>

            </div>
        </div>
    </section>



    <!-- Footer -->
    <footer>
        <div class="container text-center">
            <p>Shatabdi Dutta Roy &copy; Apollyon 2017</p>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

    <!-- Theme JavaScript -->
    <script src="js/grayscale.min.js"></script>
    <script type="text/javascript" src="/landing_page/js/SearchBar.js"></script>
</body>

</html>
