window.onload = function () {
  var videoSRC = window.localStorage.getItem("videoSRC");
  var videoname = window.localStorage.getItem("videoname");
//   console.log(videoSRC);
//   console.log(videoname);

//   let video = document.getElementById("tuantienti");
    let span = document.getElementById("span12345");
    let iframe = document.querySelector("iframe");
//   console.log(video.innerHTML);
    iframe.src = videoSRC;
    span.innerText = videoname;
};

window.onbeforeunload = function() {
    window.localStorage.setItem("videoname", "");
    window.localStorage.setItem("videoSRC", "");
}