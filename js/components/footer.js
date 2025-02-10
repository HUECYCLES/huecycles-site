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
                text-shadow: none;
                margin: 0 auto;
            }
            a {
                text-decoration: none;
                text-shadow: none;
                cursor: var(--cursor-main);
                color: var(--link-alt);
                font-family: var(--main-font);
                font-size: 140%;
                font-weight: normal;
                text-shadow: none;
            }
            a:hover {
	            cursor: var(--cursor-main);
	            color: var(--link-hover);
                text-shadow: none;
            }
        </style>
            <p>HUECYCLES © 2020-2025</p>
        `;
    }
}

customElements.define("my-footer", MyFooter);