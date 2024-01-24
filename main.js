let searchbtn = document.querySelector('#search-btn');
let searchform = document.querySelector('.search-form');
let loginform= document.querySelector(".login-form");
let menueBar= document.querySelector("#menue-bar");
let amenue=   document.querySelector(".navbar");
let vidBtn = document.querySelectorAll(".video-btn")


function showbar(){
    searchbtn.classList.toggle("fa-times");
    searchform.classList.toggle("active");
}

function showform(){
    loginform.classList.add('active')
}

 function closeform(){
    loginform.classList.remove('active')
 }
 
 function shoemenue(){
    menueBar.classList.toggle("fa-times");
    amenue.classList.toggle("active");

 }
 
 vidBtn.forEach(slide =>{
    slide.addEventListener("click" , function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    })
})

let book=document.querySelectorAll(".book");

book.forEach(book => {
  book.addEventListener('mouseover', () => {
    book.style.backgroundColor = '  #666';
  });

  book.addEventListener('mouseout', () => {
    book.style.backgroundColor = 'var(--blue)';
  });
});


var myElements= Array.from(document.querySelectorAll('.box img')) ;
var lightboxcontainer= document.getElementById('lightboxcontainer');
var currentSlisdeIndex=0;
var closeBtn= document.getElementById('closeBtn');
for(var i=0; i<myElements.length; i++)
{
    myElements[i].addEventListener('click', function(eventInfo){
        lightboxcontainer.style.display="flex";
        currentSlisdeIndex=myElements.indexOf(eventInfo.target);
        console.log(currentSlisdeIndex);
        var imgSrc= eventInfo.target.getAttribute('src');
        lightboxcontainer.firstElementChild.style.backgroundImage= `url(${imgSrc})`
    }) 
}

    function nextSlide() {
        currentSlisdeIndex++;
        console.log(currentSlisdeIndex);
        if(currentSlisdeIndex== myElements.length)
        {
            currentSlisdeIndex=0;
        }
        var imgSrc= myElements[currentSlisdeIndex].getAttribute('Src');
        lightboxcontainer.firstElementChild.style.backgroundImage= `url(${imgSrc})`
    } 
     
    function previousSlide() {
        currentSlisdeIndex--;
        console.log(currentSlisdeIndex);
        if(currentSlisdeIndex< 0)
        {
            currentSlisdeIndex=myElements.length-1;
        }
        var imgSrc= myElements[currentSlisdeIndex].getAttribute('Src');
        lightboxcontainer.firstElementChild.style.backgroundImage= `url(${imgSrc})`
    } 

     document.getElementById("closeBtn").addEventListener( 'click' ,
     function(){
        lightboxcontainer.style.display="none";
     })
    
    closeBtn.nextElementSibling.addEventListener('click', nextSlide)
    closeBtn.previousElementSibling.addEventListener('click',previousSlide )
    

let cont=document.querySelectorAll(".cont");

cont.forEach(item => {
  
  item.addEventListener('mouseenter', () => {
    item.style["boxShadow"]="5px 5px 20px gray";
    

  });

  item.addEventListener('mouseleave', () => {
    item.style["boxShadow"] = 'none';

  });
});


    function zoomIn() {
        let image = document.getElementById("pho");
        image.style.transform = "scale(1.2)";
    }
    
    function zoomOut() {
        const image = document.getElementById("pho");
        image.style.transform = "scale(1)";
    }
    
  
      function submitForm(event) {
        event.preventDefault();
  
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "Booking successful!" ;
  
      }
      


      document.addEventListener("DOMContentLoaded", function () {
        const boxes = document.querySelectorAll(".books .container .box");
    
        boxes.forEach(box => {
            const image = box.querySelector("img");
    
            image.addEventListener("mouseover", function () {
                image.style.border = "5px solid blue";
            });
    
            image.addEventListener("mouseout", function () {
            
                image.style.border = "none";
            });
        });
    });
    
    function showContent(box) { 
        const content = box.querySelector('.content'); 
        content.style.top = '0'; 
      } 
     
      function hideContent(box) { 
        const content = box.querySelector('.content'); 
        content.style.top = '-100%'; 
        content.style.transition = "top 1s ease-in-out";
      }

      document.addEventListener("DOMContentLoaded", function () {
        const boxes = document.querySelectorAll(".gallary .container .box");
    
        boxes.forEach(box => {
            const image = box.querySelector("img");
    
            image.addEventListener("mouseover", function () {
                image.style.border = "5px solid blue";
            });
    
            image.addEventListener("mouseout", function () {
                image.style.border = "none";



            });
        });
    });



    function zoomn() {
        var image = document.getElementById("phoi");
        image.style.transform = "scale(1.1)";
    }
    
    function zoomut() {
        var image = document.getElementById("phoi");
        image.style.transform = "scale(1)";
    }




    document.addEventListener('DOMContentLoaded', function () {
        var boxes = document.querySelectorAll('.boxs');
    
        boxes.forEach(function (box) {
          box.addEventListener('mouseenter', function () {
            box.style.transform = 'translateY(-5px)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          });
    
          box.addEventListener('mouseleave', function () {
            box.style.transform = 'translateY(0)';
            box.style.boxShadow = 'none';
          });
    
          box.addEventListener('mouseover', function () {
            box.style.backgroundColor = '#f0f0f0';
          });
    
          box.addEventListener('mouseout', function () {
            box.style.backgroundColor = '';
          });
        });
      });


      function showFullScreenImage(box) {
        var imageSrc = box.querySelector('img').src;
        var fullscreenImage = new Image();
        fullscreenImage.src = imageSrc;
    
        fullscreenImage.onload = function () {
          var imageWindow = window.open('', '_blank');
          imageWindow.document.write('<img src="' + imageSrc + '" style="max-width: 100%; max-height: 100vh; margin: auto; display: block;">');
          imageWindow.document.close();
        };
      }
  