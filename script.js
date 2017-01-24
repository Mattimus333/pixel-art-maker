let body = document.querySelector('body');
let trim = document.createElement('div');  //selects the main trim where we will add all the 'pixels'

//styles background trim.  I probably should have done this in CSS.
trim.style.width = '1000px';
trim.style.height = '650px';
trim.style.backgroundColor = 'gray';
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
let centerWrapper = document.createElement('div');
centerWrapper.style.margin = 'auto';
centerWrapper.style.marginTop = '12px';
centerWrapper.style.width = '960px';
trim.appendChild(centerWrapper);

var buttonDiv = document.createElement('div');
buttonDiv.style.margin = 'auto';
buttonDiv.style.marginTop = '540px';
buttonDiv.style.width = '960px';
trim.appendChild(buttonDiv);

//an array of gradient colors I got from https://www.strangeplanet.fr/work/gradient-generator/index.php
var gradient = ["#FF0000", "#FE0A00", "#FE1400", "#FD1F00", "#FD2900", "#FC3400", "#FC3E00", "#FC4800", "#FB5300", "#FB5D00", "#FA6800", "#FA7200", "#FA7D00", "#FA8700", "#FA9100", "#FA9C01", "#FAA601", "#FAB102", "#FABB02", "#FAC502", "#FAD003", "#FADA03", "#FAE504", "#FAEF04", "#FAFA05", "#E5FA04", "#D0FA04", "#BBFA03", "#A6FA03", "#91FA02", "#7DFA02", "#68FA02", "#53FA01", "#3EFA01", "#29FA00", "#14FA00", "#00FA00", "#00FA15", "#00FA2A", "#00FB3F", "#00FB55", "#00FC6A", "#00FC7F", "#00FC94", "#00FDAA", "#00FDBF", "#00FED4", "#00FEE9", "#00FFFF", "#00E9FF", "#00D4FF", "#00BFFF", "#00AAFF", "#0094FF", "#007FFF", "#006AFF", "#0055FF", "#003FFF", "#002AFF", "#0015FF", "#0000FF", "#1500FF", "#2A00FF", "#3F00FF", "#5500FF", "#6A00FF", "#7F00FF", "#9400FF", "#AA00FF", "#BF00FF", "#D400FF", "#E900FF", "#FF00FF", "#E900E9", "#D400D4", "#BF00BF", "#AA00AA", "#940094", "#7F007F", "#6A006A", "#550055", "#3F003F", "#2A002A", "#150015", "#000000", "#171717", "#2E2E2E", "#454545", "#5C5C5C", "#737373", "#8B8B8B", "#A2A2A2", "#B9B9B9", "#D0D0D0", "#E7E7E7", "#FFFFFF"];
 //I'm not sure why atom greys this out but they are all working?


brushOn = false;
// loop creates a bunch of mini divs to represent the 'pixels'.  the uniform styling could have been done in CSS probably.
for (var i = 0; i < 512; i++) {   //MAKES 512 WHITE EMPTY PIXELS
  let tile = document.createElement('div');
  tile.style.borderStyle = 'solid';
  tile.style.borderColor = 'black';
  tile.style.borderWidth = 'thin';
  tile.style.width = '30px'
  tile.style.paddingBottom = '30px'
  tile.style.float = 'left';
  tile.addEventListener('click', () => tile.style.backgroundColor = brushColor);
  tile.addEventListener('dblclick', () => brushOn = !brushOn);
  tile.addEventListener('mouseover', function(){
    if (brushOn) {
      tile.style.backgroundColor = brushColor;
    }
  });
  tile.style.backgroundColor = 'white';
  centerWrapper.appendChild(tile);
}

//creates the color pallete in another div
for (var i = 0; i <96; i++) {
  let tile = document.createElement('div');
  tile.style.borderStyle = 'solid';
  tile.style.borderColor = 'black';
  tile.style.borderWidth = 'thin';
  tile.style.width = '30px'
  tile.style.paddingBottom = '30px'
  tile.style.float = 'left';
  tile.addEventListener('click', () => brushColor = tile.style.backgroundColor);
  tile.style.backgroundColor = gradient[i];
  buttonDiv.appendChild(tile);
}
//variable that holds the selected color.
let brushColor = 'black';
