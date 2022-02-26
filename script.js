$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  /* <script type = "text/JavaScript">
        (function() {
            var dialog = document.getElementbyId('myFirstDialog');
            document.getElementById('show').onclick = function(){
                dialog.show() };
            document.getElementById('hide').onclick = function() {
                dialog.close()};
            }(); 
    </script>
    /*document.getElementById('button').addEventListener('click', function () {
        document.querySelector('.bg-modal').style.display = 'flex'; 
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.bg-modal').style.display = 'none';
    });
    */

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "NTU Undergraduate",
      "Aspiring Software Developer",
      "Tutor",
      "Pianist",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "NTU Undergraduate",
      "Aspiring Software Developer",
      "Tutor",
      "Pianist",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
