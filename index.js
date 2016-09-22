        document.addEventListener('DOMContentLoaded', function() {
            var button_name = document.querySelectorAll("button[id]")
            for (var i = 0; i < button_name.length; i++) {
                button_name[i].addEventListener('click', function() {
                    color_name = this.id;
                    document.getElementById('color_chosen').innerHTML = color_name;
                })
            }
            document.getElementById("0").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("0").style.fill = color_fill;
            })
            document.getElementById("1").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("1").style.fill = color_fill;
            })
            document.getElementById("2").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("2").style.fill = color_fill;
            })
            document.getElementById("3").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("3").style.fill = color_fill;
            })
            document.getElementById("4").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("4").style.fill = color_fill;
            })
            document.getElementById("5").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("5").style.fill = color_fill;
            })

            var btn = document.getElementById('Download');
var svg = document.querySelector('svg');
var canvas = document.querySelector('canvas');

function triggerDownload (imgURI) {
  var evt = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true
  });

  var a = document.createElement('a');
  a.setAttribute('download', 'lotus.png');
  a.setAttribute('href', imgURI);
  a.setAttribute('target', '_blank');

  a.dispatchEvent(evt);
}

btn.addEventListener('click', function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var data = (new XMLSerializer()).serializeToString(svg);
  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svgBlob = new Blob([data], {type: 'image/svg+xml;'});
  var url = DOMURL.createObjectURL(svgBlob);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);

    var imgURI = canvas
        .toDataURL('image/png')
        .replace('image/png');

    triggerDownload(imgURI);
  };

  img.src = url;
});

          })
