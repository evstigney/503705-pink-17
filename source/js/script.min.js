/*---- главное меню ----*/

var body = document.querySelector('body');
var pageHeader = document.querySelector('.page-header');
var buttonMenuToggle = document.querySelector('.page-header__menu-toggle');
var buttonMenuOpen = document.querySelector('.page-header__menu-toggle--open');
var buttonMenuAccessibility = document.querySelector('.page-header__menu-toggle span.visually-hidden');
var mainNav = document.querySelector('.page-header__nav');
var mainLogo = document.querySelector('.page-header__logo');

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
  pageHeader.classList.add('page-header__menu--close');
  pageHeader.classList.remove('page-header__menu--open');
};

var changePageHeaderToOpenedMenu = function () {
  body.classList.remove('menu-closed');
  pageHeader.classList.remove('page-header__menu--close');
  pageHeader.classList.add('page-header__menu--open');
};

buttonMenuToggle.addEventListener('click', function () {
  if (buttonMenuToggle.classList.contains('page-header__menu-toggle--close')) {
    hideMainNav();
    changeMenuButtonToOpen();
    changeMainLogoToClosedMenu();
    changePageHeaderToClosedMenu();
  } else {
    showMainNav();
    changeMenuButtonToClose();
    changeMainLogoToOpenedMenu();
    changePageHeaderToOpenedMenu();
  }
});

/*---- интерактивная карта ----*/

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
