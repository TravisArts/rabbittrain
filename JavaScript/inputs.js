




window.addEventListener('keydown', this.down, false);

window.addEventListener('keyup', this.up, false);

// dificultySelector('dificultySelector', )


// var keys = []

function down(e) {
    // alert(e.keyCode);

    // keys = new Array()
    // keys.push(e.keyCode)
    // keys = e.keyCode

    // glob172 = new Date().getTime()

    switch (e.keyCode) {
        case 38:    // up
            data101(0)
            break;
        case 39:    // right
            data101(1)
            break;
        case 37:    // left
            data101(3)
            break;
        case 40:    // down
            data101(2)
            break;
        case 32:
            glob30 = true
            break;
        case 80:
            glob16 = !glob16
            proc93()
        default:
            break;
    }
}

function up(e) {

    switch (e.keyCode) {
        case 32:
            glob30 = false
            break;
        // case 80:
        //     glob16 = false
        //     proc93()
        default:
            break;
    }

    // var index = keys.indexOf(e.keyCode);
    // if (index > -1) {
    //     array.splice(index, 1);
    // }
}

// glob47.addEventListener("mousedown", this.data17, false);

// function detectCoordinate(e) {
// 	var rect = gameBoard.getBoundingClientRect()
// 	var x = Math.floor((e.layerX - rect.left) / pieceWidth)
// 	var y = Math.floor((e.layerY - rect.top) / pieceWidth)

// 	var position = { x: x, y: y }
// 	return position
// }

function data17(clickPoint) {
    //    long D0;
    // console.log(clickPoint)
    var minMovableV,
        maxMovableV,
        minMovableH,
        maxMovableH


    minMovableV = glob24 - 16 //+ glob23 //- 16;  // max movable tile index
    maxMovableV = (glob58 - 2) * glob24 + minMovableV;
    minMovableH = glob24 - 16;
    maxMovableH = (glob57 - 2) * glob24 + minMovableH;

    if (clickPoint.layerX <= minMovableV)
        return;

    if (clickPoint.layerY >= maxMovableV)
        return;

    if (clickPoint.layerX <= minMovableH)
        return;

    if (clickPoint.layerY >= maxMovableH)
        return;

    var index = Math.floor((clickPoint.layerX - minMovableH) / glob24 + 1)
    var row = Math.floor((clickPoint.layerY - minMovableV) / glob24 + 1)

    for (direction = 0; direction < 4; direction++) {
        var nextRow = row + ptArr[direction].y;
        var nextIndex = index + ptArr[direction].x;

        var tile = glob41[nextRow * 8 + nextIndex];

        if (tile == Empty)
            data101(direction);

    }
}




function data101(direction) {

    console.log(direction)
    if (glob6 == false && glob64 == 0) {

        glob63 = glob61 - ptArr[direction].y; // D1
        glob62 = glob60 - ptArr[direction].x; // D2

        var D6 = glob41[glob63 * 8 + glob62];

        // IF ITS NOT AN EDGE
        if ((D6 & Edge) == 0) {

            glob64 = glob24;
            glob65 = direction;

            var L, T, R, B;
            L = glob24 * glob62 - 16;
            T = glob24 * glob63 - 16 //+ glob23 - 16;
            R = L + glob24;
            B = T + glob24;

            glob66 = new Rect(L, T, R, B)
            glob172 = TickCount();

            proc139(3);     // panel move

        }
    }
}



let sounds = [
    "thema short",
    "thema full",
    "congraturation",
    "panel move",
    "station",
    "carrot",
    "crash",
    "loop",
    "gen dog"
]

function proc139(sndID) {
    // console.log(sndID)
    sound = sounds[sndID];
    // console.log(sound)
    // document.getElementById(sound).cloneNode(true).play()
    ion.sound.play(sound);
    console.log("playing " + sound)
}


