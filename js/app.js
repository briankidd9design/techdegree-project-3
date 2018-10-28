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
	

		
		$("#color option").each(function() {
		//$("#color").change(function(){
			
			//alert(this.text + '' + this.value);
			
			 /* if( $("#color option:not(:selected)").val() === "cornflowerblue" || $("#color option:not(:selected)").val() === "darkslategrey"
				 || $("#color option:not(:selected)").val() === "gold") {
						
					alert("js-puns!");
					$("#color option").addClass("js-puns");
			 } */
			if ( $("#color option:not(:selected)").val() === "cornflowerblue") {
					alert("love-js!");
					//$("#color option").addClass("love-js");
					 $(this).addClass('love-js');
				 }
			
			/* if( $("#color option").val() === "cornflowerblue"){
				$("#color option").addClass("js-puns");
				alert("test");
					
			} */
		
		});
	
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