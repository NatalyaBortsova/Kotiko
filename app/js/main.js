$(function () {

  const scrollBtn = document.querySelector('.scrolltop');
  window.onscroll = () => {
    if (window.scrollY > 1500) {
      scrollBtn.classList.remove('_hide');
    } else if (window.scrollY < 1500) {
      scrollBtn.classList.add('_hide');
    }
  };

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };


  const anchors = document.querySelectorAll('[data-where="anchor"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }


  const swiper = new Swiper('.slider__inner', {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });


  const bookBtn = document.querySelectorAll('.numbers-info__button');
  const bookCard = document.querySelectorAll('.card-book');
  const bookBtnClose = document.querySelectorAll('.card-book__close');

  bookBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      this.nextElementSibling.classList.remove('hidden')
    })
  })

  bookBtnClose.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const cardModal = this.closest('.card-book');
      cardModal.classList.add('hidden');
    });
  })



  const swiper2 = new Swiper('.gallery__slider', {
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
    breakpoints: {

      320: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },

      580: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      1231: {
        slidesPerView: 4,
        spaceBetween: 20,
      },


    }

  });


  $('#bookDateFrom, #bookDateTo').datepicker();

  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);



  const playBtn = document.querySelectorAll(".rooms__link");
  const videoContainer = document.querySelectorAll(".rooms__video");
  const videoClose = document.querySelectorAll(".rooms__video-btn");


  playBtn.forEach(action => {
    action.onclick = () => {
      videoContainer.classList.add('video__show');
    }
  })

  videoClose.forEach(button => {
    button.onclick = () => {
      videoContainer.classList.remove('video__show');
    }
  })


  const modal = document.querySelector('[data-module="modal-video"]')
  const modalIframe = document.querySelector('[data-module="modal-video"] video')
  const modalCloseActions = document.querySelectorAll('[data-module-action="close-modal-video"]')
  const modalOpenActions = document.querySelectorAll('[data-module="action-modal-video"]')

  modalOpenActions.forEach(action => {
    action.onclick = (e) => {
      modal.classList.add('video__show')
      e.preventDefault()
      modalIframe.setAttribute('src', event.target.dataset.video)

    }
  })

  modalCloseActions.forEach(button => {
    button.onclick = event => {
      modal.classList.remove('video__show')
      modalIframe.setAttribute('src', '')
    }
  })



  const headers = document.querySelectorAll('[data-name="concerns__subtitle"]');
  const button = document.querySelectorAll('.concerns__button');

  headers.forEach(function (item) {
    item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('hidden')
      this.previousElementSibling.classList.toggle('open');
    })
  })

  new ClipboardJS('.contacts__button');



  const animItems = document.querySelectorAll(`._anim-items`)
  if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffSet = offset(animItem).top;
        const animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
          animItem.classList.add(`_active`);
        } else {
          if (animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove(`_active`);
          };
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      }
    }

    setTimeout(() => {
      animOnScroll()
    }, 300)
  }


  const userName = document.querySelector("[data-name='validate-name']");  
  const feedback = document.querySelector(".registration__feedback");

    userName.addEventListener("keyup", function () {      
      const min_chars = 3;
      const max_chars = 12;
      if (/[^a-zA-Z\ö\ç\ş\ı\ğ\ü\Ö\Ç\Ş\İ\Ğ\Ü\ ]/.test(userName.value)) {
        feedback.innerHTML = "Имя не должно содержать цифр или специальных символов";
        userName.value = userName.value.substring(0, userName.value.length - 1);
      } else if (userName.value.length < min_chars) {
        feedback.innerHTML = "Введите не менее 3 символов!";
      } else if (userName.value.length >= max_chars) {
        feedback.innerHTML = "Введите не более 12 символов";
      } else {
        feedback.innerHTML = "";
      };
    });
  



  [].forEach.call(document.querySelectorAll("[data-name='validate-phone']"), function (input) {
    let keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+38 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });




})