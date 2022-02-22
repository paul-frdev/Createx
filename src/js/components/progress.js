// const circle = document.querySelector('.progress');



// const progressAnimation = () => {
//   let percentProgress = Math.floor(70);



//   let radius = circle.getAttribute('r');
//   let circleLength = 2 * Math.PI * radius;
//   circle.setAttribute('stroke-dasharray', circleLength);
//   circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentProgress / 100);
// }

// progressAnimation();

const progress = () => {
  const circles = document.querySelectorAll('.facts-elem__circle');

  circles.forEach(elem => {
    if (elem.dataset.percentage === 'true') {
      let progress = elem.querySelector('.progress');
      let valueBlock = elem.querySelector('.facts-elem__value');
      let radius = progress.getAttribute('r');
      let circleLength = 2 * Math.PI * radius;
      let full = elem.dataset.full;
      let value = elem.dataset.value;
      let percentageProgress = Math.floor(value / full * 100)
      console.log(percentageProgress);
      valueBlock.textContent = `${value}`;
      progress.setAttribute('stroke-dasharray', circleLength);
      progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
    } else {
      let progress = elem.querySelector('.progress');
      let value = elem.querySelector('.facts-elem__value');
      let radius = progress.getAttribute('r');
      let circleLength = 2 * Math.PI * radius;
      let percent = elem.dataset.percent;
      let percentageProgress = Math.floor(percent);

      value.textContent = `${percent}%`;
      progress.setAttribute('stroke-dasharray', circleLength);
      progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
    }
  })
}

export default progress;
