let header = document.getElementById('header');
let scrollTopBtn = document.getElementById('scrollTopBtn');


let sliderImages = document.querySelectorAll('.hero-slider .slider-images-container img');
let sliderImagesArr = [];
for(img of sliderImages)
{
    sliderImagesArr.push(img);
};
let previousImageBtn = document.getElementById('heroSliderPreviousBtn');
let nextImageBtn = document.getElementById('heroSliderNextBtn');
let currentImage = 0;


previousImageBtn.addEventListener('click' , function()
{
    if(currentImage-1 < 0)
    {
        currentImage = 0
    }
    else
    {
        currentImage-=1
    } 
    sliderImagesArr[currentImage%sliderImagesArr.length].style.order = 1;

})

nextImageBtn.addEventListener('click' , function()
{
    
    if(currentImage+1 < sliderImagesArr.length-1)
    {
        currentImage = 0
    }
    else
    {
        currentImage+=1
    }
    sliderImagesArr[currentImage%sliderImagesArr.length].style.order = 1;
})

window.addEventListener('scroll' , function(e)
{
    navToggle(this.scrollY);
    scrollTopBtnToggle(this.scrollY);

    
});

scrollTopBtn.addEventListener('click' , function(e)
{
    window.scrollTo(
    {
        top:0,
        left:0,
        behavior:'smooth',
    });
});


function navToggle(value)
{
    if(value >= 55)
    {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.width = '100%';
        header.style.transition = 'width 0.5s,left 0.5s';
    }
    else
    {
        header.style='';
        header.style.transition = 'width 0.5s,left 0.5s';    
    }
}

function scrollTopBtnToggle(value)
{
    if(value >= 55)
    {
        scrollTopBtn.style.visibility = 'visible';
    }
    else
    {   
        scrollTopBtn.style.visibility = 'hidden';
    };
};