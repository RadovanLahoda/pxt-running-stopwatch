//Startovní čára
Sensors.SetLightLevel()
radio.setGroup(73)
let start: boolean = false
let stopwatch: number = 0
radio.onReceivedNumber(function (receivedNumber: number) {
    if (!start){
        stopwatch = input.runningTime()
        whaleysans.showNumber(receivedNumber)
        start = true
    }
})

Sensors.OnLightDrop(function() {
    if (start){
        let finalTime: number
        finalTime = input.runningTime() - stopwatch
        //whaleysans.showNumber(input.runningTime())
        radio.sendValue("totalTime", finalTime)
        start = false
    }
})