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
          // currentSlideCount[currentSlide] = 0;
          // for (var i = 0; i < projectSlides[currentSlide].length; i++) {
          //   projectSlides[currentSlide][i].classList.remove('active');
          // }

          // function chill(i) {
          //   setTimeout(function() { console.log(projectSlides[currentSlide][i]); }, 1000);
          // }
          // for (var i = projectSlides[currentSlide].length; i >= 0 ; i--) {
          //   chill(i);
          // }

          let i = projectSlides[currentSlide].length -1;                     //  set your counter to 1

          function resetSlides () {
             setTimeout(function () {
                projectSlides[currentSlide][i].classList.remove('active');
                // console.log(projectSlides[currentSlide][i]);
                i--;
                if (i >= 0) {
                   resetSlides();
                }
             }, 90)
          }
          resetSlides();
          currentSlideCount[currentSlide] = 0;
        }
      }
    });
  }
}
