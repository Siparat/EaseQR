// scroll

const scrollItems = document.querySelectorAll('.principal__item')
const scrollWrapper = document.querySelector('.principal__wrapper')
const scrollItemsWrapper = document.querySelector('.principal__items')

window.addEventListener('load', () =>{   
    let scrollIndexOld = 2 
    scrollWrapper.scrollTo(0,160)
    scrollWrapper.addEventListener('scroll', () =>{
        let scrollT = scrollWrapper.scrollTop
        let scrollIndex = Math.trunc(scrollT / 65)
        if (scrollIndexOld != scrollIndex){
            scrollItems.forEach(i =>{
                i.classList.remove('principal__item_active')
            })
        }
        scrollIndexOld = scrollIndex 

        scrollItems[scrollIndex].classList.add('principal__item_active')
        if(scrollItems[scrollItems.length - 1].classList.contains('principal__item_active')){     //fix bug
            scrollItemsWrapper.style.transform = 'translateX(10px)'
        }else{
            scrollItemsWrapper.style.transform = 'translateX(0px)'
        }
    })

})

// datails

document.querySelectorAll('.faq__item-wrapper').forEach(faqItem =>{
    faqItem.querySelector('.faq__item-title').addEventListener('click', function(){
        faqItem.querySelector('.marker').classList.toggle('_active')
    })
    faqItem.querySelector('.marker').addEventListener('click', () =>{
        faqItem.querySelector('.marker').classList.toggle('_active')
        faqItem.querySelector('.faq__item').open = !faqItem.querySelector('.faq__item').open
    })
})