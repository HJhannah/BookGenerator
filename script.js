/*
    Project 2
    Author: Hannah Jones
    Start Edit Date: 3-26-24
    End Edit Date: 4-4-24
*/

//declaring some variables
let fName = document.getElementById('firstName')
let lName = document.getElementById('lastName')
let checkError = document.getElementById('checkError')
let submitButton = document.getElementById("submitBttn");
let resetBttn = document.getElementById('resetBttn')

//hiding the reset button until the book recommendation page is shown
resetBttn.style.visibility='hidden'



//drawing focus to first name input box
window.addEventListener('load', function() {
    fName.focus()}
)

//User enters name and genre then clicks submit
submitButton.addEventListener("click", validateName)

//will reset page when reset button is clicked
resetBttn.addEventListener("click", resetPage)

//validating that the user entered a valid name (anything but nothing)
function validateName() {
    if (fName.value == '' || lName.value == '') {
        let nameError = document.getElementById('nameError')
        return nameError.innerHTML = '*Please enter a name'
    }
    else {
        nameError.innerHTML = ''
        validateDropdown()
    }
}

//"validating" but really just grabbing the dropdown value
function validateDropdown() {
    let genre = document.querySelector('#genres')
    let selectedGenre = genre.value

    validateCheckbox(selectedGenre);
}

//making sure an option is picked and determining which one was chosen
function validateCheckbox(selectedGenre) {
    let length = '';
    let longChecked = document.getElementById('longLength')
    let shortChecked = document.getElementById('shortLength')

    //if long
    if (longChecked.checked && !shortChecked.checked) {
        checkError.innerHTML = ''
        length = longChecked.value
    }
    //if short
    else if (shortChecked.checked && !longChecked.checked) {
        checkError.innerHTML = ''
        length = shortChecked.value
    }
    //no choice is picked/both are picked
    else {
        return checkError.innerHTML = '*ONE book length must be picked!'
    }

    validateReadingLevel(selectedGenre, length);

}

//validating that a reading level is picked
function validateReadingLevel(selectedGenre, length) {
    let readingLvl = ''
    let radioError = document.getElementById('radioError')
    let adultLvl = document.getElementById('adult')
    let youngAdultLvl = document.getElementById('youngAdult')
    let childLvl = document.getElementById('children')

    if (adultLvl.checked) {
        readingLvl = adultLvl.value
    }
    else if (youngAdultLvl.checked) {
        readingLvl = youngAdultLvl.value
    }
    else if (childLvl.checked) {
        readingLvl = childLvl.value
    }
    else {
        return radioError.innerHTML = '*Please select a reading level!'
    }
    createBookRec(selectedGenre, length, readingLvl)
}

