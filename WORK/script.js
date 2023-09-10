const scroll = new LocomotiveScroll({
  el: document.querySelector('#header'),
  smooth: true,
});

function skewCursor() {
  var xScale = 1;
  var yScale = 1;

  var xPrev = 0;
  var yPrev = 0;
  window.addEventListener('mousemove', function (det) {
    //----------------
    xScale = gsap.utils.clamp(0.8, 1.2, det.clientX - xPrev);
    yScale = gsap.utils.clamp(0.8, 1.2, det.clientY - yPrev);
    xPrev = det.clientX;
    yPrev = det.clientY;
    //----------------
    if (det.clientX - xPrev && det.clientY - yPrev === 0) {
      document.querySelector('#cursorCircle').style.transform = `translate(${
        det.clientX
      }px, ${det.clientY}px) scale(${1}, ${1})`;
    } else {
      circle(xScale, yScale);
    }
    //----------------
  });
}

function circle(xScale, yScale) {
  window.addEventListener('mousemove', function (det) {
    document.querySelector(
      '#cursorCircle'
    ).style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(${xScale}, ${yScale})`;
  });
}
circle();
animation();
skewCursor();
