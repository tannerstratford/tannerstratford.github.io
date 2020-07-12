/*

<html>
<body>


<?php

 $apr = $_GET["APR"];
 $term = $_GET["loan_term"];
 $amount = $_GET["loan_payment"];
 
 
 $payment = amount * (((apr/1200) * (1 + (apr/1200))**(term*12))/((1 + (apr/1200))**(term*12) - 1));
 payment = payment.toFixed(2);
 
?>

Monthly APR: <?php echo $_GET["APR"]; ?>

Term: <?php echo $term; ?> <br>
Amount: <?php echo $amount; ?> <br>
Payment: <?php echo $payment; ?> <br>


</body>
</html>

*/

<!DOCTYPE html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>