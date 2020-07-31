/*
	Meyers Construction Script
	
	Author: PAtrick Callahan
	Date: 07/26/2020
	Filename:  galleryScript.js
	Supporting files: None
*/

var imageLinks = document.getElementById("container").getElementsByTagName("a");
var mainImage = document.getElementById("mainImage");

function setListeners(imageLinks){
	for(var i = 0; i < imageLinks.length; i++){
		imageLinks[i].addEventListener("click", showImageOnClick);
	}
}

function showImageOnClick(e){
	mainImage.src = e.target.src;
}

setListeners(imageLinks);