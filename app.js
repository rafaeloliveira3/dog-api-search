'use strict'

import { searchDog } from "./dogApi.js"

const createImg = (imgAdress) => {
    const img = document.createElement('img')
    img.src = imgAdress
    
    return img
}

const divShow = (div) => {
    if(div.classList.contains('show')) {
        return false
    }
    else {
        div.classList.toggle('show')
    }
}
const showDogs = async () => {
    const breed = document.getElementById('breed').value
    const gallery = document.getElementById('gallery')
    divShow(gallery)

    const images = await searchDog(breed)
    const tagImg = images.map(createImg)

    gallery.replaceChildren(...tagImg)
}

const handleKey = (event) => {
    if(event.key == 'Enter')
        showDogs()
}

document.getElementById('breed').addEventListener('keypress', handleKey)
