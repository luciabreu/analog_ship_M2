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
NFC.nfcEvent(function () {
    if (NFC.getUID() == cardID1) {
        basic.showNumber(1)
    } else if (NFC.getUID() == cardID2) {
        basic.showNumber(2)
    } else if (NFC.getUID() == cardID3) {
        basic.showNumber(3)
        radio.sendString("")
    } else if (NFC.getUID() == cardID4) {
        basic.showNumber(4)
    } else if (NFC.getUID() == cellID5) {
        basic.showNumber(5)
    }
})
let strip: neopixel.Strip = null
let cellID5 = ""
let cardID4 = ""
let cardID3 = ""
let cardID2 = ""
let cardID1 = ""
NFC.NFC_setSerial(SerialPin.P0, SerialPin.P1)
cardID1 = "76456E95"
cardID2 = "76C75095"
cardID3 = "DDFAD604"
cardID4 = "2D08D404"
cellID5 = "59F57EA2"
basic.showIcon(IconNames.Heart)
radio.setGroup(25)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
