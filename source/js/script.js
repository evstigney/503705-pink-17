//---- главное меню ----

var body = document.querySelector('body');
var pageHeader = document.querySelector('.page-header');
var buttonMenuToggle = document.querySelector('.page-header__menu-toggle');
var buttonMenuOpen = document.querySelector('.page-header__menu-toggle--open');
var buttonMenuAccessibility = document.querySelector('.page-header__menu-toggle span.visually-hidden');
var mainNav = document.querySelector('.page-header__nav');
var mainLogo = document.querySelector('.page-header__logo');
var mainHeader = document.querySelector('.inner-main__main-header');
var indexDownloadSection = document.querySelector(".index-main__download-app");

var hideMainNav = function () {
  mainNav.classList.add('page-header__nav--hidden');
};

var showMainNav = function () {
  mainNav.classList.remove('page-header__nav--hidden');
}

var changeMenuButtonToOpen = function () {
  buttonMenuToggle.classList.add('page-header__menu-toggle--open');
  buttonMenuToggle.classList.remove('page-header__menu-toggle--close');
  buttonMenuAccessibility.textContent = 'Открыть меню';
};

var changeMenuButtonToClose = function () {
  buttonMenuToggle.classList.remove('page-header__menu-toggle--open');
  buttonMenuToggle.classList.add('page-header__menu-toggle--close');
  buttonMenuAccessibility.textContent = 'Закрыть меню';
};

var changeMainLogoToClosedMenu = function () {
  mainLogo.classList.add('page-header__logo--closed-menu');
};

var changeMainLogoToOpenedMenu = function () {
  mainLogo.classList.remove('page-header__logo--closed-menu');
};

var changePageHeaderToClosedMenu = function () {
  body.classList.add('menu-closed');
  pageHeader.classList.add('page-header--menu-close');
  pageHeader.classList.remove('page-header--menu-open');
  if (mainHeader) {
    mainHeader.classList.add('inner-main__main-header--menu-closed');
  }
  if (indexDownloadSection) {
    indexDownloadSection.classList.remove('index-main__download-app--menu-open');
  }
};

var changePageHeaderToOpenedMenu = function () {
  body.classList.remove('menu-closed');
  pageHeader.classList.remove('page-header--menu-close');
  pageHeader.classList.add('page-header--menu-open');
  if (mainHeader) {
    mainHeader.classList.remove('inner-main__main-header--menu-closed');
  }
  if (indexDownloadSection) {
    indexDownloadSection.classList.add('index-main__download-app--menu-open');
  }
};

var hideMenuHandler = function () {
  hideMainNav();
  changeMenuButtonToOpen();
  changeMainLogoToClosedMenu();
  changePageHeaderToClosedMenu();
};

var showMenuHandler = function () {
  showMainNav();
  changeMenuButtonToClose();
  changeMainLogoToOpenedMenu();
  changePageHeaderToOpenedMenu();
};

buttonMenuToggle.addEventListener('click', function () {
  if (buttonMenuToggle.classList.contains('page-header__menu-toggle--close')) {
    hideMenuHandler();
  } else {
    showMenuHandler();
  }
});

buttonMenuToggle.classList.remove('no-js'); // показываем кнопку если js работает в браузере

//---- скрываем меню, если js работает в браузере ----

hideMenuHandler();


//---- интерактивная карта ----

var initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 59.936448, lng: 30.321076},
    disableDefaultUI: true,
  });

  var marker = new google.maps.Marker ({
    position: {lat: 59.935959, lng: 30.321002},
    icon: 'img/icon-map-marker.svg',
    map: map
  });
};

//---- отправка формы ----

var buttonSubmit = document.querySelector('.button-submit');
var buttonSubmitFailure = document.querySelector('.modal__button-submit--failure');
var buttonSubmitSuccess = document.querySelector('.modal__button-submit--success');

var modalSuccess = document.querySelector('.modal--success');
var modalFailure = document.querySelector('.modal--failure');

var form = document.querySelector('.competition-form');
var fieldSurname = document.querySelector('#surname-field');
var fieldName = document.querySelector('#name-field');
var fieldEmail = document.querySelector("#email-field");
var requiredFields = [fieldSurname, fieldName, fieldEmail];

var checkField = function (field) {
  if (field.value) {
    field.classList.remove('invalid-field');
  } else {
    field.classList.add('invalid-field');
  }
};

var checkRequiredFields = function (arr) {
  var result = true;
  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i].value)) {
      arr[i].classList.add('invalid-field');
      result = false;
    }
  }
  return result;
};

var showModal = function (modalWindow) {
  modalWindow.style.display = 'flex';
};

var hideModal = function (modalWindow) {
  modalWindow.style.display = 'none';
};

if (fieldSurname) {
  fieldSurname.addEventListener('blur', function () {
    checkField(fieldSurname);
  });
}

if (fieldName) {
  fieldName.addEventListener('blur', function () {
    checkField(fieldName);
  });
}

if (fieldEmail) {
  fieldEmail.addEventListener('blur', function () {
    checkField(fieldEmail);
  });
}

if (buttonSubmitFailure) {
  buttonSubmitFailure.addEventListener('click', function () {
    hideModal(modalFailure);
  });
}

if (buttonSubmitSuccess) {
  buttonSubmitSuccess.addEventListener('click', function () {
    hideModal(modalSuccess);
  });
}

if (buttonSubmit) {
  buttonSubmit.addEventListener('click', function (evt) {
    var validation = checkRequiredFields(requiredFields);
    if (validation) {
      showModal(modalSuccess);
    } else {
      showModal(modalFailure);
      evt.preventDefault();
    }
  });
}
