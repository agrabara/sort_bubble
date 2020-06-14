let list = [4, 3, 2, 5, 1]
let wiersz = 0
let tymczasowa = 0
let licznik = 0
let wynik = 0
doRysowanie()

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for(let kol = 0; kol <= 4; kol++) {
        wiersz = 0
        while(wiersz<list[kol]) {
            led.plot(kol, 4-wiersz)
            wiersz++
        }
    }
})

input.onButtonPressed(Button.A, function () {
    licznik = 1
    while (licznik > 0) {
        licznik = 0
        for(let i = 0; i <= 19; i++) {
            if (list[i] > list[i+1]) {
                tymczasowa = list[i]
                list[i] = list[i+1]
                list[i+1] = tymczasowa
                licznik++
                doRysowanie()
                wynik++
            }
        }
    }
    serial.writeValue("Wynik=", wynik)
})

input.onButtonPressed(Button.AB, function () {
    
    for(let i = 0; i <= 20; i++) {
        list[i] = randint(0, 255) + 1
    }
    doRysowanie()
})

function doRysowanie() {
    basic.clearScreen()
    for(let kol = 0; kol <= 4; kol++) {
        wiersz = 0
        while(wiersz<list[kol]) {
            led.plot(kol, 4-wiersz)
            wiersz++
        }
    }
    serial.writeNumbers(list)
    basic.pause(500)
}