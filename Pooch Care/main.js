

var playButton = document.querySelector(".video-play-icon");
var videoContent = document.querySelector(".video__content");
var closeVideo = document.querySelector ("#close__video");

playButton.addEventListener("click",function () {
    videoContent.style.display = "flex"
})
closeVideo.addEventListener("click",function () {
    videoContent.style.display = "none"
})



var icon = document.getElementById("iconMode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./dark theme icon/sun.png" ;
    }else {
        icon.src="./dark theme icon/moon.png";

    };
}