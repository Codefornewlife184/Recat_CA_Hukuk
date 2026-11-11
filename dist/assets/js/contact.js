(function() {
  function getLocale() {
    var localeField = document.querySelector('#ajax_contact input[name="locale"]');
    var value = localeField && localeField.value ? String(localeField.value).toLowerCase() : 'tr';
    return value === 'en' || value === 'ar' ? value : 'tr';
  }

  function getText(key) {
    var locale = getLocale();
    var messages = {
      tr: {
        genericError: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.',
      },
      en: {
        genericError: 'Message could not be sent. Please try again later.',
      },
      ar: {
        genericError: 'تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقًا.',
      },
    };

    return (messages[locale] && messages[locale][key]) || messages.tr[key] || '';
  }

  function hideFormMessage(immediate) {
    var el = document.getElementById('form-messages');
    if (!el) return;

    if (el._hideTimer) {
      window.clearTimeout(el._hideTimer);
      el._hideTimer = null;
    }

    el.classList.remove('is-visible');

    var finalize = function() {
      el.style.display = 'none';
      el.textContent = '';
    };

    if (immediate) {
      finalize();
      return;
    }

    window.setTimeout(finalize, 260);
  }

  function setFormMessage(text, isError) {
    var el = document.getElementById('form-messages');
    if (!el) return;

    if (el._hideTimer) {
      window.clearTimeout(el._hideTimer);
      el._hideTimer = null;
    }

    el.classList.remove('alert-success');
    el.classList.remove('alert-danger');
    el.classList.add(isError ? 'alert-danger' : 'alert-success');
    el.style.display = 'block';
    el.textContent = text || '';

    window.requestAnimationFrame(function() {
      el.classList.add('is-visible');
    });

    if (!isError) {
      el._hideTimer = window.setTimeout(function() {
        hideFormMessage(false);
      }, 3800);
    }
  }

  function clearForm() {
    var fields = ['fullname', 'email', 'phone', 'service', 'message'];
    fields.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.value = '';
    });
  }

  function handleSubmit(form) {
    var action = form.getAttribute('action') || '';
    if (!action) return;

    return fetch(action, {
      method: 'POST',
      body: new FormData(form),
      credentials: 'same-origin',
    })
      .then(function(res) {
        return res.text().then(function(text) {
          return { ok: res.ok, text: text || '' };
        });
      })
      .then(function(result) {
        if (result.ok) {
          setFormMessage(result.text, false);
          clearForm();
          return;
        }
        var msg = result.text || getText('genericError');
        setFormMessage(msg, true);
      })
      .catch(function() {
        var msg = getText('genericError');
        setFormMessage(msg, true);
      });
  }

  function initVanilla() {
    document.addEventListener(
      'submit',
      function(event) {
        var form = event.target;
        if (!form || form.id !== 'ajax_contact') return;
        event.preventDefault();
        handleSubmit(form);
      },
      true,
    );
  }

  function initJquery() {
    var $ = window.jQuery;
    $(document).on('submit', '#ajax_contact', function(event) {
      event.preventDefault();
      handleSubmit(this);
    });
  }

  function init() {
    if (window.jQuery) initJquery();
    else initVanilla();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
