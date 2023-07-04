/*
let listvideo = document.querySelectorAll('.video-list .vid');
let mainvideo = document.querySelector('.main-video video'); 
let title= document.querySelector('.main-video .title'); 
let likeBtn= document.querySelector('.main-video .likeBtn'); 
let views= document.querySelector('.main-video .views'); 
   
    
    
    listvideo.forEach(video => {
    video.onclick = ()=>{
        listvideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if( video.classList.contains('active')){
        let src = video.children[0].getAttribute('src');
        mainvideo.src = src;
        let text = video.children[1].innerHTML;

        title.innerHTML = text;
let like = video.children[2].innerHTML;
likeBtn.innerHTML = like;
let view = video.children[3].innerHTML;
views.innerHTML = view;       
        };
    
    };
    });




    function scrolll(){
        var left = document.querySelector('.si')
        left.scrollBy(-90,0)
    }
    
    
    function scrollr(){
        var right = document.querySelector('.si')
        right.scrollBy(90,0)
    }
    



    
/////////////search bar /////////////////


    const searchInput = document.getElementById('search-bar');
    const suggestedResults = document.getElementById('suggested-results');
    
    const items = [
      {
        name:'mister',
       
        link: 'file:///E:/New%20folder%20(2)/mister.html'
      },
      {
        name: 'home',
        link: 'file:///E:/qaaa/home.html'
      },
      {
        name: 'dooo',
        link: 'https://www.google.com/'
      },
      {
        name: 'TikTok',
        link: ''
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/'
      },
    ];
    
    searchInput.addEventListener('input', () => {
      const inputValue = searchInput.value.toLowerCase();
      suggestedResults.innerHTML = '';
      if (inputValue) {
        const matchingItems = items.filter(item =>
          item.name.toLowerCase().startsWith(inputValue)
        );
        if (matchingItems.length > 0) {
          matchingItems.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            listItem.addEventListener('click', () => window.open(item.link, "_blank"));
            suggestedResults.appendChild(listItem);
          });
          suggestedResults.style.display = 'block';
        } else {
          suggestedResults.style.display = 'none';
        }
      } else {
        suggestedResults.style.display = 'none';
      }
    });
    
    suggestedResults.addEventListener('click', (event) => {
      searchInput.value = event.target.textContent;
      suggestedResults.style.display = 'none';
    });
    
    


    /////////////like and views is in side of a.js/////////////////


// define a variable to keep track of the number of views and likes for each video:
var videos = [
  { id: 1, title: "", views: 0, likes: 0 },
  { id: 2, title: "", views: 0, likes: 0 },
  { id: 3, title: "", views: 0, likes: 0 },
  { id: 4, title: "", views: 0, likes: 0 },
  { id: 5, title: "", views: 0, likes: 0 },
  { id: 6, title: "", views: 0, likes: 0 },
  { id: 7, title: "", views: 0, likes: 0 },
  { id: 8, title: "", views: 0, likes: 0 },
  { id: 9, title: "", views: 0, likes: 0 },
  { id: 11, title: "", views: 0, likes: 0 },
  { id: 12, title: "", views: 0, likes: 0 },
  { id: 13, title: "", views: 0, likes: 0 },
  { id: 14, title: "", views: 0, likes: 0 },
  { id: 15, title: "", views: 0, likes: 0 },
  { id: 16, title: "", views: 0, likes: 0 },
  { id: 17, title: "", views: 0, likes: 0 },
  { id: 18, title: "", views: 0, likes: 0 },
  { id: 19, title: "", views: 0, likes: 0 },
  { id: 20, title: "", views: 0, likes: 0 },
  { id: 21, title: "", views: 0, likes: 0 },
  { id: 22, title: "", views: 0, likes: 0 },
  { id: 23, title: "", views: 0, likes: 0 },   
  { id: 24, title: "", views: 0, likes: 0 },
  { id: 25, title: "", views: 0, likes: 0 },
  
  // add more videos as needed
];

// add an event listener to each like button:
document.querySelectorAll("#likes").forEach(function(el){
  el.addEventListener("click", function(){
    var videoId = this.dataset.videoId;
    // find the corresponding video by its ID:
    var video = videos.find(function(v){ return v.id == videoId });
    if (video) {
      video.likes++; // increment the like counter
      document.querySelector("#likeCount-" + videoId).innerHTML = video.likes; // update the display
    }
  });
});

// increment the view count when the video starts playing:
document.querySelectorAll("video").forEach(function(el){
  el.addEventListener("play", function(){
    var videoId = this.getAttribute("data-video-id");
    // find the corresponding video by its ID:
    var video = videos.find(function(v){ return v.id == videoId });
    if (video) {
      video.views++; // increment the view counter
      document.querySelector("#views-" + videoId).innerHTML = video.views; // update the display
    }
  });
});


*/
const enterance = document.getElementById('enter')
const contener = document.getElementById('contener')
const backup = document.getElementById('back')
const contener_menu = document.getElementById('contener_menu')
function enter(){
  
  contener.style.display = 'flex'
  enterance.style.display = 'none'
  backup.style.display = 'flex'
  contener_menu.style.display = 'none'

}
function back(){
  
  contener.style.display = 'none'
  enterance.style.display = 'flex'
  //enterance.style.textAlign = 'right'
  backup.style.display = 'none'
  contener_menu.style.display = 'flex'
}



const mult = 3
const mult_answer = 18
const sub = 4
const sub_answer = 8
const div = 15;
const div_answer = 3
var answer1 = document.getElementById('answer1') 
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
function convertinput1(){

  let inputValue = document.getElementById('myinput1').value;

 
  if (div / inputValue === div_answer){

    answer1.innerText = 'you are correct' ;
    answer1.style.color = 'green'
  }
   else{
  multa = mult - 1
  answer1.innerText = 'you are not correct  and you try ' + multa + ' tims';
  answer1.style.color = 'red'
  
   }
   

}
function convertinput2(){
  let inputValue = document.getElementById('myinput2').value;
  
  
  if (mult * inputValue === mult_answer ){
    answer2.innerText = 'you are correct' ;
    answer2.style.color = 'green'
  }
   else{
  answer2.innerText = 'you are not correct' ;
  answer2.style.color = 'red'
   }

}
function convertinput3(){
  let inputValue = document.getElementById('myinput3').value;
  
  
  if (inputValue - sub === sub_answer){
    answer3.innerText = 'you are correct' ;
    answer3.style.color = 'green'
    
  }
   else{
  answer3.innerText = 'you are not correct' ;
  answer3.style.color = 'red'
   }

}

