let picture = [
     "https://avatars.mds.yandex.net/i?id=1efa806ff00be81f75d45c4bfb997057b68349db-7612999-images-thumbs&n=13",
     "http://spb.zvetnoe.ru/upload/catalog/2022/09/gravityfalls-010.jpg",
     "https://avatars.mds.yandex.net/i?id=d0c06378530dedf8958b2195a8aa6bc7-4349754-images-thumbs&n=13",
     "https://avatars.mds.yandex.net/i?id=b00218f11e9543ef43998f1196d92ab3-4981909-images-thumbs&n=13",
     "https://avatars.mds.yandex.net/i?id=6f1df6ccad636f07a6faa6166d7d46b1df5eae30-8148275-images-thumbs&n=13",
     "https://www.mirf.ru/wp-content/uploads/2015/11/Fire_bat_monster_gravityfalls1.png" 
]
let yesAnswer = 0

let quests = [
     "В каком году я роделась?",
     "В каком городе я живу?",
     "На чём я люблю кататься зимой?",
     "Мой любимый напиток?",
     "Како-го животного я бы хотела завести?"
]
let answers = [
     "2010",
     "Екатеринбург",
     "Сноуборд",
     "Вода",
     "Хорёк"
]
let noAnswer = [
     ["2008", "2011","2010", "2013"],
     ["Питер", "Москва", "Омск","Екатеринбург"],
     ["Лыжи","Сноуборд", "Коньки", "Снегоход"],
     ["Вода","Чай", "Кофе", "Коктель"],
     ["Кошка", "Собака","Хорёк", "Кролик"]
]
let statusC
let scores = 0
let numberQuestion = 0
let dalee = document.querySelector(".dalee")
dalee.addEventListener("click", () => {
     document.querySelector("body").style.background=`url(${picture[numberQuestion]})`
     document.querySelector("body").style.backgroundSize="100%"
     
     document.querySelector(".p").style.background="none"
     document.querySelector(".pp").style.background="none"
     document.querySelector(".ppp").style.background="none"
     document.querySelector(".pppp").style.background="none"
     if ( numberQuestion==10){
        document.querySelector(".answer").innerHTML=`<p>Вы набрали ${scores} из 5 баллов</p>`
        document.querySelector("body").style.background=`url(${picture[5]})`
     }
     if ( numberQuestion==0){
          dalee.textContent="Далее"
     }
     document.querySelector(".quest").textContent = quests[numberQuestion]
     document.querySelector(".p").textContent = noAnswer[numberQuestion][0]
     document.querySelector(".pp").textContent = noAnswer[numberQuestion][1]
     document.querySelector(".ppp").textContent = noAnswer[numberQuestion] [3]
     document.querySelector(".pppp").textContent = noAnswer[numberQuestion][2]
     numberQuestion+=1
     if( numberQuestion==5){
     dalee.textContent="Завершить"
     numberQuestion=10
     }
})
let p = document.querySelector(".p")
p.addEventListener("click", () => {
     checkAnswer("p")
})
let pp = document.querySelector(".pp")
pp.addEventListener("click", () => {
     checkAnswer("pp")
})
let ppp = document.querySelector(".ppp")
ppp.addEventListener("click", () => {
     checkAnswer("ppp")
})
let pppp = document.querySelector(".pppp")
pppp.addEventListener("click", () => {
     checkAnswer("pppp")
})
function checkAnswer(answerClass) {
     switch (document.querySelector(`.${answerClass}`).textContent) {
          case "2010":
               statusC = true
               scores+=1
               
               break;
          case answers[1]:
               statusC = true
               scores+=1
               
               break;
          case answers[2]:
               statusC = true
               scores+=1
              
               break;
          case answers[3]:
               statusC = true
               scores+=1
               
               break;
          case answers[4]:
               statusC = true
               scores+=1
               
               break;
          case answers[5]:
               statusC = true
               scores+=1
               break;
          default:
               statusC = false
               break;
     }
     if (statusC==true){
          document.querySelector((`.${answerClass}`)).style.background="green"
     }else{
          document.querySelector((`.${answerClass}`)).style.background="red"
     }
}