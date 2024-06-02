/*
var divImages = document.getElementsByClassName('Img')[0];console.log(divImages);

for (var i = 1; i <= 10; i++){
  let content =""
  let size=`${i*25}x${i*25}`;let alt="img"+i
  if(i%2==0){
      content=
      `    <img class="imgLeft" src="./pexels-christian-heitz-842711.jpg" alt="${alt}" srcset="">
      >`
  }
  else{
      content= 
      `<img class="imgScale" src="./pexels-niklas-jeromin-14760650.jpg" alt="${alt}" srcset="">`
  }

  divImages.innerHTML+=(content)
}
*/

var imgTeste=document.getElementById('imgTeste');//console.log(imgTeste.currentSrc);

var divVideo = document.getElementsByClassName('video')[0];//console.log(divVideo)
//divVideo.setAttribute('poster', `${(imgTeste.currentSrc)}`)

var btnEnd = document.getElementsByClassName("btnEnd")[0];//console.log(btnEnd)

setInterval(() => {
  btnEnd.style.color= "#" + Math.floor(Math.random() * 16777215).toString(16);
}, 100);

