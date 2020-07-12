var valid1 = true;
var valid2 = true;
var valid3 = true;
var blank1 = true;
var blank2 = true;
var blank3 = true;

document.getElementById("apr").addEventListener("keyup", function(){
blank1 = false;
	if (isNaN(document.getElementById("apr").value) || document.getElementById("apr").value > 25 || document.getElementById("apr").value < 0) {
  		document.getElementById("aprError").innerHTML = "Error: Not a valid number. APR must be between 0 and 25%";
      valid1 = false; 
      document.getElementById("apr").style.backgroundColor = "#ffcccb";}
    else {
    	document.getElementById("aprError").innerHTML = ""; 
      valid1 = true;
      if (document.getElementById("apr").value === "")
      {
        document.getElementById("apr").style.backgroundColor = "#ffffff";
        blank1 = true;
  //      valid1 = false;
    }
      else
      {
        blank1 = false;
        document.getElementById("apr").style.backgroundColor = "#90EE90" ;
        }
      }
      
});

document.getElementById("term").addEventListener("keyup", function(){
blank2 = false;
	if (isNaN(document.getElementById("term").value) || document.getElementById("term").value > 40 || document.getElementById("term").value < 0) {
  		document.getElementById("termError").innerHTML = "Error: Not a valid number. Term must be between 0 and 40 years";
      valid2 = false;
      document.getElementById("term").style.backgroundColor = "#ffcccb";}
    else {
    	document.getElementById("termError").innerHTML = ""; 
      valid2 = true;
      if (document.getElementById("term").value === "")
      {
        blank2 = true;
        document.getElementById("term").style.backgroundColor = "#ffffff";
     // valid2 = false;
      }

      else
      {
        blank2 = false;
        document.getElementById("term").style.backgroundColor = "#90EE90"; }
      }
});

document.getElementById("amount").addEventListener("keyup", function(){
blank3 = false;
	if (isNaN(document.getElementById("amount").value) || document.getElementById("amount").value < 0) {
  		document.getElementById("amountError").innerHTML = "Error: Not a valid number";
      valid3 = false;
      document.getElementById("amount").style.backgroundColor = "#ffcccb";}
    else {
    	document.getElementById("amountError").innerHTML = ""; 
      valid3 = true;
      if (document.getElementById("amount").value === "")
      {
        blank3 = true;
        document.getElementById("amount").style.backgroundColor = "#ffffff";
    //  valid3 = false;
    }
  
      else
      {
        blank1 = false;
        document.getElementById("amount").style.backgroundColor = "#90EE90"; }
      }
});

function myFunction() {
 var apr = document.getElementById("apr").value;
 var term = document.getElementById("term").value;
 var amount = document.getElementById("amount").value;
 
 
 var payment = amount * (((apr/1200) * (1 + (apr/1200))**(term*12))/((1 + (apr/1200))**(term*12) - 1));
 payment = payment.toFixed(2);
 

 if (valid1 === true && valid2 === true && valid3 === true && blank1 === false && blank2 === false && blank3 === false)
 {
    document.getElementById("demo").innerHTML = payment;
 } 
 else
 {
   if (valid1 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid apr";
    document.getElementById("apr").focus();
   }
   else if (valid2 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid term";
    document.getElementById("term").focus();
   }
   else if (valid3 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid amount";
    document.getElementById("amount").focus();
   }
   else if (blank1 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the apr";
    document.getElementById("apr").focus();
   }
   else if (blank2 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the term";
    document.getElementById("term").focus();
   }
   else if (blank3 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the amount";
    document.getElementById("amount").focus();
   }
   
    
  }     
} 

document.getElementById("myForm").onreset = function() {focus();}
function focus() {
  document.getElementById("apr").focus();
  document.getElementById("aprError").innerHTML = ""; 
  document.getElementById("termError").innerHTML = "";
  document.getElementById("amountError").innerHTML = "";
  document.getElementById("apr").style.backgroundColor = "#ffffff";
  document.getElementById("term").style.backgroundColor = "#ffffff";
  document.getElementById("amount").style.backgroundColor = "#ffffff";
  var valid1 = true;
  var valid2 = true;
  var valid3 = true;
  var blank1 = true;
  var blank2 = true;
  var blank3 = true;

document.getElementById("demo").innerHTML = "";
}


