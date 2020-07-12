<html>
<head>
<link rel="stylesheet" type="text/css" href="assign08.css">
<title>Confirmation Page</title>
</head>
<body>



<?php
$firstname = $_GET["firstname"];
$lastname = $_GET["lastname"];
$phone = $_GET["phone"];
$address = $_GET["address"];
$credit_card = $_GET["credit_card"];
$exp_date = $_GET["exp_date"];

$total = 0;        
 
?>

<?php echo"<div class = \"center\">";?>
<?php echo "<h1>Confirmation Page</h1>"?> <br>


First name: <?php echo $firstname; ?><br>
Last name: <?php echo $lastname; ?><br>
Phone: <?php echo $phone; ?><br>
Address: <?php echo $address; ?><br>

<br>




Purchases: <br><br>

<?php
  if (!empty($_GET["cookies"])) {
    echo "Cookies - 1.99<br>";
    $total += 1.99;}
  if (!empty($_GET["brownies"])) {
    echo "Brownies - 2.99<br>";
    $total += 2.99;}
  if (!empty($_GET["doughnuts"])) {
    echo "Doughnuts - 1.49<br>";
    $total += 1.49;}
  if (!empty($_GET["cupcakes"])) {
    echo "Cupcakes - 1.49<br>";
    $total += 1.49;} 
?>
<br>
Total Cost:
<?php echo $total;?>
<br><br>

Card Type:

<?php
  $card = $_GET["card"];
  echo "$card<br>";
?>

Card Number:
<?php echo $credit_card;?><br>

Card Expiration Date:
<?php
$date = explode("/", $exp_date);
if ($date[0] == "01")
{
   echo "January $date[1]";
}
if ($date[0] == "02")
{
   echo "February $date[1]";
}
if ($date[0] == "03")
{
   echo "March $date[1]";
}
if ($date[0] == "04")
{
   echo "April $date[1]";
}
if ($date[0] == "05")
{
   echo "May $date[1]";
}
if ($date[0] == "06")
{
   echo "June $date[1]";
}
if ($date[0] == "07")
{
   echo "July $date[1]";
}
if ($date[0] == "08")
{
   echo "August $date[1]";
}
if ($date[0] == "09")
{
   echo "September $date[1]";
}
if ($date[0] == "10")
{
   echo "October $date[1]";
}
if ($date[0] == "11")
{
   echo "November $date[1]";
}
if ($date[0] == "12")
{
   echo "December $date[1]";
}
?>

<?php echo"<form action = \"assign11_a.php\" method = \"get\">";
      echo"<input type = \"submit\" name = \"submit\"></input>";
      echo"<input type = \"submit\" name = \"cancel\" value = \"Cancel\"></input>";
      echo"</form>";
?>

<?php echo"</div>";?>


</body>
</html>