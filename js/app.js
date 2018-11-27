/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/
$(document).ready(function() {
	$('input[type=checkbox]').prop('checked', false); //This code is for IE11 because refreshing withought it will not clear checkboxes
	//focus on Name field
	$("#name").focus();
	//Job Role Section
	//Hide otherTitle Id unless the user selects an other job title
	$("#otherTitle").hide();
	$("#title").change(function() {
		if ($("#title option:selected").val() === "other") {
			$("#otherTitle").show();
		} else {
			$("#otherTitle").hide();
		}
	});
	/*hide colors label and t-shirt select menu until t-shirt disign is chosen*/
	$("#colors-js-puns").hide();
	$("#design").on("change", function() {
		if ($(this).val() === "js puns" || $(this).val() === "heart js") {
			$("#colors-js-puns").show();
		} else {
			$("#colors-js-puns").hide();
		}
	});
	//T-Shirt Info Section
	function hideOption(number) {
		$('#colors-js-puns select option').eq(number).hide();
	}

	function showOption(number) {
		$('#colors-js-puns select option').eq(number).show();
	}
	$("#design").change(function() {
		if ($("#design option:selected").val() === "js puns") {
			$('#colors-js-puns select option')[0].selected = true;
			hideOption(3);
			hideOption(4);
			hideOption(5);
			showOption(0);
			showOption(1);
			showOption(2);
		} else if ($("#design option:selected").val() === "heart js") {
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
	//My goals for the "Activities Section" is as follows
	//1.loop through fieldset inputs with .activities class
	//2. be able to compare the day and times of each activity as opposed to just disabling certain checkboxes when a specific checkbox
	//with conflicting time is checked. This way the code will work even if activities are added to the HTML form. 	
	var totalCost = 0; //this is in the global scope. Is there a way to make it work in the function below?
	$(".activities input[type=checkbox]").on('change', function(e) {
		let checkboxText = ($(e.target).parent().text());
		/*Activity Day*/
		/*This function takes in the whole description of the activity and finds the day of the week*/
		let getActivityDay = function(checkboxText) {
			let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			for (let i = 0; i < daysOfWeek.length; i++) {
				if (checkboxText.indexOf(daysOfWeek[i]) >= 0) { //I originally used .includes but it is not supported by IE11
					let dayOfWeekReturn = daysOfWeek[i];
					return dayOfWeekReturn;
				}
			}
		}
		var activityDay = getActivityDay(checkboxText);
		/*Activity Time*/
		let timeSearch = /\b((?:1[0-2]|[1-9])[ap]m)-((?:1[0-2]|[1-9])[ap]m)/g;
		let activityTime = checkboxText.match(timeSearch);
		/*Activity Cost*/
		let dollarSign = (checkboxText.indexOf("$"));
		let activityCost = parseInt(checkboxText.slice((dollarSign + 1), (dollarSign + 4)));
		$('.activities').append('<div id="activitiesTotal"></div>');
		var updateCost = function(activityCost) {
			totalCost += activityCost;
			document.getElementById("activitiesTotal").innerHTML = "Total: $" + totalCost;
		};
		if ($(this).is(":checked")) {
			updateCost(activityCost);
		} else {
			updateCost(-activityCost)
		}
		/*looping over the acitivites */
		/*this section is used to count the number of checkboxes checked*/
		let checkboxCheckedCount = 0;
		let checkboxChecked = ($(this).is(":checked"));
		let checkboxCheckedCounter = function(checkboxChecked) {
			if (checkboxChecked) {
				checkboxCheckedCount++;
			}
		}
		let countCheckedBoxes = checkboxCheckedCounter(checkboxChecked);
		/*********************************************************************/
		$(".activities input[type=checkbox]").each(function(index, value) {
			let checkboxTextCheck = $(value).parent().text();
			let specificEventTime = checkboxTextCheck.match(timeSearch)
			let getActivityDays = function(checkboxTextCheck) {
				let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				for (let i = 0; i < daysOfWeek.length; i++) {
					if (checkboxTextCheck.indexOf(daysOfWeek[i]) >= 0) { //I originally used .includes but it is not supported by IE11
						let dayOfWeekReturn = daysOfWeek[i];
						return dayOfWeekReturn;
					}
				}
			}
			let activityDays = getActivityDays(checkboxTextCheck);
			if (checkboxCheckedCount === 1) {
				if (specificEventTime != null && !(checkboxTextCheck === checkboxText)) {
					if (activityDay === activityDays && JSON.stringify(activityTime) === JSON.stringify(specificEventTime)) {
						$(value).attr("disabled", true);
						$(value).parent().addClass("disabled");
					}
				}
			} else {
				if (activityDay === activityDays && JSON.stringify(activityTime) === JSON.stringify(specificEventTime)) {
					$(value).attr("disabled", false);
					$(value).parent().removeClass("disabled");
				}
			}
		});
	});
	/*Payment Info section*/
	/* this codes sets the default display to credit card*/
	let defaultPaymentDisplay = function() {
		if ($("#payment").val() === 'select_method') {
			$("#payment").children().eq(0).hide();
			$("#payment").children().eq(1).attr("selected", true);
			$("#credit-card").show();
			$("#credit-card").next().hide();
			$("#credit-card").next().next().hide();
		}
	}
	/*invoking the desfualPayment Display method to show credit card as the default payment option */
	defaultPaymentDisplay();
	$("#payment").on("change", function() {
		if ($(this).val() === 'select_method') {
			$("#credit-card").hide();
			$("#credit-card").next().hide();
			$("#credit-card").next().next().hide();
		} else if ($(this).val() === 'credit card') {
			$("#credit-card").show();
			$("#credit-card").next().hide();
			$("#credit-card").next().next().hide();
		} else if ($(this).val() === 'paypal') {
			$("#credit-card").hide();
			$("#credit-card").next().show();
			$("#credit-card").next().next().hide();
		} else if ($(this).val() === 'bitcoin') {
			$("#credit-card").hide();
			$("#credit-card").next().hide();
			$("#credit-card").next().next().show();
		}
	});
	/*form validation*/
	const $form = $('form');
	$form.attr('id', 'form');
	$("#form").submit(function(event) {
		let name = $('#name').val();
		let email = $('#mail').val();
		$(".formError").remove();
		if (name.length < 1) {
			$('#name').before('<span class="formError">Name is Required</span>');
			event.preventDefault();
		}
		if (email.length < 1) {
			$('#mail').before('<span class="formError">email is required</span>');
			event.preventDefault();
		}
		if (!($(".activities input[type=checkbox]")).is(":checked")) {
			$(".activities legend").before('<span class="formError">You must choose one acitivity</span>');
			event.preventDefault();
		}
		/*credit card validation*/
		if (($("#payment option:selected").val() === "credit card")) {
			console.log("creditCard");
			let ccInput = $("#cc-num");
			let ccLength = $("#cc-num").val().length;
			let zipInput = $("#zip");
			let zipLength = $("#zip").val().length;
			let cvvInput = $("#cvv");
			let cvvLength = $("#cvv").val().length;
			if (isNaN(ccInput.val()) || (isNaN(zipInput.val())) || (isNaN(cvvInput.val()))) {
				$('#payment').after('<span class="formError">Numbers Only<span>');
				event.preventDefault();
			}
			if ($(cvvInput).val() === "") {
				$('#payment').after('<span class="formError">Missing CVV <span>');
				event.preventDefault();
			}
			if (cvvLength > 0 && cvvLength < 3) {
				$('#payment').after('<span class="formError">Enter 3-digit CVV <span>');
				event.preventDefault();
			}
			if ($(zipInput).val() === "") {
				$('#payment').after('<span class="formError">Missing Zip <span>');
				event.preventDefault();
			}
			if (zipLength > 0 && zipLength < 5) {
				$('#payment').after('<span class="formError">Enter 5-digit zip <span>');
				event.preventDefault();
			}
			if ($(ccInput).val() === "") {
				$('#payment').after('<span class="formError">Missing CC Number <span>');
				event.preventDefault();
			}
			if (ccLength > 0 && ccLength < 13) {
				$('#payment').after('<span class="formError">Length of CC: 13-16 <span>');
				event.preventDefault();
			}
		}
	});
	/*on keyup email validation*/
	$("#mail").on('change keyup', function() {
		$(".formError").remove();
		validateEmail();
	});

	function validateEmail() {
		let $email = $('#mail').val();
		let checkEmailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		let validEmail = $email.match(checkEmailRegExp);
		if (!validEmail) {
			$('#mail').before('<span class="formError">Enter a valid email: example (jon.doe@gmail.com)</span>');
			event.preventDefault();
		}
	}

});