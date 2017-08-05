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
    if (body.classList.contains('about')) {
        history.pushState(stateObj, "Time", "/about-this-site/?time=" + currentDuration);
    } else {
        history.pushState(stateObj, "Time", "/?time=" + currentDuration);
    }
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
      body.classList.remove('short', 'medium', 'long');
      body.classList.add(currentDuration);
      pushTime(currentDuration);
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

      document.querySelector('body').classList.add('transitioning');

      setTimeout(function(){
        changeTime(currentDuration);
      }, 300);
      setTimeout(function(){
        document.querySelector('body').classList.remove('transitioning');
      }, 600);

      if (e.target.classList.contains('footer-long-btn')) {
        window.scrollTo(0, 0);
      }
    });
  }

  const aboutEl = document.querySelector('.about-content');
  const aboutLink = document.querySelectorAll('.about-link');
  const aboutCloseLink = document.querySelector('.close-about');

  for (var i = 0; i < aboutLink.length; i++) {
    aboutLink[i].addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.add('about');
      body.classList.remove('home');
      let stateObj = { title: "post" };
      history.pushState(stateObj, "about", "/about-this-site/?time=" + currentDuration);
    });
  }

  const aboutColors = ['#FFF15F', '#BEEE98', '#98EED3', '#989BEE', '#EE98E7', '#F2ABAB' ]
  aboutEl.style.background = aboutColors[Math.floor(Math.random() * aboutColors.length)];

  aboutCloseLink.addEventListener('click', (e) => {
    aboutEl.style.background = aboutColors[Math.floor(Math.random() * aboutColors.length)];
    aboutEl.classList.add('fade-blur');
    let stateObj = { title: "post" };
    history.pushState(stateObj, "home", "/?time=" + currentDuration);
    setTimeout(function(){
      body.classList.remove('about');
      body.classList.add('home');
      aboutEl.classList.remove('fade-blur');
    }, 700);
  });

}
