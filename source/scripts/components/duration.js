export default function () {
  const timeBtn = document.querySelectorAll('.time-btn');
  const body = document.querySelector('body');
  const loadImmediatlyLong = document.querySelectorAll('.load-immediatly-long');
  const loadImmediatlyMedium = document.querySelectorAll('.load-immediatly-medium');
  let currentDuration = 'short';

  let getParameterByName = (time, url) => {
    if (!url) {
      const currentURL = window.location.href;
      const target = time.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp(`[?&]${target}(=([^&#]*)|&|#|$)`),
            results = regex.exec(currentURL);
      if (!results) {
        return null;
      }
      if (!results[2]) {
        return '';
      }
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    return null;
  };

  let pushTime = (currentDuration) => {
    let stateObj = { title: "post" };
    history.pushState(stateObj, "Time", "?time=" + currentDuration);
  }

  let loadAssets = (loadImmediatly) => {
    for (var i = 0; i < loadImmediatly.length; i++) {
      let src = loadImmediatly[i].getAttribute('data-src');
      if (src) {
        loadImmediatly[i].src = src;
        loadImmediatly[i].removeAttribute('data-src');
      }
    }
  }

  let changeTime = (currentDuration) => {
    for (var i = 0; i < timeBtn.length; i++) {
      body.classList.add('transitioning');
      body.classList.remove('short', 'medium', 'long');
      body.classList.add(currentDuration);
      pushTime(currentDuration);
      window.setTimeout(() => {
        body.classList.remove('transitioning');
      }, 200);
    }
    if (currentDuration == 'medium') {
      loadAssets(loadImmediatlyMedium);
    }
    if (currentDuration == 'long') {
      loadAssets(loadImmediatlyLong);
    }
  }

  if (getParameterByName('time') !== null) {
    let currentDuration = getParameterByName('time');
    changeTime(currentDuration);
  } else {
    changeTime(currentDuration);
  }

  for (var i = 0; i < timeBtn.length; i++) {
    timeBtn[i].addEventListener('click', (e) => {
      e.preventDefault();
      let currentDuration = e.target.getAttribute('data-time');
      changeTime(currentDuration);

      if (e.target.classList.contains('footer-long-btn')) {
        window.scrollTo(0, 0);
      }
    });
  }

}
