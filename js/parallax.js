/* loading */
(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());


$(document).ready(function(){
					var $window = $(window); 
					$('section[data-type="background"]').each(function(){
						var $bgobj = $(this); // assigning the object
					
						$(window).scroll(function() {
							var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
							
							// Put together our final background position
							var coords = '50% '+ yPos + 'px';

							// Move the background
							$bgobj.css({ backgroundPosition: coords });
						}); 
					}); 
				  
				});
				
				/*--------- for nav bar -------*/
				$("#vintage-collection").click(function() {
					var directTo = $('#about').offset();
					if(directTo.top > 2500)
					{
					$('body').stop().animate({ scrollTop: directTo.top }, 3500);
					}else{
						$('body').stop().animate({ scrollTop: directTo.top }, 1500);
					}
				});	
				$("#old-collection").click(function() {
					var directTo = $('#about-next-2').offset();
					if(directTo.top > 2500)
					{
					$('body').stop().animate({ scrollTop: directTo.top }, 3500);
					}else{
						$('body').stop().animate({ scrollTop: directTo.top }, 1500);
					}
				});	
				$("#new-collection").click(function() {
					var directTo = $('#about-next-4').offset();
					if(directTo.top > 2500)
					{
					$('body').stop().animate({ scrollTop: directTo.top }, 3500);
					}else{
						$('body').stop().animate({ scrollTop: directTo.top }, 1500);
					}
				});
				$("#Myhome").click(function() {
					var directTo = $('#home').offset();
					if(directTo.top > 2500)
					{
					$('body').stop().animate({ scrollTop: directTo.top }, 3500);
					}else{
						$('body').stop().animate({ scrollTop: directTo.top }, 1500);
					}
				});