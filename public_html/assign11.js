var valid1 = true;
var valid2 = true;
var valid3 = true;
var valid4 = true;
var valid5 = true;
var blank1 = true;
var blank2 = true;
var blank3 = true;
var blank4 = true;
var blank5 = true;

document.getElementById("name1").addEventListener("keyup", function(){
blank1 = false;
   var letters = /^[A-Za-z]+$/;
   if(document.getElementById("name1").value.match(letters))
   {
      document.getElementById("name1Error").innerHTML = ""; 
      valid1 = true;
      document.getElementById("name1").style.backgroundColor = "#90EE90" ;
   }
      
   else
     {
         valid1 = false; 
        document.getElementById("name1").style.backgroundColor = "#ffcccb";
        document.getElementById("name1Error").innerHTML = "Please put a valid name"; 
     }
     if (document.getElementById("name1").value === "")
     {
        document.getElementById("name1").style.backgroundColor = "#ffffff";
        blank1 = true;
        document.getElementById("name1Error").innerHTML = ""; 
     }
  
      else
      {
        blank1 = false;  
      }
    
      
});

document.getElementById("name2").addEventListener("keyup", function(){
blank2 = false;
   var letters = /^[A-Za-z]+$/;
   if(document.getElementById("name2").value.match(letters))
   {
      document.getElementById("name2Error").innerHTML = ""; 
      valid2 = true;
      document.getElementById("name2").style.backgroundColor = "#90EE90" ;
   }
      
   else
     {
         valid2 = false; 
        document.getElementById("name2").style.backgroundColor = "#ffcccb";
        document.getElementById("name2Error").innerHTML = "Please put a valid name"; 
     }
     if (document.getElementById("name2").value === "")
     {
        document.getElementById("name2").style.backgroundColor = "#ffffff";
        blank2 = true;
        document.getElementById("name2Error").innerHTML = ""; 
     }
  
      else
      {
        blank2 = false;  
      }
    
      
});

document.getElementById("phone").addEventListener("keyup", function(){
blank3 = false;
   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(document.getElementById("phone").value.match(phoneno))
   {
      document.getElementById("phoneError").innerHTML = ""; 
      valid3 = true;
      document.getElementById("phone").style.backgroundColor = "#90EE90" ;
   }
      
   else
     {
         valid3 = false; 
        document.getElementById("phone").style.backgroundColor = "#ffcccb";
        document.getElementById("phoneError").innerHTML = "Make sure the phone number is in the following format: XXX-XXX-XXXX"; 
     }
     if (document.getElementById("phone").value === "")
     {
        document.getElementById("phone").style.backgroundColor = "#ffffff";
        blank3 = true;
        document.getElementById("phoneError").innerHTML = ""; 
     }
  
      else
      {
        blank3 = false;  
      }     
});

document.getElementById("credit").addEventListener("keyup", function(){
blank4 = false;
   var credit = /^\d{16}$/;
  if(document.getElementById("credit").value.match(credit))
   {
      document.getElementById("creditError").innerHTML = ""; 
      valid4 = true;
      document.getElementById("credit").style.backgroundColor = "#90EE90" ;
   }
      
   else
     {
         valid4 = false; 
        document.getElementById("credit").style.backgroundColor = "#ffcccb";
        document.getElementById("creditError").innerHTML = "Please put in a valid credit card number"; 
     }
     if (document.getElementById("credit").value === "")
     {
        document.getElementById("credit").style.backgroundColor = "#ffffff";
        blank4 = true;
        document.getElementById("creditError").innerHTML = ""; 
     }
  
      else
      {
        blank4 = false;  
      }     
});

