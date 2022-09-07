//cam
function camInit(stream) {
  var cameraView = document.getElementById("cameraview");
  cameraView.srcObject = stream;
  cameraView.play();
}

function camInitFailed(error) {
  console.log("get camera permission failed : ", error)
}

function mainInit() {
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia )
  {
      alert("Media Device not supported")
      return;
  }

  navigator.mediaDevices.getUserMedia({video:true})
      .then(camInit)
      .catch(camInitFailed);
}

//cam pick
function getVideo(){
navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
navigator.getMedia({video: true, audio: false},
                        
function(stream) {
cameraviewStream.srcObject = stream   
cameraviewStream.play();
}, 
                        
function(error) {
alert('webcam not working');
});
}
    
function takeSnapshot() {
var myCanvasElement = document.getElementById('myCanvas');
var myCTX = myCanvasElement.getContext('2d');
myCTX.drawImage(cameraviewStream, 0, 0, myCanvasElement.width, myCanvasElement.height);
}

//click
function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id + "header")) {
/* if present, the header is where you move the DIV from:*/
document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} else {
/* otherwise, move the DIV from anywhere inside the DIV:*/
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
// get the mouse cursor position at startup:
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
// call a function whenever the cursor moves:
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();
// calculate the new cursor position:
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
// set the element's new position:
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
/* stop moving when mouse button is released:*/
document.onmouseup = null;
document.onmousemove = null;
}
}

//oneclick
    function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header3")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header3").onmousedown = dragMouseDown;
    } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    }
    }

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
    showDivs(slideIndex += n);
    }

    function currentDiv(n) {
    showDivs(slideIndex = n);
    }

    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" de-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " de-white";
    }
