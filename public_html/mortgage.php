<html>
<body>



<?php
$apr = $_GET["APR"];
$term = $_GET["loan_term"];
$amount = $_GET["loan_payment"];
$x = (1 + ($apr/1200));
$y = $term * 12;
$z = (1 + ($apr/1200));
$w = ($term*12);
                                                       
 $payment = $amount * (($apr/1200) * (pow($x,$y))/(pow($z, $w) - 1));
               
 
 
?>


APR <?php echo $apr; ?><br>
Loan Term <?php echo $term; ?><br>
Loan Amount <?php echo $amount; ?><br>
Loan Payment <?php echo (round($payment, 2)); ?>

</body>
</html>