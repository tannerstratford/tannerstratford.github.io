
function check(){
var nameInput = "";
nameInput += "First Name:<br>" + "<input type='text' name='first_name_2' id = 'firstName' required><br>" + "Last Name:<br>" + " <input type='text' name='last_name_2' id = 'lastName' required><br>" + "Student ID:<br>" + " <input type='text' name='student_id_2' id = 'ID' required><br>";

if (document.getElementById("duet").checked == true)
{
   document.getElementById("type").innerHTML = nameInput;
}
else
{
  document.getElementById("type").innerHTML = "";
}

}

let theForm = document.getElementById("theForm");
theForm.addEventListener('submit', submitForm);

function submitForm(event) {
            event.preventDefault();

            let formData = new FormData(theForm);
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    let result = JSON.parse(this.responseText);
                    let h = "";
                    let count = 1;
                    for (person of result) {
                        h += "<h2>Performance # " + count + "</h2>";
                        count++;
                        h += "<div>";
                        h += "<p> Performance type: " + person.performance + "</p>";
                        h += "<p>" + person.firstname + " " + person.lastname + "- ID: " + person.ID + "</p>";
                        if (document.getElementById("duet").checked == true) {
                            h += "<p>" + person.firstname_2 + " " + person.lastname_2 + "-ID: " + person.ID2 + "</p>";
                        }
                        h += "<p> Skill level: " + person.skill + "</p>";
                        h += "<p> Instrument: " + person.instrument + "</p>";
                        h += "<p> Location: " + person.location + ", Room " + person.room + "</p>";
                        h += "<p> Time: " + person.timeslot + "</p>";
                        h += "</div>";
                    }
                    document.getElementById('result').innerHTML = h;
                }

            };
            xhr.open("POST", "assign13.php");
            xhr.send(formData);


        }
      