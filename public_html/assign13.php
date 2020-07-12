

<?php
$performance = $_POST["performance"];
$firstname = $_POST["first_name"];
$lastname = $_POST["last_name"];
$ID = $_POST["student_id"];
$firstname2 = $_POST["first_name_2"];
$lastname2 = $_POST["last_name_2"];
$ID2 = $_POST["student_id_2"];
$skill = $_POST["skill"];
$instrument = $_POST["instruments"];
$location = $_POST["location"];
$room = $_POST["room"];
$timeslot = $_POST["time_slot"];


$data = array(
  "performance" => $performance,
  "firstname" => $firstname,
  "lastname" => $lastname,
  "ID" => $ID,
  "firstname2" => $firstname2,
  "lastname2" => $lastname2, 
  "ID2" => $ID2, 
  "skill" => $skill, 
  "instrument" => $instrument, 
  "location" => $location,
  "room" => $room,
  "timeslot" => $timeslot 
  );
  
  $file = "data/data.txt";
  
  $current =  [];
  if (file_exists($file)){
  $current = file_get_contents($file);
  $current = json_decode($current);
  }
  
  $current[] = $data;
  $current = json_encode($current);
  file_put_contents($file, $current);
  echo $current;
  
  
  
?>

