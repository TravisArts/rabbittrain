

var edgeClosedImage = new Image()
var edgeOpenImage = new Image()
var tileBlueImage = new Image()
var tileGreenImage = new Image()
var tilePinkImage = new Image()
var tileYellowImage = new Image()

var stage = new Image()
var opening = new Image()
var character = new Image()

let pictures = [
    tileGreenImage,
    tileBlueImage,
    tilePinkImage,
    tileYellowImage,
    edgeOpenImage,
    edgeClosedImage
]

function setupResources() {
    edgeClosedImage.src = 'Images/EdgeClosed.png';
    edgeOpenImage.src = 'Images/EdgeOpen.png';
    tileBlueImage.src = 'Images/TileBlue.png';
    tileGreenImage.src = 'Images/TileGreen.png';
    tilePinkImage.src = 'Images/TilePink.png';
    tileYellowImage.src = 'Images/TileYellow.png';

    stage.src = 'Images/stage.png'
    opening.src = 'Images/opening.png'
    character.src = 'Images/Sprites.png'

    ion.sound({
        sounds: [
            { name: "thema short" },
            { name: "thema full" },
            { name: "congraturation" },
            { name: "panel move" },
            { name: "station" },
            { name: "carrot" },
            { name: "crash" },
            { name: "loop" },
            { name: "gen dog" }
        ],

        // main config
        path: "Sound/",
        preload: true,
        multiplay: true,
        volume: 1 //0.9
    });

    loadSettings()
}


document.addEventListener("readystatechange", function () {
    console.log(document.readyState)
    if (document.readyState === "interactive") {
        //dom is ready, window.onload fires later
        document.removeEventListener("readystatechange", this)
        setupResources()
        // for (var i = 0; i < 9; i++) {
        //     A5[i] = new structLen44()
        // } 
    }
})


window.onload = function () {


    loadTime = new Date().getTime()

    glob47 = document.getElementById("myCanvas")
    glob48 = document.getElementById("hiddenCanvas")

    glob50 = glob47.getContext("2d")
    glob52 = glob48.getContext("2d")

    glob55b = document.getElementById("rabbitCanvas")
    glob55 = glob55b.getContext("2d")

    glob176 = document.getElementById("canvas2")

    glob180 = document.getElementById("spriteCanvas")
    glob181 = glob180.getContext("2d")

    glob180.style.width = character.width
    glob180.style.height = character.height
    glob180.width = character.width
    glob180.height = character.height
    glob181.drawImage(character, 0, 0, character.width, character.height)

    glob55b.style.width = 512
    glob55b.style.height = 32
    glob55b.width = 512
    glob55b.height = 32


    setupControlls()


    setup()

};

function setup() {
    // randomizeLayout()
    // proc57()
    updateInterval = setInterval(update, 1000 / 60);
}

function randomizeLayout() {
    var D0, D1, D5;
    var index;
    var length;
    switch (glob39) {
        case 3:
            glob46 = glob45 + 16;
            break;
        case 2:
            glob46 = glob45 + 8;
            break;
        case 1:
            glob46 = glob45;
            break;
        default:
            break;
    }

    if (glob6) {
        glob46 = glob45;
    }

    D5 = glob46 >> 3;
    //    swap(D5);

    // console.log(D5)

    var levelArray = levelLayouts[D5];

    index = 56;
    glob57 = (levelArray[index] << 8) + levelArray[index + 1];
    index = 58;
    glob58 = (levelArray[index] << 8) + levelArray[index + 1];
    index = 60;
    glob59 = (levelArray[index] << 8) + levelArray[index + 1];

    var w = glob57 * glob24 - 32
    var h = glob58 * glob24 - 32
    glob47.style.width = w
    glob47.style.height = h
    glob47.width = w
    glob47.height = h


    var container = document.getElementById("container")
    // var w = Math.min(container.offsetWidth, glob47.style.width)
    // var h = glob47.style.height
    if (container.offsetWidth < w) {
        h *= container.offsetWidth / w
        w = container.offsetWidth
    }

    glob48.style.width = w
    glob48.style.height = h
    glob48.width = glob47.width
    glob48.height = glob47.height
    // SetRect(&glob47, 0, 0, glob57*glob24-32, glob58*glob24-32);


    D0 = glob58 - 2;
    D1 = glob57 - 2;
    D1 *= D0;
    glob149 = D1;

    if (glob46 > 14) {

        glob145 = proc131(glob149);;
        glob146 = proc131(glob149 - glob145);
        glob147 = proc131(glob149 - glob145 - glob146);
        glob148 = glob149 - glob145 - glob146 - glob147 + 1;
        glob150 = 40;

    } else if (glob46 > 9) {
        glob145 = glob149 / 3;

        glob146 = glob149 / 3;

        glob147 = glob149 / 3;

        glob148 = glob149 / 3;
        glob150 = 30;
    } else if (glob46 > 6) {
        // you ended here

        glob145 = (glob149 / 3) + 1;
        glob146 = (glob149 / 3) + 1;
        glob147 = (glob149 / 3) + 1;
        glob148 = 2;
        glob150 = 10;
    } else {
        //    if (glob46 < 6) {
        glob145 = (glob149 / 3) + 1;
        glob146 = (glob149 / 3) + 1;
        glob147 = (glob149 / 3) + 1;
        glob148 = 0;
        glob150 = 5;
    }

    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 8; j++) {
            var value = levelArray[8 * i + j]
            glob41[i * 8 + j] = value & 0xFF
            if (glob41[i * 8 + j] == 0) {
                glob41[i * 8 + j] = proc92();
            }

        }
    }
    glob41[19] = 0x00FF;
    glob41[27] = 0x0030;
    glob41[35] = 0x0030;
    //    glob42 = 0x00000000FF;
    //    glob43 = 48;
    //    glob44 = 48;
    glob60 = 3;
    glob61 = 2;
    glob64 = 0;

    // console.log(glob41)
}




