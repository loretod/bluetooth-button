pins.D2.onEvent(PinEvent.PulseHigh, function () {
    keyboard.mediaKey(KeyboardMediaKey.VolumeUp, KeyboardKeyEvent.Press)
    pause(500)
})
