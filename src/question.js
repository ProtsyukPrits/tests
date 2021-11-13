export class Question {
  static create(question) {
    return fetch('https://my-first-node-project-2394b-default-rtdb.europe-west1.firebasedatabase.app/question.json', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        question.id = response.name
        return question
      })
      .then(addToLocalStorage)
      .then(Question.renderList)
    
  }


  static fetch(token) {
    if (!token) {
      return Promise.resolve('<p class="error"> У вас нет токена</p>')
    }
    return fetch(`https://my-first-node-project-2394b-default-rtdb.europe-west1.firebasedatabase.app/question.json?auth=${token}`)
      .then(response => response.json())
      .then(response => {
        if (response && response.error) {
          return `<p class="error">${response.error}</p>`
        }

        return response ? Object.keys(response).map(key => ({
          ...response[key],
          id: key
          
        })) : []
      })
}


  static renderList() {
    const questions = getQuestionsFromLocalStorage()
    const html = questions.length
      ? questions.map(toCard).join('')
      : ` <div
        class="mui--text-black-54 mui--text-body2">
        Задай Вопросы</div>
      `
    const list = document.getElementById('list')
    list.innerHTML = html
  }
  
// Ошибка при неправельному введенні даних при реєстрації
  static listToHTML(questions) {
    return questions.length
      ? `<ol>${questions.map(q => `<li>${q.text}</li>`).join('')}</ol>`
      : '<p> Вопрoсов пока нет </p>'
  }
}


function addToLocalStorage(question) {
  const all = getQuestionsFromLocalStorage()
  all.push(question)
  localStorage.setItem('questions', JSON.stringify(all))
}


function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question) {
  return `
    <div class="mui--text-black-54 mui--text-body2">
  ${new Date(question.date).toLocaleDateString()}
    ${new Date(question.date).toLocaleDateString()}

      </div>
      <div> ${question.text}</div>
  `
}