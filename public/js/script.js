const inputBox = document.getElementById('input')
const submitBtn = document.getElementById('submit')
const content = document.getElementById('content')
const answer = document.getElementById('answer')
const version = document.getElementById('version')
const listContainer = document.getElementById('save-lists')

let answeredInput = ''
const verNum = '0.01'
let answers = []

const setVersion = (version.innerText = `version ${verNum}`)

function saveAnswer(answer) {
    if(answers.length >= 0) {listContainer.parentElement.classList.add('show')}
    const content = inputBox.value
    const list = { content: `${content}`, answer: `${answer}` }
    if(answers.length > 4 ){
        answers.pop()
    }
    answers.unshift(list)


    listContainer.innerHTML = answers.map(ans => {
        if(ans.answer === 'Yes') { 
            return `<li>${ans.content}  <span class="list-ans">${ans.answer}</span></li>`
        } else {
            return `<li>${ans.content}  <span class="list-ans no">${ans.answer}</span></li>`
        }})
        .join('')
}

function getAnswer() {
    const number = Math.floor(Math.random() * 4)
    switch (number) {
        case 0:
            answer.innerHTML = `<h6 class="small-text">それはもちろん...</h6><h1>YES<span>ですね!!!</span></h1>`
            saveAnswer('Yes')
            break
        case 1:
            answer.innerHTML = `<h6 class="small-text">どちらかというと...</h6><h1>YES<span>かな</span></h1>`
            saveAnswer('Yes')
            break
        case 2:
            answer.innerHTML = `<h6 class="small-text">やめといたほうがいいので</h6><h1>No!!</h1>`
            saveAnswer('No')
            break
        case 3:
            answer.innerHTML = `<h6 class="small-text">Noと言って欲しいんですよね</h6><h1>No<span>です</span></h1>`
            saveAnswer('No')
            break
    }
}

submitBtn.addEventListener('click', () => {
    if (answeredInput === inputBox.value && inputBox.value !== '') {
        content.innerText = '同じ質問は１回までだよ！'
        answer.innerHTML = ''
    } else {
        const writeDownText = inputBox.value

        if (inputBox.value) {
            content.innerText = `「 ${writeDownText} 」`
            answeredInput = writeDownText
            getAnswer()
        } else {
            content.innerText = '何か入力してね！'
            answer.innerHTML = ''
        }
    }
})
