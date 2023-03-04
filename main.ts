input.onSound(DetectedSound.Loud, function () {
    if (lightsOn) {
        lightsOn = !(lightsOn)
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Quiet, 88)
basic.forever(function () {
	
})
