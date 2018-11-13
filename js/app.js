/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/
alert("Hello");
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
	
	//My goals for the "Activities Section" is as follows
	
	//1.loop through fieldset inputs with .activities class
	//2. be able to compare the day and times of each activity as opposed to just disabling certain checkboxes when a specific checkbox
	//with conflicting time is checked. This way the code will work even if activities are added to the form. 
	

		/* $(".activities input[type=checkbox]").each(function() {
				console.log("the log for $this");
				
				console.log($(this) );
				
				console.log("The log for this");
				
				console.log(this);
				//console.log("checkbox checked!");
		 $(this).on('change', function(e){ 

				if( $(this).is( ":checked") ){
					console.log( $(e.target).parent().text() );
					console.log("$this is checked");
					console.log($(this) + "is selected");
				}
				if( ($(this).parent().text() )
				
				if ( (this).checked ){
					console.log("this is checked")
					console.log( ( (this) + "is selected") );
				}
				
			});
			
		 });  */
	/* */
	
	const getCheckboxText = function () {
	
	 $(".activities input[type=checkbox]").on('change', function(e){ 
				
				let checkboxText = ( $(e.target).parent().text() );
				console.log("This is the checkbox text index of the $");
			let dollarSign = (checkboxText.indexOf("$") );
				console.log(dollarSign);
			let activityCost = checkboxText.slice( (dollarSign+1), (dollarSign+4) )
			console.log("Cost of checked activity");
			console.log(activityCost);
				
	 
				if( $(this).is( ":checked") ){
					//console.log( $(e.target).parent().text() );
					console.log("checkbox text inside the getCheckBoxText");
					console.log(checkboxText);
					console.log("$this is checked");
					console.log($(this) + "is selected");
					checkboxLoop(checkboxText);
				}
				
/* 				if ( (this).checked ){
					console.log("this is checked")
					console.log( ( (this) + "is selected") );
				} */
		});
	
	}	
		
	const checkboxLoop = function (checkboxTextContent) {
		
		
		$(".activities input[type=checkbox]").each(function(index, value) {
				
				let checkboxTextCheck = $(value).parent().text();
				console.log ("checkboxTextCheck is");
				console.log(checkboxTextCheck);
				
				if ( $(this).is(":checked") && checkboxTextCheck === checkboxTextContent){
					console.log(checkboxTextCheck + "is euqal to " + checkboxTextContent);
				}
				
				
			
				/* console.log("checkboxTextContent is");
				console.log(checkboxTextContent);
			
			let checkboxTextCheck = ( $(".activities input[type=checkbox]").parent().text() );
				console.log ("checkboxTextCheck is");
				console.log(checkboxTextCheck);
				
				if (checkboxTextCheck === checkboxTextContent){
					console.log(checkboxTextCheck + "is euqal to " + checkboxTextContent);
				}
				
				
				console.log("This is inside the loop"); */
				
		
		});
	}
	
	getCheckboxText();
	
	
	
	/* $(".activities input[type=checkbox]").each(function() {
				console.log("the log for $this");
				
				console.log($(this) );
				
				console.log("The log for this");
				
				console.log(this);
				//console.log("checkbox checked!");
		 $(this).on('change', function(e){ 

				if( $(this).is( ":checked") ){
					console.log( $(e.target).parent().text() );
					console.log("$this is checked");
					console.log($(this) + "is selected");
				}
				//if( ($(this).parent().text() )
				
				if ( (this).checked ){
					console.log("this is checked")
					console.log( ( (this) + "is selected") );
				}
				
			});
			
		 });  */

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
	


//$('.activities').on('change', function() {
	
	let  totalCost = 0;
	
	var jsFrameworks = $("input[name='js-frameworks'");
	var jsLibraries = $("input[name='js-libs']");
	var express = $("input[name='express']");
	var nodeJS = $("input[name='node']");

	//var disabled = $('<style> .activities label{color: grey; text-decoration: line-through</style>'});
	//let disabled = $('<style>.disabled{color:grey;}</style>');
	//let disabled = $(this).css("color": "grey");

	/* let disabled = $('<style> .disabled{color:grey;}</style>'); */
	
  	// Add total cost of activities

/* 	$('.activities').append('<div id="activitiesTotal"></div>');

	var updateCost = function (cost) {
		totalCost += cost;
		document.getElementById("activitiesTotal").innerHTML = "Total: $" + totalCost;
	};  

	$("input[name='all']").on('change', function () {
		if ($(this).is(":checked")) {
			updateCost(200);
		} else {
			updateCost(-200);
		}
	});

	jsFrameworks.on('change', function () {
		if ($(this).is(":checked")) {
			express.prop("disabled", true);
			express.parent().addClass("disabled");
			updateCost(100);
		} else {
			express.prop("disabled", false);
			express.parent().removeClass("disabled");
			updateCost(-100);
		}
	});

	jsLibraries.on ('change', function () {
		if ($(this).is(":checked")) {
			nodeJS.prop("disabled", true);
			nodeJS.parent().addClass("disabled");
			updateCost(100);
		} else {
			nodeJS.prop("disabled", false);
			nodeJS.parent().removeClass("disabled");
			updateCost(-100);
		}
	});

	express.on('change',function () {
		if ($(this).is(":checked")) {
			jsFrameworks.prop("disabled", true);
			jsFrameworks.parent().addClass("disabled");
			updateCost(100);
		} else {
			jsFrameworks.prop("disabled", false);
			jsFrameworks.parent().removeClass("disabled");
			updateCost(-100);
		}
	});

	nodeJS.on('change',function () {
		if ($(this).is(":checked")) {
			jsLibraries.prop("disabled", true);
			jsLibraries.parent().addClass("disabled");
			updateCost(100);
		} else {
			jsLibraries.prop("disabled", false);
			jsLibraries.parent().removeClass("disabled");
			updateCost(-100);
		}
	});

	$("input[name='build-tools']").on('change', function () {
		if ($(this).is(":checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});

	$("input[name='npm']").on('change', function () {
		if ($(this).prop("checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});
 */

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*    var activities = [

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
			input :  $("input[name='npm']"),
			cost: 100
				
		}
	]; */  
	
	/* var mainConference = 	{
			title : "Main Conference",
			day : "",
			time : "",
			input : $("input[name='all']"),//if one of the inputs is checked, go through all the other inputs in the array to check for day and time conflicts
			cost: 200
		} */

	
	

	
	// $.each(activities, function(key, value) { 
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
		
		
		/*  if($(value.input).is(':checked')){
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
				 */
				/* console.log(`From DOM, input`);
				console.log($("input").attr('name'));
				//console.log(`with an index of ${key}, and with the text`);
				//console.log($("input[type='checkbox']")[key].parentElement.textContent);
				console.log(`is checked.`);  */
		
				
				//alert(" isChecked!");	
		//}
		/* if( ($(activities).eq(1) ).is(':checked')){
				alert("1 isChecked eq1!");
		}  */
		
		/* if ($(value.input).is(':checked') ) {//if an input is checked and the day and time of another input does not conflict leave it checked and disable others with same day and time
			
			if ( ( this.value.day && this.value.time)  != ( ( $(value.day).is(':checked') ) && ( $(value.time).is(':checked')) ) ){
						alert("1 isChecked conditional!");
				
			}
			
		} */
		
		
		
		
//	});
		
	
		
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

		//}); 
});