

function getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for ( var i = 0; i < ca.length; i++ ) {
        var c = ca[i]

        while ( c.charAt(0) == ' ' ) {
            c = c.substring(1)
        }
        
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";"
}

function loadSettings() {
    getSound()
    getMusic()

    if (glob183 == undefined && glob29 == undefined && glob196 == undefined) {
        proc32()
    }
    
    document.getElementById("muteIcon").innerText = glob183 ? "volume_up" : "volume_off"
    document.getElementById("musicIcon").innerText = glob29 ? "music_note" : "music_off"


    

}


function setSound(state) {
    setCookie("useSound", state)
    glob183 = state
    var v = glob183 ? 1 : 0
    ion.sound.volume(false, {volume: v});
}
function getSound() {
    glob183 = (getCookie("useSound") == "true") ? true : false
    var v = glob183 ? 1 : 0
    ion.sound.volume(false, {volume: v});
}

function setMusic(state) {
    setCookie("useMusic", state )
    glob29 = state
}
function getMusic() {
    glob29 = (getCookie("useMusic") == "true") ? true : false
}



/* use default settings */
function proc32() {
    setSound(true)
    setMusic(true)
    // glob196 = true;
    console.log("setting default values")
}