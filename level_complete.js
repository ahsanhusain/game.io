// level Done
var font = new FontFace('Bangers-Regular', 'url(./bangers/Bangers-Regular.ttf)');
var l = document.getElementById("level_cls");
var ltx = l.getContext("2d");
font.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
  ltx.font = "40px 'Bangers-Regular', cursive";
  ltx.fillStyle = "white";

  var ltext = "Next";
  var xl = (l.width - ltx.measureText(ltext).width) / 2;
  var yl = 50;

  ltx.fillText(ltext, xl, yl);
});

// level Done
var r = document.getElementById("rate_us");
var rtx = r.getContext("2d");
font.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
  rtx.font = "40px 'Bangers-Regular', cursive";
  rtx.fillStyle = "white";

  var rtext = "Rate Us";
  var xr = (r.width - rtx.measureText(rtext).width) / 2;
  var yr = 50;

  rtx.fillText(rtext, xr, yr);
});

var s = document.getElementById("share");
var stx = s.getContext("2d");
font.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
  stx.font = "40px 'Bangers-Regular', cursive";
  stx.fillStyle = "white";

  var stext = "Share";
  var xs = (s.width - stx.measureText(stext).width) / 2;
  var ys = 50;

  stx.fillText(stext, xs, ys);
});

var canvasIds = ['congrats', '_next', '_rate_us', '_share']; // Add more canvas IDs as needed
var imageSources = [
    'assets/level_message.png',
    'assets/next.png',
    'assets/rate_us.png',
    'assets/share.png'
    // Add more image sources as needed
];

document.addEventListener('DOMContentLoaded', function () {
    // Loop through each canvas
    canvasIds.forEach(function (canvasId, index) {
        var canvas = document.getElementById(canvasId);
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = imageSources[index];

        img.onload = function () {
            drawImage(canvas, img);
        };

        // Redraw the image when the window is resized
        window.addEventListener('resize', function () {
            drawImage(canvas, img);
        });
    });
});

function drawImage(canvas, img) {
    // Set canvas dimensions based on the loaded image
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the image on the canvas
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}