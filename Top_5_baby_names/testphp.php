<?php
header("content-type:application/json");
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test";
$resarray=array();
$year=$_POST['year1'];

// Create connection
$conn = new PDO("mysql:host=localhost;dbname=test","root","root");		
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);		
		$u_quote = $conn->quote($year);	
		//$p_quote = $conn->quote($password);
		$stmt = $conn->prepare("SELECT * FROM babynames WHERE year=$u_quote and ranking<6 order by ranking");
		$stmt->execute();
		while($row = $stmt->fetch()) {
			$resarray[]=$row;
}
print_r(json_encode($resarray));
$conn->close();






/*$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$year=$_POST['year1'];

$sql = "SELECT * FROM babynames where year='$year' and ranking<6 order by ranking";
$result = $conn->query($sql);
foreach ($result as $row){
	$resarray[]=$row;
}
print_r(json_encode($resarray));
$conn->close();  */
?> 