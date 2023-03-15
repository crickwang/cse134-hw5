class ButtonCount extends HTMLElement
{
    constructor()
    {
        alert("be su");
        super();
    }
    connectedCallback()
    {
        let shadow = this.attachShadow({mode: 'open'});
        let button = document.createElement('button');
        let count = 0;
        button.innerText = "Times Clicked: 0";
        button.addEventListener('click', () => {
            count++;
            button.innerText = `Times Clicked: ${count}`;
        });
        shadow.appendChild(button)
    }

}

customElements.define('button-count', ButtonCount);