function proc131(range) {
    return Math.floor(Math.random() * Math.floor(range));
}


var updateInterval

function update() {
    // console.log("update")
    // if (glob65) {
    //     console.log("glob65: " + glob65)
    //     proc101()
    // }
    proc94();
}





function proc65() {
    var rect;

    var L, T, R, B;
    proc133();

    L = (glob56 - 1) * 32;
    T = 0;
    R = glob56 * 32;
    B = 32;

    rect = new Rect(L, T, R, B)
    // rect = {x: L, y: T, r: R, b: B }
    // SetRect( &rect, L, T, R, B);

    glob54 = glob55
    glob53 = glob52

    while (glob56 > 0) {
        CopyBits(glob54, glob53, rect, arr1308[glob56], srcCopy, nil);
        // glob53 = ctx.getImageData(glob66.x, glob66.y, (glob66.r - glob66.x), (glob66.b - glob66.y))
        // CopyBits( glob54, glob53, &rect, &arr1308[glob56], srcCopy, nil);

        rect.offset(-32, 0)
        // OffsetRect(&rect, -32, 0);
        glob56 -= 1
    }
    proc134();
    //    copyBitsToExternWindow( (BitMap *) *glob54, &rect);

    for (var i = 0; i < 9; i++) {
        A5[i].offset24 = A5[i].offset16;
    }

}



/* false = crash; true = keep going */
function proc110(param1) {

    var result;
    var index;

    //not final frame on tile
    if (param1.offset14 < param1.offset12 - 1) {

        param1.offset14 += 1;
        index = param1.offset10;
        param1.shr11AC = Arr12A[index][param1.offset14 + 16];    // fixed
        result = true;

    } else { // is the final frame on tile

        index = param1.offset10;
        var var1 = Arr12A[index][25]; // fixed

        result = !proc105(param1, var1);

        if (result) {
            result = proc106(param1);
            // console.log("proc106(param1) = " + result)
        }


        param1.offset14 = 0;
    }

    return result;
}



function proc37() {

    var vbj_5;

    var direction;


    if (glob7 < 2) {

        direction = proc131(4);

        if (glob64 == 0) {
            /* more goes here from proc37 */

            glob63 = glob61 - ptArr[direction].y;
            glob62 = glob60 - ptArr[direction].x;


            if ((glob41[glob62 + glob63 * 8] & 0xC0) == 0) {
                glob64 = glob24;
                glob65 = direction;
                var L, T, R, B;
                L = glob24 * glob62 - 16;
                T = glob24 * glob63 - 16// + glob23;
                R = L + glob24;
                B = T + glob24;
                glob66 = new Rect(L, T, R, B);
                glob172 = TickCount();
            }
        }
    }


    proc65();
    proc102();
    proc101();
    proc108();
    proc25();
    proc21();
    proc22();
    proc26();
    glob7 = proc100();
    proc98();
    proc66();
    proc142();

    if (glob160) {
        glob27 = true;
        glob28 = true;
    }
}

function proc94() {

    // console.log("proc94")
    proc93();

    if (glob27) {
        proc77(); // setup parameters
    } else {
        if (glob28) {
            proc79(); // start level
        } else {
            if (glob6) {
                proc37();
            } else {
                proc97();
            }
        }
    }
}

function proc97() {

    if (glob162) {
        proc96();
    } else {
        proc65();
        proc102();
        proc101();
        proc108();
        proc25();   // player crash with cart test
        proc21();   // player takes carrot test
        proc22();   // enimy takes carrot test
        proc26();   // check if destroy enimy test
        proc100(); // glob7 isnt changed
        proc98();
        proc66();
        proc142();

        if (glob160) {
            proc24();   // check if player crashes into wall
        }
    }
}


function proc77() {

    // if(glob126) {           // shrink
    //     glob24 = 48;        // tile width
    //     glob25 = 18;        //
    //     glob23 = 34;        // status bar size
    // } else {
    glob24 = 64;        // tile width
    glob25 = 24;        //
    glob23 = 18;        // status bar size
    // }

    glob27 = false;
    glob160 = false;
    glob31 = 0;

    glob36 = 3;

    if (glob39 == 1) {
        glob36 += 2;
    }
    if (glob39 == 3) {
        glob36 += 1;
    }
    glob37 = 0;
    // glob28 = true;
    glob45 = 1;
    // then this one
    if (glob6) {              // if demo is running
        proc36();
        glob28 = true;
    } else {
        proc67();
        if (glob29) {
            proc76();
        } else {
            glob28 = true;
        }
        // proc63();
    }
}

/* use default character */
function proc36() {
    glob45 = proc131(8) + 1;
}



