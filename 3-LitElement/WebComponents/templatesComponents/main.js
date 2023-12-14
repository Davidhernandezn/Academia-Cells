class MiSaludo extends HTMLElement{
    constructor(){
        //OBTENGO LA UNICA ETIQUETA 'TEMPLATE'
        const tpl = document.querySelector('template');
        
        //CLONO SU CONTENIDO Y SE CREA UNA INSTANCIA DEL DOCUMENTO FRAGMENT
        const tplInst = tpl.content.cloneNode(true);

        super();//INVOCA EL CONSTRUCTOR DE LA CLASE PADRE

        //SE CREA UN SHADOW DOM PARA LAS INSTANCIAS DE mi-saludo
        this.attachShadow({mode:'open'});
        //Y SE AGREGA EL TEMPLATE DENTRO DEL SHADOW DOM USANDO EL ELEMENTO RAIZ 'SHADOEROOT'
        this.shadowRoot.appendChild(tplInst);
    }
}

//SE REGISTRA EL CUSTOM ELEMENT PARA PODER SER UTILIZADO DECLARATIVAMENTE EN EL HTML
//O IMPERATIVAMENTE MEDIANTE JS
customElements.define('mi-saludo', MiSaludo);