function upDate(previewPic) {
    "use strict";
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    "use strict";
    document.getElementById('image').style.backgroundImage = "none";
    document.getElementById('image').innerHTML = "Welcome to Our WMS";
}
