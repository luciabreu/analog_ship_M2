radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
    if (item == 0) {
        goStop()
        radio.sendNumber(5)
    }
    if (item == 1) {
        goNorth(1)
        radio.sendNumber(6)
    }
    if (item == 2) {
        goSouth()
        radio.sendNumber(7)
    }
    if (item == 3) {
        goWest()
        radio.sendNumber(8)
    }
    if (item == 4) {
        goEast()
        radio.sendNumber(9)
    }
})
function goEast () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    music.playTone(349, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F D G E F ", 500)
    radio.sendNumber(6)
})
function goSouth () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    music.playTone(294, music.beat(BeatFraction.Half))
}
function goStop () {
    maqueen.motorStop(maqueen.Motors.All)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
}
input.onButtonPressed(Button.AB, function () {
    music.playMelody("G B A G C5 B A B ", 500)
    radio.sendNumber(9)
})
function goWest () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    music.playTone(330, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.B, function () {
    music.playMelody("B A G A G F A C5 ", 500)
    radio.sendNumber(8)
})
radio.onReceivedValue(function (name, value) {
	
})
function goNorth (speed: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    music.playTone(262, music.beat(BeatFraction.Half))
}
let item = 0
let strip: neopixel.Strip = null
radio.setGroup(31)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