document.getElementById("expDate").addEventListener("keyup", function(){
blank5 = false;
   var dateformat = /^(0?[1-9]|1[0-2])[\/\-](201[7-9]|202[0-9])$/;
  if(document.getElementById("expDate").value.match(dateformat))
   {
      document.getElementById("expError").innerHTML = ""; 
      valid5 = true;
      document.getElementById("expDate").style.backgroundColor = "#90EE90" ;
   }
      
   else
     {
         valid5 = false; 
        document.getElementById("expDate").style.backgroundColor = "#ffcccb";
        document.getElementById("expError").innerHTML = "Make sure the expiration date is in the following formats: MM/YYYY or MM-YYYY. Please have a minimum date of 2017"; 
     }
     if (document.getElementById("expDate").value === "")
     {
        document.getElementById("expDate").style.backgroundColor = "#ffffff";
        blank5 = true;
        document.getElementById("expError").innerHTML = ""; 
     }
  
      else
      {
        blank5 = false;  
      }     
});

document.getElementById("check1").addEventListener("click", function(){
   addItems();    
});
document.getElementById("check2").addEventListener("click", function(){
   addItems();    
});
document.getElementById("check3").addEventListener("click", function(){
   addItems();    
});
document.getElementById("check4").addEventListener("click", function(){
   addItems();    
});

function addItems() {
 var cookies = document.getElementById("check1").checked;
 var brownies = document.getElementById("check2").checked;
 var doughnuts = document.getElementById("check3").checked;
 var cupcakes = document.getElementById("check4").checked;
 var amount = 0;
 if (cookies)
 {
   amount += 1.99;
 }
 if (brownies)
 {
   amount += 2.99;
 }
 if (doughnuts)
 {
   amount += 1.49;
 }
 if (cupcakes)
 {
   amount += 1.49;
 }
 
 
 var x = document.getElementsByClassName("total");
  x[0].innerHTML = "$" + amount;
 }
 
 
document.getElementById("myForm").onsubmit = function() {myFunction();}
function myFunction() {

 if (valid1 === true && valid2 === true && valid3 === true && valid4 === true && valid5 === true && blank1 === false && blank2 === false && blank3 === false && blank4 === false && blank5 === false)
 {
    document.getElementById("myForm").submit();
 } 
 else
 {
   if (valid1 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid first name";
    document.getElementById("name1").focus();
   }
   else if (valid2 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid last name";
    document.getElementById("name2").focus();
   }
   else if (valid3 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid phone number";
    document.getElementById("phone").focus();
   }
   else if (valid4 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid credit card number";
    document.getElementById("credit").focus();
   }
   else if (valid5 === false)
   {
    document.getElementById("demo").innerHTML = "Please insert a valid expiration date";
    document.getElementById("expDate").focus();
   }
   else if (blank1 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the first name";
    document.getElementById("name1").focus();
   }
   else if (blank2 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the last name";
    document.getElementById("name2").focus();
   }
   else if (blank3 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the phone number";
    document.getElementById("phone").focus();
   }
   else if (blank4 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the credit card number";
    document.getElementById("credit").focus();
   }
   else if (blank5 === true)
   {
    document.getElementById("demo").innerHTML = "Please fill in the expiration date";
    document.getElementById("expDate").focus();
   }
    
  }     
} 

document.getElementById("myForm").onreset = function() {focus();}
function focus() {
  document.getElementById("name1").focus();
  document.getElementById("name1Error").innerHTML = ""; 
  document.getElementById("name2Error").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("creditError").innerHTML = "";
  document.getElementById("expError").innerHTML = "";
  document.getElementById("name1").style.backgroundColor = "#ffffff";
  document.getElementById("name2").style.backgroundColor = "#ffffff";
  document.getElementById("phone").style.backgroundColor = "#ffffff";
  document.getElementById("credit").style.backgroundColor = "#ffffff";
  document.getElementById("expDate").style.backgroundColor = "#ffffff";
  valid1 = true;
  valid2 = true;
  valid3 = true;
  valid4 = true;
  valid5 = true;
  blank1 = true;
  blank2 = true;
  blank3 = true;
  blank4 = true;
  blank5 = true;

document.getElementById("demo").innerHTML = "";
}


