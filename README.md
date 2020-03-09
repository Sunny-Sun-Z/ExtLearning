# ExtLearning
 learn ext




    @if (ViewBag.IsProd)
    {
        
        <link rel="stylesheet" href="../app/ExtJsWs/build/production/QuickStart/resources/QuickStart-all.css" />
        <script type="text/javascript" src="~/appjs"></script>
    }
    else
    {
        <link rel="stylesheet" href="../app/ExtJsWs/build/testing/QuickStart/resources/QuickStart-all.css" />
    <script type="text/javascript" src="../app/ExtJsWs/build/testing/QuickStart/app.js?v=@ViewBag.Version"></script>

    }
