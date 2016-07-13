 (function(){

 	'use strict';

	 var video = document.querySelectorAll(".video"),
			 close = document.querySelector(".close"),
			 caption = document.querySelector(".caption"),
			 modalVideo = document.querySelector(".modal-video"),
			 modal = document.querySelector(".modal");


	 	 for(var i= 0; i < video.length; i++) {
	 	 	video[i].addEventListener("click", function(event) {
	 	 		event.preventDefault();
	 	 		modalVideo.src= this.href + "?autoplay=1";
	 	 		modal.style.display= "block";
	 	 		caption.innerHTML= this.children[1].innerHTML + " - " + this.children[2].innerHTML;
	 	 	})
	 	 }

	close.addEventListener("click", function() {
		 modal.style.display= "none";
		 modalVideo.src= "";
	})

})();