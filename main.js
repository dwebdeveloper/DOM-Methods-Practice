const bodyElement = document.querySelector('body') //
///Below is part of removing an a Element

//Input
let inputElement = document.createElement('input')//create an element of my choice
bodyElement.append(inputElement)// assigning where my Element falls under as a child to another element(parent)
inputElement.type = 'text'
inputElement.placeholder = 'Enter Element to remove'
//Button
let removeElementButton = document.createElement('button')
bodyElement.append(removeElementButton)// assigning where my Element falls under as a child to another element(parent)
removeElementButton.className = 'buttonRemoves'
removeElementButton.append('Submit and remove')

//Below is part of adding a Element

//Input below
let inputElement2 = document.createElement('input')
bodyElement.append(inputElement2) // assigning where my Element falls under as a child to another element(parent)
inputElement2.type = 'text'
inputElement2.placeholder = 'Enter Element to add'
//Button below
let addElementbutton = document.createElement('button')
bodyElement.append(addElementbutton)// assigning where my Element falls under as a child to another element(parent)
addElementbutton.className = 'buttonAdds'
addElementbutton.append('Submit and Add ')

//Below creating more Elements

let button = document.createElement('button') //create an ELement of my choice
bodyElement.append(button) // assigning where my Element falls under as a child to another element(parent) 
button.append('Click Me')// inserting a value inside my element(child)

let mainElement = document.createElement('main')
bodyElement.append(mainElement)

let imgElement = document.createElement('img')
mainElement.append(imgElement)
imgElement.className = 'image' //adding a class attribute named image
imgElement.append('I/m working really I am')
imgElement.src = 'https://media1.tenor.com/images/2f2dccfea00bf13bb586d53fae4c79f6/tenor.gif?itemid=3309789'

let anchorElement = document.createElement('a')
mainElement.append(anchorElement)
anchorElement.className = 'link'
anchorElement.href = 'https://www.digitaltrends.com/news/amc-theatres-plans-to-reopen-its-locations-in-july/'
anchorElement.append('AMC News')

removeElementButton.addEventListener('click', function () {
    let inputRemovedValue = inputElement.value
    if (inputRemovedValue === "image") {
        imgElement.remove()
    } else if (inputRemovedValue === 'a') {
        anchorElement.remove()
    }
})

addElementbutton.addEventListener('click', function () {
    let inputAddedValue = inputElement2.value
    let divElement = document.createElement('div')
    bodyElement.append(divElement)
    divElement.append(inputAddedValue)
})

button.addEventListener('click', function () {
    mainElement.remove()
})




