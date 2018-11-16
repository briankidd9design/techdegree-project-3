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
	
	//My goals for the "Activities Section" is as follows
	
	//1.loop through fieldset inputs with .activities class
	//2. be able to compare the day and times of each activity as opposed to just disabling certain checkboxes when a specific checkbox
	//with conflicting time is checked. This way the code will work even if activities are added to the form. 
	//var totalCost = 0;	
	var totalCost = 0;//this is in the global scope. Is there a way to make it work in the function below?
	 $(".activities input[type=checkbox]").on('change', function(e){ 
				
			let inputLength = $('input[type="checkbox"]:checked').length;
			console.log("input Length is");
			console.log(inputLength);
			
			let checkboxText = ( $(e.target).parent().text() );
			
			console.log("This is the checkbox text index of the $");
			/*Activity Day*/
			/*This function takes in the whole description of the activity and finds the day of the week*/
			let getActivityDay = function(checkboxText){
				
				let daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				
				for (let i = 0; i < daysOfWeek.length; i++){
					
					console.log (checkboxText);
					
				//	console.log(daysOfWeek[i]);
					
					if(checkboxText.includes(daysOfWeek[i])){
						console.log("This is the Day of the week of the checked activity");
						console.log(daysOfWeek[i]);
						let dayOfWeekReturn = daysOfWeek[i];
						return dayOfWeekReturn;	
					}
				
				}
			}
			

			
			var activityDay = getActivityDay(checkboxText);
			console.log("This is the retun of the activity day");
			console.log(activityDay);
			
			
			/*Activity Time*/
			let timeSearch = /\b((?:1[0-2]|[1-9])[ap]m)-((?:1[0-2]|[1-9])[ap]m)/g;
			let activityTime = checkboxText.match(timeSearch);
			
			/*Activity Cost*/
			let dollarSign = (checkboxText.indexOf("$") );
			//console.log(dollarSign);
			let activityCost = parseInt(checkboxText.slice( (dollarSign+1), (dollarSign+4) ) );
			console.log("Cost of checked activity");
			console.log(activityCost);
			
	$('.activities').append('<div id="activitiesTotal"></div>');
			var updateCost = function (activityCost) {
				totalCost += activityCost;
				document.getElementById("activitiesTotal").innerHTML = "Total: $" + totalCost;
			};  
		
			if( $(this).is( ":checked") ){
				updateCost(activityCost);
					//console.log( $(e.target).parent().text() );
					console.log("checkbox text inside the getCheckBoxText");
					console.log(checkboxText);
					console.log("$this is checked");
					console.log($(this) + "is selected");
					console.log("Activity time of the CHECKED activity is");
					console.log(activityTime); 
				}
				else{
					updateCost(-activityCost)
				}
		/*looping over the acitivites */
		$(".activities input[type=checkbox]").each(function(index, value) {
				
	
			let checkboxTextCheck = $(value).parent().text();
					//	let specificEventDay = checkboxTextCheck.slice ( (emDash + 2), (emDash+6) );
			let specificEventTime = checkboxTextCheck.match(timeSearch)
					
				console.log("checked event time is equal to");
				console.log(activityTime);
						
			let getActivityDays = function(checkboxTextCheck){
					
			let daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
					
			for (let i = 0; i < daysOfWeek.length; i++){
						
				console.log (checkboxTextCheck);
						
					//	console.log(daysOfWeek[i]);
						
				if(checkboxTextCheck.includes(daysOfWeek[i])){
				console.log("The day of week for this activity is");
				console.log(daysOfWeek[i]);
				let dayOfWeekReturn = daysOfWeek[i];
				return dayOfWeekReturn;	
			}
					
		}
	}
					
					let activityDays = getActivityDays(checkboxTextCheck);
					console.log(activityDays);
				
					
					
					console.log ("checkboxTextCheck is");
					console.log(checkboxTextCheck);
					/* console.log ("Specific event day is equal to ");
					console.log (specificEventDay); */
					console.log("specific Event time is equal to");
					console.log(specificEventTime);
					
					if ( $(this).is(":checked") && checkboxTextCheck === checkboxText){
						console.log(checkboxText + "is euqal to " + checkboxText);
					}
					
					
					if (specificEventTime != null ) {
					
						if($(this).is(":checked") && JSON.stringify(activityTime)===JSON.stringify(specificEventTime)){
							alert("times are equal!");
							console.log("These Event Times are equal");
							console.log(JSON.stringify(activityTime) + "is equal to" + JSON.stringify(specificEventTime) );
						//	$(specificEventTime.child().input.attr('disabled', "") );
							//$(spcificEvent )
							
						}
					}
				
				
				});
				
					
	 });
	
	//let  totalCost = 0;
	
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

	

});