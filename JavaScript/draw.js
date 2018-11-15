
function proc58(value, rect) {

    // RGBForeColor(&glob22);
    ctx.strokeStyle = "#FFFFFF"
    if (glob26) {
        proc59(4, value, rect);
    } else {
        proc59(6, value, rect);
    }


    // RGBForeColor(&glob21);
    ctx.strokeStyle = "#161516"
    proc59(2, value, rect);

}

function proc59(penRadius, value, pRect) {

    var point;
    var rect;

    PenSize(penRadius)

    var halfSize = (glob24 + 0) / 2 - 6;
    var D3 = (glob24 / 2) - glob25;

    var D4 = (0 / 2) + glob25 - 6;

    var L, T, R, B;
    var H, V;

    // if its not an edge
    if ((value & 0xC0) == 0) {
        //        lcf_8
        if ((value & 0x01) != 0) {
            L = pRect.x - halfSize;

            T = pRect.y - halfSize;

            R = pRect.x + halfSize;

            B = pRect.y + halfSize;

            // rect = new Rect(L, T, R, B)
            rect = new Rect(L, T, R, B)
            proc61(90, 90, rect);
        }
        //        lcf_9
        if ((value & 0x04) != 0) {
            L = pRect.right - halfSize;

            T = pRect.y - halfSize;

            R = pRect.right + halfSize;

            B = pRect.y + halfSize;

            rect = new Rect(L, T, R, B)
            proc61(90, 180, rect);
        }
        //        lcf_10
        if ((value & 0x02) != 0) {
            L = pRect.right - halfSize;

            T = pRect.bottom - halfSize;

            R = pRect.right + halfSize;

            B = pRect.bottom + halfSize;

            rect = new Rect(L, T, R, B)
            proc61(90, 270, rect);
        }
        //        lcf_11
        if ((value & 0x08) != 0) {
            L = pRect.x - halfSize;

            T = pRect.bottom - halfSize;

            R = pRect.x + halfSize;

            B = pRect.bottom + halfSize;

            rect = new Rect(L, T, R, B)
            proc61(90, 0, rect);
        }
        //        lcf_12
        if ((value & 0x10) != 0) {
            H = pRect.x + halfSize;
            V = pRect.y;
            point = { h: H, v: V }
            proc60(glob24, 0, point);
        }
        //        lcf_13
        if ((value & 0x20) != 0) {
            H = pRect.x;
            V = pRect.y + halfSize;
            point = { h: H, v: V }
            proc60(0, glob24, point);
        }

    } else if ((value & 0x80) == 0) { //is side edge
        //    lcf_4
        if ((value & 0x01) != 0) {
            L = pRect.x - D4;
            T = pRect.y + D3 - D4;
            R = pRect.x + D4;
            B = pRect.y + D3 + D4;
            rect = new Rect(L, T, R, B)

            proc61(90, 90, rect);

            H = pRect.x + D4;
            V = pRect.y;
            point = { h: H, v: V }

            proc60(D3, 0, point);
            //            LEA     14(A7),A7
        }
        //    lcf_5
        if ((value & 0x02) != 0) {

            L = pRect.right - D4;
            T = pRect.bottom - D3 - D4;
            R = pRect.right + D4;
            B = pRect.bottom - D3 + D4;
            rect = new Rect(L, T, R, B)

            proc61(90, 270, rect);

            H = pRect.right - D4 - 12;
            V = pRect.bottom - D3;
            point = { h: H, v: V }

            proc60(D3, 0, point);
            //            LEA     14(A7),A7
        }
        //    lcf_6
        if ((value & 0x04) != 0) {
            L = pRect.right - D4;
            T = pRect.y + D3 - D4;
            R = pRect.right + D4;
            B = pRect.y + D3 + D4;
            rect = new Rect(L, T, R, B)

            proc61(90, 180, rect);

            H = pRect.right - D4 - 12;
            V = pRect.y;
            point = { h: H, v: V }

            proc60(D3, 0, point);
            //            LEA     14(A7),A7
        }
        //    lcf_7
        if ((value & 0x08) != 0) {
            L = pRect.x - D4;
            T = pRect.bottom - D3 - D4;
            R = pRect.x + D4;
            B = pRect.bottom - D3 + D4;
            rect = new Rect(L, T, R, B)

            proc61(90, 0, rect);

            H = pRect.x + D4;
            V = pRect.bottom - D3;
            point = { h: H, v: V }

            proc60(D3, 0, point);
            //            LEA     14(A7),A7
        }
    } else { // is top edge

        if ((value & 0x01) != 0) {

            L = pRect.x + D3 - D4;
            T = pRect.y - D4;
            R = pRect.x + D3 + D4;
            B = pRect.y + D4;

            // console.log("L: " + L + ", T: " + T + ", R: " + R + ", B: " + B)

            rect = new Rect(L, T, R, B)

            // console.log("rect = new Rect(" + rect.left + ", " + rect.top + ", " + rect.right + ", " + rect.bottom + ")")
            proc61(90, 90, rect);

            H = pRect.x;
            V = pRect.y + D4;
            point = { h: H, v: V }

            proc60(0, D3, point);
            //            LEA     14(A7),A7
        }
        //    lcf_1
        if ((value & 0x04) != 0) {

            L = pRect.right - D3 - D4;
            T = pRect.y - D4;
            R = pRect.right - D3 + D4;
            B = pRect.y + D4;
            rect = new Rect(L, T, R, B)
            proc61(90, 180, rect);

            H = pRect.right - D3;
            V = pRect.y + D4;
            point = { h: H, v: V }

            proc60(0, D3, point);
            //        LEA     14(A7),A7
        }
        //    lcf_2
        if ((value & 0x02) != 0) {

            L = pRect.right - D3 - D4;
            T = pRect.bottom - D4;
            R = pRect.right - D3 + D4;
            B = pRect.bottom + D4;
            rect = new Rect(L, T, R, B)
            proc61(90, 270, rect);

            H = pRect.right - D3;
            V = pRect.bottom - D4 - 12;
            point = { h: H, v: V }

            proc60(0, D3, point);
            //        LEA     14(A7),A7
        }
        //    lcf_3
        if ((value & 0x08) != 0) {
            L = pRect.x + D3 - D4;
            T = pRect.bottom - D4;
            R = pRect.x + D3 + D4;
            B = pRect.bottom + D4;
            rect = new Rect(L, T, R, B)
            proc61(90, 0, rect);

            H = pRect.x;
            V = pRect.bottom - D4 - 12;
            point = { h: H, v: V }

            proc60(0, D3, point);
            //        LEA     14(A7),A7
        }
    }


}

