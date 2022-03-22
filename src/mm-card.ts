import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './assets/css/designlibrary.css'
import './assets/css/materialme.css'
import './assets/css/utilities.css'


/**
 * Material Me Card element.
 * @slot - The Card's title
 * @slot - The Card's content.
 * @csspart Card - The card
 */

@customElement('mm-card') 
export class MMCard extends LitElement {
    @property({ type: String })
    title: string = ''
    
    @property({ type: String })
    content: string = ''
    
    
    static styles = css` 
        :host {
            display: block;
            max-width: var(--mm-card-max-w, 800px);
            width: var(--mm-w, 300px);
            height: var(--mm-h, auto);
            box-sizing: var(--mm-box-sizing, border-box);
            display: var(--mm-display, block);
            flex-direction: var(--mm-flex-direction, column);
            padding: var(--mm-p, 16px);
            border-radius: var(--mm-br, 4px);
            border: var(--mm-border, 1px solid #ccc);
            margin: var(--mm-m, 8px 4px);
            transition: var(--mm-trans, all 0.3s ease-in-out);
        }
        

        
        .mm-card-title {
            font-size: var(--m-fontS, 24px);
            font-weight: var(--m-fontW, 500);
            line-height: var(--m-lineH, 32px);
            --mm-m: 0;
            --m-p: 0;
        }
        .mm-card-content {
            --m-fontS: 16px;
            --m-fontW: 400;
            --m-lineH: 24px;
            --mm-m: 0;
            --m-p: 0;

        }
        
        `

render() {
    return html`
        <div>
            <div class="mm-card-title">
                <slot name="title">${this.title}</slot>
            </div>
            <div class="mm-card-content">
                <slot name="content">${this.content}</slot>
            </div>
        </div>
    `
}
    }

    

    declare global {
        interface HTMLElementTagNameMap {
            "mm-card": MMCard;
        }
    }