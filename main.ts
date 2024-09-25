radio.onReceivedNumber(function (receivedNumber) {
    stolpetall = (radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128) * 5 / 116
    for (let indeks = 0; indeks <= stolpetall; indeks++) {
        led.plot(receivedNumber, 4 - indeks)
    }
})
let stolpetall = 0
let sender_id = 0
radio.setGroup(sender_id)
basic.forever(function () {
    sender_id = 4
    radio.setGroup(sender_id)
})
basic.forever(function () {
    basic.pause(500)
    basic.clearScreen()
})
