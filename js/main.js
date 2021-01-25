AOS.init({
  duration: 800,
  easing: 'slide'
});

$(window).stellar({
  responsive: true,
  parallaxBackgrounds: true,
  parallaxElements: true,
  horizontalScrolling: false,
  hideDistantElements: false,
  scrollProperty: 'scroll'
});

var loader = function() {
  setTimeout(function() { 
    if($('#ag-loader').length > 0) {
      $('#ag-loader').removeClass('show');
    }
  }, 1);
};
loader();
 

var scrollWindow = function() {
  $(window).scroll(function(){
    var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ag_navbar'),
        sd = $('.js-scroll-wrap');

    if (st > 150) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');	
      }
    } 
    if (st < 150) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 350 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake');	
      }
      
      if(sd.length > 0) {
        sd.addClass('sleep');
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
      if(sd.length > 0) {
        sd.removeClass('sleep');
      }
    }
  });
};
scrollWindow();

var OnePageNav = function() {
  $(".smoothscroll[href^='#'], #ag-nav ul li a[href^='#']").on('click', function(e) {
     e.preventDefault();

     var hash = this.hash,
         navToggler = $('.navbar-toggler');
     $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, 'easeInOutExpo', function(){
      window.location.hash = hash;
    });


    if ( navToggler.is(':visible') ) {
      navToggler.click();
    }
  });
  $('body').on('activate.bs.scrollspy', function () {
    console.log('nice');
  })
};
OnePageNav();

var siteCarousel = function () {
    if ( $('.carousel-slider-10').length > 0 ) {
        $('.carousel-slider-10').owlCarousel({
        center: false,
        items: 1,
        loop: true,
            stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: true,
        nav: true,
        responsive:{
        600:{
            margin: 20,
            nav: true,
          items: 2
        },
        1000:{
            margin: 20,
            stagePadding: 0,
            nav: true,
          items: 2
        }
        }
        });

        $('.custom-next').click(function(e) {
            e.preventDefault();
            $('.carousel-slider-10').trigger('next.owl.carousel');
        })
        $('.custom-prev').click(function(e) {
            e.preventDefault();
            $('.carousel-slider-10').trigger('prev.owl.carousel');
        })

        
    }

    $('.slide-one-item').owlCarousel({
    center: false,
    items: 1,
    loop: true,
        stagePadding: 0,
    margin: 0,
    smartSpeed: 1500,
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    nav: true,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });

  if ( $('.owl-all').length > 0 ) {
        $('.owl-all').owlCarousel({
        center: false,
        items: 1,
        loop: false,
            stagePadding: 0,
        margin: 0,
        autoplay: false,
        nav: false,
        dots: true,
        touchDrag: true,
          mouseDrag: true,
          smartSpeed: 1000,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
        768:{
            margin: 30,
            nav: false,
            responsiveRefreshRate: 10,
          items: 1
        },
        992:{
            margin: 30,
            stagePadding: 0,
            nav: false,
            responsiveRefreshRate: 10,
            touchDrag: false,
                  mouseDrag: false,
          items: 3
        },
        1200:{
            margin: 30,
            stagePadding: 0,
            nav: false,
            responsiveRefreshRate: 10,
            touchDrag: false,
                  mouseDrag: false,
          items: 3
        }
        }
        });
    }
    
};
siteCarousel();

$('.carousel-testimonial').owlCarousel({
  center: true,
  loop: true,
  items:1,
  margin: 30,
  stagePadding: 0,
  nav: false,
  navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
  responsive:{
    0:{
      items: 1
    },
    600:{
      items: 2
    },
    1000:{
      items: 3
    }
  }
});

var counter = function() {
		
  $('#section-counter, .hero-wrap, .ag-counter').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('ag-animate') ) {

      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
      $('.number').each(function(){
        var $this = $(this),
          num = $this.data('number');
          console.log(num);
        $this.animateNumber(
          {
            number: num,
            numberStep: comma_separator_number_step
          }, 7000
        );
      });
      
    }

  } , { offset: '95%' } );

}
counter();

var contentWayPoint = function() {
  var i = 0;
  $('.ag-animate').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('ag-animated') ) {
      
      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function(){

        $('body .ag-animate.item-animate').each(function(k){
          var el = $(this);
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('fadeIn ag-animated');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft ag-animated');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight ag-animated');
            } else {
              el.addClass('fadeInUp ag-animated');
            }
            el.removeClass('item-animate');
          },  k * 50, 'easeInOutExpo' );
        });
        
      }, 100);
      
    }

  } , { offset: '95%' } );
};
contentWayPoint();

Array.prototype.forEach.call(document.querySelectorAll)('.ag-parallax'), function(elem) {
  elem.style.backgroundImage = 'url('+elem.getAttribute('data-parallax-image')+')';
};

var siteDatePicker = function() {

  if ( $('.datepicker').length > 0 ) {
    format: 'mm/dd/yyyy',
    
    $('.datepicker').datepicker();
  }

};
siteDatePicker();

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
