function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const activeClass = 'ativo'
    tabContent[0].classList.add(activeClass)

    if (tabMenu.length && tabContent.length) {

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass)
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add(activeClass, direcao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });

    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        });
    }

}
initAccordion();

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection)
    })
}
initScrollSuave();

function initAnimacaoScroll() {

    const sections = document.querySelectorAll('[data-anime="scroll"]');
    
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.5;
    
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionIsVisible = (sectionTop - windowMetade) < 0;
                if (sectionIsVisible) {
                    section.classList.add('ativo')
                }
            })
        }
    
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();