//creating the book rec based off of the user's choices,
//and generating the page to show the results
function createBookRec(selectedGenre, length, readingLvl) {
    //for each array, this is how the books are sorted:
    //[0] = long+adult ; [1] = long+YA ; [2] = long+children
    //[3] = short+adult ; [4] = short+YA ; [5] = short+children
    let classicsArray = [['./images/prideAndPrejudice.jpg', './images/hobbit.jpg'], ['./images/catcherInTheRye.jpg', './images/hobbit.jpg'], ['./images/secretGarden.jpg', './images/aliceInWonderland.jpg'], 
    ['./images/greatGatsby.jpg', './images/animalFarm.jpg'], ['./images/lordOfFlies.jpg', './images/songsOfInnocence.jpg'], ['./images/littlePrince.jpg', './images/charlottesWeb.jpg']]
    let fantasyArray = [['./images/lordOfRings.jpg', './images/fourthWing.jpg'], ['./images/harryPotter.jpg', './images/prisonHealer.jpg'], ['./images/guardiansOfGahoole.jpg', './images/percyJackson.jpg'], 
    ['./images/martianChoronicles.jpg', './images/anthem.jpg'], ['./images/lordOfFlies.jpg', './images/elfhame.jpg'], ['./images/magicTreehouse.jpg', './images/littlePrince.jpg']]
    let histFicArray = [['./images/makingFaces.jpg', './images/invisibleHour.jpg'], ['./images/strippedPajamas.jpg', './images/bookThief.jpg'], ['./images/warSavedLife.jpg', './images/acrossLines.jpg'], 
    ['./images/spy.jpg', './images/tailorAndKings.jpg'], ['./images/numberStars.jpg', './images/miceMen.jpg'], ['./images/pinkSay.jpg', './images/whippingBoy.jpg']]
    let scienceFicArray = [['./images/martian.jpg', './images/dune.jpg'], ['./images/endersGame.jpg', './images/dragonFlight.jpg'], ['./images/cityEmber.jpg', './images/wrinkleTime.jpg'], 
    ['./images/martianChoronicles.jpg', './images/timeMachine.jpg'], ['./images/illustratedMan.jpg', './images/binti.jpg'], ['./images/summerInDay.jpg', './images/forestsSilence.jpg']]

    let img = document.createElement('img')

    //creating new page
    let newSection = document.getElementById('recBookSection')
    let heading = document.getElementById('heading')
    let body = document.getElementById('body')
    let form = document.getElementById('nameAndGenreForm')
    resetBttn.style.visibility='visible'
    body.removeChild(form)

    heading.innerHTML = 'Book Recommendation For ' + fName.value + ' ' + lName.value

    //

// creating generator //
    //Genre = Classic
    if (selectedGenre == 'Classic') {
        if (length == 'Long' && readingLvl == 'Adult') {
            let classics = classicsArray[0][Math.floor(Math.random() * classicsArray[0].length)]
            img.src = classics
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Young Adult') {
            let classics = classicsArray[1][Math.floor(Math.random() * classicsArray[1].length)]
            img.src = classics
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Children') {
            let classics = classicsArray[2][Math.floor(Math.random() * classicsArray[2].length)]
            img.src = classics
            newSection.appendChild(img)
        }
        //short options
        else if (length == 'Short' && readingLvl == 'Adult') {
            let classics = classicsArray[3][Math.floor(Math.random() * classicsArray[3].length)]
            img.src = classics
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Young Adult') {
            let classics = classicsArray[4][Math.floor(Math.random() * classicsArray[4].length)]
            img.src = classics
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Children') {
            let classics = classicsArray[5][Math.floor(Math.random() * classicsArray[5].length)]
            img.src = classics
            newSection.appendChild(img)
        }            
    }

    //fantasy options
    else if (selectedGenre == 'Fantasy') {
        if (length == 'Long' && readingLvl == 'Adult') {
            let fantasy = fantasyArray[0][Math.floor(Math.random() * fantasyArray[0].length)]
            img.src = fantasy
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Young Adult') {
            let fantasy = fantasyArray[1][Math.floor(Math.random() * fantasyArray[1].length)]
            img.src = fantasy
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Children') {
            let fantasy = fantasyArray[2][Math.floor(Math.random() * fantasyArray[2].length)]
            img.src = classics
            newSection.appendChild(img)
        }
        //short options
        else if (length == 'Short' && readingLvl == 'Adult') {
            let fantasy = fantasyArray[3][Math.floor(Math.random() * fantasyArray[3].length)]
            img.src = fantasy
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Young Adult') {
            let fantasy = fantasyArray[4][Math.floor(Math.random() * fantasyArray[4].length)]
            img.src = fantasy
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Children') {
            let fantasy = fantasyArray[5][Math.floor(Math.random() * fantasyArray[5].length)]
            img.src = classics
            newSection.appendChild(img)
        }
    }

    //choice = hist fic
    if (selectedGenre == 'Historical Fiction') {
        if (length == 'Long' && readingLvl == 'Adult') {
            let histFic = histFicArray[0][Math.floor(Math.random() * histFicArray[0].length)]
            img.src = histFic
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Young Adult') {
            let histFic = histFicArray[1][Math.floor(Math.random() * histFicArray[1].length)]
            img.src = histFic
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Children') {
            let histFic = histFicArray[2][Math.floor(Math.random() * histFicArray[2].length)]
            img.src = histFic
            newSection.appendChild(img)
        }
        //short options
        else if (length == 'Short' && readingLvl == 'Adult') {
            let histFic = histFicArray[3][Math.floor(Math.random() * histFicArray[3].length)]
            img.src = histFic
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Young Adult') {
            let histFic = histFicArray[4][Math.floor(Math.random() * histFicArray[4].length)]
            img.src = histFic
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Children') {
            let histFic = histFicArray[5][Math.floor(Math.random() * histFicArray[5].length)]
            img.src = histFic
            newSection.appendChild(img)
        }            
    }

    //choice = scifi
    if (selectedGenre == 'Science Fiction') {
        if (length == 'Long' && readingLvl == 'Adult') {
            let scifi = scienceFicArray[0][Math.floor(Math.random() * scienceFicArray[0].length)]
            img.src = scifi
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Young Adult') {
            let scifi = scienceFicArray[1][Math.floor(Math.random() * scienceFicArray[1].length)]
            img.src = scifi
            newSection.appendChild(img)
        }
        else if (length == 'Long' && readingLvl == 'Children') {
            let scifi = scienceFicArray[2][Math.floor(Math.random() * scienceFicArray[2].length)]
            img.src = scifi
            newSection.appendChild(img)
        }
        //short options
        else if (length == 'Short' && readingLvl == 'Adult') {
            let scifi = scienceFicArray[3][Math.floor(Math.random() * scienceFicArray[3].length)]
            img.src = scifi
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Young Adult') {
            let scifi = scienceFicArray[4][Math.floor(Math.random() * scienceFicArray[4].length)]
            img.src = scifi
            newSection.appendChild(img)
        }
        else if (length == 'Short' && readingLvl == 'Children') {
            let scifi = scienceFicArray[5][Math.floor(Math.random() * scienceFicArray[5].length)]
            img.src = scifi
            newSection.appendChild(img)
        }            
    }
}
//page reset function (called with eventListener)
function resetPage() {
    setTimeout(function() {
        window.location.reload();
    })
}