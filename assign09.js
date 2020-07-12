function loadInfo() {
    var txt = "";
    var url = document.getElementById("link").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var people = JSON.parse(this.responseText);
        for (student of people.students) {
            txt += "<table border = '1'><tr><td>Name: " + student.first + " " + student.last + "</tr></td>";
            txt += "<tr><td>Address: ";
            for (x in student.address) {
                txt += student.address[x] + " ";
                        }
            txt += "</tr></td>";
            txt += "<tr><td>Major: " + student.major + "</tr></td>";
            txt += "<tr><td>GPA: " + student.gpa + "</tr></td></table>";
        }
        document.getElementById("displayInfo").innerHTML = txt;
            }
                
          };
          if (fileExists(url))
          {
            xhttp.open("GET", url, true);
            xhttp.send();
          }
          else
          {
            alert('Could not find file');
            return;
          }

        }
        
function fileExists(url)
{
  var http = new XMLHttpRequest();
  http.open('Head', url, false);
  http.send();
  return http.status!= 404;
  }
  
  <!--https://stackoverflow.com/questions/15054182/javascript-check-if-file-exists-->

function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("demo").innerHTML =
  xhttp.responseText;
}