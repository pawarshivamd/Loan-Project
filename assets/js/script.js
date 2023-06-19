window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
  
    if (window.pageYOffset > 30) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });


  function redirectToLoanDashboard() {
    window.location.href = "https://loan-dashboard.netlify.app";
  }

  function redirectTouplodDocument() {
    window.location.href = "../../uplod document.html";
  }
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var swiper = new Swiper(".mySwiper-2", {
  
        spaceBetween: 30,
        freeMode: true,
  
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
      420: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
      });
  
