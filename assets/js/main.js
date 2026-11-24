(function () {
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  toggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  Array.prototype.forEach.call(mobileNav.querySelectorAll('a'), function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var form = document.getElementById('contactForm');
  if (form) {
    var success = document.getElementById('formSuccess');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(document.getElementById('name').value);
      var email = document.getElementById('email').value;
      var phone = encodeURIComponent(document.getElementById('phone').value);
      var message = encodeURIComponent(document.getElementById('message').value);
      var subject = encodeURIComponent('Quote request from ' + document.getElementById('name').value);
      var body = 'Name: ' + name + '%0D%0AEmail: ' + encodeURIComponent(email) + '%0D%0APhone: ' + phone + '%0D%0A%0D%0A' + message;
      window.location.href = 'mailto:info@magnetizeozombara.com?subject=' + subject + '&body=' + body;
      success.classList.add('is-visible');
      form.reset();
    });
  }
})();
