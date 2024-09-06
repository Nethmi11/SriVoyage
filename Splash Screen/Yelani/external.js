const colors = document.querySelectorAll('.colors');
const body = document.querySelector('body');
const fontSizes = document.querySelectorAll('.font-sizes button');




function changeColor(color) {
  let body = document.body;
  switch (color) {
      case 'blue':
          body.style.backgroundColor = '#061935';  // Blue color
          break;
      case 'black':
          body.style.backgroundColor = '#0fd281d0';  // Black color
          break;
      case 'white':
          body.style.backgroundColor = '#ffffff';  // White color
          break;
      case 'random':
          // Generate a random color
          const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
          body.style.backgroundColor = randomColor;
          break;
  }
}

fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', () => {
        // Remove active class from all buttons
        fontSizes.forEach(button => button.classList.remove('active'));

        // Add active class to the clicked button
        fontSize.classList.add('active');

        // Change font size of body based on the clicked button's ID
        switch (fontSize.id) {
            case 'small':
                body.style.fontSize = '14px';
                break;
            case 'medium':
                body.style.fontSize = '18px';
                break;
            case 'large':
                body.style.fontSize = '22px';
                break;
            default:
                break;
        }
    });
});
