/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/
//alert("Hello");
$(document).ready(function (){
	//focus on Name field
	$("#name").focus();
//Job Role Section
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

//T-Shirt Info Section
	function hideOption(number) {
		$('#colors-js-puns select option').eq(number).hide();
		
		
	}

	function showOption(number) {
		$('#colors-js-puns select option').eq(number).show();
	
	}
		
	
	$("#design").change(function(){

	
		 if( $("#design option:selected").val() === "js puns"   ){ 
			
			$('#colors-js-puns select option')[0].selected = true;
			
			hideOption(3);
			hideOption(4);
			hideOption(5);
		
			showOption(0);
			showOption(1);
			showOption(2);
		}
		
		 else if( $("#design option:selected").val() === "heart js"   ){
			 
			$('#colors-js-puns select option')[3].selected = true;
			
			hideOption(0);
			hideOption(1);
			hideOption(2);
		
			showOption(3);
			showOption(4);
			showOption(5);
			
		} 
	});
	
	//Register for Activities Section
	//variable used to add up the cost of classes

	/* var jsFrameworks = {
		day : "Tuesday",
		time : "9-12",
		cost: 100
	};
	
	var expressWorkshop = {
		day : "Tuesday",
		time : "9-12",
		cost: 100
	}; */
	


$('.activities').on('change', function() {
	
	let  $totalCost = 0;
	
	   var activities = [

		{
			title : "Main Conference",
			day : "",
			time : "",
			input : $("input[name='all']"),//if one of the inputs is checked, go through all the other inputs in the array to check for day and time conflicts
			cost: 200
		},
		{
			title : "JS Frameworks",
			day : "Tuesday",
			time : "0900-1200",
			input : $("input[name='js-frameworks']"),
			cost: 100
		},
		{
			title : "JS Libraries",
			day : "Tuesday",
			time : "1300-1600",
			input : $("input[name='js-libs']"),
			cost: 100
		},
		
		{
			title : "Express Workshop",
			day : "Tuesday",
			time : "0900-1200",
			input: $("input[name='express']"),
			cost: 100
		},
		{
			title : "Node JS",
			day : "Tuesday",
			time : "1300-1600",
			input : $("input[name='node']"),
			cost: 100
		},
		{
			title : "Build Tools",
			day : "Wednesday",
			time : "0900-1200",
			input : $("input[name='build-tools']"),
			cost: 100
		},
		{
			title : "Build Tools",
			day : "Wednesday",
			time : "0900-1200",
			input : $("input[name='build-tools']"),
			cost: 100
		},
		{
			title : "npm Workshop",
			day :  "Wednesday",
			time : "1300-1600",
			//input :  $("input[name='npm']"),
			cost: 100
				
		}
	];  

	//My goals for the "Activities Section" is as follows
	
	//1.loop through fieldset inputs with .activities class
	//2. be able to compare the day and times of each activity as opposed to just disabling certain checkboxes when a specific checkbox
	//with conflicting time is checked. This way the code will work even if activities are added to the form. 
	
	//$(".actitivies input[type=checkbox]").each(function() {
	
	 $.each(activities, function(key, value) { 
	//$('.activities :input[name]').each(function (key, value){
		//console.log(key)
	
		//console.log(value.title + value.day + value.time +value.input + value.cost);
		/* if(value.input ===  $("input[name='build-tools']") ) {
			alert("input baby");
		} */
		/* if(activities.day&&activities.time===activities.day&&activities.time){
			alert("These are equal");
		} */
		/* if(value.title === "npm Workshop"){
			alert("npm workshop");
		} */
		
		/* if(value.day && value.time == value.day && value.time){
			alert("These are equal!");
			
		}*/
		/*  if( ($(value.input).eq(1) ).is(':checked')){
		
				
		}   */
		/* console.log("From array of objects, input");
		console.log(activities[key].input[0])
		console.log(`with an index of ${key}, and with the text`);
		console.log(activities[key].input[0].parentElement.textContent);
		console.log(`is checked.`);
		console.log("-----------------------------------");
		*/
		
		
		/* console.log(`From DOM, input`);
		console.log($("input[type='checkbox']")[key]);
		console.log(`with an index of ${key}, and with the text`);
		console.log($("input[type='checkbox']")[key].parentElement.textContent);
		console.log(`is checked.`);
		 */
		 
		
		
		//console.log(value.input);
		
		
		 if($(value.input).is(':checked')){
		//if(this.checked){
			console.log("From array of objects, input");
			console.log(activities[key].input[0])
			console.log(`with an index of ${key}, and with the text`);
			console.log(activities[key].input[0].parentElement.textContent);
			console.log(`is checked.`);
			console.log("-----------------------------------");
			console.log(`From DOM, input`);
			console.log($("input[type='checkbox']")[key]);
			console.log(`with an index of ${key}, and with the text`);
			console.log($("input[type='checkbox']")[key].parentElement.textContent);
			console.log(`is checked.`); 
				
				/* console.log(`From DOM, input`);
				console.log($("input").attr('name'));
				//console.log(`with an index of ${key}, and with the text`);
				//console.log($("input[type='checkbox']")[key].parentElement.textContent);
				console.log(`is checked.`);  */
		
				
				//alert(" isChecked!");	
		}
		/* if( ($(activities).eq(1) ).is(':checked')){
				alert("1 isChecked eq1!");
		}  */
		
		/* if ($(value.input).is(':checked') ) {//if an input is checked and the day and time of another input does not conflict leave it checked and disable others with same day and time
			
			if ( ( this.value.day && this.value.time)  != ( ( $(value.day).is(':checked') ) && ( $(value.time).is(':checked')) ) ){
						alert("1 isChecked conditional!");
				
			}
			
		} */
		
		
		
		
	});
		
	
		
		/* for(var i = 0; i < activities.length; i++){
			if (activities[i].time === "1300-1600") {
				alert("time is 1300 - 1600");
			}
			
		} */
		
		/* $.each(activities) {
		//console.log(value.title + value.day + value.time + value.cost);
		if(activities.input ===  $("input[name='build-tools']") ) ){
			alert("input baby");
		}
	}
	 */




		/* if(activities[1].day === "Tuesday"){
			alert("Tuesday baby!");
			}
			 if(activities[1].input === $("input[name='js-frameworks']")){
				alert("Input!");
			}
			console.log(activities[1].title);
			console.log(activities[1].input);*/

		}); 
});