function proc79() {

    var lTicks;
    var pic;
    var picRect;
    var winRect;
    var rndRect;
    var BGRect;
    var newWind;
    var stageStr, vcz_10;


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

    newWind = document.getElementById("canvas2")
    newWind.style.display = "block"
    var ctx2 = newWind.getContext("2d");



    newWind.width = winRect.w
    newWind.height = winRect.h
    // newWind = NewCWindow( nil, &winRect, nil, false, plainDBox, (WindowPtr)-1, false, nil);

    //  if(newWind == nil)
    //      proc135(256, 1);

    // ShowWindow(newWind);
    // SetPort( GetWindowPort(newWind));
    // BeginUpdate(newWind);

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

    if (glob6) {                // if demo
        ctx2.font = "12px Charcoal"

        stageStr = "Demonstration"
        ctx2.fillStyle = "#000000"

        ctx2.textAlign = "center";
        ctx2.fillText(stageStr, 80.5, 114.5);

        glob142 = 12;
        // RGBForeColor(&glob138);
    } else {
        ctx2.font = "18px Charcoal"

        stageStr = "Stage: " + glob45
        ctx2.fillStyle = "#000000"

        ctx2.textAlign = "center";
        ctx2.fillText(stageStr, 80.5, 114.5);
        glob142 = 30;
    }

    proc139(0);           // thema short
    randomizeLayout();               // randomize layout
    proc57();               // layout tiles

    clearInterval(updateInterval)
    setTimeout(function () {
        DisposeWindow(newWind);
        // proc90();               // size the window to fit the new layout

        // ShowWindow(mainWindowPtr);

        // proc63();               // draw board to main window
        proc81(glob142);

        proc74();               // set bonus
        proc51();               // draw stage string
        proc41();               // draw lives and what not

        // FlushEvents( osEvt, nullEvent );
        updateInterval = setInterval(update, 1000 / 60);
    }, 2500)



}


function proc113(srcRect, dstRect) { // center rect
    // short L, T, R, B;

    //    L = (srcRect.left + dstRect.left + dstRect.right - srcRect.right)/2;
    //    T = ((dstRect.bottom - dstRect.top) / 4) + dstRect.top;
    //    R = srcRect.right + L - srcRect.left;
    //    B = srcRect.bottom + T - srcRect.top;

    dstRect.left = (srcRect.left + srcRect.right - dstRect.right + dstRect.left) / 2;
    dstRect.top = Math.abs(srcRect.bottom - srcRect.top) / 4 + srcRect.top;
    dstRect.right = dstRect.right + dstRect.left - dstRect.left;
    dstRect.bottom = dstRect.bottom + dstRect.T - dstRect.top;

    // console.log(srcRect)
    // console.log(dstRect)
    // SetRect(dstRect, L, T, R, B);
}


//set initial bonus
function proc74() {
    var D0;
    glob34 = TickCount();
    D0 = (glob46 - 1) % 8;
    if (D0 >= 3) {
        glob33 = 4000;
    } else {
        glob33 = 2000;
    }
}

function proc51() {
    // var levelStr;

    document.getElementById('stage').innerText = glob45

    // NumToString(glob45, levelStr);
    // MoveTo(10, 12);

    // DrawString("\pStage:");
    // DrawString( levelStr);
    // DrawString("\p ");
    // GetPen(&glob14);

}


/* draw sprite image */
function proc112(imageNumber, pRect) {
    var L, T, R, B;
    var rect;
    var port;
    var gdh;
    GetGWorld(port, gdh);

    var H, V;
    V = imageNumber >> 3// 8;
    H = imageNumber % 8;



    L = H * 32;
    T = V * 32;
    R = H * 32 + 32;
    B = V * 32 + 32;


    //    GetPortBounds(glob181, &rect);
    //    copyBitsToExternWindow( GetPortBitMapForCopyBits(glob181), &rect);


    rect = new Rect(L, T, R, B);
    //    copyBitsToExternWindow( GetPortBitMapForCopyBits(glob181), &rect);


    // CopyMask(glob181, port, rect, rect, pRect)
    CopyMask(glob181, ctx, rect, pRect)

    //    GetPortBounds(port, &rect);
    //    copyBitsToExternWindow( GetPortBitMapForCopyBits(port), &rect);


    //    CopyMask(GetPortBitMapForCopyBits(glob180),
    //             GetPortBitMapForCopyBits(glob181),
    //             GetPortBitMapForCopyBits(port),
    //             &rect,
    //             &rect,
    //             pRect);
}


/* begin Demonstration */
function proc67() {
    // proc68(glob39);
}

function proc108() {

    for (var i = 0; i < 9; i++) {

        var index = A5[i].offset10;
        // console.log("index = " + index + ", A5[" + i + "].offset14 = " + A5[i].offset14)

        var D7 = Arr12A[index][A5[i].offset14 + 0] - 16;  // fixed
        var D6 = Arr12A[index][A5[i].offset14 + 8] - 24;  // fixed


        // D6 += 18;

        if (glob126) {          // if shrink
            D7 = ((D7 * 3) >> 2) - 4;
            D6 = ((D6 * 3) >> 2) - 4;
        }

        var L, T, R, B;

        /* on moving space */
        if (A5[i].offset2 == glob62 && A5[i].offset4 == glob63 && glob64 != 0) {
            L = glob66.left + D7;
            T = glob66.top + D6;
            R = 32 + glob66.left + D7;
            B = 32 + glob66.top + D6;

            A5[i].offset16 = new Rect(L, T, R, B);
        } else {


            L = A5[i].offset2 * glob24 + D7 - 16;
            T = A5[i].offset4 * glob24 + D6 - 16;
            R = A5[i].offset2 * glob24 + D7 + 16;
            B = A5[i].offset4 * glob24 + D6 + 16;

            A5[i].offset16 = new Rect(L, T, R, B);
        }

    }

}

// check if player crashes with cart
function proc25() {
    for (var i = 2; i < 9; i++) {
        if (A5[i].offset0 == true) {
            var playerRect = A5[1].offset16
            var reci = A5[i].offset16
            if (playerRect.left < reci.left + 12 && playerRect.left > reci.left - 12) {
                if (playerRect.top < reci.top + 14 && playerRect.top > reci.top - 14) {
                    glob160 = true; // crash
                    proc139(6); // crash sound
                    A5[i].shr1188 = 1;
                }
            }
        }

    }
}

