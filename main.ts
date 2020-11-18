radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
    if (item == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (item == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (item == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    } else if (item == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        basic.pause(50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    } else if (item == 4) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        basic.pause(50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    }
})
function goEast (speed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
}
function backOrForward (speed: number) {
    if (speed > 0) {
        goNorth(speed)
    } else if (speed < 0) {
        goSouth(Math.abs(speed))
    } else {
        goStop()
    }
}
function goSouth (speed: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
}
function goStop () {
    maqueen.motorStop(maqueen.Motors.All)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
}
function steer (speed: number) {
    if (speed > 0) {
        goEast(speed)
    } else if (speed < 0) {
        goWest(Math.abs(speed))
    }
}
function goWest (speed: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
}
radio.onReceivedValue(function (name, value) {
    if (name == "fs") {
        backOrForward(value)
    } else if (name == "dir") {
        steer(value)
    }
})
function goNorth (speed: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
let item = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Chessboard)
radio.setGroup(25)
radio.setGroup(31)
radio.setGroup(20)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