/* rush */
function proc109() {

    // GetKeys(glob30);
    if (!glob30) {
        //    if ( BitTst(glob30, 0x36) || !Button() ) {
        A5[1].lon118C += 2;
        if (A5[1].lon118C > glob38) {
            A5[1].lon118C = glob38;
        }
    } else {
        A5[1].lon118C -= 3;
        if (A5[1].lon118C < 4) {
            A5[1].lon118C = 4;
        }
    }
}




function selectDificulty(value) {
    newGamePressed()
    glob39 = value;
    // document.getElementById("dificultySelector").blur()
    clearInterval(updateInterval)
    // proc46(glob39);
    glob27 = true;
    glob6 = false;

    setup()
}

function selectorActive() {

}



/* pause */
function proc93() {

    var vdn_1;
    var vdn_3;
    if (glob16) {
        console.log("proc93 glob16")
        proc53()
        if (!glob175) {

            glob28 = false;
            lTicks = TickCount();
            pic = stage;

            // if (ResError()!=noErr)
            //     proc135(256, 1);


            // Rect r;
            // GetPortBounds(GetWindowPort(mainWindowPtr), &r);


            // int newleft = (((r.right - r.left)-160)/2)+r.left;
            // int newright = newleft + 160;
            // int newtop = (((r.bottom - r.top)-160)/2)+r.top;
            // int newbottom = newtop + 160;

            // SetRect(&winRect, newleft, newtop, newright, newbottom);

            // newWind = NewWindow(nil, &winRect, nil, true, plainDBox, (WindowPtr)-1L, true, (long)nil);

            //////////////////////////////////////////////////////////////////////////////////////////////////////////


            winRect = new Rect(0, 0, 160, 160)
            BGRect = winRect.clone()

            var picRect = new Rect(0, 0, stage.width, stage.height)
            // QDGetPictureBounds(pic, &picRect);

            proc113(winRect, picRect);
            picRect.offset(0, (10 - picRect.top));

            // var r;
            // GetPortBounds(GetWindowPort(mainWindowPtr), &r);
            // var r = new Rect(0, 0, ctx.width, ctx.height)

            // proc113( r, winRect);

            glob176.style.display = "block"
            var ctx2 = glob176.getContext("2d");

            glob176.width = winRect.w
            glob176.height = winRect.h


            ctx2.fillStyle = "#5CFACE";         // aquamarine
            ctx2.fillRect(BGRect.x, BGRect.y, BGRect.w, BGRect.h)


            var rndRect = new Rect(5.5, 79 + 10.5, 155.5, 123 + 10.5)
            ctx2.fillStyle = "#FFFFFF"
            ctx2.strokeStyle = "#000000"
            ctx2.lineWidth = 1
            roundRect(ctx2, rndRect, 16, true, true)

            var picRect = new Rect(45, 0 + 10, 115, 87 + 10)
            ctx2.drawImage(pic, picRect.x, picRect.y)




            // set the font to Charcoal 18pt and get the height

            ctx2.font = "24px Charcoal"

            stageStr = "pause"
            ctx2.fillStyle = "#000000"

            ctx2.textAlign = "center";
            ctx2.fillText(stageStr, 80.5, 114.5);
            glob142 = 30;


            // glob176
        }
        glob175 = true;
    } else {
        if (glob175) {
            proc54();
            glob176.style.display = "none"
            // DisposeWindow(glob176);
        }
        glob175 = false;
    }
}

