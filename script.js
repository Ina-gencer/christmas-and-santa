
gsap.from(".block", {opacity: 0, duration: 2, delay: 1, stagger: .6})
gsap.from(".christmas", {y: -100, duration: 2, stagger: .6, opacity: 0})
gsap.from(".game", {y: -100, ease: "bounce.out", duration: 2.5, opacity: 0, delay: 3, repeat: -1, repeatDelay:3})


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 3,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
     "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true, 
          "mode":  "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 350,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 20,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


/// -------//////
function christmasCountdown() {
    const christmasDate = new Date("December 25, 2022 00:00");
    const now = new Date();
    const diff = christmasDate - now;
  

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;
    
    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    setInterval(christmasCountdown, 1000);
    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timeID);
        merryChristmas();

    }

}

let timeID = setInterval(christmasCountdown, 1000);

christmasCountdown();
function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.classList.add('red');
    heading.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!!!'
}




// --- music --- //
const btnOnePlay = document.querySelector('.play');
btnOnePlay.addEventListener('click', function(){
    const myAudio = document.querySelector('#myAudio').play();
})

const btnTwoPause = document.querySelector('.pause');
btnTwoPause.addEventListener('click', function() {
    const myAudio = document.querySelector('#myAudio').pause();
})

//==============================================
 // --- predictions--- //    
 const buttonSanta = document.querySelector("#santa-btn");
 const prediction = document.querySelector("#prediction");
 
 const predictionArray = [
    "Новое путешествие наполнит вашу жизнь непередаваемыми воспоминаниями.",
    "Спроси себя, что из сделанного сегодня приблизит тебя к тому, кем ты хочешь стать завтра.",
    "Прими свое прошлое без сожалений. Справляйся с настоящим уверенно. Смотри в глаза будущему без страха.",
     "В новом году тебя ждет много поддержки. Не бойся обращаться за помощью в трудные моменты.",
     "В ближайшем будущем вам предстоит в чем-то рискнуть.",
     "В новом году появятся новые возможности. Говори им «да», чтобы стать ближе к своей мечте.",
     "Легкое сердце поможет вам пройти через все сложные времена.",
     "Будь готов(-а), что что-то пойдет не по твоему плану. Но в итоге всё сложится так, как должно быть.",
     "В новом году не теряй веру, что всё получится. Тогда точно получится.",
     "Человек никогда не бывает слишком стар, чтобы учиться.",
     "Вселенная слышит тебя. Доверься ей и не торопи события.",
     "Скоро вы познакомитесь с человеком, который станет вам другом на всю жизнь.",
     "В новом году откладывай принятие решений на утро. Хороший ночной сон может многое изменить.",
     "Занимайтесь тем, что вы любите. Остальное встанет на свои места.",
     "Для реализации всех проектов понадобится время и усилия, но результат превзойдет все ожидания.",
     "В новом году прислушивайся к людям. Верное решение прозвучит из чужих уст.",
     "Год перемен. Меняй все, в любых новых начинаниях тебя ждет успех. Побольше решительности, судьба редко дает подобные шансы.",
     "Тебе предстоит много работы, но и повышение дохода, как результат упорного труда. Пробуй новые сферы, тебя ждет успех.",
     "Удача благоволит смелым.",
     "Год будет непростым. Придется побороться за собственное счастье. Ничто не дастся в руки без упорной работы, но терпение и упорство приведут к положительным результатам.",
     "С Новым годом вас ждут новые перспективы.",
     "Год для тебя будет необычным. Ты откроешь в себе скрытые резервы, что позволит решиться на самые безумные поступки.",
     "Золотой шанс свалится на вас в этом месяце.",
     "Год будет наполнен общением. Если даже раньше ты не любил(-а) новые знакомства и частые встречи, в этом году это станет основой твоей жизни.",
     "Хорошее время, чтобы завершить старые дела.",
     "Ваша давняя мечта сбудется.",
     "Год будет наполнен добротой. Доброе сердце позволит справиться даже с самыми изощренными кознями. Делись этими чувствами с другими, получай добро в ответ.",
     "Приключение может принести вам настоящее счастье.",
     "Вас ждет долгое путешествие, которые оправдает ваши ожидания."
 ]
 
             // --- timeout  --- //
 
 buttonSanta.addEventListener("click", () => {
     buttonSanta.classList.add("animation");
     prediction.textContent = "Подожди немного...";
 
     setTimeout(() => {    
         let randomPrediction = predictionArray[Math.floor(Math.random() * predictionArray.length)];
         prediction.textContent = randomPrediction;
         buttonSanta.classList.remove("animation");
        buttonSanta.style = "display: none";
     }, 0500);
 })


//game
const btnOne = document.querySelector('#one')
const btnTwo = document.querySelector('#two')
const btnStart = document.querySelector('#start')
const image = document.querySelector('#myImage')
const question = document.querySelector('.where')


