

function NewGWorld(gworld, depth, rect) {
    gworld.style.width = rect.w
    gworld.style.height = rect.h
    gworld.width = rect.width
    gworld.height = rect.he
}

function EraseRect(rect) {
    ctx.clearRect(rect.x, rect.y, rect.w, rect.h)
}

function GetGWorldPixMap(gworld) {
    return gworld.getImageData(0, 0, gworld.canvas.width, gworld.canvas.height)
}

function proc132() {
    var rect;
    var err = noErr;
    var pixelsLocked;
    
    // glob50 = 
    // GetGWorld(&glob50, &glob51);
    
    rect = Rect(0, 0, 552, 440);
    
    //glob52
    
    NewGWorld(glob48, 8, rect);
    
    
    glob53 = GetGWorldPixMap(glob52);
    
    // pixelsLocked = LockPixels(glob53);
    
    
    SetGWorld(glob52, nil);
    
    
    EraseRect(rect);
    
    
    SetRect(&rect, 0, 0, 256, 224);
    
    // make glob182
    // err = NewGWorld( &glob182, /*k32ARGBPixelFormat*/ 32, rect);
    // if (err != noErr)
    //     proc135(256, 6);
    
    // pixelsLocked = LockPixels(GetGWorldPixMap(glob182));
    // if (!pixelsLocked)
    //     proc135(256, 6);
    
    
    // make glob180
    // NewGWorld( glob180, 0, rect);
    // if (err != noErr)
    //     proc135(256, 6);
    
    // pixelsLocked = LockPixels(GetGWorldPixMap(glob180));
    // if (!pixelsLocked)
    //     proc135(256, 6);
    
    
    // make glob181
    // err = NewGWorld( &glob181, k1MonochromePixelFormat, &rect, nil, nil, 0);
    // if (err != noErr)
    //     proc135(256, 6);
    
    // pixelsLocked = LockPixels(GetGWorldPixMap(glob181));
    // if (!pixelsLocked)
    //     proc135(256, 6);
    
    
    
    // make glob55
    rect = new Rect(0, 0, 512, 32);
    
    NewGWorld( glob55b, 8, rect);
    
    // glob54 = GetGWorldPixMap(glob55);
    // pixelsLocked = LockPixels(glob54);
    // if (!pixelsLocked)
    //     proc135(256, 6);
}