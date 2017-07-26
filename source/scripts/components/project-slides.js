export default function () {
  var project = document.querySelectorAll('.project');
  let projectSlides = [];
  let currentSlideCount = [];
  let currentSlide;

  for (var i = 0; i < project.length; i++) {
    projectSlides.push(project[i].querySelectorAll('.secondary-asset'));
    currentSlideCount.push(0);
    let currentSlide = i;
    project[i].addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() !== 'a') {
        e.preventDefault();
        if ( currentSlideCount[currentSlide] < projectSlides[currentSlide].length ) {
          projectSlides[currentSlide][currentSlideCount[currentSlide]].classList.add('active');
          currentSlideCount[currentSlide]++;
        } else {
          currentSlideCount[currentSlide] = 0;
          for (var i = 0; i < projectSlides[currentSlide].length; i++) {
            projectSlides[currentSlide][i].classList.remove('active')
          }
        }
      }
    });
  }
}
