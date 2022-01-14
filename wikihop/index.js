const frame = document.getElementById('wiki');
frame.src = "https://en.wikipedia.org/wiki/Special:Random";

function start() {
    frame.src = "https://en.wikipedia.org/wiki/Special:Random";
    // frame.contentWindow.location.reload();
    console.log(frame.contentWindow.document.body.innerHTML);
}