// is carrot collected
function proc21() {
    if (A5[0].offset0 == true) {
        if (A5[0].shr1186 == 5) {
            if (A5[0].offset16.left - 8 < A5[1].offset16.left && A5[0].offset16.left + 8 > A5[1].offset16.left) {
                if (A5[0].offset16.top - 8 < A5[1].offset16.top && A5[0].offset16.top + 8 > A5[1].offset16.top) {
                    A5[0].shr1186 = 1;
                    glob31 += 600;
                    proc139(5); // carrot sound;
                    glob37 += 1;
                    if (glob37 > 2) {
                        glob37 = 0;
                        glob36 += 1;
                    }
                    if (glob36 > 5) {
                        glob36 = 5;
                    }
                    proc41();
                }
            }
        } else if (A5[0].shr1186 == 1) {
            A5[0].offset0 = false;
        }
    }
}

/* enemy get carrot */
function proc22() {

    if (A5[0].offset0 == true && A5[0].shr1186 == 5) {

        for (var i = 2; i < 9; i++) {

            if (A5[i].offset0 == true && A5[i].shr1186 == 0) {

                if (A5[0].offset16.left - 4 < A5[i].offset16.left && A5[i].offset16.left < A5[0].offset16.left + 4) {
                    if (A5[0].offset16.top - 8 < A5[i].offset16.top && A5[i].offset16.top < A5[0].offset16.top + 8) {
                        A5[0].shr1186 = 1;
                        A5[i].shr1186 = proc131(70) + 30;
                        A5[i].shr11AC = 38;
                        proc139(5);  // carrot sound;
                    }
                }
            }
        }
    } else if (A5[0].shr1186 == 1) {
        A5[0].offset0 = false;
    }
}

function proc26() {

    // check if wall closed on enemy cart            crashes with empty space or wall
    for (var i = 2; i < 9; i++) {
        if (A5[i].offset0 == true && A5[i].shr1188 == 0) {

            var index = A5[i].offset4 * 8 + A5[i].offset2;

            if ((glob41[index] & 0x3F) == 0) {
                proc139(6); // crash sound

                A5[i].shr1188 = 1;
                glob31 += 500;


                if (A5[i].shr1186 > 5) {
                    A5[0] = A5[i].copy()    // memcpy( &A5[0], &A5[i], sizeof(structLen44));

                    A5[0].shr1186 = 5;
                    A5[0].offset2 = 46;
                }
            }
        }
    }


    // check if 2 carts crash into each other
    for (var i = 2; i < 8; i++) {
        for (var j = i + 1; j < 9; j++) {
            if (A5[i].offset0 == true && A5[j].offset0 == true) {
                if (A5[i].shr1188 == 0 && A5[j].shr1188 == 0) {

                    var reci, recj;
                    reci = A5[i].offset16;
                    recj = A5[j].offset16;

                    if (recj.left < reci.left + 12 && recj.left > reci.left - 12) {
                        if (recj.top < reci.top + 14 && recj.top > reci.top - 14) {
                            proc139(6); // crash sound
                            A5[i].shr1188 = 1;
                            A5[j].shr1188 = 1;
                            glob31 += 1000;

                            if (A5[i].shr1186 > 5) {
                                A5[0] = A5[i].copy();
                                A5[0].shr1186 = 5;
                                A5[0].offset2 = 46;
                            }

                            if (A5[j].shr1186 > 5) {
                                A5[0] = A5[j].copy();
                                A5[0].shr1186 = 5;
                                A5[0].offset2 = 46;
                            }
                        }
                    }
                }
            }
        }
    }
}


/* move tile */
function proc100() {
    //    RGBColor vdu_1, vdu_3, vdu_5, vdu_7;
    //    Ptr A0, A1;
    var D0, D1, D5, D6;

    var D7;// = 0;

    if (glob64 == 0) {
        glob163 = A5[1].copy();
        glob167 = glob163.copy();

        D7 = 0;
        glob159 = false;

        while (proc106(glob167) && D7 < 50 && !glob159) {
            if (glob163.offset2 == glob167.offset2 && glob163.offset4 == glob167.offset4 && glob163.offset6 == glob167.offset6) {
                glob159 = true;
            }
            D7 += 1;
        }

    } else {
        glob159 = false;
        glob171 = TickCount();
    }

    // SetPort(glob50);
    // MoveTo( 140, 12);
    D6 = TickCount() - glob171;
    if (glob159) {
        document.getElementById("loop").style.display = "block"
        if (D6 > 300) {            // time playing > 5 sec
            document.getElementById("loop").style.color = glob155;
            document.getElementById("loop").style.backgroundColor = glob151;
            D5 = 15;                // 1/4 sec
        } else {
            document.getElementById("loop").style.color = glob151;
            document.getElementById("loop").style.backgroundColor = glob155;
            D5 = 30;                // 1/2 sec
        }

        D0 = D6 % D5
        D1 = D5 % 4
        // D1 = proc14( 4, D5);

        // printf("D5: %5ld, \tD6: %5ld, \tD0: %5ld, \tD1: %5ld\n", D5, D6, D0, D1);

        if (D1 < D0) {
            // DrawString("\p  Loop!!  ");
            // RGBForeColor( &glob18);
            // RGBBackColor( &glob19);

            if (!glob161) {
                proc139(7);  // loop sound
                glob161 = true;
            }
        } else {
            // RGBForeColor( &glob18);
            // RGBBackColor( &glob19);
            proc50();
            glob161 = false;
        }

        if (D6 > 450) {
            proc99();
            glob171 = TickCount();
        }

    } else {
        document.getElementById("loop").style.display = "none"
        proc50();
    }
    return D7;
}

