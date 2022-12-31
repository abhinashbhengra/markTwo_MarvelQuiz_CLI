const readlineSync = require('readline-sync')
let score = 0
const quesBank = [
  {
    question:'Black Panther is set in which fictional country? ',
    answer:'wakanda'
  },
  {
    question:'Who is the Winter Soldier? ',
    answer:'buckey'
  },
  {
    question:'Thor played what video game in Avengers:Endgame? ',
    answer:'fortnite'
  },
  {
    question:'Who is the first born child of Odin? ',
    answer:'hela'
  },
  {
    question:'Who did Captian America give his shield to in Endgame? ',
    answer:'sam'
  }
]
function welcome(){
  const userName = readlineSync.question('What should I call you! ')
  console.log('Hi ' + userName.toUpperCase() + ' Can you help me finding scerets of Marvel Cinematic Universe')
}
function game(){
  quesBank.forEach(ques =>{
    const userResponse = readlineSync.question(ques.question)
    if(userResponse.toUpperCase() === ques.answer.toUpperCase()){
      console.log('Correct !!')
      console.log('Current Score :',1)
      score++
    }else{
      console.log('Ohh no! try next time...')
      console.log('Current Score :',0)
    }
    console.log('...................')
  })
}
function message(){
  if(score >=4) console.log('WOOHOO!! WELL DONE!')
  else console.log('OH!! YOU GOT LESS, NO WORRIES!')
  console.log('Your Total Score :',score)
}
welcome()
game()
message()