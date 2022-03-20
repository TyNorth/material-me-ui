import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '../assets/css/designlibrary.css'
import '../assets/css/materialme.css'

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
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            padding: 16px;
            border-radius: 0;
            border: 1px solid black;
            margin: 8px 4px;
            
        }

        
        .mm-card-title {
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            margin: 0;
            padding: 0;
        }
        .mm-card-content {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin: 0;
            padding: 0;

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