function dismissScores() {
    document.getElementById("leaderboard").style.display = "none"
    // updateInterval = setInterval(update, 1000 / 60)
    proc54()
}
function showHighScores() {
    // clearInterval(updateInterval)
    proc53()

    // var dificultyName
    // switch (glob39) {
    //     case 1:
    //         dificultyName = "Easy"
    //         break;
    //     case 2:
    //         dificultyName = "Medium"
    //         break;
    //     case 3:
    //         dificultyName = "Hard"
    //         break;

    //     default:
    //         break;
    // }


    // FBInstant
    //     .getLeaderboardAsync(dificultyName + '.' + FBInstant.context.getID())
    //     .then(leaderboard => leaderboard.getEntriesAsync(10, 0))
    //     .then(entries => {
    //         for (var i = 0; i < entries.length; i++) {
    //             console.log(
    //                 entries[i].getRank() + '. ' +
    //                 entries[i].getPlayer().getName() + ': ' +
    //                 entries[i].getScore()
    //             );
    //         }
    //     }).catch(error => console.error(error));

    // document.getElementById("leaderboard").style.display = "initial"
}

function muteButtonPress() {
    console.log("glob183 = " + glob183)
    setSound(!glob183)
    document.getElementById("muteIcon").innerText = glob183 ? "volume_up" : "volume_off"
}

function musicButtonPress() {
    setMusic(!glob29)
    document.getElementById("musicIcon").innerText = glob29 ? "music_note" : "music_off"
}


var touchStartClientX, touchStartClientY;

function setupControlls() {

    glob48.addEventListener("mousedown", this.data17, false);

    glob48.addEventListener("touchstart", function (event) {
        // e.preventDefault();
        // data17(e)

        if ((!window.navigator.msPointerEnabled && event.touches.length > 1)
            || event.targetTouches.length > 1) {
            return; // Ignore if touching with more than 1 finger or touching input
        }
        if (window.navigator.msPointerEnabled) {
            touchStartClientX = event.pageX;
            touchStartClientY = event.pageY;
        } else {
            touchStartClientX = event.touches[0].clientX;
            touchStartClientY = event.touches[0].clientY;
        }
        event.preventDefault();

    }, { passive: false });

    glob48.addEventListener("touchmove", function (event) {
        event.preventDefault();
    }, { passive: false });

    glob48.addEventListener('touchend', function (event) {
        if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
            event.targetTouches.length > 0) {
            return; // Ignore if still touching with one or more fingers or input
        }

        var touchEndClientX, touchEndClientY;
        if (window.navigator.msPointerEnabled) {
            touchEndClientX = event.pageX;
            touchEndClientY = event.pageY;
        } else {
            touchEndClientX = event.changedTouches[0].clientX;
            touchEndClientY = event.changedTouches[0].clientY;
        }
        var dx = touchEndClientX - touchStartClientX;
        var absDx = Math.abs(dx);

        var dy = touchEndClientY - touchStartClientY;
        var absDy = Math.abs(dy);
        if (Math.max(absDx, absDy) > 10) {
            // (down : up) : (down : up)
            direction = absDx > absDy ? (dy > 0 ? "down" : "up") : (dx > 0 ? "left" : 0)
            console.log("")
            data101(absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
        } else {
            data17(event)
        }
        event.preventDefault();
    }, { passive: false })
}

function newGamePressed() {
    var newButton = document.getElementById("newGame")
    var controlls = document.getElementById("controlls")
    
    var buttons = document.getElementsByClassName("dificulty")

    if (newButton.style.transform != "") {
        newButton.style = ""
        controlls.style = ""
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].style = ""
        }
    } else {
        var buttonStyle = window.getComputedStyle(newButton)
        var controllStyle = window.getComputedStyle(controlls)
        var dx =   - ( parseInt(controllStyle.width, 10) - parseInt(buttonStyle.width, 10)) / 2
        console.log(dx)
        newButton.style = "transform: translate(" + dx + "px, 0);"
        
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].style = "transform: translate(" + dx + "px, " + (50*(i+1)) + "px); opacity: 1;"
        }
        
        // newButton.style = "position: absolute;left: 50%; transform: translate(-50%, 0);"
        // var margin = parseInt(buttonStyle.width, 10) + parseInt(controllStyle.getPropertyValue("margin-right"), 10) + 5
        // console.log(margin)
        // controlls.style = "margin-right:" + margin + ";"
    }
}