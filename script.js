
const stars = document.getElementById("stars");

const hearts = document.getElementById("hearts");




// создаём звёзды

for(let i = 0; i < 150; i++){


    let star = document.createElement("div");


    star.className = "star";


    star.style.left =
    Math.random()*100 + "%";


    star.style.top =
    Math.random()*100 + "%";


    star.style.animationDuration =
    (3 + Math.random()*8) + "s";


    star.style.opacity =
    Math.random();


    stars.appendChild(star);

}








// сердечки

function createHearts(){


    for(let i = 0; i < 35; i++){


        let heart = document.createElement("div");


        heart.className = "floating-heart";


        heart.innerHTML = "❤️";


        heart.style.left =
        Math.random()*100 + "%";


        heart.style.bottom = "0";


        heart.style.animationDelay =
        Math.random()+"s";


        hearts.appendChild(heart);


    }

}








function openGift(){


    createHearts();


    setTimeout(()=>{


        nextScreen("date");


    },1000);


}









function nextScreen(id){


    let current =
    document.querySelector(".screen.active");


    current.classList.remove("active");



    setTimeout(()=>{


        document
        .getElementById(id)
        .classList.add("active");


    },200);


}









// фотографии


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



const img =
document.getElementById("photo");



if(img){


setInterval(()=>{


    currentPhoto++;


    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }



    img.style.opacity = 0;



    setTimeout(()=>{


        img.src =
        photos[currentPhoto];


        document
        .getElementById("caption")
        .innerHTML =
        captions[currentPhoto];


        img.style.opacity = 1;


    },500);



},5000);


}









// открыть письмо


function openLetter(){


let envelope =
document.getElementById("envelope");


let letter =
document.getElementById("letterText");



envelope.style.transform =
"scale(1.2)";



envelope.style.opacity =
"0";



setTimeout(()=>{


envelope.style.display="none";


letter.style.display="block";


},600);



}








// музыка


function toggleMusic(){


    let music =
    document.getElementById("music");



    if(music.paused){


        music.play();


    }

    else{


        music.pause();


    }


}









// пасхалка сосиска 🌭


function secret(){


    let text =
    document.getElementById("secretText");



    if(text.innerHTML === ""){


        text.innerHTML =
        "Ты нашла прикол) ❤️<br>Твоя сосиска всегда рядом 🌭";


        createHearts();


    }


}
