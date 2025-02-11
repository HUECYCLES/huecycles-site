class MyNav extends HTMLElement {
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
            .sidenav {
                width: 130px;
                position: fixed;
                z-index: 1;
                overflow-x: hidden;
                padding: 5px;
            }
            
            .sidenav a {
                padding: 6px 8px 6px 16px;
                text-decoration: none;
                color: var(--link);
                transition: 0.3s;
            }

            .sidenav a:hover {
                color: var(--link-hover);
            }
            
            .sidenav img {
                image-rendering: pixelated;
                padding-bottom: 10px;
                transition: transform 200ms ease-out;
                filter: drop-shadow(5px 5px 5px black);
            }
            
            .sidenav img:hover {
                transform: scale(1.05);
            }
        </style>
            <div class="sidenav">
                <a href="./"><img src="assets/img/sona/idle.png" width="90" height="147" alt="HUE"/></a>
                <a href="./about">About</a>
                <a href="./projects">Projects</a>
                <a href="./commissions">Commissions</a>
            </div>
        `;
    }
}

customElements.define("my-nav", MyNav);