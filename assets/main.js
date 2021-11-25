// const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eaque. Soluta asperiores, exercitationem, ab labore earum, non pariatur sint numquam nobis voluptatem id! Incidunt quia totam repellendus rem unde commodi."
// const para = document.querySelector('main p')

// let word = document.createElement('span')
// word.className = "word"

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//         para.appendChild(word)
//         word = document.createElement('span')
//         word.className = "word"
//     }

//     const letter = document.createElement('span')
//     letter.calssName = "letter"
//     letter.innerText = text[i]
//     word.appendChild(letter)
// }

// para.appendChild(word)

const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eaque. Soluta asperiores, exercitationem, ab labore earum, non pariatur sint numquam nobis voluptatem id! Incidunt quia totam repellendus rem unde commodi."
const para = document.querySelector('main p')

let textElements = [];

const createWord = () => {
    let element = document.createElement('span')
    element.className = "word"
    return element
}

const createLetter =  (word, letter) => {
    const element = document.createElement('span')
    element.className = "letter"
    element.innerText = letter
    textElements.push(element)
    word.appendChild(element)
    return word
}

let word = createWord()

// for (let i = 0; i < text.length; i++) 
text.split('').forEach(letter => {
    {
        if (letter === " ") {
            para.appendChild(word)
            word = createWord()
        }

        createLetter(word, letter)
    }
})

para.appendChild(word)

// Identifica letra digitda 
let pos = 0

window.addEventListener('keydown', ev => {
    if(ev.key === text[pos]) {
        textElements[pos].classList.remove("wrong")
        textElements[pos].classList.add("correct")
        pos++
    } else {
        textElements[pos].classList.add("wrong")
    }
})
