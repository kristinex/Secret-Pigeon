	var musicName=""
	function storeButtonValue(buttonName){
		/*
		When any of the button in the fake call page is clicked, this function would store the value of the button. So when the calling page loads would have a value to test to see which music to play.
		*/
		musicName=buttonName;
		console.log(musicName);
	}//close function storeButtonValue

	function playTheMusic(){
		/*
		This function would see what is the value of the variable musicName so it would know which music to play. Will be placed in the page calling onload.
		*/
		console.log(musicName);
		console.log("checking...");
		if (musicName=="ATT"){
			console.log("Suceed");
		}
		else if (musicName=="Breeze"){
		
		}
		else if (musicName=="Firefly"){
		
		}
		else if (musicName=="JellyBean"){
		
		}
		else if (musicName=="Lumia"){
		
		}
		else if (musicName=="OverTheHorizon"){
		
		}
		else if (musicName=="Themos"){
		
		}
		else if (musicName=="T-mobile"){
		
		}
		else if (musicName=="Verizon"){
		
		}
	}//close function playTheMusic
	
	function storeMessageValue(buttonName){
		messageName=buttonName;
		console.log(messageName);
	}