function proc60(dv, dh, point) {

    ctx.beginPath()
    ctx.moveTo(point.h, point.v)
    // MoveTo( point.h, point.v);
    if (dv != 0) {
        ctx.lineTo(point.h, point.v + dv)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(point.h + 12, point.v)
        ctx.lineTo(point.h + 12, point.v + dv)
        ctx.stroke()
    }
    if (dh != 0) {
        ctx.lineTo(point.h + dh, point.v)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(point.h, point.v + 12)
        ctx.lineTo(point.h + dh, point.v + 12)
        ctx.stroke()
    }

}

function proc61(arcAngle, startAngle, rect) {

    var a = (startAngle - 90) * Math.PI / 180
    var r = rect.w / 2
    var x = rect.x + r //(rect.x + rect.w) / 2
    var y = rect.y + r //(rect.y + rect.h) / 2

    ctx.beginPath()
    ctx.arc(x, y, r, a, a + arcAngle * Math.PI / 180)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x, y, r + 12, a, a + arcAngle * Math.PI / 180)
    ctx.stroke()

}

function proc56(yIndex, xIndex, value, Prect) {

    let light_green = 0
    let blue = 1
    let pink = 2
    let yellow = 3
    let dark_green = 4
    let aqua = 5

    var rect;
    //    short D6;
    var tileColor;
    value &= 0x00FF;

    rect = Prect;

    // if piece is not edge
    if ((value & 0xC0) == 0) {

        tileColor = dark_green;
        if ((value & 0x03) != 0) {
            tileColor = light_green;
        }
        if ((value & 0x0C) != 0) {
            if (tileColor == dark_green) {
                tileColor = blue;
            } else {
                tileColor = yellow;
            }
        }
        if ((value & 0x30) != 0) {
            if (tileColor == dark_green) {
                tileColor = pink;
            } else {
                tileColor = yellow;
            }
        }
        if (tileColor == dark_green) {
            tileColor = yellow;
        }

        // DrawPicture( pictures[tileColor], &rect);

        // console.log(rect)
        ctx.drawImage(pictures[tileColor], rect.x, rect.y, rect.w, rect.h)

        ctx.strokeStyle = "#A0A3A5"
        PenSize(1);

        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y);
        ctx.lineTo(rect.x + (glob24 - 1), rect.y);
        ctx.stroke();
        ctx.moveTo(rect.x, rect.y);
        ctx.lineTo(rect.x, rect.y + (glob24 - 1));
        ctx.stroke();
        // MoveTo( rect.left, rect.top );
        // Line( (glob24 - 1), 0 );
        // MoveTo( rect.left, rect.top );
        // Line( 0, (glob24 - 1) );
    } else {

        if ((value & 0x0F) == 0) {
            tileColor = aqua;
        } else {
            tileColor = dark_green;
        }

        // proc55(yIndex, xIndex, value, &rect); //  adjustTilesRect


        ctx.drawImage(pictures[tileColor], rect.x, rect.y, rect.w, rect.h)

        ctx.strokeStyle = "#A0A3A5"
        PenSize(1);
        ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
    }

    proc58(value, rect);

}

