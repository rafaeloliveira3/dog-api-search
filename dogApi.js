'use strict'

const searchDog = async (dogBreed) => {
    const url = `https://dog.ceo/api/breed/${dogBreed.toLowerCase()}/images`
    const response = await fetch(url)

    const dogList = await response.json()
    return dogList.message
}

export {
    searchDog
}