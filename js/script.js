
var typed = new Typed('.typed1',{
	strings:[
	'Khant Phone .',
	'Junior Web developer.',
	'Freelancer.'
	],
	typeSpeed:50,
	backSpeed:50,
	loop:true
})
 const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll",() => {

    if (window.pageYOffset > 100) {      
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
     }
    });
	
function myFunction() {			
swal("", "Your Email has been sent!", "success");
			}

	    AOS.init({	    	
	    	duration:1200,
	    	delay:250,
	    	offset:100
	    	  		    	
	    });
	$(document).ready(function() {


	$('.counter').each(function () {
	$(this).prop('Counter',0).animate({
	Counter: $(this).text()
	}, {
	duration: 15000,
	easing: 'swing',
	step: function (now) {
	$(this).text(Math.ceil(now));
	}
	});
	});

	});
