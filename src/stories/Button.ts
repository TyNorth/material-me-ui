import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import '../assets/css/materialme.css'
import '../assets/css/designlibrary.css'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'septenary' | 'octonary' | 'nonary' | 'denary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, backgroundColor = type, size, label, onClick }: ButtonProps) => {
  const mode = type ? 'mm-button--primary' : 'mm-button--secondary';

  return html`
    <button
      type="button"
      class=${['mm-button', `mm-button--${size || 'medium'}`, mode].join(' ')}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
