const audio_names = ["boom","clap","hihat","kick","openhat","ride","snare","tink","tom"]
const data_keys = ["65","83","68","70","71","72","74","75","76"]
for(var i=0; i<8; i++){
    let audio = document.createElement("audio")
    audio.src = "./sounds/"+audio_names[i] + ".wav";
    audio.setAttribute("data-key",data_keys[i])
    document.body.append(audio)
}

let keys;

let playsound = (e)=>{
     let playing_audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!playing_audio) return;
    playing_audio.currentTime = 0;
    playing_audio.play();
    console.log(e)

    keys = document.querySelectorAll(".keys")
    keys.forEach((key) => {
        if(key.classList[2] == e.keyCode){
            key.classList.add("design")
        }
    })
}

window.addEventListener('keydown', playsound)
window.addEventListener('keyup', (e)=>{
    keys.forEach((key)=>{
        if(key.classList[3] == "design"){
            key.classList.remove("design")
        }
    })
})

