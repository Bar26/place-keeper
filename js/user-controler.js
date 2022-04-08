'use strict'




function init() {
    const bcColor = loadFromStorage('bc-color')
    document.body.style.backgroundColor = bcColor
    const txtColor = loadFromStorage('txt-color')
    document.body.style.color = txtColor


}

function onSet(ev) {
    ev.preventDefault()
    const elMail = document.querySelector('[name=email]')
    const mail = elMail.value
    if (mail) setEmail(mail)
    elMail.value = ''
    const elAge = document.querySelector('[name=age]')
    const age = elAge.value
    if (age) setAge(age)
    elAge.value = ''
    const elBDate = document.querySelector('[name=b-date]')
    const bDate = elBDate.value
    if (bDate) setBDate(bDate)
    elBDate.value = ''
    const elBTime = document.querySelector('[name=b-time]')
    const bTime = elBTime.value
    if (bTime) setBTime(bTime)
    elBDate.value = ''
    const elTxtColor = document.querySelector('[name=txt-color]')
    const txtColor = elTxtColor.value
    if (txtColor) onSetTxtColor(txtColor)
    elTxtColor.value = '#000000'
    const elBcColor = document.querySelector('[name=bc-color]')
    const bcColor = elBcColor.value
    if (bcColor) onSetBcColor(bcColor)
    elBcColor.value = '#000000'
}



function onSetBcColor(color) {
    setBcColor(color)
    document.body.style.backgroundColor = color
}

function onSetTxtColor(color, colorFor) {
    setTxtColor(color)
    document.body.style.color = color
}
