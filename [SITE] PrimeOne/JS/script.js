$(".wrapper").addClass("loaded")

// BURGER MENU GOOD
/*
$(".icon-menu").click(function (event) {
  $(this).toggleClass("active")
  $(".menu__body").toggleClass("active")
  $("body").toggleClass("lock")
})
*/

// BURGER V2
/*
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active")
    $("body").toggleClass("lock")
  })
})
*/

// BM V3
$(".header-menu__icon").click(function (event) {
  $(this).toggleClass("active")
  $(".header-menu").toggleClass("active")
  if ($(this).hasClass("active")) {
    $("body").data("scroll", $(window).scrollTop())
  }
  $("body").toggleClass("lock")
  if (!$(this).hasClass("active")) {
    $("body,html").scrollTop(parseInt($("body").data("scroll")))
  }
})

/*--------------------------------------------------------------------------*/

function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      )
    }
  })
}
ibg()

/*--------------------------------------------------------------------------*/
// Slider
/*
$(document).ready(function () {
  if ($(".slider__body").length > 0) {
    $(".slider__body").slick({
      waitForAnimate: true,
      adaptiveHeight: false,
      dots: false,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {},
        },
      ],
    })
  }
})
*/

/*--------------------------------------------------------------------------*/

// Проверка на моб. устр-во для выпадающего меню
/*let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  },
}

let body = document.querySelector("body")
if (isMobile.any()) {
  body.classList.add("touch")
  let arrow = document.querySelectorAll(".arrow")
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling
    let subMenu = arrow[i].nextElementSibling
    let thisArrow = arrow[i]

    thisLink.classList.add("parent")
    arrow[i].addEventListener("click", function () {
      subMenu.classList.toggle("open")
      thisArrow.classList.toggle("active")
    })
  }
} else {
  body.classList.add("mouse")
}
*/

$(window).resize(function (event) {
  adaptive_function()
})
function adaptive_header(w, h) {
  var headerMenu = $(".header-menu")
  var headerLang = $(".header-top-lang")
  if (w < 768) {
    if (!headerLang.hasClass("done")) {
      headerLang.addClass("done").appendTo(headerMenu)
    }
  } else {
    if (headerLang.hasClass("done")) {
      headerLang.removeClass("done").prependTo($(".header-top"))
    }
  }

  if (w < 768) {
    if (!$(".header-bottom-menu").hasClass("done")) {
      $(".header-bottom-menu").addClass("done").appendTo(headerMenu)
    }
  } else {
    $.each($(".header-bottom-menu"), function (index, val) {
      if ($(this).hasClass("header-bottom-menu_right")) {
        if ($(this).hasClass("done")) {
          $(this)
            .removeClass("done")
            .prependTo($(".header-bottom__column").eq(2))
        }
      } else {
        if ($(this).hasClass("done")) {
          $(this)
            .removeClass("done")
            .prependTo($(".header-bottom__column").eq(0))
        }
      }
    })
  }
}
function adaptive_function() {
  var w = $(window).outerWidth()
  var h = $(window).outerHeight()
  adaptive_header(w, h)
}
adaptive_function()
