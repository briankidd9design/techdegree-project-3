/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/
alert("Hello");
$(document).ready(function (){
	//focus on Name field
	$("#name").focus();

//Hide otherTitle Id unless the user selects an other job title
	$("#otherTitle").hide();

	$("#title").change(function(){
		if($("#title option:selected").val() === "other"){
			$("#otherTitle").show();
		}
		else{
			$("#otherTitle").hide();
		}
	});

	//
	//$("select#color").html("");
	$("#design").change(function(){
		
		if( $("#design option:selected").val() === "js puns"   ){
			$(".js-puns").show();
			$(".love-js").hide();
			
		}
		else if( $("#design option:selected").val() === "heart js"   ){
			
			$(".love-js").show();
			$(".js-puns").hide();
			
		}
	});
	

});