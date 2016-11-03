$(document).ready(function(){
    $.ajax({
        type : "GET",
        url : "books.xml",
        dataType : "xml",
        success : function(data){
		
		$(data).find('book').each(function(){
			var title = $(this).find('title').text();
			var author= $(this).find('author');
			var values = $(author).map(function(i,v) {return $(v).text();}).get().join(', ');

			var year=$(this).find('year').text();
			var price=$(this).find('price').text();
			var category=$(this).attr('category');
			
			var newrowcontent='<tr><td>'+title+'</td><td>'+values+'</td><td>'+year+'</td><td>'+price+'</td><td>'+category+'</td></tr>';
                      
			$("#demo").append(newrowcontent); 
			});
			}
     
    });

});