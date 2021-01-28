/*typedJs*/
var typed = new Typed('.typed1',{
	strings:[
	'Khant Phone.',
	'Web developer.',
	'Freelancer.'
	],
	typeSpeed:50,
	backSpeed:50,
	loop:true
})
/*toTop*/
 const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll",() => {

    if (window.pageYOffset > 100) {      
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
     }
    });
/*sweetalertJs*/
		function myFunction() {			
		swal("", "Your Email has been sent!", "success");
			}
/*AOS*/
	    AOS.init({	    	
	    	duration:1400,
	    	delay:250,
	    	offset:100	    	  		    	
	    });
/*counterJs*/
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

/*checking email is null or not*/
		$('#submit').click(function(){
			var email = $('#email').val();
			var subject = $('#subject').val();
			if (email == '' || subject == '') {
				swal("", "Please enter missing fields!", "error");

			}
			else{
				swal("","Your email has been sent!","success");
			}
		})
/*swiperJs*/
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      loop:true,
       autoplay: {
        delay:2000 ,
        disableOnInteraction: false,

      },
    });
/*navbar-toggler-icon change*/
  $(document).ready(function () {
  	$bars = $('.fa-bars');
  	$times = $('.fa-times');

  	$bars.click(function(){  		
  		$bars.hide();
  		$times.show();
  	});
  	$times.click(function(){
  		$times.hide();
  		$bars.show();
  	})
  })
/*changing main colors*/
		$("#change-1").on('click', function() {  
	  		$(".text-fav").css("--custom-text", "#9457eb");
	  		$(".bg-fav").css("--custom-bg","#9457eb");
	  		
		});
		$("#change-2").on('click', function() {  
	  		$(".text-fav").css("--custom-text", "#48C9B0");
	  		$(".bg-fav").css("--custom-bg","#48C9B0");
	  		swal("", "Successfully changed to GREEN!", "success");
		});
		$("#change-3").on('click', function() {  
	  		$(".text-fav").css("--custom-text", "#ffd859");
	  		$(".bg-fav").css("--custom-bg","#ffd859");
	  		swal("", "Successfully changed to YELLOW!", "success");
		});
		$("#change-4").on('click', function() {  
	  		$(".text-fav").css("--custom-text", "#f3a6c0");
	  		$(".bg-fav").css("--custom-bg","#f3a6c0");
	  		swal("", "Successfully changed to PINK!", "success");
		});