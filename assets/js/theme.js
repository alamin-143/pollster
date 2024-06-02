
// back to top js
let btn = document.querySelector(".scroll-to-top");

// Function to handle showing or hiding the button based on scroll position
function toggleScrollToTopButton() {
    if (window.scrollY > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
}

// Event listener to toggle the button visibility on scroll
window.addEventListener("scroll", toggleScrollToTopButton);

// Event listener to handle smooth scrolling to the top when the button is clicked
btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Initial check to show or hide the button based on scroll position
toggleScrollToTopButton();



 // Function to toggle mobile menu
 function toggleMobileMenu() {
  var mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  var mobileMenuMain = document.querySelector('.mobile-menu-main');

  mobileMenuOverlay.classList.toggle('active');
  mobileMenuMain.classList.toggle('active');
}

// Function to close mobile menu
function closeMobileMenu() {
  var mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  var mobileMenuMain = document.querySelector('.mobile-menu-main');

  mobileMenuOverlay.classList.remove('active');
  mobileMenuMain.classList.remove('active');
}

// Event listener for menu icon click
document.querySelector('.bars').addEventListener('click', function() {
  toggleMobileMenu();
});

// Event listener for close button and overlay click
document.querySelectorAll('.close-mobile-menu, .mobile-menu-overlay').forEach(function(element) {
  element.addEventListener('click', function() {
      closeMobileMenu();
  });
});

// Event listener for submenu click
document.querySelectorAll('.sub-mobile-menu a').forEach(function(element) {
  element.addEventListener('click', function(event) {
      var submenu = event.target.nextElementSibling;
      submenu.style.display = (submenu.style.display === 'none' || submenu.style.display === '') ? 'block' : 'none';
      event.target.querySelector('.right').classList.toggle('fa-caret-up');
      event.target.querySelector('.right').classList.toggle('fa-caret-down');
  });
});


document.addEventListener("DOMContentLoaded", function() {
    var selectElements = document.querySelectorAll('select');
    selectElements.forEach(function(select) {
        new NiceSelect(select);
    });
});


// ;(function($) {
//     "use strict";

//     // sticky header js
//     window.onscroll = function () {
//         var header = document.querySelector("header");
//         if (window.pageYOffset > 0) {
//             header.classList.add("sticky");
//         } else {
//             header.classList.remove("sticky");
//         }
//     };

//     // mobile menu js
//     $('.mobile-menu-open').on('click', function(){
//         $('.overlay, .main-menu-wrapper').addClass('active');
//     });
//     $('.mobile-menu-close, .overlay').on('click', function(){
//         $('.overlay, .main-menu-wrapper').removeClass('active');
//     });

//       //data backgroud image js
//     $(document).ready(function () {
//         $("[data-background]").each(function() {
//             $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
//         });
//     })

//     // partner section slider js
//     var swiper = new Swiper(".partner-slider", {
//         slidesPerView: 1.5,
//         spaceBetween: 20,
//         speed: 3000,
//         loop: true,
//         autoplay: {
//           delay: 'auto',
//           disableOnInteraction: false,
//         },
//         breakpoints: {
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 6,
//           spaceBetween: 30,
//         },
//       },
//     });

//       var swiper1 = new Swiper(".most-wanted-location-slider", {
//         slidesPerView: 4,
//         speed: 3000,
//         loop: true,
//         autoplay: {
//           delay: 'auto',
//           disableOnInteraction: false,
//         },
//         grid: {
//           rows: 2,
//         },
//         breakpoints: {
//         0: {
//           slidesPerView: 1.5,
//           spaceBetween: 20,
//           centered: true,
//              grid: {
//               rows: false,
//           },
//           speed: 3000,
//           loop: true,
//           autoplay: {
//             delay: 'auto',
//             disableOnInteraction: false,
//           },
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 30,
//           centered: true,
//              grid: {
//               rows: false,
//           },
//           speed: 3000,
//           loop: true,
//           autoplay: {
//             delay: 'auto',
//             disableOnInteraction: false,
//           },
//         },
//         1024: {
//           slidesPerView: 4,
//         },
//       },
//       });

//       var swiper1 = new Swiper(".lifestyle-slider", {
//         slidesPerView: 3,
//         speed: 3000,
//         loop: true,
//         autoplay: {
//           delay: 'auto',
//           disableOnInteraction: false,
//         },
//         grid: {
//           rows: 2,
//         },
//         breakpoints: {
//         0: {
//           slidesPerView: 1.1,
//           spaceBetween: 20,
//           centered: true,
//              grid: {
//               rows: false,
//           },
//           speed: 3000,
//           loop: true,
//           autoplay: {
//             delay: 'auto',
//             disableOnInteraction: false,
//           },
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//           centered: true,
//           grid: {
//             rows: false,
//           },
//           speed: 3000,
//           loop: true,
//           autoplay: {
//             delay: 'auto',
//             disableOnInteraction: false,
//           },
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       },
//       });
//       var swiper1 = new Swiper(".related-location-slider", {
//         slidesPerView: 2,
//         speed: 3000,
//         loop: false,
//         autoplay: {
//           delay: 'auto',
//           disableOnInteraction: false,
//         },
//         grid: {
//           rows: 3,
// 		      fill: 'row'
//         },

//         breakpoints: {
//         0: {
//           slidesPerView: 1.1,
//           spaceBetween: 20,
//           centered: true,
//             loop: true,
//              grid: {
//               rows: false,
//           },
//           speed: 3000,
//           loop: true,
//           autoplay: {
//             delay: 'auto',
//             disableOnInteraction: false,
//           },
//         },
//         768: {
//           slidesPerView: 1.6,
//           spaceBetween: 30,
//           centered: true,
//           grid: {
//             rows: false,
//           },
//           speed: 3000,
//           loop: true,
//           autoplay: {
//             delay: 'auto',
//             disableOnInteraction: false,
//           },
//         },
//         1024: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//       },
//       });

//       var swiper3 = new Swiper(".gellery-slider", {
//       lazy: true,
//       slidesPerView: 1,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });

//     // number
//     var buttonPlus  = $(".qty-btn-plus");
//     var buttonMinus = $(".qty-btn-minus");

//     var incrementPlus = buttonPlus.click(function() {
//       var $n = $(this)
//       .parent(".qty-container")
//       .find(".input-qty");
//       $n.val(Number($n.val())+1 );
//     });

//     var incrementMinus = buttonMinus.click(function() {
//       var $n = $(this)
//       .parent(".qty-container")
//       .find(".input-qty");
//       var amount = Number($n.val());
//       if (amount > 0) {
//         $n.val(amount-1);
//       }
//     });

// })(jQuery);
