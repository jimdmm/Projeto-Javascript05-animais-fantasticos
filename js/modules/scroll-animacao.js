export default function initAnimacaoScroll() {

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