function proc99() {
    proc139(8);  // gen dog sound

    for (var i = 2; i < 8; i++) {
        if (!A5[i].offset0) {
            A5[i] = glob163;
            A5[i].offset0 = true;
            A5[i].offset6 = Arr12A[A5[i].offset10][25]; // fixed

            var index = A5[i].offset4 * 8 + A5[i].offset2;
            A5[i].offset10 = proc104(A5[i].offset6, glob41[index]);
            proc106(A5[i]);
            proc106(A5[i]);

            A5[i].lon1194 = TickCount();
            A5[i].shr1190 = 0;
            A5[i].shr11AC = 37;     // cart normal

            var D7 = Arr12A[A5[i].offset10][A5[i].offset14 + 0] - 16;     // fixed
            var D6 = Arr12A[A5[i].offset10][A5[i].offset14 + 8] - 24;   // fixed

            if (glob126) {          // if shrink
                D7 = D7 * 3 / 4 - 4;
                D6 = D6 * 3 / 4 - 4;
            }

            var L, T, R, B;

            L = A5[i].offset2 * glob24 + D7 - 16;
            T = A5[i].offset4 * glob24 + D6 - 16;
            R = A5[i].offset2 * glob24 + D7 + 16;
            B = A5[i].offset4 * glob24 + D6 + 16;

            A5[i].offset16 = new Rect(L, T, R, B);
            return;
        }
    }

}


function proc104(param1, value) {

    var D0, D3, D5, D6;

    var D7;

    var A6 = new Array(7)
    D3 = 0;

    var funRslt = Math.abs(param1)// & 0x00FF;
    var P1 = (param1 & -1) | ((param1 & -1) >> 8);

    if (value != 0xFF) {            // if tile is not emtpy

        if ((value & 0xC0) != 0) { // tile is an edge
            // console.log("0x" + param1.toString(16) + "\n0x" + funRslt.toString(16) + "\n0x" + P1.toString(16))
            D5 = 2;
            // if (P1 <= 0) {
            if ((value & 0x40) == 0) {
                D6 = 20;
            } else {
                D6 = 12;
            }
        } else {
            D5 = 3;
            D6 = 0;
        }

        D6 += D5 * funRslt;


        for (var D4 = D6; D4 < D6 + D5; D4++) {

            D0 = ArrBA[D4];

            if ((D0 & value) != 0) {
                A6[D3] = D4;
                D3++;
            }

        }
    }

    if (D3 != 0) {
        //        D7 = A6[ proc131( D3 - 1 ) ];
        D7 = 27 - A6[proc131(D3 - 1)];
        //        if (D7 <= 16) {
        //            D7 += 11;
        //        }

    } else {
        D7 = 60;
    }
    if (!(D7 <= 60)) {
        console.log(D7)
    }

    return D7;
}




/* determine if we crash from moving square */
function proc105(param1, funRslt) {
    var direction;

    direction = funRslt;
    var hitsEmpty = false;

    if (glob64 != 0) {

        if (glob62 == param1.offset2 && glob63 == param1.offset4)
            hitsEmpty = true;

        // if the next tile is the empty one
        if (ptArr[direction].x + param1.offset2 == glob62 && ptArr[direction].y + param1.offset2 == glob63) {
            hitsEmpty = true;
        }
    }

    if (hitsEmpty) {
        param1.offset6 = Arr12A[param1.offset10][25];
        var index = param1.offset4 * 8 + param1.offset2;
        param1.offset10 = proc104(param1.offset6, glob41[index]);
    }

    return hitsEmpty;
}


/* true if next tile is not empty */
function proc106(param1) {

    var nextY, nextX
    var D4
    var result
    var D5


    D5 = Arr12A[param1.offset10][25];    // fixed

    D4 = ((D5 + 2) & 3);

    if (D5 > 2) {
        // D4 |= 0xFF00;
        // D4 |= -256;
        D4 *= -1
    }

    nextY = param1.offset4 + ptArr[D5].y;
    nextX = param1.offset2 + ptArr[D5].x;


    param1.offset10 = proc104(D4, glob41[8 * nextY + nextX]);
    // console.log("proc104(" + D4 + ", glob41[" + 8 * nextY + nextX + "]) = " + param1.offset10)
    if (param1.offset10 == 60) { // else goto lea_1
        result = false;
        param1.offset6 = D5;

        var index = param1.offset4 * 8 + param1.offset2;

        param1.offset10 = proc104(param1.offset6, glob41[index]);
        // console.log("proc104(" + param1.offset6 + ", glob41[" + index + "]) = " + param1.offset10)
    } else {
        result = true;
        param1.offset6 = Math.abs(D4);
        param1.offset2 = nextX;
        param1.offset4 = nextY;
    }

    proc107(param1);


    return result;
}

function proc107(param1) {

    var index;
    param1.offset14 = 0;

    index = param1.offset10;

    param1.offset12 = Arr12A[index][24]; // fixed
    param1.shr11AC = Arr12A[index][param1.offset14 + 16]; // fixed

}

function proc98() {
    var Tick = TickCount();
    var D0 = (Tick - glob34) / 3;

    glob32 = glob33 - D0;
    if (glob32 < 0)
        glob32 = 0;

}

