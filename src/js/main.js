let btn = document.querySelector('.header__btn')
let overlay = document.querySelector('.overlay')
let qwe = document.querySelector('.popup__qwe')
let form = document.querySelector('.popup__form-btn')

btn.addEventListener('click', () => {
        overlay.style.cssText = 'display:flex'

    qwe.addEventListener('click',()=>{
        overlay.style.cssText = 'display:none'
    })
    form.addEventListener('click',(e)=>{
        e.preventDefault()
        overlay.style.cssText = 'display:none'
    })
})

