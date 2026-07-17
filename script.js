/* =================================
   ELEMENTS
================================= */


const stars =
document.getElementById("stars");


const floating =
document.getElementById("floatingElements");


const hearts =
document.getElementById("hearts");







/* =================================
   STARS V6
================================= */


function createStars(){


for(let i = 0; i < 180; i++){


    let star =
    document.createElement("div");



    star.className =
    "star";



    let size =
    Math.random();



    if(size < .6){

        star.classList.add("small");

    }

    else if(size < .9){

        star.classList.add("medium");

    }

    else{

        star.classList.add("big");

    }




    star.style.left =
    Math.random()*100 + "%";



    star.style.top =
    Math.random()*100 + "%";



    star.style.animationDuration =
    (4 + Math.random()*10) + "s";



    star.style.opacity =
    .3 + Math.random()*.7;



    stars.appendChild(star);


}


}



createStars();










/* =================================
   LIVING BACKGROUND
================================= */


const floatSymbols = [

"❤️",

"✨",

"💖",

"💫"

];





function createFloating(){


let item =
document.createElement("div");



item.className =
"float";



item.innerHTML =
floatSymbols[
Math.floor(
Math.random()*floatSymbols.length
)
];



item.style.left =
Math.random()*100 + "%";



item.style.animationDuration =
(8 + Math.random()*8)+"s";



item.style.fontSize =
(18+Math.random()*25)+"px";



floating.appendChild(item);



setTimeout(()=>{


item.remove();


},16000);


}





setInterval(
createFloating,
3000
);









/* =================================
   OPEN GIFT
================================= */


function openGift(){


createHearts();



setTimeout(()=>{


nextScreen("date");


},1000);


}








/* =================================
   HEARTS EFFECT
================================= */


function createHearts(){



for(let i=0;i<40;i++){


let heart =
document.createElement("div");



heart.className =
"floating-heart";



heart.innerHTML =
"❤️";



heart.style.left =
Math.random()*100+"%";



heart.style.bottom =
"0";



heart.style.animationDelay =
Math.random()+"s";



hearts.appendChild(heart);



setTimeout(()=>{


heart.remove();


},3000);



}


}









/* =================================
   SCREEN SWITCH
================================= */


function nextScreen(id){


let current =
document.querySelector(
".screen.active"
);



current.classList.remove(
"active"
);



setTimeout(()=>{


document
.getElementById(id)
.classList.add(
"active"
);



},200);



}







/* =================================
   TIMER
================================= */


const startDate =
new Date(
"2026-03-01T18:30:00"
);





function updateTimer(){


let now =
new Date();



let diff =
now-startDate;



if(diff < 0){

return;

}



let seconds =
Math.floor(
diff/1000
);



let days =
Math.floor(
seconds/(60*60*24)
);



seconds %=
60*60*24;



let hours =
Math.floor(
seconds/(60*60)
);



seconds %=
60*60;



let minutes =
Math.floor(
seconds/60
);



seconds %=
60;




document.getElementById(
"timer"
).innerHTML =


`${days} дней 
${hours} часов 
${minutes} минут 
${seconds} секунд`;



}





setInterval(
updateTimer,
1000
);



updateTimer();
/* =================================
   PHOTOS V6
================================= */


let photos = [

"photo1.jpg",

"photo2.jpg",

"photo3.jpg"

];



let captions = [

"То самое время вместе ✨",

"Ещё один любимый момент 💗",

"Наш маленький мир ❤️"

];



let currentPhoto = 0;



const photo =
document.getElementById("photo");

const caption =
document.getElementById("caption");





if(photo){


setInterval(()=>{



photo.classList.add(
"change"
);



setTimeout(()=>{



currentPhoto++;



if(currentPhoto >= photos.length){

currentPhoto = 0;

}



photo.src =
photos[currentPhoto];



caption.innerHTML =
captions[currentPhoto];



photo.classList.remove(
"change"
);



},800);



},5000);



}









/* =================================
   LETTER OPEN
================================= */


function openLetter(){



let envelope =
document.getElementById(
"envelope"
);



let letter =
document.getElementById(
"letterText"
);



envelope.style.transform =
"scale(1.3)";



envelope.style.opacity =
"0";





setTimeout(()=>{


envelope.style.display =
"none";



letter.style.display =
"block";



startTypingLetter();



},700);



}










/* =================================
   TYPEWRITER LETTER
================================= */



