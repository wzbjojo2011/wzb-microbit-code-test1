function 小车运动 (左电机速度: number, 右电机速度: number) {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    左电机速度,
    makerobo.Motors.Right,
    右电机速度
    )
}
if (!(input.buttonIsPressed(Button.A))) {
    小车运动(0, 0)
}
basic.forever(function () {
    小车运动(150, 150)
    basic.pause(1000)
    小车运动(0, 50)
    basic.pause(1000)
    小车运动(150, 150)
    basic.pause(1000)
    小车运动(50, 0)
    basic.pause(1000)
    if (!(input.buttonIsPressed(Button.A))) {
        小车运动(0, 0)
    }
})
