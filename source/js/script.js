/*---- главное меню ----*/

var body = document.querySelector('body');
var pageHeader = document.querySelector('.page-header');
var buttonMenuClose = document.querySelector('.page-header__menu-toggle--close');
var buttonMenuOpen = document.querySelector('.page-header__menu-toggle--open');
var buttonMenuAccessibility = document.querySelector('.page-header__menu-toggle span.visually-hidden');
var mainNav = document.querySelector('.main-nav');
var mainLogo = document.querySelector('.page-header__logo');

var hiddenMainNav = function () {
  mainNav.style.display = 'none';
};

var changeMenuButtonToOpen = function () {
  buttonMenuClose.classList.add('page-header__menu-toggle--open');
  buttonMenuClose.classList.remove('page-header__menu-toggle--close');
  buttonMenuClose.style.top = '89px';
  buttonMenuClose.style.right = '21px';
  buttonMenuAccessibility.textContent = 'Открыть меню';
};

var changeMainLogoToClosedMenu = function () {
  mainLogo.style.top = '69px';
};

var changePageHeaderToClosedMenu = function () {
  body.style.marginTop = '-71px';
  pageHeader.classList.add('page-header__menu--closed');
  pageHeader.classList.remove('page-header__menu--open');
};

buttonMenuClose.addEventListener('click', function () {
  hiddenMainNav();
  changeMenuButtonToOpen();
  changeMainLogoToClosedMenu();
  changePageHeaderToClosedMenu();
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
