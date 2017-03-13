$(document).ready(function(){
	$("#userInput").on("keyup change", function() {
   		value = this.value;
   		$("#dom_element").text(value);
	});
	$('#GetJson').click(function () {
		$.getJSON( value, function( data ) {
  			items = [[],[],[]];
  			$.each( data, function( key, val ) {
    			items[0].push(key);
          if(typeof(val) == "string"){
          valString = val.substring(0,10)
          items[1].push(valString);
          } else if (typeof(val) == "array") {
          valArray = val.length
          items[1].push(valArray);
          } else if (typeof(val) == "object") {
          valObject = Object.keys(val).length
          items[1].push(valObject);
          }
          items[2].push(typeof(val));
  			});
        	var row, cell;
					for(var i=0; i<items.length; i++){
              row = $( '<tr />' );
   				  	$('#table').append( row );
            for(var j=0; j<items[i].length; j++){
        			cell = $('<td>'+items[i][j]+'</td>')
        			row.append( cell );
    				}
					};
		  });
	 });
});