function proc57() {
    var rect;
    var x, y, w, h;

    proc133();          // // hidden window
    eraseRect(new Rect(0, 0, glob48.width, glob48.height))
    // ctx.clearRect(0, 0, glob47.width, glob47.height);

    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 8; j++) {

            x = (glob24 * j) - 16;
            y = (glob24 * i) - 16//+ glob23 - 16;
            w = glob24 //(1 + j) * glob24 - 16;
            h = glob24 //(1 + i) * glob24 - 16//+ glob23 - 16;

            // SetRect(&rect, x, y, w, h);

            rect = new Rect(x, y, x + glob24, y + glob24)

            // rect = { x: x, y: y, r: x + glob24, b: y + glob24, w: glob24, h: glob24 }


            var index = i * 8 + j;
            var piece = glob41[index];
            if (piece != 0xFF) {
                proc56(i, j, piece, rect);
            }
        }
    }


    // RGBForeColor(&glob18);
    // RGBBackColor(&glob19);
    proc134();
}

function proc92() {
    var retVal, tileType
    var tilesOfTypeLeft = 0

    while (tilesOfTypeLeft == 0) {
        tileType = proc131(4);

        switch (tileType) {
            case 0:
                tilesOfTypeLeft = glob145; // green
                break;
            case 1:
                tilesOfTypeLeft = glob146; // blue
                break;
            case 2:
                tilesOfTypeLeft = glob147; // pink
                break;
            case 3:
                tilesOfTypeLeft = glob148; // mixed
                break;
            case 4:
                tilesOfTypeLeft = glob149; // blank
                break;
        }
    }
    //    printf("mask returned: %hd\n", tileType);
    switch (tileType) {
        case 0:
            glob145 -= 1;
            retVal = 0x03; // green
            break;
        case 1:
            glob146 -= 1;
            retVal = 0x0C; // blue
            break;
        case 2:
            glob147 -= 1;
            retVal = 0x30; // pink
            break;
        case 3:
            glob148 -= 1;
            retVal = 0x3F; // anything
            break;
        case 4:
            glob149 -= 1;
            retVal = 0x00; // empty
            break;
    }
    if (proc131(200) < glob150) {
        retVal &= proc131(0x8000);
    }
    return retVal;
}