function proc66() {
    var rect; //vcm_1

    proc133();
    proc140();

    rect = new Rect(0, 0, 32, 32);

    SetGWorld(glob55, nil);
    glob56 = 0;


    //    long D0;

    glob53 = glob52
    glob54 = glob55

    var i;
    for (i = 0; i < 9; i++) {

        if (A5[i].offset0 == true) {

            CopyBits(glob53, glob54, A5[i].offset16, rect, srcCopy, nil);
            // var imgData = ctx.getImageData(A5[i].offset16.x, A5[i].offset16.y, A5[i].offset16.w, A5[i].offset16.h);
            // ctx.putImageData(imgData, rect.x, rect.y)


            rect.offset(32, 0)
            glob56++;


            arr1308[glob56] = A5[i].offset16;
        }
    }

    proc133();


    for (i = 0; i < 9; i++) {
        if (A5[i].offset0 == true) {
            if (i != 0 || A5[i].shr1186 == 5) {
                proc64(i);                          // draw sprite
            }
        }
    }

    proc134();

    //    copyBitsToExternWindow((BitMap *) *glob53, &glob70);
    //    copyBitsToExternWindow((BitMap *) *glob53, &glob192);
    //    copyBitsToExternWindow((BitMap *) *glob53, &glob193);
    //    glob53 = GetGWorldPixMap(glob52);

    // console.log(glob70)
    // CopyBits(glob53, glob47, glob70, glob70, srcCopy, nil);
    CopyBits(glob53, glob50, glob70, glob70, srcCopy, nil);

    if (glob64 == 0) {
        glob70 = new Rect(0, 0, 0, 0);
    }

    if (glob187 == 3) {

        CopyBits(glob53,
            glob50, // glob47,
            glob192,
            glob192,
            srcCopy,
            nil);

        CopyBits(glob53,
            glob50, // glob47,
            glob193,
            glob193,
            srcCopy,
            nil);

        glob187 = 0;
    }
    proc62();

}



/* attempt to close edges */
function proc141() {
    //incomplete
    var value;

    value = glob41[A5[1].offset4 * 8 + A5[1].offset2];

    if ((value & 0xC0) == 0) {     // not an edge
        if (glob187 == 2) {
            glob187 = 3;
        }

    } else if (glob187 == 0) {
        glob186 = value;
        glob187 = 1;
        glob188 = A5[1].offset2;
        glob190 = A5[1].offset4;

    } else if (0 < glob187 && glob187 < 2) {
        if (glob186 != value) {
            glob186 = value;
            glob187 = 2;
            glob189 = A5[1].offset2;
            glob191 = A5[1].offset4;
            glob59 -= 1;    // decrease number of edge groups by 1
            glob31 += 200;  // score += 200;

            proc139(4);     // station sound
        }
    }



}


function proc142() {
    proc141();              // attempt to close edges
    if (glob59 == 0) {

        proc139(2); // congraturation sound

        // if (glob16 == true){
        proc143();
        // }
        setTimeout(proc75(), 4250)

        // proc75();       // level up
    }
}

function proc75() {
    glob45 += 1;    // level += 1
    glob28 = true;
}



function swap(x) {
    (x = (x << 16) | (x >> 16))
    return x
}

function proc15a(param1, param2) {

    var D0, D1, D7;

    D0 = param1;
    //    param1 = D1;
    D1 = param2;



    var mulD0, mulD1;
    mulD0 = 1;
    mulD1 = 1;

    if (D0 < 0)
        mulD0 = -1;
    if (D1 < 0)
        mulD1 = -1;


    D0 = Math.abs(D0);
    D1 = Math.abs(D1);

    if (D0 > 0) {
        proc17(D0, Math.abs(D1));
        D0 *= -1;
    } else if (D1 > 0) {
        proc17(Math.abs(D0), D1);
        D0 *= -1;
        D1 *= -1;
    } else {
        proc17(Math.abs(D0), Math.abs(D1));
        D1 *= -1;
    }




    D7 = 0x0000FFFF;
    if (D1 - D0 <= 0) {
        // lap_3
        if (D0 - D7 > 0) {
            //lap_4
            if (D1 - D7 > 0) {
                //lap_5
                var D2 = D0;
                var D3 = D1;
                //lap_6
                while (D1 - D7 > 0) {
                    D0 = D0 << 1;
                    D1 = D1 << 1;
                }
                D0 /= D1;
                D0 &= D7;
                //lap_7
                var BLO = true;
                var BHI = true;

                while (BLO == true && BHI == true) {
                    BLO = false;
                    BHI = false;

                    D1 = D3;
                    D1 *= D0;
                    D7 = D3;
                    swap(D7);
                    D7 *= D0;
                    swap(D0);
                    D1 += D7;
                    if (D1 < 0)
                        BLO = true;
                    D1 -= D2;
                    if (D1 > 0)
                        BHI = true;

                    if (BHI || BLO) {
                        D0 -= 1;
                    }
                }

                D1 *= -1;
            } else {
                D7 = D0;
                D0 &= 0xFFFF0000;
                swap(D0);
                D0 /= D1;
                swap(D0);
                swap(D7);
                D7 = D0;
                swap(D7);
                D0 = (D7 & 0x0000FFFF);
                swap(D7);
                D1 = (D7 & 0x0000FFFF);
            }
        } else {
            D0 /= D1;
            swap(D0);
            D1 = D0;
            D0 &= 0xFFFF0000;
            swap(D0);
        }
    } else {
        D1 = D0;
        D0 = 0;
    }



    D0 *= mulD0;
    D1 *= mulD1;

    D0 = D1;
    return D0;
}

function proc15(param1, param2) {
    var D0, D1;

    D1 = param1;
    D0 = param2;
    proc16(D0, D1);
    D0 = D1;

    console.log("param1 = " + param1 + "D1 = " + D1)
    return D0;

}

