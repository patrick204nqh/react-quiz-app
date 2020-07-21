export const showOptions = (context) => {
  const options = Array.from(document.querySelectorAll('.option'));

  options.forEach(option => {
    option.style.visibility = 'visible';
  })

  context.setState({
    usedFiftyFifty: false
  })
}