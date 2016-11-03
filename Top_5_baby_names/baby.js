window.onload=function(){
document.getElementById("resultbutton").onclick=function(){
var year = document.getElementById("dropdown").value;

var xhReq = new XMLHttpRequest();

var vars= "year1="+year;
xhReq.onreadystatechange = function() {
	    if(xhReq.readyState == 4 && xhReq.status == 200) {
		    var return_data = xhReq.responseText;
	        var data=JSON.parse(return_data);
			var i;
	 var fm = "<h2>females</h2>";
	  fm +="<table align=\"center\" border=\"1\" width=\"75%\"><th> name</th><th>ranking</th>";
	 var m ="<h2>males</h2>";
	  m+="<table align=\"center\" border=\"1\" width=\"75%\"><th>name</th><th>ranking</th>";
	 for(i=0; i<= 10 ;i++)
	 {
		 if(data[i].gender == 'f')
		 {
			 fm+= "<tr><td>"+data[i].name+"</td><td>"+data[i].ranking+"</td></tr>";
			
			if(data[i].ranking==5)
			{
				fm += "</table>";
				 document.getElementById("females").innerHTML=fm;
			}
			 
		 }
		  
		 
		 if(data[i].gender == 'm')
		 {
			  m+= "<tr><td>"+data[i].name+"</td><td>"+data[i].ranking+"</td></tr>";
			 if(data[i].ranking==5)
			{
				m += "</table></br>";
				 document.getElementById("males").innerHTML=m;
			}
		 }
		 
	 }
	    }
    }

 xhReq.open("POST", "testphp.php",true);
 xhReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 xhReq.send(vars);
 };
 };
 