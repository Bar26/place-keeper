'use strict'

function saveToStorage(key, val) {
    var json = JSON.stringify(val)
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json)
    return val
}

function getTimeTillNextBd() {
    const bDate = loadFromStorage('b-date')
    const bTime = loadFromStorage('b-time')
    const date = bDate.split('-')
    const time = bTime.split(':')
    const birthDate = new Date(+date[0], +date[1] - 1, +date[2], +time[0], +time[1])
    let nextBirthday = birthDate
    const now = new Date()
    const yearOfNextBirthday = (now.getMonth() - 1 < nextBirthday.getMonth()) ? now.getFullYear() : now.getFullYear() + 1
    nextBirthday.setFullYear(yearOfNextBirthday)
    const timeTillBd = nextBirthday - now
    return timeTillBd
}