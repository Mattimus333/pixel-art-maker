body = document.querySelector('body');
trim = document.createElement('div');  //selects the main trim where we will add all the 'pixels'

//styles background trim.  I probably should have done this in CSS.
trim.style.width = '1000px';
trim.style.height = '600px';
trim.style.backgroundColor = 'grey';
trim.style.position = "absolute";
trim.style.top = '0';
trim.style.bottom = '0';
trim.style.left = '0';
trim.style.right = '0';
trim.style.margin = 'auto';
trim.style.borderRadius = '20px';
//append the trim to the html
body.appendChild(trim);

//create a centerdiv to help center all the little div tiles.
centerWrapper = document.createElement('div');
centerWrapper.style.margin = 'auto';
centerWrapper.style.marginTop = '12px';
centerWrapper.style.width = '960px';
trim.appendChild(centerWrapper);

//an array of gradient colors I got from https://www.strangeplanet.fr/work/gradient-generator/index.php
var gradient = ["#FF0000", "#FF1900", "#FF3300", "#FF4C00", "#FF6600", "#FC8502", "#FAA504", "#F7C506", "#F5E508", "#B7EA06", "#7AEF04", "#3DF402", "#00FA00", "#00E83E", "#00D67D", "#00C4BB", "#00B3FA", "#008AFB", "#0062FC", "#0039FD", "#0011FF", "#4914F3", "#9218E7", "#DB1CDB", "#921292", "#490949", "#000000", "#555555", "#AAAAAA", "#FFFFFF"] //I'm not sure why atom greys this out but they are all working?  


// loop creates a bunch of mini divs to represent the 'pixels'.  the uniform styling could have been done in CSS probably.
for (var i = 0; i < 540; i++) {   //510
  let tile = document.createElement('div');
  tile.style.borderStyle = 'solid';
  tile.style.borderColor = 'black';
  tile.style.borderWidth = 'thin';
  tile.style.width = '30px'
  tile.style.paddingBottom = '30px'
  tile.style.float = 'left';
  if (i < 510) {
    //these are white and can be colored in
    tile.addEventListener('click', () => tile.style.backgroundColor = brushColor);
    tile.style.backgroundColor = 'white';
  }
  else {
    //these are gradiently colored and are for selecting colors.
    tile.addEventListener('click', () => brushColor = tile.style.backgroundColor);
    tile.style.backgroundColor = gradient[i-510];
  }
  centerWrapper.appendChild(tile);
}

//variable that holds the selected color.
let brushColor = 'black';
