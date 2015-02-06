	var emergencyMessageText = "";
	var emergencyContact1Name = "";
	var emergencyContact1Number = "";
	var emergencyContact2Name = "";
	var emergencyContact2Number = "";
	var emergenyLocationEnabled = false;

	var scenario1MessageText = "";
	var scenario1Contact1Name = "";
	var scenario1Contact1Number = "";
	var scenario1Contact2Name = "";
	var scenario1Contact2Number = "";
	var scenario1LocationEnabled = false;

	var scenario2MessageText = "";
	var scenario2Contact1Name = "";
	var scenario2Contact1Number = "";
	var scenario2Contact2Name = "";
	var scenario2Contact2Number = "";
	var scenario2LocationEnabled = false;

	var scenarioDisplayName = "";
	var scenarioName = "";
	function storeMessage(){
		console.log(scenarioName);
		/*test which scenario is the user setting and store the values under the appropriate variables.*/
		if (scenarioName == "emergency"){
			emergencyMessageText = $("#message").val();
			emergencyContact1Name = $("#contactName1").val();
			emergencyContact1Number = $("#contactNumber1").val();
			emergencyContact2Name = $("#contactName2").val();
			emergencyContact2Number = $("#contactNumber2").val();						
		}
		else if (scenarioName == "scenario1"){
			scenario1MessageText = $("#message").val();
			scenario1Contact1Name = $("#contactName1").val();
			scenario1Contact1Number = $("#contactNumber1").val();
			scenario1Contact2Name = $("#contactName2").val();
			scenario1Contact2Number = $("#contactNumber2").val();		
		}
		else if (scenarioName == "scenario2"){
			scenario2MessageText = $("#message").val();
			scenario2Contact1Name = $("#contactName1").val();
			scenario2Contact1Number = $("#contactNumber1").val();
			scenario2Contact2Name = $("#contactName2").val();
			scenario2Contact2Number = $("#contactNumber2").val();	
		}
		/*clear the input fields*/
		$("#contactName1").val("");
		$("#contactName2").val("");
		$("#contactNumber1").val("");
		$("#contactNumber2").val("");
		$("#message").val("");
	}
	function storeMessageValue(buttonName){
		scenarioDisplayName=buttonName;
	}
	
	function changeDisplay(){
		/*change the display in the popUp page*/
		var sendTo = "Send to ";
		
		if (scenarioDisplayName == "emergency"){
			if (emergencyMessageText == "" || emergencyContact1Name == "" || emergencyContact1Number == "" || emergencyContact2Name == "" || emergencyContact2Number == ""){
				$("#messageDisplay").text("You do not have the message setted up for this scenario. Please go to the settings page to change your settings.");
				
			}
			else {
				$("#messageDisplay").text(emergencyMessageText);
				$("#contact1Button").text(sendTo.concat(emergencyContact1Name));
				$("#contact2Button").text(sendTo.concat(emergencyContact2Name));
			}

			
		}
		else if (scenarioDisplayName == "scenario1"){
			$("#messageDisplay").text(scenario1MessageText);
			$("#contact1Button").text(sendTo.concat(scenario1Contact1Name));
			$("#contact2Button").text(sendTo.concat(scenario1Contact2Name));
		}
		else if (scenarioDisplayName == "scenario2"){
			$("#messageDisplay").text(scenario2MessageText);
			$("#contact1Button").text(sendTo.concat(scenario2Contact1Name));
			$("#contact2Button").text(sendTo.concat(scenario2Contact2Name));
		}
	}
	
	function storeWhichScenario(buttonName){
		/*store which scenario the user is testing, also manipulate some page elements so it displays the previous information*/
		scenarioName = buttonName;
		$("#scenarioSetupPageTitle").text(scenarioName);
		if (scenarioName == "emergency"){
			$("message").val(emergencyMessageText);
			$("#contactName1").val(emergencyContact1Name);
			$("#contactNumber1").val(emergencyContact1Number);
			$("#contactName2").val(emergencyContact2Name);
			$("#contactNumber2").val(emergencyContact2Number);			
		}
		else if (scenarioName == "scenario1"){
			$("message").val(scenario1MessageText);
			$("#contactName1").val(scenario1Contact1Name);
			$("#contactNumber1").val(scenario1Contact1Number);
			$("#contactName2").val(scenario1Contact2Name);
			$("#contactNumber2").val(scenario1Contact2Number);	
		}
		else if (scenarioName == "scenario2"){
			$("message").val(scenario2MessageText);
			$("#contactName1").val(scenario2Contact1Name);
			$("#contactNumber1").val(scenario2Contact1Number);
			$("#contactName2").val(scenario2Contact2Name);
			$("#contactNumber2").val(scenario2Contact2Number);	
		}
	}
		

