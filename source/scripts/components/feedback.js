export default function () {
  const feedbackEl = document.querySelector('.feedback');
  const feedbackLink = feedbackEl.querySelectorAll('.feedback-link');
  let feedback;
  for (var i = 0; i < feedbackLink.length; i++) {
    feedbackLink[i].addEventListener('click', (e) => {
      e.preventDefault();
      feedback = e.target.dataset.reaction;
      if (feedback === 'happy') {
        feedbackEl.classList.add('happy');
      }
      if (feedback === 'eh') {
        feedbackEl.classList.add('eh');
      }
      if (feedback === 'sad') {
        feedbackEl.classList.add('sad');
      }
    });
  }

}
