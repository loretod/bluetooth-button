pins.A0.onEvent(PinEvent.PulseHigh, function () {
    keyboard.mediaKey(KeyboardMediaKey.VolumeUp, KeyboardKeyEvent.Press)
})
