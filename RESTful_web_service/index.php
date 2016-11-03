<?php

$req = explode('/', trim($_SERVER['PATH_INFO'],'/'));

$key_val = array_shift($req)+0;

// Create connection
$conn = mysqli_connect('localhost','root','root','test',8889);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if ($key_val==''){
$query="SELECT title FROM `book`";
$res = $conn->query($query);
echo "<table border=\"1\">";
echo "<th> Title </th>";
if ($res->num_rows > 0) {
    // Output data of each row
    while($row = $res->fetch_assoc()) {
		echo "<tr>";
        echo "<td> " . $row["title"] . "</td>";
		echo "</tr>";
    }
	
} else {
    echo "No Results to display";
}

} else {
	
$query="select b.Book_id, b.title, b.year, b.price, b.category, a.Author_Name from book b, authors a, book_authors ba where b.Book_id= \"$key_val\" and b.Book_id=ba.Book_id and a.Author_id=ba.Author_id ;";
$res = $conn->query($query);
echo "<table border=\"1\">";
echo "<th> Book-id </th><th> Title </th><th> Year </th><th> Price </th><th> Category </th><th> Authors </th>";
if ($res->num_rows > 0) {
	
	$auth = array();
	
    // Output data of each row
   while($row = $res->fetch_assoc()) {
	  //  $row = $res->fetch_assoc();
	  
	  $bookid = $row["Book_id"];
	  $title = $row["title"];
	  $year = $row["year"];
	  $price = $row["price"];
	  $category = $row["category"];
	  array_push($auth,$row["Author_Name"]);
	  
   }
		echo "<tr>";
        echo "<td>" .$bookid . "</td>";
		echo "<td>" . $title . "</td>";
		echo "<td>" . $year. "</td>";
		echo "<td>" . $price . "</td>";
		echo "<td>" . $category . "</td><td>";
		echo implode($auth, ',');
		echo "</td>";
		echo "</tr>";
    
} else {
    echo "No Results to display";
}
}
$conn->close();
