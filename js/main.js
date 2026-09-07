document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav .close-btn');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#f-name').value.trim();
      var phone = form.querySelector('#f-phone').value.trim();
      var subject = form.querySelector('#f-subject').value;
      var message = form.querySelector('#f-message').value.trim();
      var msgBox = document.getElementById('form-msg');

      if (!name || !phone || !message) {
        msgBox.textContent = 'لطفاً نام، شماره تماس و متن پیام را وارد کنید.';
        msgBox.className = 'form-msg ok';
        msgBox.style.color = '#F2A93B';
        return;
      }

      var body = 'نام: ' + name + '%0Aشماره تماس: ' + phone + '%0Aموضوع: ' + subject + '%0A%0Aمتن پیام:%0A' + message;
      var mailto = 'mailto:arfa.q.n@gmail.com?subject=' + encodeURIComponent('درخواست از سایت — ' + subject) + '&body=' + body;

      window.location.href = mailto;

      msgBox.textContent = 'برنامه ایمیل شما باز می‌شود تا پیام را ارسال کنید. اگر باز نشد، مستقیم به arfa.q.n@gmail.com ایمیل بزنید.';
      msgBox.className = 'form-msg ok';
    });
  }
});