function proc101() {
    var rectToEmpty, tileRect;
    glob179 = (TickCount() - glob172) * 6;

    if (glob64 < glob179) {
        glob179 = glob64;
    }

    // console.log(glob64)
    if (glob64 != 0) {
        proc133();
        glob64 -= glob179;
        glob172 = TickCount();

        tileRect = new Rect(glob66.left, glob66.top, glob66.right, glob66.bottom)// glob66;
        var dh, dv;

        dh = ptArr[glob65].x * glob179;
        dv = ptArr[glob65].y * glob179;



        tileRect.offset(dh, dv)
        // OffsetRect( &tileRect, dh, dv);

        // CGrafPtr port;
        // GDHandle gdh;
        // GetGWorld( &port, &gdh);
        // glob53 = GetGWorldPixMap(glob52);
        // CopyBits((BitMap *) * glob53, (BitMap *) * glob53, & glob66, & tileRect, srcCopy, nil);
        var imgData = ctx.getImageData(glob66.x, glob66.y, glob66.w, glob66.h);
        ctx.putImageData(imgData, tileRect.x, tileRect.y)
        //        copyBitsToExternWindow((BitMap *) *glob53, &glob66);
        //        copyBitsToExternWindow((BitMap *) *glob53, &tileRect);

        switch (glob65) {
            case 0:         //
                rectToEmpty = new Rect(glob66.left, tileRect.bottom, glob66.right, glob66.bottom)
                glob70 = new Rect(glob66.left, tileRect.top, glob66.right, glob66.bottom)
                break;
            case 1:         //
                rectToEmpty = new Rect(glob66.left, glob66.top, tileRect.left, glob66.bottom)
                glob70 = new Rect(glob66.left, glob66.top, tileRect.right, glob66.bottom)
                break;
            case 2:         //
                rectToEmpty = new Rect(glob66.left, glob66.top, glob66.right, tileRect.top)
                glob70 = new Rect(glob66.left, glob66.top, glob66.right, tileRect.bottom)
                break;
            case 3:         //
                rectToEmpty = new Rect(tileRect.right, glob66.top, glob66.right, glob66.bottom)
                glob70 = new Rect(tileRect.left, glob66.top, glob66.right, glob66.bottom)
                break;

            default:
                break;
        }

        // console.log(glob66)

        glob66 = tileRect;

        // console.log(rectToEmpty)
        // ctx.clearRect(rectToEmpty.x, rectToEmpty.y, rectToEmpty.w, rectToEmpty.h)
        eraseRect(rectToEmpty);
        proc134();              // set graphics world to main window

        if (glob64 == 0) {
            glob41[glob61 * 8 + glob60] = glob41[glob63 * 8 + glob62];

            for (var i = 0; i < 9; i++ ) {

                if (A5[i].offset2 == glob62 && A5[i].offset4 == glob63) {
                    A5[i].offset2 = glob60;
                    A5[i].offset4 = glob61;
                }
            }

            glob60 = glob62;
            glob61 = glob63;

            glob41[glob61 * 8 + glob60] = Empty;

        }

    }
}


function proc102() {
    var D5;
    
    D5 = TickCount() - A5[1].lon1194 + A5[1].shr1190;
    if (D5 > A5[1].lon118C) {
        A5[1].shr1190 = D5 - A5[1].lon118C;
        
        A5[1].lon1194 = TickCount();
        proc109();                      // rush
        
        if( proc110( A5[1] ) == false ){// crashtest
            glob160 = true;             // crash
        }
        glob31++;                       // increment score up
    }
    
    for(var i = 2; i < 9; i++) {
        
        if ( A5[i].offset0 == true ) {
            D5 = TickCount() - A5[i].lon1194 + A5[i].shr1190;
            
            if (D5 > A5[i].lon118C) {
                
                A5[i].shr1190 = D5 - A5[i].lon118C;
                
                A5[i].lon1194 = TickCount();
                
                if ( A5[i].shr1188 != 0 ) {
                    
                    A5[i].shr1188 += 1;
                    if ( A5[i].shr1188 >= 5) {
                        A5[i].offset0 = false;
                    } else {
                        A5[i].shr11AC = A5[i].shr1188 + 37;
                    }               // crash sequence
                    
                } else {
//                    bool D6 =
                    proc110( A5[i] );
                    A5[i].shr11AC = 37;     // cart normal
                    
                    if (A5[i].shr1186 > 0) {
                        A5[i].shr1186 -= 1;
                        
                        if ( A5[i].shr1186 > 5) {
                            A5[i].shr11AC = 38;
                        }
                        
                        if ( A5[i].shr1186 == 5) {
                            A5[0] = A5[i].copy();
                            A5[0].shr1186 = 5;
                            A5[0].shr11AC = 46;
                        }
                    }
                }
                
            }
            
            
        }
        
    }
    
}






