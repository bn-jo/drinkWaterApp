const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const precentege = document.getElementById('precentege')
const remained = document.getElementById('remained')


updateBigCup()

smallCups.forEach((cup, idx) => {

    cup.addEventListener('click', () => higelightCups(idx))

})




function higelightCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {

        idx--
    }


    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {

            cup.classList.add('full')
        } else {
            cup.classList.remove('full')


        }



    })

    updateBigCup()
}



function updateBigCup() {

    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallCups.length



    if (fullCups === 0) {
        precentege.style.visibility = 'hidden'
        precentege.style.height = 0
    } else {
        precentege.style.visibility = 'visible'
        precentege.style.height = `${fullCups / totalCups * 330}px`


        precentege.innerText = `${fullCups / totalCups *100}%`
    }



    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'

        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}