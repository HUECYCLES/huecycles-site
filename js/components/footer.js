class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadow.innerHTML =`
        <style>
            p {
                margin: 0 auto;
                text-align: center;
                font-weight: bold;
                color: var(--faint-text);
            }
        </style>
            <p>HUECYCLES © 2020-2025</p>
        `;
    }
}

customElements.define("my-footer", MyFooter);