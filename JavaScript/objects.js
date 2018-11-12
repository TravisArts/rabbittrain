


function structLen44() {
    this.offset0        // boolean          // 11B4 //  does it exist
    this.offset2        // short            // 11B2 //  x index
    this.offset4        // short            // 11B0 //  y index
    this.offset6        // short            // 11AE //  direction
    this.shr11AC        // short            // 11AC //  sprite
    this.offset10 = 0   // uint16           // 11AA //  description datum
    this.offset12       // short            // 11A8 //  frame in sequence
    this.offset14 = 0   // short            // 11A6 //  frame number
    this.offset16       // Rect             // 11A4 //  frame on screen
    this.offset24       // Rect             // 119C //          unknown
    this.lon1194        // long             // offset32//  time last updated
    this.shr1190        // long             // offset36//  time required to update
    this.lon118C        // long             // offset40//  speed
    this.shr1188        // short            //  modifier
    this.shr1186        // long             //         //          unknown
    this.offset44       // long
};

structLen44.prototype.copy = function() {
    var that = new structLen44()
    that.offset0 = this.offset0
    that.offset2 = this.offset2
    that.offset4 = this.offset4
    that.offset6 = this.offset6
    that.shr11AC = this.shr11AC
    that.offset10 = this.offset10
    that.offset12 = this.offset12
    that.offset14 = this.offset14
    that.offset16 = this.offset16.clone()
    that.offset24 = this.offset24.clone()
    that.lon1194 = this.lon1194
    that.shr1190 = this.shr1190
    that.lon118C = this.lon118C
    that.shr1188 = this.shr1188
    that.shr1186 = this.shr1186
    that.offset44 = this.offset44
    return that
}




function Rect( left, top, right, bottom) {
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
}

Rect.prototype.offset = function(dh, dv) {
    this.left += dh
    this.top += dv
    this.right += dh
    this.bottom += dv
}

Rect.prototype.clone = function() {
    return new Rect(this.left, this.top, this.right, this.bottom)
}

Object.defineProperty(Rect.prototype, 'w', {
    get: function() {
        if ( isNaN(this.left) || isNaN(this.right)) {
            return 0
        } else {
            return Math.abs(this.right - this.left)
        }
    }
})

Object.defineProperty(Rect.prototype, 'h', {
    get: function() {
        if ( isNaN(this.top) || isNaN(this.bottom)) {
            return 0
        } else {
            return Math.abs(this.bottom - this.top)
        }
    }
})

Object.defineProperty(Rect.prototype, 'x', {
    get: function() { return this.left }
})

Object.defineProperty(Rect.prototype, 'y', {
    get: function() { return this.top }
})




var nil = null
var srcCopy