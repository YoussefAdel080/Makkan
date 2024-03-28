let header = document.getElementById('header');
let scrollTopBtn = document.getElementById('scrollTopBtn');

const track = document.getElementById('herosSliderTrack');
const previousImageBtn = document.getElementById('heroSliderPreviousBtn');
const nextImageBtn = document.getElementById('heroSliderNextBtn');
const slides = Array.from(track.children);

const slideWidth = slides[0].getBoundingClientRect().width;

let currentSlide = 0;

previousImageBtn.addEventListener('click' , function()
{
    if(currentSlide-1 >= 0)
    {
        track.style.transform = `translateX(-${(slideWidth*(currentSlide-1))}px)`;
        currentSlide -= 1;
        if(currentSlide == 0)
        {
            previousImageBtn.classList.replace('slider-arrow-container','slider-arrow--disabled');
        }    
    }

    if(nextImageBtn.classList.contains('slider-arrow--disabled'))
    {  
        nextImageBtn.classList.replace('slider-arrow--disabled','slider-arrow-container')
    }
});

nextImageBtn.addEventListener('click' , function()
{
    if(currentSlide+1 <= slides.length-1)
    {
        track.style.transform = `translateX(-${(slideWidth*(currentSlide+1))}px)`;
        currentSlide += 1;
        if(currentSlide == slides.length-1)
        {
            nextImageBtn.classList.replace('slider-arrow-container','slider-arrow--disabled');
        }
    }

    if(previousImageBtn.classList.contains('slider-arrow--disabled'))
    {  
        previousImageBtn.classList.replace('slider-arrow--disabled','slider-arrow-container')
    }
    

});

const testimonialTrack = document.getElementById('testimonailSliderTrack');
const testimonialPreviousBtn = document.getElementById('testimonialSliderPreviousBtn');
const testimonialNextBtn = document.getElementById('testimonialSliderNextBtn');
const testimonialCards = Array.from(testimonialTrack.children);

const testimonialCardWidth = testimonialCards[0].getBoundingClientRect().width;

let currentTestimonialCard = 0;

testimonialPreviousBtn.addEventListener('click' , function()
{
    if(currentTestimonialCard-1 >= 0)
    {
        testimonialTrack.style.transform = `translateX(-${(testimonialCardWidth+16)*(currentTestimonialCard-1)}px)`;
        currentTestimonialCard -= 1;
        if(currentTestimonialCard == 0)
        {
            testimonialPreviousBtn.classList.replace('testimonail-slider-arrow-container','testimonail-slider-arrow--disabled');
        }    
    }

    if(testimonialNextBtn.classList.contains('testimonail-slider-arrow--disabled'))
    {  
        testimonialNextBtn.classList.replace('testimonail-slider-arrow--disabled','testimonail-slider-arrow-container')
    }
});

testimonialNextBtn.addEventListener('click' , function()
{
    if(currentTestimonialCard+1 <= testimonialCards.length-2)
    {
        testimonialTrack.style.transform = `translateX(-${(testimonialCardWidth+16)*(currentTestimonialCard+1)}px)`;
        currentTestimonialCard += 1;
        if(currentTestimonialCard == testimonialCards.length-2)
        {
            testimonialNextBtn.classList.replace('testimonail-slider-arrow-container','testimonail-slider-arrow--disabled');
        }
    }

    if(testimonialPreviousBtn.classList.contains('testimonail-slider-arrow--disabled'))
    {  
        testimonialPreviousBtn.classList.replace('testimonail-slider-arrow--disabled','testimonail-slider-arrow-container')
    }
    

});

const properties = document.getElementsByClassName('property-outer');
let propertiesArray = [];
for(let propertyCard of properties)
{
    propertiesArray.push(propertyCard);
}
propertiesParent = propertiesArray[0].parentElement;

propertiesArray.forEach((element , index) => {
    element.style.animationDelay = `${index*0.2}s`;
});

const aboutSection = document.getElementById('about-section');

const propertyCards = document.getElementsByClassName('property-card');
let propertyCardsArray = [];
for(let propertyCard of propertyCards)
{
    propertyCardsArray.push(propertyCard);
}
propertyCardsParent = propertyCardsArray[0].parentElement;
propertyCardsArray.forEach((element , index) => {
    element.style.animationDelay = `${index*0.2}s`;
});

propertyListHeading = propertyCardsParent.parentElement.children[0];

let contactUs = document.getElementById('contact-us')

let propertyAgentHeading = document.getElementById('property-agent-heading');

const propertyAgentCards = document.getElementsByClassName('property-agent');
let propertyAgentCardsArray = [];
for(let propertyAgentCard of propertyAgentCards)
{
    propertyAgentCardsArray.push(propertyAgentCard);
}
propertyAgentCardsParent = propertyAgentCardsArray[0].parentElement;
propertyAgentCardsArray.forEach((element , index) => {
    element.style.animationDelay = `${index*0.2}s`;
});

let testimonailSection = document.getElementById('testimonial-section');
window.addEventListener('scroll' , function(e)
{
    navToggle(this.scrollY);
    scrollTopBtnToggle(this.scrollY);
        if (elementInViewport2(propertiesParent)){
             propertiesArray.forEach(element => {
            element.classList.add('fade-in_slide-up')    
        })
    }

    if(elementInViewport2(aboutSection))
    {
        Array.from(aboutSection.children).forEach( childEle => {
            childEle.classList.add('fade-in')
        })
    }
    
    if(elementInViewport2(propertyCardsParent))
    {
        propertyCardsArray.forEach(element => {
            element.classList.add('fade-in_slide-up')
        })
    }

    if(elementInViewport2(propertyListHeading))
    {
        Array.from(propertyListHeading.children).forEach(element => {
                if(element.classList.contains('property-list-heading'))
                {
                    element.classList.add('fade-in_slide-right')
                }else{element.classList.add('fade-in_slide-left')}
            })
    }

    if(elementInViewport2(contactUs))
    {
        Array.from(contactUs.children).forEach(element => {
                element.classList.add('fade-in');
            })
    }

    if(elementInViewport2(propertyAgentHeading))
    {
        propertyAgentHeading.classList.add('fade-in_slide-up')
    }

    if(elementInViewport2(propertyAgentCardsParent))
    {
        propertyAgentCardsArray.forEach(element => {
            element.classList.add('fade-in_slide-up')
        })
    }

    Array.from(testimonailSection.children).forEach(element=>{
        if(elementInViewport2(element)){
            element.classList.add('fade-in_slide-up')
        }
    })
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

function elementInViewport2(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  };

