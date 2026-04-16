basic.forever(function () {
    basic.showString("Hello!")
    basic.pause(2000)
    basic.showLeds(`
        . # . # .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
