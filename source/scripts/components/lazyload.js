import inView from 'in-view';
export default function () {
  let contentSrcEl;
  let contentSrc;
  inView('.project')
    .on('enter', el => {
      let contentSrcEl = el.querySelectorAll('[data-src]');
      if (contentSrcEl) {
        for (var i = 0; i < contentSrcEl.length; i++) {
          let contentSrc = contentSrcEl[i].getAttribute('data-src');
          contentSrcEl[i].src = contentSrc;
          contentSrcEl[i].removeAttribute('data-src');
        }
      }
  })
}