function proc16(D0, D1) {
    var mulD0, mulD1;
    mulD0 = -1;

    if (D0 > 0) {
        if (D1 > 0) {
            proc17(D0, D1);
        } else {
            D1 *= -1;
            proc17(D0, D1);
            D0 *= -1;
        }


    } else if (D1 > 0) {
        D0 *= -1;
        proc17(D0, D1);
        D0 *= -1;
        D1 *= -1;

    } else {
        D1 *= -1;
        D0 *= -1;
        proc17(D0, D1);
        D1 *= -1;
    }
}

function proc17(D0, D1) {
    var D7;
    D7 = 0x0000FFFF;
    if (D1 <= D0) {
        // lap_3
        if (D0 > D7) {
            //lap_4
            if (D1 > D7) {
                //lap_5
                var D2 = D0;
                var D3 = D1;
                //lap_6
                while (D1 - D7 > 0) {
                    D0 = D0 << 1;
                    D1 = D1 << 1;
                }
                D0 /= D1;
                D0 &= D7;
                //lap_7
                var BLO = true;
                var BHI = true;

                while (BLO == true && BHI == true) {
                    BLO = false;
                    BHI = false;

                    D1 = D3;
                    D1 *= D0;
                    D7 = D3;
                    swap(D7);
                    D7 *= D0;
                    swap(D0);
                    D1 += D7;
                    if (D1 < 0)
                        BLO = true;
                    D1 -= D2;
                    if (D1 > 0)
                        BHI = true;

                    if (BHI || BLO) {
                        D0 -= 1;
                    }
                }

                D1 *= -1;
            } else {
                D7 = D0;
                D0 &= 0xFFFF0000;
                swap(D0);
                D0 /= D1;
                swap(D0);
                swap(D7);
                D7 = D0;
                swap(D7);
                D0 = (D7 & 0x0000FFFF);
                swap(D7);
                D1 = (D7 & 0x0000FFFF);
            }
        } else {
            D0 /= D1;
            swap(D0);
            D1 = D0;
            D0 &= 0xFFFF0000;
            swap(D0);
        }
    } else {
        D1 = D0;
        D0 = 0;
    }

}

function proc80(param1) {

    A5[2].offset2 = 0;              // x = 0
    A5[2].offset4 = proc131(3) + 2; // y = random {2, 3, 4, 5}
    A5[2].offset6 = 1;
    A5[2].offset10 = proc104(A5[2].offset6, glob41[A5[2].offset4 * 8 + A5[2].offset2]);
    proc107(A5[2]);
    A5[2].lon1194 = TickCount();
    A5[2].shr1190 = 0;
    A5[2].shr11AC = 37;             // empty cart
    A5[2].lon118C = param1 - 6;


    A5[3].offset2 = proc131(3) + 2; // x = random {2, 3, 4, 5}
    A5[3].offset4 = 0;              // y = 0
    A5[3].offset6 = 2;
    A5[3].offset10 = proc104(A5[3].offset6, glob41[A5[3].offset4 * 8 + A5[3].offset2]);
    proc107(A5[3]);
    A5[3].lon1194 = TickCount();
    A5[3].shr1190 = 4;
    A5[3].shr11AC = 37;             // empty cart
    A5[3].lon118C = param1 - 6;



    A5[4].offset2 = glob57 - 1;     // x = width - 1
    A5[4].offset4 = proc131(3) + 2; // y = random {2, 3, 4, 5}
    A5[4].offset6 = 3;
    A5[4].offset10 = proc104(A5[4].offset6, glob41[A5[4].offset4 * 8 + A5[4].offset2]);
    proc107(A5[4]);
    A5[4].lon1194 = TickCount();
    A5[4].shr1190 = 8;
    A5[4].shr11AC = 37;             // empty cart
    A5[4].lon118C = param1 - 6;



    A5[5].offset2 = proc131(3) + 2; // x = random {2, 3, 4, 5}
    A5[5].offset4 = glob58 - 1;     // y = height - 1
    A5[5].offset6 = 0;
    A5[5].offset10 = proc104(A5[5].offset6, glob41[A5[5].offset4 * 8 + A5[5].offset2]);
    proc107(A5[5]);
    A5[5].lon1194 = TickCount();
    A5[5].shr1190 = 6;
    A5[5].shr11AC = 37;             // empty cart
    A5[5].lon118C = param1 - 6;

}

function proc81(param1) {


    for (var i = 0; i <= 9; i++) {
        A5[i] = new structLen44()
        A5[i].offset0 = false;
        A5[i].offset24 = new Rect(0, 0, 0, 0);  // offset 18
        A5[i].offset16 = new Rect(0, 0, 0, 0);
        A5[i].shr1188 = 0;
        A5[i].shr1186 = 0;

    }

    glob56 = 0;
    A5[1].offset0 = true;
    A5[1].offset2 = 3;  // x = 3
    A5[1].offset4 = 4;  // y = 4
    A5[1].offset6 = 2;
    A5[1].offset10 = proc104(A5[1].offset6, glob41[A5[1].offset4 * 8 + A5[1].offset2]);
    proc107(A5[1]);
    A5[1].lon1194 = TickCount();
    A5[1].shr1190 = 0;
    glob38 = param1 - 2;


    var D0 = glob46 >> 3 // /8;
    swap(D0);
    if (D0 < 4) {
        glob38 += 2;
    }


    //    ldb_3
    if (glob46 > 4) {
        glob38 -= 3;
    }
    //    ldb_4
    if (glob46 > 8) {
        glob38 -= 3;
    }
    //    ldb_5
    A5[1].lon118C = glob38;

    glob187 = 0;
    proc80(glob38);
    if (glob46 > 3) {
        A5[2].offset0 = true;
    }
    //    ldb_6
    if (glob46 > 12) {
        A5[4].offset0 = true;
    }
    //    ldb_7
    if (glob46 > 20) {
        A5[3].offset0 = true;
    }
    //    ldb_8
    if (glob46 > 26) {
        A5[5].offset0 = true;
    }
    //    ldb_9
    A5[0] = A5[2].copy();

    //    ldb_10
    A5[0].offset0 = true;  // show carrot
    proc106(A5[0]);
    A5[0].shr1186 = 5;
    A5[0].shr11AC = 46; // carrot

}

