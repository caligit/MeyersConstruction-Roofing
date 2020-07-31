/*
	Meyers Construction Script
	
	Author: PAtrick Callahan
	Date: 07/26/2020
	Filename:  resetScript.js
	Supporting files: None
*/

var inputs = document.getElementsByTagName("input");
var textarea = document.getElementsByTagName("textarea")[0];

function setListener(){
	document.getElementById("reset").addEventListener("click", resetAll);
}

function resetAll(e){
	for(var i = 0; i < inputs.length; i++){
		if(inputs[i].type === "text" || inputs[i].type === "email" || inputs[i].type === "tel"){
			inputs[i].value = "";
		}else if(inputs[i] === "checkbox"){
			inputs[i].checked = false;
		}
	}
	textarea.value = "";
}

setListener();