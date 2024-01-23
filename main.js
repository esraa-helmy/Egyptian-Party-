// ^ Sidebar ---------------------------------------------------------------
$('.closeBtn').on('click',function(){
    $('#sideBar').animate({width:'0'});
    $('#home-content').animate({marginLeft:'0'},500)
})
$('.openNav').on('click',function(){
    if($(window).width() < 767){
        $('#sideBar').animate({width:'30%'});
    $('#home-content').animate({marginLeft:'30%'},500)
    }else{
        $('#sideBar').animate({width:'18%'});
        $('#home-content').animate({marginLeft:'18%'},500)

    }
    // $('#sideBar').animate({width:'18%'});
    //     $('#home-content').animate({marginLeft:'18%'},500)
   
})
// &------------------------------SlidDown Section--------------------------------
$('.toggle').on('click',function(){
    console.log("esraa");
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})


// ~----------------------Counter Section---------------------------------------

window.onload = function() {
   
    countDown("10 Feb 2024 00:00:00");
  }

  function countDown(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);
    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDown(countTo); }, 1000);
  }

//*----------------------Contact Section--------------------------------------------

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});

// ^ -----------------------scroll--------------------------------
$(document).ready(function() {
    $('#sideBar a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },1000 );
      }
    });
  });
