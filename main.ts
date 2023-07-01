// 
// 
// Press Button A to display the current soil moisture level.
// 
// 
// Always check the soil moisture level. 
// If the soil moisture is greater than 650 (i.e. soil is dry) then...
// 
// light up RGB pixels on REKA:BIT in RED,
// 
// show "sad" icon, and
// 
// activate the water pump (M2) to pump water 
// 
// keep it running for 5 seconds 
// 
// and then stop the pump.
// 
// 
// else (i.e. soil is moist), 
// 
// light up RGB pixels on REKA:BIT in GREEN
// 
// show "happy" icon
// 
// 
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(rekabitSoilMoisture.soilMoistureLevel(RekabitAnalogInPin.P2))
        if (rekabitSoilMoisture.compareAnalog(RekabitAnalogInPin.P2, RekabitAnalogCompareType.MoreThan, 650)) {
            rekabit.setAllRgbPixelsColor(0xff0000)
            rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 128)
            basic.pause(5000)
            rekabit.brakeMotor(MotorChannel.M2)
            basic.showIcon(IconNames.Sad)
        } else {
            rekabit.setAllRgbPixelsColor(0x00ff00)
            basic.showIcon(IconNames.Happy)
        }
    }
})
