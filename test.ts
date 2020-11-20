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
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Chessboard)
radio.setGroup(31)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
