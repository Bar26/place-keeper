'use strict'

function init(){
    renderTimeTillBd()
}

function renderTimeTillBd() {
    const timeTillBd= getTimeTillNextBd()
    const date= new Date(timeTillBd)
    console.log(date)

    console.log(timeTillBd )
    const elBdModal= document.querySelector('.user-birthday')
    console.log(elBdModal)
  
}
