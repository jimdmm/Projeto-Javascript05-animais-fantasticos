export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
item.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(e) {
    const tooltipBox = criarTooltipBox(this);
   
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
    
}

const onMouseLeave = {
    handleEvent() {
        this.tooltipBox.remove();
        this.removeEventListener('mouseleave', onMouseLeave);
    }
}

const onMouseMove = {
    handleEvent(e) {
        this.tooltipBox.style.top = e.pageY + 20 + "px";
        this.tooltipBox.style.left = e.pageX + 20 + "px";
    }
}

function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
}