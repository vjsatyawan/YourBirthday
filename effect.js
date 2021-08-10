// confetti button
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var classname = document.getElementsByClassName("confetti-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
  
}

//confetti button end


$(window).load(function(){
	$('.loading').fadeOut('slow');
	$('.container').fadeIn('slow');
});
$('document').ready(function(){


		var vw;
		$(window).resize(function(){
			vw = $(window).width()/2;
			var fact = vw/4;

			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			$('#b11').animate({top:200, left: vw-(4*fact)},3500);
			$('#b22').animate({top:200, left: vw-(3*fact)},3500);
			$('#b33').animate({top:200, left: vw-(2*fact)},3500);
			$('#b44').animate({top:200, left: vw-(fact)},3500);
			$('#b55').animate({top:200, left: vw},3500);
			$('#b66').animate({top:200, left: vw+(1*fact)},3500);
			$('#b77').animate({top:200, left: vw+(2*fact)},3500);
			$('#b88').animate({top:200, left: vw+(3*fact)},3500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(2500).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		// $('body').css('backgroud-color','#FFF');
		// $('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
        $('#my-canvas').addClass('my-canvas');
		var confettiSettings = { target: 'my-canvas', clock:15};
		var confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();

		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(3500).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 250*Math.random();
		var randtop = 400*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},12000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		
		$(this).fadeOut('slow').delay(7000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
	var fact = vw/4;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		

			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			$('#b11').animate({top:200, left: vw-(4*fact)},3500);
			$('#b22').animate({top:200, left: vw-(3*fact)},3500);
			$('#b33').animate({top:200, left: vw-(2*fact)},3500);
			$('#b44').animate({top:200, left: vw-(fact)},3500);
			$('#b55').animate({top:200, left: vw},3500);
			$('#b66').animate({top:200, left: vw+(1*fact)},3500);
			$('#b77').animate({top:200, left: vw+(2*fact)},3500);
			$('#b88').animate({top:200, left: vw+(3*fact)},3500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(2500).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('slow').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(1500).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1500);
			if(i==50){
				$("p:nth-child(48)").fadeOut('slow').promise().done(function () {
							$('.message').fadeOut('slow').promise().done(function(){
								$('.cake').fadeIn('slow');
							});

					
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});

