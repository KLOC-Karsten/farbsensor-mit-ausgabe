let Rot = 0
let Gruen = 0
let Blau = 0
let Farbwert = 0
let Zeile_0 = ""
let Zeile_1 = ""
basic.forever(function () {
    Rot = TCS34725.readRed()
    Rot = Rot * 1.2
    Gruen = TCS34725.readGreen()
    Blau = TCS34725.readBlue()
    Farbwert = Farbfunktionen.farbwert(Rot, Gruen, Blau)
    Zeile_0 = "RGB:" + Rot + " " + Gruen + " " + Blau
    Zeile_1 = "Hue: " + Math.round(Farbwert)
    display.writeString(Zeile_0, 0, 0)
    display.writeString(Zeile_1, 1, 0)
    basic.setLedColor(Farbfunktionen.farbwert_zu_farbe(Farbwert))
})
