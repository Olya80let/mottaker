radio.onReceivedNumber(function (receivedNumber) {
    stolpetall = (radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128) * 5 / 116
    for (let indeks = 0; indeks <= stolpetall; indeks++) {
        led.plot(receivedNumber, 4 - indeks)
    }
})
let stolpetall = 0
radio.setGroup(42)
basic.forever(function () {
    basic.pause(500)
    basic.clearScreen()
})
