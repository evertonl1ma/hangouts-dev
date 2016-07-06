 var video= document.querySelectorAll(".video");
	 	 var close= document.querySelector(".close");
	 	 var caption= document.querySelector(".caption");

	 	 for(var i= 0; i < video.length; i++) {
	 	 	video[i].addEventListener("click", function(event) {
	 	 		event.preventDefault();
	 	 		document.querySelector(".modal-video").src= this.href + "?autoplay=1";
	 	 		document.querySelector(".modal").style.display= "block";
	 	 		caption.innerHTML= this.children[1].innerHTML + " - " + this.children[2].innerHTML;
	 	 	})
	 	 }

close.addEventListener("click", function() {
	 document.querySelector(".modal").style.display= "none";
})