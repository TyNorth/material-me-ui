import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './assets/css/designlibrary.css';
import './assets/css/materialme.css';
import './assets/css/utilities.css';
/**
 * Material Me Divider element.
 * 
 * 
 */



 @customElement('mm-dv') 
 export class MMDv extends LitElement {
     
     
     
     static styles = css`
            :host {
                box-sizing: var(--mm-boxS,border-box);
                color: var(--mm-color, #000);
                background-color: var(--mm-bg, #fff);
                text-decoration: var(--mm-text-decoration, none);
                text-decoration-color: var(--mm-text-decoration-color, currentColor);
                text-decoration-style: var(--mm-text-decoration-style, solid);
                text-decoration-thickness: var(--mm-text-decoration-thickness, auto);
            }
        
            `

render() {
    return html`
        <br/>
    `
}
    }

    

    declare global {
        interface HTMLElementTagNameMap {
            "mm-dv": MMDv;
        }
    }