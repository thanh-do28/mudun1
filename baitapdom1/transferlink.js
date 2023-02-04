var a = document.getElementById("content0")
// console.log(a);
a.onclick = function(event){
    var s;
    // console.log('a');
    if(event.target.classList.contains("image1")){
        // console.log("a");
        let h = event.target.children;
        s = h[0];
        var v = h[2];
        // console.log(s.src);
        // console.log(v.innerText);
        // console.log(h[0]);
        // let k = document.
        // console.log(k);
        let videoSRC = s.src
        let span = v.innerText
        window.localStorage.setItem("videoSRC", videoSRC);
        window.localStorage.setItem("videoname", span)
        window.location.href = "index1.html";
    }
    
}

