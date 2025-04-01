function isLeapYear (year) {
    if (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) {
        return true
    }
    return false
}

const rok = Number(prompt("Zadej rok: "))

document.body.innerHTML = `Je rok ${rok} přestupný? ${isLeapYear(rok)}`