function proc23() {

    proc65();
    A5[1].shr11AC = 33;


    for (var j = 2; j < 9; j++) {
        if (A5[j].offset0 == true && A5[j].shr1188 != 0) {
            A5[j].shr1188++;
            if (A5[j].shr1188 >= 5) {
                A5[j].offset0 = false;
            } else {
                A5[j].shr11AC = A5[j].shr1188 + 37;
            }               // crash sequence
        }
    }
    proc66();           // draw sprites
    proc50();           // draw score

    var i = 1

    var crashSequence = setInterval(function () {
        proc65();

        var D0 = i % 2;
        A5[1].shr11AC = D0 + 33;


        for (var j = 2; j < 9; j++) {
            // int D0 = 48*D6;

            if (A5[j].offset0 == true && A5[j].shr1188 != 0) {

                A5[j].shr1188++;

                if (A5[j].shr1188 >= 5) {
                    A5[j].offset0 = false;
                } else {
                    A5[j].shr11AC = A5[j].shr1188 + 37;
                }               // crash sequence
            }
        }

        proc66();           // draw sprites
        proc50();           // draw score

        i++
        if (i >= 12) {
            clearInterval(crashSequence)
        }

    }, 200)

    var tick = TickCount()
    // var now = tick
    // while (now < tick + 144) {
    //     now = TickCount()
    // }
    // sleep(2400)

    // var tick;
    // for (var i = 0; i < 12; i++) {
    //     tick = TickCount();
    //     proc65();

    //     var D0 = i >> 1;
    //     swap(D0);
    //     A5[1].shr11AC = D0 + 33;


    //     for (var j = 2; j < 9; j++) {
    //         // int D0 = 48*D6;


    //         if (A5[j].offset0 == true && A5[j].shr1188 != 0) {

    //             A5[j].shr1188++;

    //             if (A5[j].shr1188 < 5) {

    //                 A5[j].shr11AC = A5[j].shr1188 + 37;
    //             } else {
    //                 A5[j].offset0 = false;
    //             }
    //         }
    //     }

    //     while (TickCount() < tick + 12) {
    //         for (var k = 0; k < 1000; k++);
    //     }

    //     proc66();           // draw sprites
    //     proc50();           // draw score

    // }
}


function proc24() {

    proc53();

    glob160 = false;    ///////
    proc139(6);         // crash sound
    proc23();           // run crash sequence
    setTimeout(function () {
        proc54();           ///////
        glob36--;           /////// lives--;

        proc41();           ///////

        if (glob36 < 0) { // if no more lives

            proc42();       //
            glob27 = true;  ///////
            glob6 = true;   ///////
            proc145();      ///////
        }
        proc95();           ///////
    }, 2400)

}
/* suspend */
function proc53() {
    clearInterval(updateInterval)
    for (var i = 0; i < 9; i++) {

        A5[i].shr1190 = A5[i].shr1190 + (TickCount() - A5[i].lon1194);
    }

    glob17 = TickCount() - glob171;
}

//resume
function proc54() {

    for (var i = 0; i < 9; i++) {
        A5[i].lon1194 = TickCount();
        A5[1].shr1190 = 0
    }
    updateInterval = setInterval(update, 1000 / 60);
    glob171 = TickCount() - glob17;

    glob33 = glob32
    glob34 = TickCount()
}

function proc95() {
    glob162 = true;
    glob174 = TickCount();
    A5[8] = A5[1].copy();

    A5[1].shr11AC = 42;
}

function proc96() {
    proc53();
    proc65();
    if (TickCount() < (glob174 + 180)) {
        A5[8].shr11AC = 48;
    }

    if (TickCount() < (glob174 + 120)) {
        A5[8].shr11AC = 44;
    }

    if (TickCount() < (glob174 + 60)) {
        A5[8].shr11AC = 47;
    }
    proc101();
    proc108();

    A5[8].offset16.offset(-8, 0);
    A5[1].offset16.offset(8, -7);
    proc66();

    if (TickCount() > (glob174 + 210)) {
        proc65();
        proc62();
        A5[8] = new structLen44();

        glob162 = false;
    }
    proc54();
}

function DisposeWindow(window) {
    window.style.display = "none"
}

function proc42() {

    // var dificultyName
    // switch (glob39) {
    //     case 1:
    //     dificultyName = "Easy"
    //         break;
    //     case 2:
    //     dificultyName = "Medium"
    //         break;
    //     case 3:
    //     dificultyName = "Hard"
    //         break;

    //     default:
    //         break;
    // }

    // FBInstant
    //     .getLeaderboardAsync(dificultyName + '.' + FBInstant.context.getID())
    //     .then(leaderboard => {
    //         console.log(leaderboard.getName());
    //         return leaderboard.setScoreAsync(glob31, '{ stage: 3}');
    //     })
    //     .then(() => console.log('Score saved'))
    //     .catch(error => console.error(error));


    showHighScores()
}

function proc145() {

}


function handleVisibilityChange() {
    if (document.hidden && !glob16) {
        togglePause();
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);