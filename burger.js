console.log('Burger dash');
('use strict');

const isMobile = {
  android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  blackberry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  ios: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  windows: function () {
    return navigator.userAgent.match(/IE Mobile/i);
  },

  any: function () {
    return (
      isMobile.android() ||
      isMobile.blackberry() ||
      isMobile.ios() ||
      isMobile.opera() ||
      isMobile.windows()
    );
  },
};

if (isMobile.any() === true) {
  document.body.classList.add('touch');
} else {
  document.body.classList.add('pc');
}
