<html>
<head>
<link rel="stylesheet" type="text/css" href="assign08.css">
<title>Confirmation Page</title>
</head>
<body>



<?php

$submit = $_GET["submit"];
$cancel = $_GET["cancel"];        
?>

<?php echo"<div class = \"center\">";?>

<?php
if ($submit)
{
   echo "<h1>Your order has been submitted</h1>";
}
if ($cancel)
{
   echo "<h1>Your order has been cancelled</h1>";
}
?>

<?php echo"</div>";?>


</body>
</html>