const { styler, spring, listen, pointer, value } = window.popmotion;

const balls = document.querySelectorAll('.box');
const ball = balls[0]
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

// e => is equal to function(e)
listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    ballXY.stop();
  });