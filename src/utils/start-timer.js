import { endGame } from './end-game'

export const startTimer = (context) => {
  const countDownTime = Date.now() + 180000;
  context.interval = setInterval(() => {
    const now = new Date();
    const distance = countDownTime - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(context.interval);
      context.setState({
        time: {
          minutes: 0,
          seconds: 0
        }
      }, () => {
        endGame(context);
      })
    } else {
      context.setState({
        time: {
          minutes,
          seconds
        }
      })
    }
  }, 1000);
}