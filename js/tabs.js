const howWorkTabsWrapper = document.querySelector('.how-work__tabs')
const howWorkTabsBtn = howWorkTabsWrapper.querySelectorAll('button[data-tab-how-work-btn]')
const howWorkTabsContent = document.querySelectorAll('[data-tab-how-work-content]')

howWorkTabsBtn.forEach(howWorkBtn =>{
    howWorkBtn.addEventListener('click', () =>{
        howWorkTabsContent.forEach(howWorkContent =>{
            howWorkTabsBtn.forEach(howWorkBtnDisabled =>{
                howWorkBtnDisabled.classList.remove('_active')
                howWorkContent.classList.remove('_active')

                howWorkBtn.classList.add('_active')

                if(howWorkBtn.getAttribute('data-tab-how-work-btn') == howWorkContent.getAttribute('data-tab-how-work-content')){
                    howWorkBtn.classList.add('_active')
                    howWorkContent.classList.add('_active')
                }
                howWorkBtn.getAttribute('data-tab-how-work-btn') == 'delivery' && howWorkBtn.classList.contains('_active') ? howWorkTabsWrapper.classList.add('how-work__tabs_delivery') : howWorkTabsWrapper.classList.remove('how-work__tabs_delivery')
            })
        })
    })
})