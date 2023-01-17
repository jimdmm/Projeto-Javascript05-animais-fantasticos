export default function initTabNav() {
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