const letterContent = `

18 лет — это только начало...

<br><br>


Сегодня тебе исполняется 18 лет, и мне хочется сказать тебе то, что иногда сложно сказать просто словами.

<br><br>


Я очень рад, что именно ты появилась в моей жизни (снова ахахахах).

<br><br>


Мне нравится в тебе всё: твой характер, твой юмор, твоя красота, твой стиль и то, какая ты настоящая и живая.

<br><br>


Мне нравится, что с тобой можно смеяться над нашими глупостями, говорить «шо ты, голова?», пугаться, когда ты говоришь "соси ска" и понимать, что это только наше.

<br><br>


Спасибо тебе за твою поддержку и за то, что ты рядом.

Особенно за то, что даже несмотря на долгую разлуку, мы смогли снова начать общаться и как итог — мы вместе.

<br><br>


Я хочу, чтобы ты всегда оставалась такой же шикарной, целеустремлённой, доброй и отзывчивой.

<br><br>


Чтобы у тебя всё получилось с поступлением в вуз, чтобы ты добивалась всего, чего хочешь, и чтобы в жизни было как можно больше счастливых моментов.

<br><br>


Никогда не забывай, какая ты шикарная.

А я буду напоминать ❤️

<br><br>


Спасибо тебе за наши моменты, наши шутки, наши разговоры и за то, что ты есть у меня.

<br><br>


Люблю тебя ❤️

<br><br>


Твоя сосиска 🌭

`;






let letterIndex = 0;



function startTypingLetter(){



const box =
document.getElementById(
"typedLetter"
);



box.innerHTML = "";



function type(){



if(letterIndex >= letterContent.length){

return;

}



let char =
letterContent[letterIndex];



if(char === "<"){



let tagEnd =
letterContent.indexOf(
">",
letterIndex
);



box.innerHTML +=
letterContent.substring(
letterIndex,
tagEnd+1
);



letterIndex =
tagEnd+1;



}



else{



box.innerHTML +=
char;



letterIndex++;



}



setTimeout(
type,
25
);



}



type();



}









/* =================================
   MUSIC PLAYER
================================= */


const music =
document.getElementById(
"music"
);



const musicButton =
document.getElementById(
"musicButton"
);



const musicStatus =
document.getElementById(
"musicStatus"
);







function toggleMusic(){



if(music.paused){



music.play();



musicButton.innerHTML =
"⏸";



musicStatus.innerHTML =
"Играет ❤️";



}

else{



music.pause();



musicButton.innerHTML =
"▶";



musicStatus.innerHTML =
"Пауза";



}



}

/* =================================
   SAUSAGE SECRET 🌭
================================= */


function secret(){



let text =
document.getElementById(
"secretText"
);



document.body.classList.add(
"flash"
);



setTimeout(()=>{


document.body.classList.remove(
"flash"
);


},800);





for(let i = 0; i < 45; i++){



let heart =
document.createElement(
"div"
);



heart.className =
"secret-heart";



heart.innerHTML =
"❤️";



heart.style.left =
Math.random()*100+"%";



heart.style.bottom =
"20px";



heart.style.animationDelay =
Math.random()+"s";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},2500);



}





text.innerHTML =

"Твоя сосиска<br>всегда рядом ❤️";



}









/* =================================
   PLANET SECRET 🌍
================================= */


const planet =
document.querySelector(
".planet"
);



if(planet){



planet.addEventListener(
"click",
()=>{


createHearts();



planet.innerHTML =
"💖";



setTimeout(()=>{


planet.innerHTML =
"🌍";


},2000);



}
);



}









/* =================================
   IPHONE PARALLAX ⭐
================================= */



if(
window.DeviceOrientationEvent
){



window.addEventListener(
"deviceorientation",
(event)=>{


let x =
event.gamma || 0;



let y =
event.beta || 0;



x =
Math.max(
-20,
Math.min(
20,
x
)
);



y =
Math.max(
-20,
Math.min(
20,
y
)
);



document.documentElement.style
.setProperty(
"--moveX",
x/5+"px"
);



document.documentElement.style
.setProperty(
"--moveY",
y/5+"px"
);



}

);



}









/* =================================
   INITIAL TOUCH EFFECT
================================= */



document.addEventListener(
"click",
(e)=>{



if(
e.target.tagName === "BUTTON"
){



createHearts();



}



}

);









/* =================================
   PREVENT DOUBLE SCROLL IOS
================================= */


document.body.addEventListener(
"touchmove",
function(e){


},
{
passive:true
}
);








/* =================================
   AUTO START FLOATS
================================= */


setTimeout(()=>{


createFloating();


},2000);
