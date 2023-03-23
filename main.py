def 小车运动(左电机速度: number, 右电机速度: number):
    makerobo.motor_run_dual(makerobo.Motors.LEFT, 左电机速度, makerobo.Motors.RIGHT, 右电机速度)
if not (input.button_is_pressed(Button.A)):
    小车运动(0, 0)

def on_forever():
    小车运动(150, 150)
    basic.pause(1000)
    小车运动(0, 50)
    basic.pause(1000)
    小车运动(150, 150)
    basic.pause(1000)
    小车运动(50, 0)
    basic.pause(1000)
    if not (input.button_is_pressed(Button.A)):
        小车运动(0, 0)
basic.forever(on_forever)
