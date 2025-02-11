const lightbox = document.createElement('div')
const images = document.querySelectorAll('.gallery-image')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        document.body.style.overflowY='hidden'
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    document.body.style.overflowY='scroll'
})