function roundRect(context, rect, radius, fill, stroke) {
    var x = rect.x
    var y = rect.y
    var width = rect.w
    var height = rect.h

    if (typeof stroke == 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    context.beginPath();
    context.moveTo(x + radius.tl, y);
    context.lineTo(x + width - radius.tr, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    context.lineTo(x + width, y + height - radius.br);
    context.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    context.lineTo(x + radius.bl, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    context.lineTo(x, y + radius.tl);
    context.quadraticCurveTo(x, y, x + radius.tl, y);
    context.closePath();
    if (fill) {
        context.fill();
    }
    if (stroke) {
        context.stroke();
    }

}




function proc41() {
    var D6, D5, D4;
    var L, T, R, B;
    var rect;          // vbn_1

    if (!glob6) {
        proc134();

        // L = D6;
        // T = D5;
        // R = D4 + 85;
        // B = T + 17;
        // SetRect( &rect, L, T, R, B);
        // EraseRect( &rect);

        // L = D6;
        // T = D5;
        // R = L + 32;
        // B = T + 32;
        // SetRect( &rect, L, T, R, B);

        // claimed carrots
        var statimgs = document.getElementsByClassName("stat")
        var carrotimgs = document.getElementsByClassName("carrot")
        var lifeimgs = document.getElementsByClassName("life")
        for (var i = 0; i < 7; i++) {
            statimgs[i].style.opacity = 0
        }

        for (var i = 0; i < glob37; i++) {
            carrotimgs[i].style.opacity = 1
        }
        // lives
        for (var i = 0; i < glob36; i++) {

            lifeimgs[i].style.opacity = 1
        }
    }

}


// play lyrics
function proc76() {
    var pic;
    var lyricWindow;
    var titleStr;
    var lyricStr;

    var Tcnt;


    pic = opening

    var mainWindRec;
    // GetPortBounds(GetWindowPort(mainWindowPtr), &mainWindRec);

    //    lyricWindow = NewWindow(nil, &arec, nil, false, dBoxProc, (WindowRef)-1, false, (long)nil);


    var rect = new Rect(0, 0, 156, 176)
    // Rect rect = {0, 0, 176, 156};//(**pic).picFrame;
    //    Rect rect = (*pic)->picFrame;
    //    SetRect(&rect,((*pic)->picFrame).left, ((*pic)->picFrame).top, ((*pic)->picFrame).right, ((*pic)->picFrame).bottom);
    //    OffsetRect(&rect, 150, 150);

    // proc113(&mainWindRec, &rect);

    //    InsetRect(&rect, -20, 0);

    lyricWindow = document.getElementById("canvas2")
    lyricWindow.style.display = "block"
    var ctx2 = lyricWindow.getContext("2d");

    lyricWindow.width = rect.w * 2
    lyricWindow.height = rect.h * 2

    lyricWindow.style.width = rect.w
    lyricWindow.style.height = rect.h
    // lyricWindow = NewCWindow(nil, &rect, nil, false, plainDBox, (WindowRef)-1L, true, (long)nil);

    // if (lyricWindow == nil) {
    //     proc135(256, 1);
    // }
    ctx2.fillStyle = "#FFFFFF"
    ctx2.fillRect(0, 0, 312, 352)

    // SetPort( GetWindowPort(lyricWindow));
    // ShowWindow(lyricWindow);


    // set the font to Charcoal 18pt and get the height
    ctx2.font = "24px Charcoal"



    ctx2.fillStyle = "#000000"
    ctx2.fillText("Go! Go! Bunny Train", 36, 284)

    ctx2.drawImage(pic, 12, 12, 288, 248)




    ctx2.fillStyle = "#7F0614"

    var lyricNumber = 0;

    // lyricStr = lyrics[lyricNumber]
    lyricStr = lyricsEng[lyricNumber]
    ctx2.textAlign = "center";
    ctx2.fillText(lyricStr, 156, 328)
    Tcnt = TickCount;

    proc139(1); // full theme

    //     Rect clearRect;




    //     long firstTick;
    //     long timeToChange;
    //     long timeFromStart;
    //     long lyricEndTick;


    //     firstTick = TickCount();
    //     lyricEndTick = firstTick + 480;

    // //    BeginUpdate(lyricWindow);

    clearInterval(updateInterval)
    var changeLyrics = setInterval(function () {
        lyricNumber += 1;

        ctx2.fillStyle = "#FFFFFF"
        ctx2.fillRect(0, 296, 312, 44)
        ctx2.fillStyle = "#7F0614"


        // lyricStr = lyrics[lyricNumber]
        lyricStr = lyricsEng[lyricNumber]
        // ctx2.textAlign = "center";
        ctx2.fillText(lyricStr, 156, 328)

        // SetRect(&clearRect, 0, 148, 156, 170);
        // EraseRect(&clearRect);

        // /* something supposedly goes here */


        // GetIndString(lyricStr, 130, lyricNumber);

        // short width = StringWidth(lyricStr);
        // MoveTo(((156 - width)/2), 6+124+34);
        // DrawString(lyricStr);
        if (lyricNumber > 7) {
            clearInterval(changeLyrics)
        }
    }, 1000)//833)
    setTimeout(function () {
        setup()
            glob28 = true;
            lyricWindow.style.display = "none"
    }, 8000);

}


function proc133() {
    ctx = glob52
}

function proc134() {
    ctx = glob50
}



function proc64(param1) {
    var sprite;
    var rect;
    
    sprite = A5[param1].shr11AC - 1;
    rect = A5[param1].offset16;

    proc112( sprite, rect);
}

function proc62() {
    proc134();
    var i;
    
    
    
    glob53 = glob52;
//    glob50 = GetWindowPort(mainWindowPtr);
    
    for(i = 0; i < 9; i++) {
        if ( A5[i].offset0 != 0 ) {
            CopyBits( glob53, glob50,
                     A5[i].offset16, A5[i].offset16,
                     srcCopy,
                     nil);
            
            CopyBits( glob53,
                     glob50,
                     A5[i].offset24,
                     A5[i].offset24,
                     srcCopy,
                     nil);
        }
        
        
    //     if( A5[i].shr1188 == 5){
            
    //         A5[i].shr1188 = 0;
            
    //         CopyBits(glob53,
    //                  ctx,
    //                  A5[i].offset16,
    //                  A5[i].offset16,
    //                  srcCopy,
    //                  nil);
    //     }
        
    }
}

// closing tiles
function proc140() {
    var A0, A1, A2, A3, A4, A5;
    var D0, D1, D2, D3, D4, D5, D6, D7;
    
    var vfi_1;
    var L, T, R, B;
    var yIndex, xIndex, value;
    // console.log("proc140; glob187 = " + glob187)
    if(glob187 == 3){
        
        for ( var i = 1; i < 3; i++ ) {
            //            A0 = A5;
            //            A0 += ;
            //            D0 = A0[2*i-0x26]; // 38
            
            if (i == 1) {
                yIndex = glob190;
                xIndex = glob188;
                // vfi_1 = glob192;
            } else {
                yIndex = glob191;
                xIndex = glob189;
                // vfi_1 = glob193;
            }
            
            
            glob41[yIndex*8 + xIndex] &= 0xC0;
            
            L = xIndex * glob24 - 16;
            T = yIndex * glob24 - 16 //+ glob23
            R = L + glob24;
            B = T + glob24;
            
            if (i == 1) {
                glob192 = new Rect(L, T, R, B)
                vfi_1 = glob192
            } else {
                glob193 = new Rect(L, T, R, B)
                vfi_1 = glob193
            }
            // vfi_1 = new Rect(L, T, R, B);
            
            console.log(glob41[yIndex*8 + xIndex])
            
            value = glob41[yIndex*8 + xIndex];
            proc56( yIndex, xIndex, value, vfi_1);
            
            
        }
        ctx.fillStyle = glob18
        ctx.strokeStyle = glob19
        
        if(glob126) {
            proc41();
        }
        
    }
    
    
}


/* draw scores */
function proc50() {
    document.getElementById('bonus').innerText = Math.floor(glob32)
    document.getElementById('score').innerText = Math.floor(glob31)
}









function CopyBits(srcBits, dstBits, srcRect, dstRect, mode, maskRgn) {
    if (srcRect == undefined || dstRect == undefined) {
        return
    }
    if (srcRect.w == 0 || srcRect.h == 0 || dstRect.w == 0 || dstRect.h == 0) {
        return
    }
    if (srcRect.w == null || srcRect.h == null || dstRect.w == null || dstRect.h == null) {
        return
    }
    var imgData = srcBits.getImageData(srcRect.x, srcRect.y, srcRect.w, srcRect.h);
    dstBits.putImageData(imgData, dstRect.x, dstRect.y)
}

function CopyMask(srcBits, dstBits, srcRect, dstRect, mode, maskRgn) {
    if (srcRect == undefined || dstRect == undefined) {
        return
    }
    if (srcRect.w == 0 || srcRect.h == 0 || dstRect.w == 0 || dstRect.h == 0) {
        return
    }
    // console.log(srcRect)
    var imgData = srcBits.getImageData(srcRect.x, srcRect.y, srcRect.w, srcRect.h);
    var dstData = dstBits.getImageData(dstRect.x, dstRect.y, dstRect.w, dstRect.h);

    h = srcRect.h
    w = srcRect.w

    var data = imgData.data;
    var data2 = dstData.data
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            var n = ((w * y) + x) * 4;

            // var datum = data[n] + ", " + data[n+1] + ", " + data[n+2] + ", " + data[n+3]
            // console.log("(x,y) = (" + x + ", " + y + "),   " + datum )

            if (data[n+3] == 0 && data2[n+3] != 0) {
                data[n] = data2[n]
                data[n+1] = data2[n+1]
                data[n+2] = data2[n+2]
                data[n+3] = 255
            }
            // data[n] = 255;
            // data[n + 1] = 0;
            // data[n + 2] = 0;
            // data[n + 3] = 255;
        }
    }


    // dstBits.drawImage(img, dstRect.x, dstRect.y)
    dstBits.putImageData(imgData, dstRect.x, dstRect.y)
}

function SetGWorld(port, gdh) {
    ctx = port
}
function GetGWorld(port, gdh) {
    port = ctx
}





/* completion animation */
function proc143() {

    clearInterval(updateInterval)
    A5[1].offset0 = true
    A5[8] = A5[1].copy();

    A5[1].shr11AC = 42;

    proc65();
    A5[1].offset16.offset(0, -8);
    A5[8].offset16.offset(-7, 8);


    glob31 += glob32;


    var i = 0
    proc65();

    var result = 43 + (i % 2) //49//

    A5[8].shr11AC = result;

    proc66();
    proc50();

    i++

    var completionInterval = setInterval(function() {
        proc65();

        // var result = proc15(2, i) + 43;

        var result = 43 + (i % 2) //49//

        A5[8].shr11AC = result;

        proc66();
        proc50();

        i++

        if (i >= 16) {
            clearInterval(completionInterval)
            updateInterval = setInterval(update, 1000 / 60);
        }

    }, 250)

    
}

function eraseRect(rect) {
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
}