function home() {

    myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman1.jpg?v=1641941000181')
    question.textContent = 'КУДА ЕМУ ПОЙТИ?'
    btnOne.style = 'display: block'
    btnOne.textContent = 'НАПРАВО'
    btnTwo.style = 'display: block'
    btnTwo.textContent = 'ВНИЗ'
    btnStart.style = 'display: none'

//----------------начало блок первая кнопка----------------------------

    btnOne.addEventListener('click', oneRight)

    function oneRight() {
        myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman2.jpg?v=1641941084548')
        question.textContent = 'А ТЕПЕРЬ?'
        btnOne.style = 'display: block'
        btnOne.textContent = 'НАПРАВО'
        btnTwo.style = 'display: block'
        btnTwo.textContent = 'ВНИЗ'
        btnStart.style = 'display: none'

        btnOne.addEventListener('click', twoRight)
        function twoRight() {
            myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman3.jpg?v=1641941132953')
            question.textContent = 'Идем дальше?'
            btnOne.style = 'display: block'
            btnOne.textContent = 'ВНИЗ'
            btnTwo.style = 'display: none'
            btnTwo.textContent = ''
            btnStart.style = 'display: none'

            btnOne.addEventListener('click', threeDown)
            function threeDown() {
                myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman4.jpg?v=1641941174134')
                question.textContent = 'ОЙ! ЗДЕСЬ НЕТ ВЫХОДА!'
                btnOne.style = 'display: none'
                btnOne.textContent = ''
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: block'
                btnStart.addEventListener('click', home)
            }
        }

        btnTwo.addEventListener('click', twoDown)
        function twoDown() {
            myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman5.jpg?v=1641941248922')
            question.textContent = 'ЗДЕСЬ НЕТ ВЫХОДА!'
            btnOne.style = 'display: none'
            btnTwo.style = 'display: none'
            btnStart.style = 'display: block'
            btnStart.addEventListener('click', home)
        }
    }
    //----------------конец блок первая кнопка----------------------------


    //----------------начало блок вторая кнопка---------------------------
    btnTwo.addEventListener('click', oneDown)

    function oneDown() {
        myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman1.2.jpg?v=1641941293431')
        question.textContent = 'ИДЕМ ДАЛЬШЕ?'
        btnOne.style = 'display: block'
        btnOne.textContent = 'НАПРАВО'
        btnTwo.style = 'display: block'
        btnTwo.textContent = 'ВНИЗ'
        btnStart.style = 'display: none'

        btnOne.addEventListener('click', fourRight)
        function fourRight() {
            myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman1.3.jpg?v=1641941334823')
            question.textContent = 'Я ЗАБЛУДИЛСЯ, ПОМОГИ МНЕ!'
            btnOne.style = 'display: block'
            btnOne.textContent = 'НАПРАВО'
            btnTwo.style = 'display: block'
            btnTwo.textContent = 'ВНИЗ'
            btnStart.style = 'display: none'

            btnOne.addEventListener('click', fiveRight)
            function fiveRight() {
                myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman1.4.jpg?v=1641941383132')
                question.textContent = 'ЧТО ТЕПЕРЬ ДЕЛАТЬ?!'
                btnOne.style = 'display: none'
                btnOne.textContent = ''
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: block'
                btnStart.addEventListener('click', home)
            }

            btnTwo.addEventListener('click', fiveDown)
            function fiveDown() {
                myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman1.5.jpg?v=1641941435536')
                question.textContent = 'ЧУВСТВУЮ СКОРО ВЫХОД!'
                btnOne.style = 'display: block'
                btnOne.textContent = 'НАПРАВО'
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: none'


                btnOne.addEventListener('click', eightRight)
                function eightRight() {
                    myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman1.6.jpg?v=1641941470644')
                    question.textContent = 'УРРРААА! СПАСИБО ЗА ПОМОЩЬ!!!'
                    btnOne.style = 'display: none'
                    btnOne.textContent = ''
                    btnTwo.style = 'display: none'
                    btnTwo.textContent = ''
                    btnStart.style = 'display: none'
                }
            }

        }

        btnTwo.addEventListener('click', fourDown)
        function fourDown () {
            myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman6.jpg?v=1641941537720')
            question.textContent = 'БЫСТРЕЕ!'
            btnOne.style = 'display: block'
            btnOne.textContent = 'НАПРАВО'
            btnTwo.style = 'display: none'
            btnTwo.textContent = ''
            btnStart.style = 'display: none'

            btnOne.addEventListener('click', sevenRight)
            function sevenRight() {
                myImage.setAttribute('src', 'https://cdn.glitch.global/a8acf215-28b8-466a-b3ca-1aac2d552de0/snowman7.jpg?v=1641941572222')
                question.textContent = 'МНЕ СТРАШНО, ЗДЕСЬ НЕТ ВЫХОДА!'
                btnOne.style = 'display: none'
                btnOne.textContent = ''
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: block'
                btnStart.addEventListener('click', home)
            }

        }

    }
//----------------конец блок вторая кнопка---------------------------

}

home()




