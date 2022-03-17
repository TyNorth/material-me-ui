import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './assets/css/designlibrary.css'
import './assets/css/materialme.css'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mm-btn')
export class MMBtn extends LitElement {
  static styles = css`
    :host {
       margin: 5px;
      
      
    }
    :host > * {
      background: var(--mm-background, #fff);
      border-radius: var(--mm-border-radius, 0px);
      border: var(--mm-border, .01px solid #ccc);
      cursor: pointer; 
      padding: 8px 16px 8px 16px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2), 2px 0 4px rgba(0,0,0,0.2);
      transition: all .2s ease-in-out;
      align-self: center;
      letter-spacing: 1px;
      font-style: normal;
      
      font-weight: var(--mm-font-weight, 500);
    }
    
    .mm-hover:hover {
      box-shadow: 0 4px 6px rgba(0,0,0,0.2), 4px 0 6px rgba(0,0,0,0.2);
      
      
    }

    /* Based on designlibrarycss */

    /* Red variants */
    
    .red50 {
      background: var(--mm-red-dark-background, #ffebee); 
      
      
    }
    .red100 {
      background: var(--mm-red-background, #ffcdd2);
    }
    .red200 {
      background: var(--mm-red-light-background, #ef9a9a);
    }
    .red300 {
      background: var(--mm-red-lighter-background, #e57373);
    }
    .red400 {
      background: var(--mm-red-lightest-background, #ef5350);
    }
    .red500 {
      background: var(--mm-red-lightestest-background, #f44336);
    }
    .red600 {
      background: var(--mm-red-lightestestest-background, #e53935);
    }
    .red700 {
      background: var(--mm-red-lightestestestest-background, #d32f2f);
    }
    .red800 {
      background: var(--mm-red-lightestestestestest-background, #c62828);
    }
    .red900 {
      background: var(--mm-red-lightestestestestestest-background, #b71c1c);
    }
    .redA100 {
      background: var(--mm-red-darkest-background, #ff8a80);
    }
    .redA200 {
      background: var(--mm-red-darker-background, #ff5252);
    }
    .redA400 {
      background: var(--mm-red-darkestest-background, #ff1744);
    }
    .redA700 {
      background: var(--mm-red-darkestestest-background, #d50000);
    }
    .pink50 {
      background: var(--mm-pink-dark-background, #fce4ec);
    }
    .pink100 {
      background: var(--mm-pink-background, #f8bbd0);
    }
    .pink200 {
      background: var(--mm-pink-light-background, #f48fb1);
    }
    .pink300 {
      background: var(--mm-pink-lighter-background, #f06292);
    }
    .pink400 {
      background: var(--mm-pink-lightest-background, #ec407a);
    }
    .pink500 {
      background: var(--mm-pink-lightestest-background, #e91e63);
    }
    .pink600 {
      background: var(--mm-pink-lightestestest-background, #d81b60);
    }
    .pink700 {
      background: var(--mm-pink-lightestestest-background, #c2185b);
    }
    .pink800 {
      background: var(--mm-pink-lightestestestest-background, #ad1457);
    }
    .pink900 {
      background: var(--mm-pink-lightestestestestest-background, #880e4f);
    }
    .pinkA100 {
      background: var(--mm-pink-darkest-background, #ff80ab);
    }
    .pinkA200 {
      background: var(--mm-pink-darker-background, #ff4081);
    }
    .pinkA400 {
      background: var(--mm-pink-darkestest-background, #f50057);
    }
    .pinkA700 {
      background: var(--mm-pink-darkestestest-background, #c51162);
    }
    .purple50 {
      background: var(--mm-purple-dark-background, #f3e5f5);
    }
    .purple100 {
      background: var(--mm-purple-background, #e1bee7);
    }
    .purple200 {
      background: var(--mm-purple-light-background, #ce93d8);
    }
    .purple300 {
      background: var(--mm-purple-lighter-background, #ba68c8);
    }
    .purple400 {
      background: var(--mm-purple-lightest-background, #ab47bc);
    }
    .purple500 {
      background: var(--mm-purple-lightestest-background, #9c27b0);
    }
    .purple600 {
      background: var(--mm-purple-lightestestest-background, #8e24aa);
    }
    .purple700 {
      background: var(--mm-purple-lightestestest-background, #7b1fa2);
    }
    .purple800 {
      background: var(--mm-purple-lightestestestest-background, #6a1b9a);
    }
    .purple900 {
      background: var(--mm-purple-lightestestestestest-background, #4a148c);
    }
    .purpleA100 {
      background: var(--mm-purple-darkest-background, #ea80fc);
    }
    .purpleA200 {
      background: var(--mm-purple-darker-background, #e040fb);
    }
    .purpleA400 {
      background: var(--mm-purple-darkestest-background, #d500f9);
    }
    .purpleA700 {
      background: var(--mm-purple-darkestestest-background, #aa00ff);
    }
    .deepPurple50 {
      background: var(--mm-deep-purple-dark-background, #ede7f6);
    }
    .deepPurple100 {
      background: var(--mm-deep-purple-background, #d1c4e9);
    }
    .deepPurple200 {
      background: var(--mm-deep-purple-light-background, #b39ddb);
    }
    .deepPurple300 {
      background: var(--mm-deep-purple-lighter-background, #9575cd);
    }
    .deepPurple400 {
      background: var(--mm-deep-purple-lightest-background, #7e57c2);
    }
    .deepPurple500 {
      background: var(--mm-deep-purple-lightestest-background, #673ab7);
    }
    .deepPurple600 {
      background: var(--mm-deep-purple-lightestestest-background, #5e35b1);
    }
    .deepPurple700 {
      background: var(--mm-deep-purple-lightestestest-background, #512da8);
    }
    .deepPurple800 {
      background: var(--mm-deep-purple-lightestestestest-background, #4527a0);
    }
    .deepPurple900 {
      background: var(--mm-deep-purple-lightestestestestest-background, #311b92);
    }
    .deepPurpleA100 {
      background: var(--mm-deep-purple-darkest-background, #b388ff);
    }
    .deepPurpleA200 {
      background: var(--mm-deep-purple-darker-background, #7c4dff);
    }
    .deepPurpleA400 {
      background: var(--mm-deep-purple-darkestest-background, #651fff);
    }
    .deepPurpleA700 {
      background: var(--mm-deep-purple-darkestestest-background, #6200ea);
    }
    .indigo50 {
      background: var(--mm-indigo-dark-background, #e8eaf6);
    }
    .indigo100 {
      background: var(--mm-indigo-background, #c5cae9);
    }
    .indigo200 {
      background: var(--mm-indigo-light-background, #9fa8da);
    }
    .indigo300 {
      background: var(--mm-indigo-lighter-background, #7986cb);
    }
    .indigo400 {
      background: var(--mm-indigo-lightest-background, #5c6bc0);
    }
    .indigo500 {
      background: var(--mm-indigo-lightestest-background, #3f51b5);
    }
    .indigo600 {
      background: var(--mm-indigo-lightestestest-background, #3949ab);
    }
    .indigo700 {
      background: var(--mm-indigo-lightestestest-background, #303f9f);
    }
    .indigo800 {
      background: var(--mm-indigo-lightestestestest-background, #283593);
    }
    .indigo900 {
      background: var(--mm-indigo-lightestestestestest-background, #1a237e);
    }
    .indigoA100 {
      background: var(--mm-indigo-darkest-background, #8c9eff);
    }
    .indigoA200 {
      background: var(--mm-indigo-darker-background, #536dfe);
    }
    .indigoA400 {
      background: var(--mm-indigo-darkestest-background, #3d5afe);
    }
    .indigoA700 {
      background: var(--mm-indigo-darkestestest-background, #304ffe);
    }
    .blue50 {
      background: var(--mm-blue-dark-background, #e3f2fd);
    }
    .blue100 {
      background: var(--mm-blue-background, #bbdefb);
    }
    .blue200 {
      background: var(--mm-blue-light-background, #90caf9);
    }
    .blue300 {
      background: var(--mm-blue-lighter-background, #64b5f6);
    }
    .blue400 {
      background: var(--mm-blue-lightest-background, #42a5f5);
    }
    .blue500 {
      background: var(--mm-blue-lightestest-background, #2196f3);
    }
    .blue600 {
      background: var(--mm-blue-lightestestest-background, #1e88e5);
    }
    .blue700 {
      background: var(--mm-blue-lightestestest-background, #1976d2);
    }
    .blue800 {
      background: var(--mm-blue-lightestestestest-background, #1565c0);
    }
    .blue900 {
      background: var(--mm-blue-lightestestestestest-background, #0d47a1);
    }
    .blueA100 {
      background: var(--mm-blue-darkest-background, #82b1ff);
    }
    .blueA200 {
      background: var(--mm-blue-darker-background, #448aff);
    }
    .blueA400 {
      background: var(--mm-blue-darkestest-background, #2979ff);
    }
    .blueA700 {
      background: var(--mm-blue-darkestestest-background, #2962ff);
    }
    .lightBlue50 {
      background: var(--mm-light-blue-dark-background, #e1f5fe);
    }
    .lightBlue100 {
      background: var(--mm-light-blue-background, #b3e5fc);
    }
    .lightBlue200 {
      background: var(--mm-light-blue-light-background, #81d4fa);
    }
    .lightBlue300 {
      background: var(--mm-light-blue-lighter-background, #4fc3f7);
    }
    .lightBlue400 {
      background: var(--mm-light-blue-lightest-background, #29b6f6);
    }
    .lightBlue500 {
      background: var(--mm-light-blue-lightestest-background, #03a9f4);
    }
    .lightBlue600 {
      background: var(--mm-light-blue-lightestestest-background, #039be5);
    }
    .lightBlue700 {
      background: var(--mm-light-blue-lightestestest-background, #0288d1);
    }
    .lightBlue800 {
      background: var(--mm-light-blue-lightestestestest-background, #0277bd);
    }
    .lightBlue900 {
      background: var(--mm-light-blue-lightestestestestest-background, #01579b);
    }
    .lightBlueA100 {
      background: var(--mm-light-blue-darkest-background, #80d8ff);
    }
    .lightBlueA200 {
      background: var(--mm-light-blue-darker-background, #40c4ff);
    }
    .lightBlueA400 {
      background: var(--mm-light-blue-darkestest-background, #00b0ff);
    }
    .lightBlueA700 {
      background: var(--mm-light-blue-darkestestest-background, #0091ea);
    }
    .cyan50 {
      background: var(--mm-cyan-dark-background, #e0f7fa);
    }
    .cyan100 {
      background: var(--mm-cyan-background, #b2ebf2);
    }
    .cyan200 {
      background: var(--mm-cyan-light-background, #80deea);
    }
    .cyan300 {
      background: var(--mm-cyan-lighter-background, #4dd0e1);
    }
    .cyan400 {
      background: var(--mm-cyan-lightest-background, #26c6da);
    }
    .cyan500 {
      background: var(--mm-cyan-lightestest-background, #00bcd4);
    }
    .cyan600 {
      background: var(--mm-cyan-lightestestest-background, #00acc1);
    }
    .cyan700 {
      background: var(--mm-cyan-lightestestest-background, #0097a7);
    }
    .cyan800 {
      background: var(--mm-cyan-lightestestestest-background, #00838f);
    }
    .cyan900 {
      background: var(--mm-cyan-lightestestestestest-background, #006064);
    }
    .cyanA100 {
      background: var(--mm-cyan-darkest-background, #84ffff);
    }
    .cyanA200 {
      background: var(--mm-cyan-darker-background, #18ffff);
    }
    .cyanA400 {
      background: var(--mm-cyan-darkestest-background, #00e5ff);
    }
    .cyanA700 {
      background: var(--mm-cyan-darkestestest-background, #00b8d4);
    }
    .teal50 {
      background: var(--mm-teal-dark-background, #e0f2f1);
    }
    .teal100 {
      background: var(--mm-teal-background, #b2dfdb);
    }
    .teal200 {
      background: var(--mm-teal-light-background, #80cbc4);
    }
    .teal300 {
      background: var(--mm-teal-lighter-background, #4db6ac);
    }
    .teal400 {
      background: var(--mm-teal-lightest-background, #26a69a);
    }
    .teal500 {
      background: var(--mm-teal-lightestest-background, #009688);
    }
    .teal600 {
      background: var(--mm-teal-lightestestest-background, #00897b);
    }
    .teal700 {
      background: var(--mm-teal-lightestestest-background, #00796b);
    }
    .teal800 {
      background: var(--mm-teal-lightestestestest-background, #00695c);
    }
    .teal900 {
      background: var(--mm-teal-lightestestestestest-background, #004d40);
    }
    .tealA100 {
      background: var(--mm-teal-darkest-background, #a7ffeb);
    }
    .tealA200 {
      background: var(--mm-teal-darker-background, #64ffda);
    }
    .tealA400 {
      background: var(--mm-teal-darkestest-background, #1de9b6);
    }
    .tealA700 {
      background: var(--mm-teal-darkestestest-background, #00bfa5);
    }
    .green50 {
      background: var(--mm-green-dark-background, #e8f5e9);
    }
    .green100 {
      background: var(--mm-green-background, #c8e6c9);
    }
    .green200 {
      background: var(--mm-green-light-background, #a5d6a7);
    }
    .green300 {
      background: var(--mm-green-lighter-background, #81c784);
    }
    .green400 {
      background: var(--mm-green-lightest-background, #66bb6a);
    }
    .green500 {
      background: var(--mm-green-lightestest-background, #4caf50);
    }
    .green600 {
      background: var(--mm-green-lightestestest-background, #43a047);
    }
    .green700 {
      background: var(--mm-green-lightestestest-background, #388e3c);
    }
    .green800 {
      background: var(--mm-green-lightestestestest-background, #2e7d32);
    }
    .green900 {
      background: var(--mm-green-lightestestestestest-background, #1b5e20);
    }
    .greenA100 {
      background: var(--mm-green-darkest-background, #b9f6ca);
    }
    .greenA200 {
      background: var(--mm-green-darker-background, #69f0ae);
    }
    .greenA400 {
      background: var(--mm-green-darkestest-background, #00e676);
    }
    .greenA700 {
      background: var(--mm-green-darkestestest-background, #00c853);
    }
    .lightGreen50 {
      background: var(--mm-light-green-dark-background, #f1f8e9);
    }
    .lightGreen100 {
      background: var(--mm-light-green-background, #dcedc8);
    }
    .lightGreen200 {
      background: var(--mm-light-green-light-background, #c5e1a5);
    }
    .lightGreen300 {
      background: var(--mm-light-green-lighter-background, #aed581);
    }
    .lightGreen400 {
      background: var(--mm-light-green-lightest-background, #9ccc65);
    }
    .lightGreen500 {
      background: var(--mm-light-green-lightestest-background, #8bc34a);
    }
    .lightGreen600 {
      background: var(--mm-light-green-lightestestest-background, #7cb342);
    }
    .lightGreen700 {
      background: var(--mm-light-green-lightestestest-background, #689f38);
    }
    .lightGreen800 {
      background: var(--mm-light-green-lightestestestest-background, #558b2f);
    }
    .lightGreen900 {
      background: var(--mm-light-green-lightestestestestest-background, #33691e);
    }
    .lightGreenA100 {
      background: var(--mm-light-green-darkest-background, #ccff90);
    }
    .lightGreenA200 {
      background: var(--mm-light-green-darker-background, #b2ff59);
    }
    .lightGreenA400 {
      background: var(--mm-light-green-darkestest-background, #76ff03);
    }
    .lightGreenA700 {
      background: var(--mm-light-green-darkestestest-background, #64dd17);
    }
    .lime50 {
      background: var(--mm-lime-dark-background, #f9fbe7);
    }
    .lime100 {
      background: var(--mm-lime-background, #f0f4c3);
    }
    .lime200 {
      background: var(--mm-lime-light-background, #e6ee9c);
    }
    .lime300 {
      background: var(--mm-lime-lighter-background, #dce775);
    }
    .lime400 {
      background: var(--mm-lime-lightest-background, #d4e157);
    }
    .lime500 {
      background: var(--mm-lime-lightestest-background, #cddc39);
    }
    .lime600 {
      background: var(--mm-lime-lightestestest-background, #c0ca33);
    }
    .lime700 {
      background: var(--mm-lime-lightestestest-background, #afb42b);
    }
    .lime800 {
      background: var(--mm-lime-lightestestestest-background, #9e9d24);
    }
    .lime900 {
      background: var(--mm-lime-lightestestestestest-background, #827717);
    }
    .limeA100 {
      background: var(--mm-lime-darkest-background, #f4ff81);
    }
    .limeA200 {
      background: var(--mm-lime-darker-background, #eeff41);
    }
    .limeA400 {
      background: var(--mm-lime-darkestest-background, #c6ff00);
    }
    .limeA700 {
      background: var(--mm-lime-darkestestest-background, #aeea00);
    }
    .yellow50 {
      background: var(--mm-yellow-dark-background, #fffde7);
    }
    .yellow100 {
      background: var(--mm-yellow-background, #fff9c4);
    }
    .yellow200 {
      background: var(--mm-yellow-light-background, #fff59d);
    }
    .yellow300 {
      background: var(--mm-yellow-lighter-background, #fff176);
    }
    .yellow400 {
      background: var(--mm-yellow-lightest-background, #ffee58);
    }
    .yellow500 {
      background: var(--mm-yellow-lightestest-background, #ffeb3b);
    }
    .yellow600 {
      background: var(--mm-yellow-lightestestest-background, #fdd835);
    }
    .yellow700 {
      background: var(--mm-yellow-lightestestest-background, #fbc02d);
    }
    .yellow800 {
      background: var(--mm-yellow-lightestestestest-background, #f9a825);
    }
    .yellow900 {
      background: var(--mm-yellow-lightestestestestest-background, #f57f17);
    }
    .yellowA100 {
      background: var(--mm-yellow-darkest-background, #ffff8d);
    }
    .yellowA200 {
      background: var(--mm-yellow-darker-background, #ffff00);
    }
    .yellowA400 {
      background: var(--mm-yellow-darkestest-background, #ffea00);
    }
    .yellowA700 {
      background: var(--mm-yellow-darkestestest-background, #ffd600);
    }
    .amber50 {
      background: var(--mm-amber-dark-background, #fff8e1);
    }
    .amber100 {
      background: var(--mm-amber-background, #ffecb3);
    }
    .amber200 {
      background: var(--mm-amber-light-background, #ffe082);
    }
    .amber300 {
      background: var(--mm-amber-lighter-background, #ffd54f);
    }
    .amber400 {
      background: var(--mm-amber-lightest-background, #ffca28);
    }
    .amber500 {
      background: var(--mm-amber-lightestest-background, #ffc107);
    }
    .amber600 {
      background: var(--mm-amber-lightestestest-background, #ffb300);
    }
    .amber700 {
      background: var(--mm-amber-lightestestest-background, #ffa000);
    }
    .amber800 {
      background: var(--mm-amber-lightestestestest-background, #ff8f00);
    }
    .amber900 {
      background: var(--mm-amber-lightestestestestest-background, #ff6f00);
    }
    .amberA100 {
      background: var(--mm-amber-darkest-background, #ffe57f);
    }
    .amberA200 {
      background: var(--mm-amber-darker-background, #ffd740);
    }
    .amberA400 {
      background: var(--mm-amber-darkestest-background, #ffc400);
    }
    .amberA700 {
      background: var(--mm-amber-darkestestest-background, #ffab00);
    }
    .orange50 {
      background: var(--mm-orange-dark-background, #fff3e0);
    }
    .orange100 {
      background: var(--mm-orange-background, #ffe0b2);
    }
    .orange200 {
      background: var(--mm-orange-light-background, #ffcc80);
    }
    .orange300 {
      background: var(--mm-orange-lighter-background, #ffb74d);
    }
    .orange400 {
      background: var(--mm-orange-lightest-background, #ffa726);
    }
    .orange500 {
      background: var(--mm-orange-lightestest-background, #ff9800);
    }
    .orange600 {
      background: var(--mm-orange-lightestestest-background, #fb8c00);
    }
    .orange700 {
      background: var(--mm-orange-lightestestest-background, #f57c00);
    }
    .orange800 {
      background: var(--mm-orange-lightestestestest-background, #ef6c00);
    }
    .orange900 {
      background: var(--mm-orange-lightestestestestest-background, #e65100);
    }
    .orangeA100 {
      background: var(--mm-orange-darkest-background, #ffd180);
    }
    .orangeA200 {
      background: var(--mm-orange-darker-background, #ffab40);
    }
    .orangeA400 {
      background: var(--mm-orange-darkestest-background, #ff9100);
    }
    .orangeA700 {
      background: var(--mm-orange-darkestestest-background, #ff6d00);
    }
    .deepOrange50 {
      background: var(--mm-deep-orange-dark-background, #fbe9e7);
    }
    .deepOrange100 {
      background: var(--mm-deep-orange-background, #ffccbc);
    }
    .deepOrange200 {
      background: var(--mm-deep-orange-light-background, #ffab91);
    }
    .deepOrange300 {
      background: var(--mm-deep-orange-lighter-background, #ff8a65);
    }
    .deepOrange400 {
      background: var(--mm-deep-orange-lightest-background, #ff7043);
    }
    .deepOrange500 {
      background: var(--mm-deep-orange-lightestest-background, #ff5722);
    }
    .deepOrange600 {
      background: var(--mm-deep-orange-lightestestest-background, #f4511e);
    }
    .deepOrange700 {
      background: var(--mm-deep-orange-lightestestest-background, #e64a19);
    }
    .deepOrange800 {
      background: var(--mm-deep-orange-lightestestestest-background, #d84315);
    }
    .deepOrange900 {
      background: var(--mm-deep-orange-lightestestestestest-background, #bf360c);
    }
    .deepOrangeA100 {
      background: var(--mm-deep-orange-darkest-background, #ff9e80);
    }
    .deepOrangeA200 {
      background: var(--mm-deep-orange-darker-background, #ff6e40);
    }
    .deepOrangeA400 {
      background: var(--mm-deep-orange-darkestest-background, #ff3d00);
    }
    .deepOrangeA700 {
      background: var(--mm-deep-orange-darkestestest-background, #dd2c00);
    }
    .brown50 {
      background: var(--mm-brown-dark-background, #efebe9);
    }
    .brown100 {
      background: var(--mm-brown-background, #d7ccc8);
    }
    .brown200 {
      background: var(--mm-brown-light-background, #bcaaa4);
    }
    .brown300 {
      background: var(--mm-brown-lighter-background, #a1887f);
    }
    .brown400 {
      background: var(--mm-brown-lightest-background, #8d6e63);
    }
    .brown500 {
      background: var(--mm-brown-lightestest-background, #795548);
    }
    .brown600 {
      background: var(--mm-brown-lightestestest-background, #6d4c41);
    }
    .brown700 {
      background: var(--mm-brown-lightestestest-background, #5d4037);
    }
    .brown800 {
      background: var(--mm-brown-lightestestestest-background, #4e342e);
    }
    .brown900 {
      background: var(--mm-brown-lightestestestestest-background, #3e2723);
    }
    .grey50 {
      background: var(--mm-grey-dark-background, #fafafa);
    }
    .grey100 {
      background: var(--mm-grey-background, #f5f5f5);
    }
    .grey200 {
      background: var(--mm-grey-light-background, #eeeeee);
    }
    .grey300 {
      background: var(--mm-grey-lighter-background, #e0e0e0);
    }
    .grey400 {
      background: var(--mm-grey-lightest-background, #bdbdbd);
    }
    .grey500 {
      background: var(--mm-grey-lightestest-background, #9e9e9e);
    }
    .grey600 {
      background: var(--mm-grey-lightestestest-background, #757575);
    }
    .grey700 {
      background: var(--mm-grey-lightestestest-background, #616161);
    }
    .grey800 {
      background: var(--mm-grey-lightestestestest-background, #424242);
    }
    .grey900 {
      background: var(--mm-grey-lightestestestestest-background, #212121);
    }
    .blueGrey50 {
      background: var(--mm-blue-grey-dark-background, #eceff1);
    }
    .blueGrey100 {
      background: var(--mm-blue-grey-background, #cfd8dc);
    }
    .blueGrey200 {
      background: var(--mm-blue-grey-light-background, #b0bec5);
    }
    .blueGrey300 {
      background: var(--mm-blue-grey-lighter-background, #90a4ae);
    }
    .blueGrey400 {
      background: var(--mm-blue-grey-lightest-background, #78909c);
    }
    .blueGrey500 {
      background: var(--mm-blue-grey-lightestest-background, #607d8b);
    }
    .blueGrey600 {
      background: var(--mm-blue-grey-lightestestest-background, #546e7a);
    }
    .blueGrey700 {
      background: var(--mm-blue-grey-lightestestest-background, #455a64);
    }
    .blueGrey800 {
      background: var(--mm-blue-grey-lightestestestest-background, #37474f);
    }
    .blueGrey900 {
      background: var(--mm-blue-grey-lightestestestestest-background, #263238);
    }
    .black {
      background: var(--mm-black-background, #000);
    }
    .white {
      background: var(--mm-white-background, #fff);
    }
    .transparent {
      background: var(--mm-transparent-background, transparent);
    }
    .darkTransparent {
      background: var(--mm-dark-transparent-background, rgba(0, 0, 0, 0.5));
    }
    .lightTransparent {
      background: var(--mm-light-transparent-background, rgba(255, 255, 255, 0.5));
    }

    

    
    /* Sizes */
    .mm-btn-sm {
      font-size: 0.8rem;
      width: calc(max-width * .50);
    }
    .mm-btn-md {
      font-size: var(--mm-btn-md-font-size, 1rem);
    }
    .mm-btn-lg {
      font-size: 1.2rem;
      width: calc(m  .75);
    }
    .mm-btn-xl {
      font-size: var(--mm-btn-xl-font-size, 1.4rem);
    }
    
    /* Padding */
    .mm-btn-padding {
      padding: var(--mm-btn-padding, 8px 16px);
    }
    .mm-btn-padding-sm {
      padding: var(--mm-btn-padding-sm, 4px 8px);
    }
    .mm-btn-padding-md {
      padding: var(--mm-btn-padding-md, 8px 16px);
    }
    .mm-btn-padding-lg {
      padding: var(--mm-btn-padding-lg, 16px 24px);
    }
    .mm-btn-padding-xl {
      padding: var(--mm-btn-padding-xl, 24px 32px);
    }
    
    /* Round Variants */
    .slightly-round {
      border-radius: 2px;
    }
    .squircle {
      border-radius: 4px;
    }
    .rounded-square {
      border-radius: 10px;
    }

    /* Outline Variants */
    .outline {
      border: 1px solid;
    }
    .outline-sm {
      border-width: 1px;
    }
    .outline-md {
      border-width: 2px;
    }
    .outline-lg { 
      border-width: 4px;
    }
    .outline-xl {
      border-width: 8px;
    }
    .outline-transparent {
      border-color: transparent;
    }
    .outline-red50 {
      border-color: var(--mm-red-lightest-background, #ffebee);
    }
    .outline-red100 {
      border-color: var(--mm-red-lightestest-background, #ffcdd2);
    }
    .outline-red200 {
      border-color: var(--mm-red-lightestestest-background, #ef9a9a);
    }
    .outline-red300 {
      border-color: var(--mm-red-lightestestestest-background, #e57373);
    }
    .outline-red400 {
      border-color: var(--mm-red-lightestestestest-background, #ef5350);
    }
    .outline-red500 {
      border-color: var(--mm-red-lightestestestestest-background, #f44336);
    }
    .outline-red600 {
      border-color: var(--mm-red-lightestestestestestest-background, #e53935);
    }
    .outline-red700 {
      border-color: var(--mm-red-lightestestestestestestest-background, #d32f2f);
    }
    .outline-red800 {
      border-color: var(--mm-red-lightestestestestestestestest-background, #c62828);
    }
    .outline-red900 {
      border-color: var(--mm-red-lightestestestestestestestestest-background, #b71c1c);
    }
    .outline-redA100 {
      border-color: var(--mm-red-lightestestestestestestestestestest-background, #ff8a80);
    }
    .outline-redA200 {
      border-color: var(--mm-red-lightestestestestestestestestestestest-background, #ff5252);
    }
    .outline-redA400 {
      border-color: var(--mm-red-lightestestestestestestestestestestestest-background, #ff1744);
    }
    .outline-redA700 {
      border-color: var(--mm-red-lightestestestestestestestestestestestestest-background, #d50000);
    }
    .outline-pink50 {
      border-color: var(--mm-pink-lightest-background, #fce4ec);
    }
    .outline-pink100 {
      border-color: var(--mm-pink-lightestest-background, #f8bbd0);
    }
    .outline-pink200 {
      border-color: var(--mm-pink-lightestestest-background, #f48fb1);
    }
    .outline-pink300 {
      border-color: var(--mm-pink-lightestestestest-background, #f06292);
    }
    .outline-pink400 {
      border-color: var(--mm-pink-lightestestestestest-background, #ec407a);
    }
    .outline-pink500 {
      border-color: var(--mm-pink-lightestestestestestest-background, #e91e63);
    }
    .outline-pink600 {
      border-color: var(--mm-pink-lightestestestestestestest-background, #d81b60);
    }
    .outline-pink700 {
      border-color: var(--mm-pink-lightestestestestestestestest-background, #c2185b);
    }
    .outline-pink800 {
      border-color: var(--mm-pink-lightestestestestestestestestest-background, #ad1457);
    }
    .outline-pink900 {
      border-color: var(--mm-pink-lightestestestestestestestestestest-background, #880e4f);
    }
    .outline-pinkA100 {
      border-color: var(--mm-pink-lightestestestestestestestestestestest-background, #ff80ab);
    }
    .outline-pinkA200 {
      border-color: var(--mm-pink-lightestestestestestestestestestestestest-background, #ff4081);
    }
    .outline-pinkA400 {
      border-color: var(--mm-pink-lightestestestestestestestestestestestestest-background, #f50057);
    }
    .outline-pinkA700 {
      border-color: var(--mm-pink-lightestestestestestestestestestestestestestest-background, #c51162);
    }
    .outline-purple50 {
      border-color: var(--mm-purple-lightest-background, #f3e5f5);
    }
    .outline-purple100 {
      border-color: var(--mm-purple-lightestest-background, #e1bee7);
    }
    .outline-purple200 {
      border-color: var(--mm-purple-lightestestest-background, #ce93d8);
    }
    .outline-purple300 {
      border-color: var(--mm-purple-lightestestestest-background, #ba68c8);
    }
    .outline-purple400 {
      border-color: var(--mm-purple-lightestestestestest-background, #ab47bc);
    }
    .outline-purple500 {
      border-color: var(--mm-purple-lightestestestestestest-background, #9c27b0);
    }
    .outline-purple600 {
      border-color: var(--mm-purple-lightestestestestestestest-background, #8e24aa);
    }
    .outline-purple700 {
      border-color: var(--mm-purple-lightestestestestestestestest-background, #7b1fa2);
    }
    .outline-purple800 {
      border-color: var(--mm-purple-lightestestestestestestestestest-background, #6a1b9a);
    }
    .outline-purple900 {
      border-color: var(--mm-purple-lightestestestestestestestestestest-background, #4a148c);
    }
    .outline-purpleA100 {
      border-color: var(--mm-purple-lightestestestestestestestestestestest-background, #ea80fc);
    }
    .outline-purpleA200 {
      border-color: var(--mm-purple-lightestestestestestestestestestestestest-background, #e040fb);
    }
    .outline-purpleA400 {
      border-color: var(--mm-purple-lightestestestestestestestestestestestestest-background, #d500f9);
    }
    .outline-purpleA700 {
      border-color: var(--mm-purple-lightestestestestestestestestestestestestestest-background, #aa00ff);
    }
    .outline-deep-purple50 {
      border-color: var(--mm-deep-purple-lightest-background, #ede7f6);
    }
    .outline-deep-purple100 {
      border-color: var(--mm-deep-purple-lightestest-background, #d1c4e9);
    }
    .outline-deep-purple200 {
      border-color: var(--mm-deep-purple-lightestestest-background, #b39ddb);
    }
    .outline-deep-purple300 {
      border-color: var(--mm-deep-purple-lightestestestest-background, #9575cd);
    }
    .outline-deep-purple400 {
      border-color: var(--mm-deep-purple-lightestestestestest-background, #7e57c2);
    }
    .outline-deep-purple500 {
      border-color: var(--mm-deep-purple-lightestestestestestest-background, #673ab7);
    }
    .outline-deep-purple600 {
      border-color: var(--mm-deep-purple-lightestestestestestestest-background, #5e35b1);
    }
    .outline-deep-purple700 {
      border-color: var(--mm-deep-purple-lightestestestestestestestest-background, #512da8);
    }
    .outline-deep-purple800 {
      border-color: var(--mm-deep-purple-lightestestestestestestestestest-background, #4527a0);
    }
    .outline-deep-purple900 {
      border-color: var(--mm-deep-purple-lightestestestestestestestestestest-background, #311b92);
    }
    .outline-deep-purpleA100 {
      border-color: var(--mm-deep-purple-lightestestestestestestestestestestest-background, #b388ff);
    }
    .outline-deep-purpleA200 {
      border-color: var(--mm-deep-purple-lightestestestestestestestestestestestest-background, #7c4dff);
    }
    .outline-deep-purpleA400 {
      border-color: var(--mm-deep-purple-lightestestestestestestestestestestestestest-background, #651fff);
    }
    .outline-deep-purpleA700 {
      border-color: var(--mm-deep-purple-lightestestestestestestestestestestestestestest-background, #6200ea);
    }
    .outline-indigo50 {
      border-color: var(--mm-indigo-lightest-background, #e8eaf6);
    }
    .outline-indigo100 {
      border-color: var(--mm-indigo-lightestest-background, #c5cae9);
    }
    .outline-indigo200 {
      border-color: var(--mm-indigo-lightestestest-background, #9fa8da);
    }
    .outline-indigo300 {
      border-color: var(--mm-indigo-lightestestestest-background, #7986cb);
    }
    .outline-indigo400 {
      border-color: var(--mm-indigo-lightestestestestest-background, #5c6bc0);
    }
    .outline-indigo500 {
      border-color: var(--mm-indigo-lightestestestestestest-background, #3f51b5);
    }
    .outline-indigo600 {
      border-color: var(--mm-indigo-lightestestestestestestest-background, #3949ab);
    }
    .outline-indigo700 {
      border-color: var(--mm-indigo-lightestestestestestestestest-background, #303f9f);
    }
    .outline-indigo800 {
      border-color: var(--mm-indigo-lightestestestestestestestestest-background, #283593);
    }
    .outline-indigo900 {
      border-color: var(--mm-indigo-lightestestestestestestestestestest-background, #1a237e);
    }
    .outline-indigoA100 {
      border-color: var(--mm-indigo-lightestestestestestestestestestestest-background, #8c9eff);
    }
    .outline-indigoA200 {
      border-color: var(--mm-indigo-lightestestestestestestestestestestestest-background, #536dfe);
    }
    .outline-indigoA400 {
      border-color: var(--mm-indigo-lightestestestestestestestestestestestestest-background, #3d5afe);
    }
    .outline-indigoA700 {
      border-color: var(--mm-indigo-lightestestestestestestestestestestestestestest-background, #304ffe);
    }
    .outline-blue50 {
      border-color: var(--mm-blue-lightest-background, #e3f2fd);
    }
    .outline-blue100 {
      border-color: var(--mm-blue-lightestest-background, #bbdefb);
    }
    .outline-blue200 {
      border-color: var(--mm-blue-lightestestest-background, #90caf9);
    }
    .outline-blue300 {
      border-color: var(--mm-blue-lightestestestest-background, #64b5f6);
    }
    .outline-blue400 {
      border-color: var(--mm-blue-lightestestestestest-background, #42a5f5);
    }
    .outline-blue500 {
      border-color: var(--mm-blue-lightestestestestestest-background, #2196f3);
    }
    .outline-blue600 {
      border-color: var(--mm-blue-lightestestestestestestest-background, #1e88e5);
    }
    .outline-blue700 {
      border-color: var(--mm-blue-lightestestestestestestestest-background, #1976d2);
    }
    .outline-blue800 {
      border-color: var(--mm-blue-lightestestestestestestestestest-background, #1565c0);
    }
    .outline-blue900 {
      border-color: var(--mm-blue-lightestestestestestestestestestest-background, #0d47a1);
    }
    .outline-blueA100 {
      border-color: var(--mm-blue-lightestestestestestestestestestestest-background, #82b1ff);
    }
    .outline-blueA200 {
      border-color: var(--mm-blue-lightestestestestestestestestestestestest-background, #448aff);
    }
    .outline-blueA400 {
      border-color: var(--mm-blue-lightestestestestestestestestestestestestest-background, #2979ff);
    }
    .outline-blueA700 {
      border-color: var(--mm-blue-lightestestestestestestestestestestestestestest-background, #2962ff);
    }
    .outline-light-blue50 {
      border-color: var(--mm-light-blue-lightest-background, #e1f5fe);
    }
    .outline-light-blue100 {
      border-color: var(--mm-light-blue-lightestest-background, #b3e5fc);
    }
    .outline-light-blue200 {
      border-color: var(--mm-light-blue-lightestestest-background, #81d4fa);
    }
    .outline-light-blue300 {
      border-color: var(--mm-light-blue-lightestestestest-background, #4fc3f7);
    }
    .outline-light-blue400 {
      border-color: var(--mm-light-blue-lightestestestestest-background, #29b6f6);
    }
    .outline-light-blue500 {
      border-color: var(--mm-light-blue-lightestestestestestest-background, #03a9f4);
    }
    .outline-light-blue600 {
      border-color: var(--mm-light-blue-lightestestestestestestest-background, #039be5);
    }
    .outline-light-blue700 {
      border-color: var(--mm-light-blue-lightestestestestestestestest-background, #0288d1);
    }
    .outline-light-blue800 {
      border-color: var(--mm-light-blue-lightestestestestestestestestest-background, #0277bd);
    }
    .outline-light-blue900 {
      border-color: var(--mm-light-blue-lightestestestestestestestestestest-background, #01579b);
    }
    .outline-light-blueA100 {
      border-color: var(--mm-light-blue-lightestestestestestestestestestestest-background, #80d8ff);
    }
    .outline-light-blueA200 {
      border-color: var(--mm-light-blue-lightestestestestestestestestestestestest-background, #40c4ff);
    }
    .outline-light-blueA400 {
      border-color: var(--mm-light-blue-lightestestestestestestestestestestestestest-background, #00b0ff);
    }
    .outline-light-blueA700 {
      border-color: var(--mm-light-blue-lightestestestestestestestestestestestestestest-background, #0091ea);
    }
    .outline-cyan50 {
      border-color: var(--mm-cyan-lightest-background, #e0f7fa);
    }
    .outline-cyan100 {
      border-color: var(--mm-cyan-lightestest-background, #b2ebf2);
    }
    .outline-cyan200 {
      border-color: var(--mm-cyan-lightestestest-background, #80deea);
    }
    .outline-cyan300 {
      border-color: var(--mm-cyan-lightestestestest-background, #4dd0e1);
    }
    .outline-cyan400 {
      border-color: var(--mm-cyan-lightestestestestest-background, #26c6da);
    }
    .outline-cyan500 {
      border-color: var(--mm-cyan-lightestestestestestest-background, #00bcd4);
    }
    .outline-cyan600 {
      border-color: var(--mm-cyan-lightestestestestestestest-background, #00acc1);
    }
    .outline-cyan700 {
      border-color: var(--mm-cyan-lightestestestestestestestest-background, #0097a7);
    }
    .outline-cyan800 {
      border-color: var(--mm-cyan-lightestestestestestestestestest-background, #00838f);
    }
    .outline-cyan900 {
      border-color: var(--mm-cyan-lightestestestestestestestestestest-background, #006064);
    }
    .outline-cyanA100 {
      border-color: var(--mm-cyan-lightestestestestestestestestestestest-background, #84ffff);
    }
    .outline-cyanA200 {
      border-color: var(--mm-cyan-lightestestestestestestestestestestestest-background, #18ffff);
    }
    .outline-cyanA400 {
      border-color: var(--mm-cyan-lightestestestestestestestestestestestestest-background, #00e5ff);
    }
    .outline-cyanA700 {
      border-color: var(--mm-cyan-lightestestestestestestestestestestestestestest-background, #00b8d4);
    }
    .outline-teal50 {
      border-color: var(--mm-teal-lightest-background, #e0f2f1);
    }
    .outline-teal100 {
      border-color: var(--mm-teal-lightestest-background, #b2dfdb);
    }
    .outline-teal200 {
      border-color: var(--mm-teal-lightestestest-background, #80cbc4);
    }
    .outline-teal300 {
      border-color: var(--mm-teal-lightestestestest-background, #4db6ac);
    }
    .outline-teal400 {
      border-color: var(--mm-teal-lightestestestestest-background, #26a69a);
    }
    .outline-teal500 {
      border-color: var(--mm-teal-lightestestestestestest-background, #009688);
    }
    .outline-teal600 {
      border-color: var(--mm-teal-lightestestestestestestest-background, #00897b);
    }
    .outline-teal700 {
      border-color: var(--mm-teal-lightestestestestestestestest-background, #00796b);
    }
    .outline-teal800 {
      border-color: var(--mm-teal-lightestestestestestestestest-background, #00695c);
    }
    .outline-teal900 {
      border-color: var(--mm-teal-lightestestestestestestestestest-background, #004d40);
    }
    .outline-tealA100 {
      border-color: var(--mm-teal-lightestestestestestestestestestest-background, #a7ffeb);
    }
    .outline-tealA200 {
      border-color: var(--mm-teal-lightestestestestestestestestestestest-background, #64ffda);
    }
    .outline-tealA400 {
      border-color: var(--mm-teal-lightestestestestestestestestestestestest-background, #1de9b6);
    }
    .outline-tealA700 {
      border-color: var(--mm-teal-lightestestestestestestestestestestestestest-background, #00bfa5);
    }
    .outline-green50 {
      border-color: var(--mm-green-lightest-background, #e8f5e9);
    }
    .outline-green100 {
      border-color: var(--mm-green-lightestest-background, #c8e6c9);
    }
    .outline-green200 {
      border-color: var(--mm-green-lightestestest-background, #a5d6a7);
    }
    .outline-green300 {
      border-color: var(--mm-green-lightestestestest-background, #81c784);
    }
    .outline-green400 {
      border-color: var(--mm-green-lightestestestestest-background, #66bb6a);
    }
    .outline-green500 {
      border-color: var(--mm-green-lightestestestestestest-background, #4caf50);
    }
    .outline-green600 {
      border-color: var(--mm-green-lightestestestestestestest-background, #43a047);
    }
    .outline-green700 {
      border-color: var(--mm-green-lightestestestestestestest-background, #388e3c);
    }
    .outline-green800 {
      border-color: var(--mm-green-lightestestestestestestest-background, #2e7d32);
    }
    .outline-green900 {
      border-color: var(--mm-green-lightestestestestestestestest-background, #1b5e20);
    }
    .outline-greenA100 {
      border-color: var(--mm-green-lightestestestestestestestestest-background, #b9f6ca);
    }
    .outline-greenA200 {
      border-color: var(--mm-green-lightestestestestestestestestestest-background, #69f0ae);
    }
    .outline-greenA400 {
      border-color: var(--mm-green-lightestestestestestestestestestestest-background, #00e676);
    }
    .outline-greenA700 {
      border-color: var(--mm-green-lightestestestestestestestestestestestest-background, #00c853);
    }
    .outline-lightGreen50 {
      border-color: var(--mm-lightGreen-lightest-background, #f1f8e9);
    }
    .outline-lightGreen100 {
      border-color: var(--mm-lightGreen-lightestest-background, #dcedc8);
    }
    .outline-lightGreen200 {
      border-color: var(--mm-lightGreen-lightestestest-background, #c5e1a5);
    }
    .outline-lightGreen300 {
      border-color: var(--mm-lightGreen-lightestestestest-background, #aed581);
    }
    .outline-lightGreen400 {
      border-color: var(--mm-lightGreen-lightestestestestest-background, #9ccc65);
    }
    .outline-lightGreen500 {
      border-color: var(--mm-lightGreen-lightestestestestestest-background, #8bc34a);
    }
    .outline-lightGreen600 {
      border-color: var(--mm-lightGreen-lightestestestestestestest-background, #7cb342);
    }
    .outline-lightGreen700 {
      border-color: var(--mm-lightGreen-lightestestestestestestest-background, #689f38);


    /* Letter Spacing */
    .text-condensed {
      letter-spacing: -1px;
    }
    .text-wide {
      letter-spacing: var(--mm-text-wide-letter-spacing, 2px);
    }
    .text-wider {
      letter-spacing: var(--mm-text-wider-letter-spacing, 4px);
    }

    

    
   
  `

  /**
   * The name to say "Hello" to.
   */
  @property({type: String})
  text = 'Click Me!'

  @property({type: String})
  class = ''


  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      
      <button class=${this.class} part="button">
        ${this.text}
      </button>
      
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mm-btn': MMBtn,
    
  }
}
