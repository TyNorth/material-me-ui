import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./assets/css/designlibrary.css";
import "./assets/css/materialme.css";

/**
 * Material Me Button element.
 *
 *
 * @csspart button - The button
 */
@customElement("mm-btn")
export class MMBtn extends LitElement {
  /**
   * The name to say "Hello" to.
   */
  @property({ type: String })
  text = "Click Me!";

  @property({ type: String })
  class = "";

  static styles = css`
    :host {
       margin: var(--mm-m, 5px);
    }
    :host > * {
      max-width: var(--mm-maxW, 250px);
      height: var(--mm-h, auto);
      background: var(--mm-background, #fff);
      border-radius: var(--mm-border-radius, 0px);
      border: var(--mm-border, .01px solid #ccc);
      color: var(--mm-color, #000);
      cursor: var(--mm-cursor, pointer);
      padding: var(--mm-p, 16px 16px);
      text-align: var(--mm-textA, center);
      transition: var(--mm-trans, all 0.3 ease-in-out);
      align-self: var(--mm-alignS, center);
      letter-spacing: var(--m-letterS, 1px);
      font-style: var(--m-fontS, normal);
      font-weight: var(--mm-font-weight, 500);
    }
    


    /* Red variants */
    /* Based on designlibrarycss */

    
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


    /* Border & Hover States */

.mm-transparent,
.mm-hover-none:hover {
  background-color: transparent !important;
}
.mm-hover-none:hover {
  box-shadow: none !important;
}

.mm-border-amber,
.mm-hover-border-amber:hover {
  border-color: #ffc107 !important;
}
.mm-border-aqua,
.mm-hover-border-aqua:hover {
  border-color: #00ffff !important;
}
.mm-border-blue,
.mm-hover-border-blue:hover {
  border-color: #2196f3 !important;
}
.mm-border-light-blue,
.mm-hover-border-light-blue:hover {
  border-color: #87ceeb !important;
}
.mm-border-brown,
.mm-hover-border-brown:hover {
  border-color: #795548 !important;
}
.mm-border-cyan,
.mm-hover-border-cyan:hover {
  border-color: #00bcd4 !important;
}
.mm-border-blue-grey,
.mm-hover-border-blue-grey:hover,
.mm-border-blue-gray,
.mm-hover-border-blue-gray:hover {
  border-color: #607d8b !important;
}
.mm-border-green,
.mm-hover-border-green:hover {
  border-color: #4caf50 !important;
}
.mm-border-light-green,
.mm-hover-border-light-green:hover {
  border-color: #8bc34a !important;
}
.mm-border-indigo,
.mm-hover-border-indigo:hover {
  border-color: #3f51b5 !important;
}
.mm-border-khaki,
.mm-hover-border-khaki:hover {
  border-color: #f0e68c !important;
}
.mm-border-lime,
.mm-hover-border-lime:hover {
  border-color: #cddc39 !important;
}
.mm-border-orange,
.mm-hover-border-orange:hover {
  border-color: #ff9800 !important;
}
.mm-border-deep-orange,
.mm-hover-border-deep-orange:hover {
  border-color: #ff5722 !important;
}
.mm-border-pink,
.mm-hover-border-pink:hover {
  border-color: #e91e63 !important;
}
.mm-border-purple,
.mm-hover-border-purple:hover {
  border-color: #9c27b0 !important;
}
.mm-border-deep-purple,
.mm-hover-border-deep-purple:hover {
  border-color: #673ab7 !important;
}
.mm-border-red,
.mm-hover-border-red:hover {
  border-color: #f44336 !important;
}
.mm-border-sand,
.mm-hover-border-sand:hover {
  border-color: #fdf5e6 !important;
}
.mm-border-teal,
.mm-hover-border-teal:hover {
  border-color: #009688 !important;
}
.mm-border-yellow,
.mm-hover-border-yellow:hover {
  border-color: #ffeb3b !important;
}
.mm-border-white,
.mm-hover-border-white:hover {
  border-color: #fff !important;
}
.mm-border-black,
.mm-hover-border-black:hover {
  border-color: #000 !important;
}
.mm-border-grey,
.mm-hover-border-grey:hover,
.mm-border-gray,
.mm-hover-border-gray:hover {
  border-color: #9e9e9e !important;
}
.mm-border-light-grey,
.mm-hover-border-light-grey:hover,
.mm-border-light-gray,
.mm-hover-border-light-gray:hover {
  border-color: #f1f1f1 !important;
}
.mm-border-dark-grey,
.mm-hover-border-dark-grey:hover,
.mm-border-dark-gray,
.mm-hover-border-dark-gray:hover {
  border-color: #616161 !important;
}
.mm-border-pale-red,
.mm-hover-border-pale-red:hover {
  border-color: #ffe7e7 !important;
}
.mm-border-pale-green,
.mm-hover-border-pale-green:hover {
  border-color: #e7ffe7 !important;
}
.mm-border-pale-yellow,
.mm-hover-border-pale-yellow:hover {
  border-color: #ffffcc !important;
}
.mm-border-pale-blue,
.mm-hover-border-pale-blue:hover {
  border-color: #e7ffff !important;
}

.mm-border-red50,
.mm-hover-border-red50:hover {
  border-color: #ffebee !important;
}
.mm-border-red100,
.mm-hover-border-red100:hover {
  border-color: #ffcdd2 !important;
}
.mm-border-red200,
.mm-hover-border-red200:hover {
  border-color: #ef9a9a !important;
}
.mm-border-red300,
.mm-hover-border-red300:hover {
  border-color: #e57373 !important;
}
.mm-border-red400,
.mm-hover-border-red400:hover {
  border-color: #ef5350 !important;
}
.mm-border-red500,
.mm-hover-border-red500:hover {
  border-color: #f44336 !important;
}
.mm-border-red600,
.mm-hover-border-red600:hover {
  border-color: #e53935 !important;
}
.mm-border-red700,
.mm-hover-border-red700:hover {
  border-color: #d32f2f !important;
}
.mm-border-red800,
.mm-hover-border-red800:hover {
  border-color: #c62828 !important;
}
.mm-border-red900,
.mm-hover-border-red900:hover {
  border-color: #b71c1c !important;
}

.mm-border-redA100,
.mm-hover-border-redA100:hover {
  border-color: #ff8a80 !important;
}
.mm-border-redA200,
.mm-hover-border-redA200:hover {
  border-color: #ff5252 !important;
}
.mm-border-redA400,
.mm-hover-border-redA400:hover {
  border-color: #ff1744 !important;
}
.mm-border-redA700,
.mm-hover-border-redA700:hover {
  border-color: #d50000 !important;
}

.mm-border-pink50,
.mm-hover-border-pink50:hover {
  border-color: #fce4ec !important;
} 
.mm-border-pink100,
.mm-hover-border-pink100:hover {
  border-color: #f8bbd0 !important;
}
.mm-border-pink200,
.mm-hover-border-pink200:hover {
  border-color: #f48fb1 !important;
}
.mm-border-pink300,
.mm-hover-border-pink300:hover {
  border-color: #f06292 !important;
}
.mm-border-pink400,
.mm-hover-border-pink400:hover {
  border-color: #ec407a !important;
}
.mm-border-pink500,
.mm-hover-border-pink500:hover {
  border-color: #e91e63 !important;
}
.mm-border-pink600,
.mm-hover-border-pink600:hover {
  border-color: #d81b60 !important;
}
.mm-border-pink700,
.mm-hover-border-pink700:hover {
  border-color: #c2185b !important;
}
.mm-border-pink800,
.mm-hover-border-pink800:hover {
  border-color: #ad1457 !important;
}
.mm-border-pink900,
.mm-hover-border-pink900:hover {
  border-color: #880e4f !important;
}

.mm-border-pinkA100,
.mm-hover-border-pinkA100:hover {
  border-color: #ff80ab !important;
}
.mm-border-pinkA200,
.mm-hover-border-pinkA200:hover {
  border-color: #ff4081 !important;
}
.mm-border-pinkA400,
.mm-hover-border-pinkA400:hover {
  border-color: #f50057 !important;
}
.mm-border-pinkA700,
.mm-hover-border-pinkA700:hover {
  border-color: #c51162 !important;
}

.mm-border-purple50,
.mm-hover-border-purple50:hover {
  border-color: #f3e5f5 !important;
}
.mm-border-purple100,
.mm-hover-border-purple100:hover {
  border-color: #e1bee7 !important;
}
.mm-border-purple200,
.mm-hover-border-purple200:hover {
  border-color: #ce93d8 !important;
}
.mm-border-purple300,
.mm-hover-border-purple300:hover {
  border-color: #ba68c8 !important;
}
.mm-border-purple400,
.mm-hover-border-purple400:hover {
  border-color: #ab47bc !important;
}
.mm-border-purple500,
.mm-hover-border-purple500:hover {
  border-color: #9c27b0 !important;
}
.mm-border-purple600,
.mm-hover-border-purple600:hover {
  border-color: #8e24aa !important;
}
.mm-border-purple700,
.mm-hover-border-purple700:hover {
  border-color: #7b1fa2 !important;
}
.mm-border-purple800,
.mm-hover-border-purple800:hover {
  border-color: #6a1b9a !important;
}
.mm-border-purple900,
.mm-hover-border-purple900:hover {
  border-color: #4a148c !important;
}

.mm-border-purpleA100,
.mm-hover-border-purpleA100:hover {
  border-color: #ea80fc !important;
}
.mm-border-purpleA200,
.mm-hover-border-purpleA200:hover {
  border-color: #e040fb !important;
}
.mm-border-purpleA400,
.mm-hover-border-purpleA400:hover {
  border-color: #d500f9 !important;
}
.mm-border-purpleA700,
.mm-hover-border-purpleA700:hover {
  border-color: #aa00ff !important;
}

.mm-border-deeppurple50,
.mm-hover-border-deeppurple50:hover {
  border-color: #ede7f6 !important;
}
.mm-border-deeppurple100,
.mm-hover-border-deeppurple100:hover {
  border-color: #d1c4e9 !important;
}
.mm-border-deeppurple200,
.mm-hover-border-deeppurple200:hover {
  border-color: #b39ddb !important;
}
.mm-border-deeppurple300,
.mm-hover-border-deeppurple300:hover {
  border-color: #9575cd !important;
}
.mm-border-deeppurple400,
.mm-hover-border-deeppurple400:hover {
  border-color: #7e57c2 !important;
}
.mm-border-deeppurple500,
.mm-hover-border-deeppurple500:hover {
  border-color: #673ab7 !important;
}
.mm-border-deeppurple600,
.mm-hover-border-deeppurple600:hover {
  border-color: #5e35b1 !important;
}
.mm-border-deeppurple700,
.mm-hover-border-deeppurple700:hover {
  border-color: #512da8 !important;
}
.mm-border-deeppurple800,
.mm-hover-border-deeppurple800:hover {
  border-color: #4527a0 !important;
}
.mm-border-deeppurple900,
.mm-hover-border-deeppurple900:hover {
  border-color: #311b92 !important;
}

.mm-border-deeppurpleA100,
.mm-hover-border-deeppurpleA100:hover {
  border-color: #b388ff !important;
}
.mm-border-deeppurpleA200,
.mm-hover-border-deeppurpleA200:hover {
  border-color: #7c4dff !important;
}
.mm-border-deeppurpleA400,
.mm-hover-border-deeppurpleA400:hover {
  border-color: #651fff !important;
}
.mm-border-deeppurpleA700,
.mm-hover-border-deeppurpleA700:hover {
  border-color: #6200ea !important;
}

.mm-border-indigo50,
.mm-hover-border-indigo50:hover {
  border-color: #e8eaf6 !important;
}
.mm-border-indigo100,
.mm-hover-border-indigo100:hover {
  border-color: #c5cae9 !important;
}
.mm-border-indigo200,
.mm-hover-border-indigo200:hover {
  border-color: #9fa8da !important;
}
.mm-border-indigo300,
.mm-hover-border-indigo300:hover {
  border-color: #7986cb !important;
}
.mm-border-indigo400,
.mm-hover-border-indigo400:hover {
  border-color: #5c6bc0 !important;
}
.mm-border-indigo500,
.mm-hover-border-indigo500:hover {
  border-color: #3f51b5 !important;
}
.mm-border-indigo600,
.mm-hover-border-indigo600:hover {
  border-color: #3949ab !important;
}
.mm-border-indigo700,
.mm-hover-border-indigo700:hover {
  border-color: #303f9f !important;
}
.mm-border-indigo800,
.mm-hover-border-indigo800:hover {
  border-color: #283593 !important;
}
.mm-border-indigo900,
.mm-hover-border-indigo900:hover {
  border-color: #1a237e !important;
}

.mm-border-indigoA100,
.mm-hover-border-indigoA100:hover {
  border-color: #8c9eff !important;
}
.mm-border-indigoA200,
.mm-hover-border-indigoA200:hover {
  border-color: #536dfe !important;
}
.mm-border-indigoA400,
.mm-hover-border-indigoA400:hover {
  border-color: #3d5afe !important;
}
.mm-border-indigoA700,
.mm-hover-border-indigoA700:hover {
  border-color: #304ffe !important;
}

.mm-border-blue50,
.mm-hover-border-blue50:hover {
  border-color: #e3f2fd !important;
}
.mm-border-blue100,
.mm-hover-border-blue100:hover {
  border-color: #bbdefb !important;
}
.mm-border-blue200,
.mm-hover-border-blue200:hover {
  border-color: #90caf9 !important;
}
.mm-border-blue300,
.mm-hover-border-blue300:hover {
  border-color: #64b5f6 !important;
}
.mm-border-blue400,
.mm-hover-border-blue400:hover {
  border-color: #42a5f5 !important;
}
.mm-border-blue500,
.mm-hover-border-blue500:hover {
  border-color: #2196f3 !important;
}
.mm-border-blue600,
.mm-hover-border-blue600:hover {
  border-color: #1e88e5 !important;
}
.mm-border-blue700,
.mm-hover-border-blue700:hover {
  border-color: #1976d2 !important;
}
.mm-border-blue800,
.mm-hover-border-blue800:hover {
  border-color: #1565c0 !important;
}
.mm-border-blue900,
.mm-hover-border-blue900:hover {
  border-color: #0d47a1 !important;
}

.mm-border-blueA100,
.mm-hover-border-blueA100:hover {
  border-color: #82b1ff !important;
}
.mm-border-blueA200,
.mm-hover-border-blueA200:hover {
  border-color: #448aff !important;
}
.mm-border-blueA400,
.mm-hover-border-blueA400:hover {
  border-color: #2979ff !important;
}
.mm-border-blueA700,
.mm-hover-border-blueA700:hover {
  border-color: #2962ff !important;
}

.mm-border-lightblue50,
.mm-hover-border-lightblue50:hover {
  border-color: #e1f5fe !important;
}
.mm-border-lightblue100,
.mm-hover-border-lightblue100:hover {
  border-color: #b3e5fc !important;
}
.mm-border-lightblue200,
.mm-hover-border-lightblue200:hover {
  border-color: #81d4fa !important;
}
.mm-border-lightblue300,
.mm-hover-border-lightblue300:hover {
  border-color: #4fc3f7 !important;
}
.mm-border-lightblue400,
.mm-hover-border-lightblue400:hover {
  border-color: #29b6f6 !important;
}
.mm-border-lightblue500,
.mm-hover-border-lightblue500:hover {
  border-color: #03a9f4 !important;
}
.mm-border-lightblue600,
.mm-hover-border-lightblue600:hover {
  border-color: #039be5 !important;
}
.mm-border-lightblue700,
.mm-hover-border-lightblue700:hover {
  border-color: #0288d1 !important;
}
.mm-border-lightblue800,
.mm-hover-border-lightblue800:hover {
  border-color: #0277bd !important;
}
.mm-border-lightblue900,
.mm-hover-border-lightblue900:hover {
  border-color: #01579b !important;
}

.mm-border-lightblueA100,
.mm-hover-border-lightblueA100:hover {
  border-color: #80d8ff !important;
}
.mm-border-lightblueA200,
.mm-hover-border-lightblueA200:hover {
  border-color: #40c4ff !important;
}
.mm-border-lightblueA400,
.mm-hover-border-lightblueA400:hover {
  border-color: #00b0ff !important;
}
.mm-border-lightblueA700,
.mm-hover-border-lightblueA700:hover {
  border-color: #0091ea !important;
}

.mm-border-cyan50,
.mm-hover-border-cyan50:hover {
  border-color: #e0f7fa !important;
}
.mm-border-cyan100,
.mm-hover-border-cyan100:hover {
  border-color: #b2ebf2 !important;
}
.mm-border-cyan200,
.mm-hover-border-cyan200:hover {
  border-color: #80deea !important;
}
.mm-border-cyan300,
.mm-hover-border-cyan300:hover {
  border-color: #4dd0e1 !important;
}
.mm-border-cyan400,
.mm-hover-border-cyan400:hover {
  border-color: #26c6da !important;
}
.mm-border-cyan500,
.mm-hover-border-cyan500:hover {
  border-color: #00bcd4 !important;
}
.mm-border-cyan600,
.mm-hover-border-cyan600:hover {
  border-color: #00acc1 !important;
}
.mm-border-cyan700,
.mm-hover-border-cyan700:hover {
  border-color: #0097a7 !important;
}
.mm-border-cyan800,
.mm-hover-border-cyan800:hover {
  border-color: #00838f !important;
}
.mm-border-cyan900,
.mm-hover-border-cyan900:hover {
  border-color: #006064 !important;
}

.mm-border-cyanA100,
.mm-hover-border-cyanA100:hover {
  border-color: #84ffff !important;
}
.mm-border-cyanA200,
.mm-hover-border-cyanA200:hover {
  border-color: #18ffff !important;
}
.mm-border-cyanA400,
.mm-hover-border-cyanA400:hover {
  border-color: #00e5ff !important;
}
.mm-border-cyanA700,
.mm-hover-border-cyanA700:hover {
  border-color: #00b8d4 !important;
}

.mm-border-teal50,
.mm-hover-border-teal50:hover {
  border-color: #e0f2f1 !important;
}
.mm-border-teal100,
.mm-hover-border-teal100:hover {
  border-color: #b2dfdb !important;
}
.mm-border-teal200,
.mm-hover-border-teal200:hover {
  border-color: #80cbc4 !important;
}
.mm-border-teal300,
.mm-hover-border-teal300:hover {
  border-color: #4db6ac !important;
}
.mm-border-teal400,
.mm-hover-border-teal400:hover {
  border-color: #26a69a !important;
}
.mm-border-teal500,
.mm-hover-border-teal500:hover {
  border-color: #009688 !important;
}
.mm-border-teal600,
.mm-hover-border-teal600:hover {
  border-color: #00897b !important;
}
.mm-border-teal700,
.mm-hover-border-teal700:hover {
  border-color: #00796b !important;
}
.mm-border-teal800,
.mm-hover-border-teal800:hover {
  border-color: #00695c !important;
}
.mm-border-teal900,
.mm-hover-border-teal900:hover {
  border-color: #004d40 !important;
}

.mm-border-tealA100,
.mm-hover-border-tealA100:hover {
  border-color: #a7ffeb !important;
}
.mm-border-tealA200,
.mm-hover-border-tealA200:hover {
  border-color: #64ffda !important;
}
.mm-border-tealA400,
.mm-hover-border-tealA400:hover {
  border-color: #1de9b6 !important;
}
.mm-border-tealA700,
.mm-hover-border-tealA700:hover {
  border-color: #00bfa5 !important;
}

.mm-border-green50,
.mm-hover-border-green50:hover {
  border-color: #e8f5e9 !important;
}
.mm-border-green100,
.mm-hover-border-green100:hover {
  border-color: #c8e6c9 !important;
}
.mm-border-green200,
.mm-hover-border-green200:hover {
  border-color: #a5d6a7 !important;
}
.mm-border-green300,
.mm-hover-border-green300:hover {
  border-color: #81c784 !important;
}
.mm-border-green400,
.mm-hover-border-green400:hover {
  border-color: #66bb6a !important;
}
.mm-border-green500,
.mm-hover-border-green500:hover {
  border-color: #4caf50 !important;
}
.mm-border-green600,
.mm-hover-border-green600:hover {
  border-color: #43a047 !important;
}
.mm-border-green700,
.mm-hover-border-green700:hover {
  border-color: #388e3c !important;
}
.mm-border-green800,
.mm-hover-border-green800:hover {
  border-color: #2e7d32 !important;
}
.mm-border-green900,
.mm-hover-border-green900:hover {
  border-color: #1b5e20 !important;
}

.mm-border-greenA100,
.mm-hover-border-greenA100:hover {
  border-color: #b9f6ca !important;
}
.mm-border-greenA200,
.mm-hover-border-greenA200:hover {
  border-color: #69f0ae !important;
}
.mm-border-greenA400,
.mm-hover-border-greenA400:hover {
  border-color: #00e676 !important;
}
.mm-border-greenA700,
.mm-hover-border-greenA700:hover {
  border-color: #00c853 !important;
}

.mm-border-light-green50,
.mm-hover-border-light-green50:hover {
  border-color: #f1f8e9 !important;
}
.mm-border-light-green100,
.mm-hover-border-light-green100:hover {
  border-color: #dcedc8 !important;
}
.mm-border-light-green200,
.mm-hover-border-light-green200:hover {
  border-color: #c5e1a5 !important;
}
.mm-border-light-green300,
.mm-hover-border-light-green300:hover {
  border-color: #aed581 !important;
}
.mm-border-light-green400,
.mm-hover-border-light-green400:hover {
  border-color: #9ccc65 !important;
}
.mm-border-light-green500,
.mm-hover-border-light-green500:hover {
  border-color: #8bc34a !important;
}
.mm-border-light-green600,
.mm-hover-border-light-green600:hover {
  border-color: #7cb342 !important;
}
.mm-border-light-green700,
.mm-hover-border-light-green700:hover {
  border-color: #689f38 !important;
}
.mm-border-light-green800,
.mm-hover-border-light-green800:hover {
  border-color: #558b2f !important;
}
.mm-border-light-green900,
.mm-hover-border-light-green900:hover {
  border-color: #33691e !important;
}

.mm-border-light-greenA100,
.mm-hover-border-light-greenA100:hover {
  border-color: #ccff90 !important;
}
.mm-border-light-greenA200,
.mm-hover-border-light-greenA200:hover {
  border-color: #b2ff59 !important;
}
.mm-border-light-greenA400,
.mm-hover-border-light-greenA400:hover {
  border-color: #76ff03 !important;
}
.mm-border-light-greenA700,
.mm-hover-border-light-greenA700:hover {
  border-color: #64dd17 !important;
}

.mm-border-lime50,
.mm-hover-border-lime50:hover {
  border-color: #f9fbe7 !important;
}
.mm-border-lime100,
.mm-hover-border-lime100:hover {
  border-color: #f0f4c3 !important;
}
.mm-border-lime200,
.mm-hover-border-lime200:hover {
  border-color: #e6ee9c !important;
}
.mm-border-lime300,
.mm-hover-border-lime300:hover {
  border-color: #dce775 !important;
}
.mm-border-lime400,
.mm-hover-border-lime400:hover {
  border-color: #d4e157 !important;
}
.mm-border-lime500,
.mm-hover-border-lime500:hover {
  border-color: #cddc39 !important;
}
.mm-border-lime600,
.mm-hover-border-lime600:hover {
  border-color: #c0ca33 !important;
}
.mm-border-lime700,
.mm-hover-border-lime700:hover {
  border-color: #afb42b !important;
}
.mm-border-lime800,
.mm-hover-border-lime800:hover {
  border-color: #9e9d24 !important;
}
.mm-border-lime900,
.mm-hover-border-lime900:hover {
  border-color: #827717 !important;
}

.mm-border-limeA100,
.mm-hover-border-limeA100:hover {
  border-color: #f4ff81 !important;
}
.mm-border-limeA200,
.mm-hover-border-limeA200:hover {
  border-color: #eeff41 !important;
}
.mm-border-limeA400,
.mm-hover-border-limeA400:hover {
  border-color: #c6ff00 !important;
}
.mm-border-limeA700,
.mm-hover-border-limeA700:hover {
  border-color: #aeea00 !important;
}

.mm-border-yellow50,
.mm-hover-border-yellow50:hover {
  border-color: #fffde7 !important;
}
.mm-border-yellow100,
.mm-hover-border-yellow100:hover {
  border-color: #fff9c4 !important;
}
.mm-border-yellow200,
.mm-hover-border-yellow200:hover {
  border-color: #fff59d !important;
}
.mm-border-yellow300,
.mm-hover-border-yellow300:hover {
  border-color: #fff176 !important;
}
.mm-border-yellow400,
.mm-hover-border-yellow400:hover {
  border-color: #ffee58 !important;
}
.mm-border-yellow500,
.mm-hover-border-yellow500:hover {
  border-color: #ffeb3b !important;
}
.mm-border-yellow600,
.mm-hover-border-yellow600:hover {
  border-color: #fdd835 !important;
}
.mm-border-yellow700,
.mm-hover-border-yellow700:hover {
  border-color: #fbc02d !important;
}
.mm-border-yellow800,
.mm-hover-border-yellow800:hover {
  border-color: #f9a825 !important;
}
.mm-border-yellow900,
.mm-hover-border-yellow900:hover {
  border-color: #f57f17 !important;
}

.mm-border-yellowA100,
.mm-hover-border-yellowA100:hover {
  border-color: #ffff8d !important;
}
.mm-border-yellowA200,
.mm-hover-border-yellowA200:hover {
  border-color: #ffff00 !important;
}
.mm-border-yellowA400,
.mm-hover-border-yellowA400:hover {
  border-color: #ffea00 !important;
}
.mm-border-yellowA700,
.mm-hover-border-yellowA700:hover {
  border-color: #ffd600 !important;
}

.mm-border-amber50,
.mm-hover-border-amber50:hover {
  border-color: #fff8e1 !important;
}
.mm-border-amber100,
.mm-hover-border-amber100:hover {
  border-color: #ffecb3 !important;
}
.mm-border-amber200,
.mm-hover-border-amber200:hover {
  border-color: #ffe082 !important;
}
.mm-border-amber300,
.mm-hover-border-amber300:hover {
  border-color: #ffd54f !important;
}
.mm-border-amber400,
.mm-hover-border-amber400:hover {
  border-color: #ffca28 !important;
}
.mm-border-amber500,
.mm-hover-border-amber500:hover {
  border-color: #ffc107 !important;
}
.mm-border-amber600,
.mm-hover-border-amber600:hover {
  border-color: #ffb300 !important;
}
.mm-border-amber700,
.mm-hover-border-amber700:hover {
  border-color: #ffa000 !important;
}
.mm-border-amber800,
.mm-hover-border-amber800:hover {
  border-color: #ff8f00 !important;
}
.mm-border-amber900,
.mm-hover-border-amber900:hover {
  border-color: #ff6f00 !important;
}

.mm-border-amberA100,
.mm-hover-border-amberA100:hover {
  border-color: #ffe57f !important;
}
.mm-border-amberA200,
.mm-hover-border-amberA200:hover {
  border-color: #ffd740 !important;
}
.mm-border-amberA400,
.mm-hover-border-amberA400:hover {
  border-color: #ffc400 !important;
}
.mm-border-amberA700,
.mm-hover-border-amberA700:hover {
  border-color: #ffab00 !important;
}

.mm-border-orange50,
.mm-hover-border-orange50:hover {
  border-color: #fff3e0 !important;
}
.mm-border-orange100,
.mm-hover-border-orange100:hover {
  border-color: #ffe0b2 !important;
}
.mm-border-orange200,
.mm-hover-border-orange200:hover {
  border-color: #ffcc80 !important;
}
.mm-border-orange300,
.mm-hover-border-orange300:hover {
  border-color: #ffb74d !important;
}
.mm-border-orange400,
.mm-hover-border-orange400:hover {
  border-color: #ffa726 !important;
}
.mm-border-orange500,
.mm-hover-border-orange500:hover {
  border-color: #ff9800 !important;
}
.mm-border-orange600,
.mm-hover-border-orange600:hover {
  border-color: #fb8c00 !important;
}
.mm-border-orange700,
.mm-hover-border-orange700:hover {
  border-color: #f57c00 !important;
}
.mm-border-orange800,
.mm-hover-border-orange800:hover {
  border-color: #ef6c00 !important;
}
.mm-border-orange900,
.mm-hover-border-orange900:hover {
  border-color: #e65100 !important;
}

.mm-border-orangeA100,
.mm-hover-border-orangeA100:hover {
  border-color: #ffd180 !important;
}
.mm-border-orangeA200,
.mm-hover-border-orangeA200:hover {
  border-color: #ffab40 !important;
}
.mm-border-orangeA400,
.mm-hover-border-orangeA400:hover {
  border-color: #ff9100 !important;
}
.mm-border-orangeA700,
.mm-hover-border-orangeA700:hover {
  border-color: #ff6d00 !important;
}

.mm-border-deeporange50,
.mm-hover-border-deeporange50:hover {
  border-color: #fbe9e7 !important;
}
.mm-border-deeporange100,
.mm-hover-border-deeporange100:hover {
  border-color: #ffccbc !important;
}
.mm-border-deeporange200,
.mm-hover-border-deeporange200:hover {
  border-color: #ffab91 !important;
}
.mm-border-deeporange300,
.mm-hover-border-deeporange300:hover {
  border-color: #ff8a65 !important;
}
.mm-border-deeporange400,
.mm-hover-border-deeporange400:hover {
  border-color: #ff7043 !important;
}
.mm-border-deeporange500,
.mm-hover-border-deeporange500:hover {
  border-color: #ff5722 !important;
}
.mm-border-deeporange600,
.mm-hover-border-deeporange600:hover {
  border-color: #f4511e !important;
}
.mm-border-deeporange700,
.mm-hover-border-deeporange700:hover {
  border-color: #e64a19 !important;
}
.mm-border-deeporange800,
.mm-hover-border-deeporange800:hover {
  border-color: #d84315 !important;
}
.mm-border-deeporange900,
.mm-hover-border-deeporange900:hover {
  border-color: #bf360c !important;
}

.mm-border-deeporangeA100,
.mm-hover-border-deeporangeA100:hover {
  border-color: #ff9e80 !important;
}
.mm-border-deeporangeA200,
.mm-hover-border-deeporangeA200:hover {
  border-color: #ff6e40 !important;
}
.mm-border-deeporangeA400,
.mm-hover-border-deeporangeA400:hover {
  border-color: #ff3d00 !important;
}
.mm-border-deeporangeA700,
.mm-hover-border-deeporangeA700:hover {
  border-color: #dd2c00 !important;
}

.mm-border-brown50,
.mm-hover-border-brown50:hover {
  border-color: #efebe9 !important;
}
.mm-border-brown100,
.mm-hover-border-brown100:hover {
  border-color: #d7ccc8 !important;
}
.mm-border-brown200,
.mm-hover-border-brown200:hover {
  border-color: #bcaaa4 !important;
}
.mm-border-brown300,
.mm-hover-border-brown300:hover {
  border-color: #a1887f !important;
}
.mm-border-brown400,
.mm-hover-border-brown400:hover {
  border-color: #8d6e63 !important;
}
.mm-border-brown500,
.mm-hover-border-brown500:hover {
  border-color: #795548 !important;
}
.mm-border-brown600,
.mm-hover-border-brown600:hover {
  border-color: #6d4c41 !important;
}
.mm-border-brown700,
.mm-hover-border-brown700:hover {
  border-color: #5d4037 !important;
}
.mm-border-brown800,
.mm-hover-border-brown800:hover {
  border-color: #4e342e !important;
}
.mm-border-brown900,
.mm-hover-border-brown900:hover {
  border-color: #3e2723 !important;
}

.mm-border-grey50,
.mm-hover-border-grey50:hover {
  border-color: #fafafa !important;
}
.mm-border-grey100,
.mm-hover-border-grey100:hover {
  border-color: #f5f5f5 !important;
}
.mm-border-grey200,
.mm-hover-border-grey200:hover {
  border-color: #eeeeee !important;
}
.mm-border-grey300,
.mm-hover-border-grey300:hover {
  border-color: #e0e0e0 !important;
}
.mm-border-grey400,
.mm-hover-border-grey400:hover {
  border-color: #bdbdbd !important;
}
.mm-border-grey500,
.mm-hover-border-grey500:hover {
  border-color: #9e9e9e !important;
}
.mm-border-grey600,
.mm-hover-border-grey600:hover {
  border-color: #757575 !important;
}
.mm-border-grey700,
.mm-hover-border-grey700:hover {
  border-color: #616161 !important;
}
.mm-border-grey800,
.mm-hover-border-grey800:hover {
  border-color: #424242 !important;
}
.mm-border-grey900,
.mm-hover-border-grey900:hover {
  border-color: #212121 !important;
}

.mm-border-bluegrey50,
.mm-hover-border-bluegrey50:hover {
  border-color: #eceff1 !important;
}
.mm-border-bluegrey100,
.mm-hover-border-bluegrey100:hover {
  border-color: #cfd8dc !important;
}
.mm-border-bluegrey200,
.mm-hover-border-bluegrey200:hover {
  border-color: #b0bec5 !important;
}
.mm-border-bluegrey300,
.mm-hover-border-bluegrey300:hover {
  border-color: #90a4ae !important;
}
.mm-border-bluegrey400,
.mm-hover-border-bluegrey400:hover {
  border-color: #78909c !important;
}
.mm-border-bluegrey500,
.mm-hover-border-bluegrey500:hover {
  border-color: #607d8b !important;
}
.mm-border-bluegrey600,
.mm-hover-border-bluegrey600:hover {
  border-color: #546e7a !important;
}
.mm-border-bluegrey700,
.mm-hover-border-bluegrey700:hover {
  border-color: #455a64 !important;
}
.mm-border-bluegrey800,
.mm-hover-border-bluegrey800:hover {
  border-color: #37474f !important;
}
.mm-border-bluegrey900,
.mm-hover-border-bluegrey900:hover {
  border-color: #263238 !important;
}

.mm-border-black,
.mm-hover-border-black:hover {
  border-color: #000 !important;
}
.mm-border-white,
.mm-hover-border-white:hover {
  border-color: #fff !important;
}

.mm-border-transparent,
.mm-hover-border-transparent:hover {
  border-color: transparent !important;
}

.mm-border-default,
.mm-hover-border-default:hover {
  border-color: #e0e0e0 !important;
}

.mm-border-inherit,
.mm-hover-border-inherit:hover {
  border-color: inherit !important;
}

.mm-border-initial,
.mm-hover-border-initial:hover {
  border-color: initial !important;
}

.mm-border-unset,
.mm-hover-border-unset:hover {
  border-color: unset !important;
}

.mm-border-solid,
.mm-hover-border-solid:hover {
  border-style: solid !important;
}

.mm-border-dotted,
.mm-hover-border-dotted:hover {
  border-style: dotted !important;
}

.mm-border-dashed,
.mm-hover-border-dashed:hover {
  border-style: dashed !important;
}

.mm-border-double,
.mm-hover-border-double:hover {
  border-style: double !important;
}

.mm-border-groove,
.mm-hover-border-groove:hover {
  border-style: groove !important;
}

.mm-border-ridge,
.mm-hover-border-ridge:hover {
  border-style: ridge !important;
}

.mm-border-inset,
.mm-hover-border-inset:hover {
  border-style: inset !important;
}

.mm-border-outset,
.mm-hover-border-outset:hover {
  border-style: outset !important;
}

.mm-border-hidden,
.mm-hover-border-hidden:hover {
  border-style: hidden !important;
}

.mm-border-solid,
.mm-hover-border-solid:hover {
  border-style: solid !important;
}

.mm-border-dotted,
.mm-hover-border-dotted:hover {
  border-style: dotted !important;
}

.mm-border-dashed,
.mm-hover-border-dashed:hover {
  border-style: dashed !important;
}

.mm-border-double,
.mm-hover-border-double:hover {
  border-style: double !important;
}

.mm-border-groove,
.mm-hover-border-groove:hover {
  border-style: groove !important;
}

.mm-border-ridge,
.mm-hover-border-ridge:hover {
  border-style: ridge !important;
}

.mm-border-inset,
.mm-hover-border-inset:hover {
  border-style: inset !important;
}

.mm-border-outset,
.mm-hover-border-outset:hover {
  border-style: outset !important;
}

.mm-border-hidden,
.mm-hover-border-hidden:hover {
  border-style: hidden !important;
}

.mm-border-solid,
.mm-hover-border-solid:hover {
  border-style: solid !important;
}

.mm-border-dotted,
.mm-hover-border-dotted:hover {
  border-style: dotted !important;
}

.mm-border-dashed,
.mm-hover-border-dashed:hover {
  border-style: dashed !important;
}

.mm-border-double,
.mm-hover-border-double:hover {
  border-style: double !important;
}

    /* Tex Colors */
    /* Text Color &  Hover States */
.mm-text-red50,
.mm-hover-text-red50:hover {
  color: #ffebee !important;
}
.mm-text-red100,
.mm-hover-text-red100:hover {
  color: #ffcdd2 !important;
}
.mm-text-red200,
.mm-hover-text-red200:hover {
  color: #ef9a9a !important;
}
.mm-text-red300,
.mm-hover-text-red300:hover {
  color: #e57373 !important;
}
.mm-text-red400,
.mm-hover-text-red400:hover {
  color: #ef5350 !important;
}
.mm-text-red500,
.mm-hover-text-red500:hover {
  color: #f44336 !important;
}
.mm-text-red600,
.mm-hover-text-red600:hover {
  color: #e53935 !important;
}
.mm-text-red700,
.mm-hover-text-red700:hover {
  color: #d32f2f !important;
}
.mm-text-red800,
.mm-hover-text-red800:hover {
  color: #c62828 !important;
}
.mm-text-red900,
.mm-hover-text-red900:hover {
  color: #b71c1c !important;
}
.mm-text-red,
.mm-hover-text-red:hover {
  color: #f44336 !important;
}
.mm-text-pink50,
.mm-hover-text-pink50:hover {
  color: #fce4ec !important;
}
.mm-text-pink100,
.mm-hover-text-pink100:hover {
  color: #f8bbd0 !important;
}
.mm-text-pink200,
.mm-hover-text-pink200:hover {
  color: #f48fb1 !important;
}
.mm-text-pink300,
.mm-hover-text-pink300:hover {
  color: #f06292 !important;
}
.mm-text-pink400,
.mm-hover-text-pink400:hover {
  color: #ec407a !important;
}
.mm-text-pink500,
.mm-hover-text-pink500:hover {
  color: #e91e63 !important;
}
.mm-text-pink600,
.mm-hover-text-pink600:hover {
  color: #d81b60 !important;
}
.mm-text-pink700,
.mm-hover-text-pink700:hover {
  color: #c2185b !important;
}
.mm-text-pink800,
.mm-hover-text-pink800:hover {
  color: #ad1457 !important;
}
.mm-text-pink900,
.mm-hover-text-pink900:hover {
  color: #880e4f !important;
}
.mm-text-pink,
.mm-hover-text-pink:hover {
  color: #e91e63 !important;
}
.mm-text-purple50,
.mm-hover-text-purple50:hover {
  color: #f3e5f5 !important;
}
.mm-text-purple100,
.mm-hover-text-purple100:hover {
  color: #e1bee7 !important;
}
.mm-text-purple200,
.mm-hover-text-purple200:hover {
  color: #ce93d8 !important;
}
.mm-text-purple300,
.mm-hover-text-purple300:hover {
  color: #ba68c8 !important;
}
.mm-text-purple400,
.mm-hover-text-purple400:hover {
  color: #ab47bc !important;
}
.mm-text-purple500,
.mm-hover-text-purple500:hover {
  color: #9c27b0 !important;
}
.mm-text-purple600,
.mm-hover-text-purple600:hover {
  color: #8e24aa !important;
}
.mm-text-purple700,
.mm-hover-text-purple700:hover {
  color: #7b1fa2 !important;
}
.mm-text-purple800,
.mm-hover-text-purple800:hover {
  color: #6a1b9a !important;
}
.mm-text-purple900,
.mm-hover-text-purple900:hover {
  color: #4a148c !important;
}
.mm-text-purple,
.mm-hover-text-purple:hover {
  color: #9c27b0 !important;
}
.mm-text-deepPurple50,
.mm-hover-text-deepPurple50:hover {
  color: #ede7f6 !important;
}
.mm-text-deepPurple100,
.mm-hover-text-deepPurple100:hover {
  color: #d1c4e9 !important;
}
.mm-text-deepPurple200,
.mm-hover-text-deepPurple200:hover {
  color: #b39ddb !important;
}
.mm-text-deepPurple300,
.mm-hover-text-deepPurple300:hover {
  color: #9575cd !important;
}
.mm-text-deepPurple400,
.mm-hover-text-deepPurple400:hover {
  color: #7e57c2 !important;
}
.mm-text-deepPurple500,
.mm-hover-text-deepPurple500:hover {
  color: #673ab7 !important;
}
.mm-text-deepPurple600,
.mm-hover-text-deepPurple600:hover {
  color: #5e35b1 !important;
}
.mm-text-deepPurple700,
.mm-hover-text-deepPurple700:hover {
  color: #512da8 !important;
}
.mm-text-deepPurple800,
.mm-hover-text-deepPurple800:hover {
  color: #4527a0 !important;
}
.mm-text-deepPurple900,
.mm-hover-text-deepPurple900:hover {
  color: #311b92 !important;
}
.mm-text-deepPurple,
.mm-hover-text-deepPurple:hover {
  color: #673ab7 !important;
}
.mm-text-indigo50,
.mm-hover-text-indigo50:hover {
  color: #e8eaf6 !important;
}
.mm-text-indigo100,
.mm-hover-text-indigo100:hover {
  color: #c5cae9 !important;
}
.mm-text-indigo200,
.mm-hover-text-indigo200:hover {
  color: #9fa8da !important;
}
.mm-text-indigo300,
.mm-hover-text-indigo300:hover {
  color: #7986cb !important;
}
.mm-text-indigo400,
.mm-hover-text-indigo400:hover {
  color: #5c6bc0 !important;
}
.mm-text-indigo500,
.mm-hover-text-indigo500:hover {
  color: #3f51b5 !important;
}
.mm-text-indigo600,
.mm-hover-text-indigo600:hover {
  color: #3949ab !important;
}
.mm-text-indigo700,
.mm-hover-text-indigo700:hover {
  color: #303f9f !important;
}
.mm-text-indigo800,
.mm-hover-text-indigo800:hover {
  color: #283593 !important;
}
.mm-text-indigo900,
.mm-hover-text-indigo900:hover {
  color: #1a237e !important;
}
.mm-text-indigo,
.mm-hover-text-indigo:hover {
  color: #3f51b5 !important;
}
.mm-text-blue50,
.mm-hover-text-blue50:hover {
  color: #e3f2fd !important;
}
.mm-text-blue100,
.mm-hover-text-blue100:hover {
  color: #bbdefb !important;
}
.mm-text-blue200,
.mm-hover-text-blue200:hover {
  color: #90caf9 !important;
}
.mm-text-blue300,
.mm-hover-text-blue300:hover {
  color: #64b5f6 !important;
}
.mm-text-blue400,
.mm-hover-text-blue400:hover {
  color: #42a5f5 !important;
}
.mm-text-blue500,
.mm-hover-text-blue500:hover {
  color: #2196f3 !important;
}
.mm-text-blue600,
.mm-hover-text-blue600:hover {
  color: #1e88e5 !important;
}
.mm-text-blue700,
.mm-hover-text-blue700:hover {
  color: #1976d2 !important;
}
.mm-text-blue800,
.mm-hover-text-blue800:hover {
  color: #1565c0 !important;
}
.mm-text-blue900,
.mm-hover-text-blue900:hover {
  color: #0d47a1 !important;
}
.mm-text-blue,
.mm-hover-text-blue:hover {
  color: #2196f3 !important;
}
.mm-text-lightBlue50,
.mm-hover-text-lightBlue50:hover {
  color: #e1f5fe !important;
}
.mm-text-lightBlue100,
.mm-hover-text-lightBlue100:hover {
  color: #b3e5fc !important;
}
.mm-text-lightBlue200,
.mm-hover-text-lightBlue200:hover {
  color: #81d4fa !important;
}
.mm-text-lightBlue300,
.mm-hover-text-lightBlue300:hover {
  color: #4fc3f7 !important;
}
.mm-text-lightBlue400,
.mm-hover-text-lightBlue400:hover {
  color: #29b6f6 !important;
}
.mm-text-lightBlue500,
.mm-hover-text-lightBlue500:hover {
  color: #03a9f4 !important;
}
.mm-text-lightBlue600,
.mm-hover-text-lightBlue600:hover {
  color: #039be5 !important;
}
.mm-text-lightBlue700,
.mm-hover-text-lightBlue700:hover {
  color: #0288d1 !important;
}
.mm-text-lightBlue800,
.mm-hover-text-lightBlue800:hover {
  color: #0277bd !important;
}
.mm-text-lightBlue900,
.mm-hover-text-lightBlue900:hover {
  color: #01579b !important;
}
.mm-text-lightBlue,
.mm-hover-text-lightBlue:hover {
  color: #03a9f4 !important;
}
.mm-text-cyan50,
.mm-hover-text-cyan50:hover {
  color: #e0f7fa !important;
}
.mm-text-cyan100,
.mm-hover-text-cyan100:hover {
  color: #b2ebf2 !important;
}
.mm-text-cyan200,
.mm-hover-text-cyan200:hover {
  color: #80deea !important;
}
.mm-text-cyan300,
.mm-hover-text-cyan300:hover {
  color: #4dd0e1 !important;
}
.mm-text-cyan400,
.mm-hover-text-cyan400:hover {
  color: #26c6da !important;
}
.mm-text-cyan500,
.mm-hover-text-cyan500:hover {
  color: #00bcd4 !important;
}
.mm-text-cyan600,
.mm-hover-text-cyan600:hover {
  color: #00acc1 !important;
}
.mm-text-cyan700,
.mm-hover-text-cyan700:hover {
  color: #0097a7 !important;
}
.mm-text-cyan800,
.mm-hover-text-cyan800:hover {
  color: #00838f !important;
}
.mm-text-cyan900,
.mm-hover-text-cyan900:hover {
  color: #006064 !important;
}
.mm-text-cyan,
.mm-hover-text-cyan:hover {
  color: #00bcd4 !important;
}
.mm-text-teal50,
.mm-hover-text-teal50:hover {
  color: #e0f2f1 !important;
}
.mm-text-teal100,
.mm-hover-text-teal100:hover {
  color: #b2dfdb !important;
}
.mm-text-teal200,
.mm-hover-text-teal200:hover {
  color: #80cbc4 !important;
}
.mm-text-teal300,
.mm-hover-text-teal300:hover {
  color: #4db6ac !important;
}
.mm-text-teal400,
.mm-hover-text-teal400:hover {
  color: #26a69a !important;
}
.mm-text-teal500,
.mm-hover-text-teal500:hover {
  color: #009688 !important;
}
.mm-text-teal600,
.mm-hover-text-teal600:hover {
  color: #00897b !important;
}
.mm-text-teal700,
.mm-hover-text-teal700:hover {
  color: #00796b !important;
}
.mm-text-teal800,
.mm-hover-text-teal800:hover {
  color: #00695c !important;
}
.mm-text-teal900,
.mm-hover-text-teal900:hover {
  color: #004d40 !important;
}
.mm-text-teal,
.mm-hover-text-teal:hover {
  color: #009688 !important;
}
.mm-text-green50,
.mm-hover-text-green50:hover {
  color: #e8f5e9 !important;
}
.mm-text-green100,
.mm-hover-text-green100:hover {
  color: #c8e6c9 !important;
}
.mm-text-green200,
.mm-hover-text-green200:hover {
  color: #a5d6a7 !important;
}
.mm-text-green300,
.mm-hover-text-green300:hover {
  color: #81c784 !important;
}
.mm-text-green400,
.mm-hover-text-green400:hover {
  color: #66bb6a !important;
}
.mm-text-green500,
.mm-hover-text-green500:hover {
  color: #4caf50 !important;
}
.mm-text-green600,
.mm-hover-text-green600:hover {
  color: #43a047 !important;
}
.mm-text-green700,
.mm-hover-text-green700:hover {
  color: #388e3c !important;
}
.mm-text-green800,
.mm-hover-text-green800:hover {
  color: #2e7d32 !important;
}
.mm-text-green900,
.mm-hover-text-green900:hover {
  color: #1b5e20 !important;
}
.mm-text-green,
.mm-hover-text-green:hover {
  color: #4caf50 !important;
}
.mm-text-lightGreen50,
.mm-hover-text-lightGreen50:hover {
  color: #f1f8e9 !important;
}
.mm-text-lightGreen100,
.mm-hover-text-lightGreen100:hover {
  color: #dcedc8 !important;
}
.mm-text-lightGreen200,
.mm-hover-text-lightGreen200:hover {
  color: #c5e1a5 !important;
}
.mm-text-lightGreen300,
.mm-hover-text-lightGreen300:hover {
  color: #aed581 !important;
}
.mm-text-lightGreen400,
.mm-hover-text-lightGreen400:hover {
  color: #9ccc65 !important;
}
.mm-text-lightGreen500,
.mm-hover-text-lightGreen500:hover {
  color: #8bc34a !important;
}
.mm-text-lightGreen600,
.mm-hover-text-lightGreen600:hover {
  color: #7cb342 !important;
}
.mm-text-lightGreen700,
.mm-hover-text-lightGreen700:hover {
  color: #689f38 !important;
}
.mm-text-lightGreen800,
.mm-hover-text-lightGreen800:hover {
  color: #558b2f !important;
}
.mm-text-lightGreen900,
.mm-hover-text-lightGreen900:hover {
  color: #33691e !important;
}
.mm-text-lightGreen,
.mm-hover-text-lightGreen:hover {
  color: #8bc34a !important;
}
.mm-text-lime50,
.mm-hover-text-lime50:hover {
  color: #f9fbe7 !important;
}
.mm-text-lime100,
.mm-hover-text-lime100:hover {
  color: #f0f4c3 !important;
}
.mm-text-lime200,
.mm-hover-text-lime200:hover {
  color: #e6ee9c !important;
}
.mm-text-lime300,
.mm-hover-text-lime300:hover {
  color: #dce775 !important;
}
.mm-text-lime400,
.mm-hover-text-lime400:hover {
  color: #d4e157 !important;
}
.mm-text-lime500,
.mm-hover-text-lime500:hover {
  color: #cddc39 !important;
}
.mm-text-lime600,
.mm-hover-text-lime600:hover {
  color: #c0ca33 !important;
}
.mm-text-lime700,
.mm-hover-text-lime700:hover {
  color: #afb42b !important;
}
.mm-text-lime800,
.mm-hover-text-lime800:hover {
  color: #9e9d24 !important;
}
.mm-text-lime900,
.mm-hover-text-lime900:hover {
  color: #827717 !important;
}
.mm-text-lime,
.mm-hover-text-lime:hover {
  color: #cddc39 !important;
}
.mm-text-yellow50,
.mm-hover-text-yellow50:hover {
  color: #fffde7 !important;
}
.mm-text-yellow100,
.mm-hover-text-yellow100:hover {
  color: #fff9c4 !important;
}
.mm-text-yellow200,
.mm-hover-text-yellow200:hover {
  color: #fff59d !important;
}
.mm-text-yellow300,
.mm-hover-text-yellow300:hover {
  color: #fff176 !important;
}
.mm-text-yellow400,
.mm-hover-text-yellow400:hover {
  color: #ffee58 !important;
}
.mm-text-yellow500,
.mm-hover-text-yellow500:hover {
  color: #ffeb3b !important;
}
.mm-text-yellow600,
.mm-hover-text-yellow600:hover {
  color: #fdd835 !important;
}
.mm-text-yellow700,
.mm-hover-text-yellow700:hover {
  color: #fbc02d !important;
}
.mm-text-yellow800,
.mm-hover-text-yellow800:hover {
  color: #f9a825 !important;
}
.mm-text-yellow900,
.mm-hover-text-yellow900:hover {
  color: #f57f17 !important;
}
.mm-text-yellow,
.mm-hover-text-yellow:hover {
  color: #ffeb3b !important;
}
.mm-text-amber50,
.mm-hover-text-amber50:hover {
  color: #fff8e1 !important;
}
.mm-text-amber100,
.mm-hover-text-amber100:hover {
  color: #ffecb3 !important;
}
.mm-text-amber200,
.mm-hover-text-amber200:hover {
  color: #ffe082 !important;
}
.mm-text-amber300,
.mm-hover-text-amber300:hover {
  color: #ffd54f !important;
}
.mm-text-amber400,
.mm-hover-text-amber400:hover {
  color: #ffca28 !important;
}
.mm-text-amber500,
.mm-hover-text-amber500:hover {
  color: #ffc107 !important;
}
.mm-text-amber600,
.mm-hover-text-amber600:hover {
  color: #ffb300 !important;
}
.mm-text-amber700,
.mm-hover-text-amber700:hover {
  color: #ffa000 !important;
}
.mm-text-amber800,
.mm-hover-text-amber800:hover {
  color: #ff8f00 !important;
}
.mm-text-amber900,
.mm-hover-text-amber900:hover {
  color: #ff6f00 !important;
}
.mm-text-amber,
.mm-hover-text-amber:hover {
  color: #ffc107 !important;
}
.mm-text-orange50,
.mm-hover-text-orange50:hover {
  color: #fff3e0 !important;
}
.mm-text-orange100,
.mm-hover-text-orange100:hover {
  color: #ffe0b2 !important;
}
.mm-text-orange200,
.mm-hover-text-orange200:hover {
  color: #ffcc80 !important;
}
.mm-text-orange300,
.mm-hover-text-orange300:hover {
  color: #ffb74d !important;
}
.mm-text-orange400,
.mm-hover-text-orange400:hover {
  color: #ffa726 !important;
}
.mm-text-orange500,
.mm-hover-text-orange500:hover {
  color: #ff9800 !important;
}
.mm-text-orange600,
.mm-hover-text-orange600:hover {
  color: #fb8c00 !important;
}
.mm-text-orange700,
.mm-hover-text-orange700:hover {
  color: #f57c00 !important;
}
.mm-text-orange800,
.mm-hover-text-orange800:hover {
  color: #ef6c00 !important;
}
.mm-text-orange900,
.mm-hover-text-orange900:hover {
  color: #e65100 !important;
}
.mm-text-orange,
.mm-hover-text-orange:hover {
  color: #ff9800 !important;
}
.mm-text-deepOrange50,
.mm-hover-text-deepOrange50:hover {
  color: #fbe9e7 !important;
}
.mm-text-deepOrange100,
.mm-hover-text-deepOrange100:hover {
  color: #ffccbc !important;
}
.mm-text-deepOrange200,
.mm-hover-text-deepOrange200:hover {
  color: #ffab91 !important;
}
.mm-text-deepOrange300,
.mm-hover-text-deepOrange300:hover {
  color: #ff8a65 !important;
}
.mm-text-deepOrange400,
.mm-hover-text-deepOrange400:hover {
  color: #ff7043 !important;
}
.mm-text-deepOrange500,
.mm-hover-text-deepOrange500:hover {
  color: #ff5722 !important;
}
.mm-text-deepOrange600,
.mm-hover-text-deepOrange600:hover {
  color: #f4511e !important;
}
.mm-text-deepOrange700,
.mm-hover-text-deepOrange700:hover {
  color: #e64a19 !important;
}
.mm-text-deepOrange800,
.mm-hover-text-deepOrange800:hover {
  color: #d84315 !important;
}
.mm-text-deepOrange900,
.mm-hover-text-deepOrange900:hover {
  color: #bf360c !important;
}
.mm-text-deepOrange,
.mm-hover-text-deepOrange:hover {
  color: #ff5722 !important;
}
.mm-text-brown50,
.mm-hover-text-brown50:hover {
  color: #efebe9 !important;
}
.mm-text-brown100,
.mm-hover-text-brown100:hover {
  color: #d7ccc8 !important;
}
.mm-text-brown200,
.mm-hover-text-brown200:hover {
  color: #bcaaa4 !important;
}
.mm-text-brown300,
.mm-hover-text-brown300:hover {
  color: #a1887f !important;
}
.mm-text-brown400,
.mm-hover-text-brown400:hover {
  color: #8d6e63 !important;
}
.mm-text-brown500,
.mm-hover-text-brown500:hover {
  color: #795548 !important;
}
.mm-text-brown600,
.mm-hover-text-brown600:hover {
  color: #6d4c41 !important;
}
.mm-text-brown700,
.mm-hover-text-brown700:hover {
  color: #5d4037 !important;
}
.mm-text-brown800,
.mm-hover-text-brown800:hover {
  color: #4e342e !important;
}
.mm-text-brown900,
.mm-hover-text-brown900:hover {
  color: #3e2723 !important;
}
.mm-text-brown,
.mm-hover-text-brown:hover {
  color: #795548 !important;
}
.mm-text-grey50,
.mm-hover-text-grey50:hover {
  color: #fafafa !important;
}
.mm-text-grey100,
.mm-hover-text-grey100:hover {
  color: #f5f5f5 !important;
}
.mm-text-grey200,
.mm-hover-text-grey200:hover {
  color: #eeeeee !important;
}
.mm-text-grey300,
.mm-hover-text-grey300:hover {
  color: #e0e0e0 !important;
}
.mm-text-grey400,
.mm-hover-text-grey400:hover {
  color: #bdbdbd !important;
}
.mm-text-grey500,
.mm-hover-text-grey500:hover {
  color: #9e9e9e !important;
}
.mm-text-grey600,
.mm-hover-text-grey600:hover {
  color: #757575 !important;
}
.mm-text-grey700,
.mm-hover-text-grey700:hover {
  color: #616161 !important;
}
.mm-text-grey800,
.mm-hover-text-grey800:hover {
  color: #424242 !important;
}
.mm-text-grey900,
.mm-hover-text-grey900:hover {
  color: #212121 !important;
}
.mm-text-grey,
.mm-hover-text-grey:hover {
  color: #9e9e9e !important;
}
.mm-text-blueGrey50,
.mm-hover-text-blueGrey50:hover {
  color: #eceff1 !important;
}
.mm-text-blueGrey100,
.mm-hover-text-blueGrey100:hover {
  color: #cfd8dc !important;
}
.mm-text-blueGrey200,
.mm-hover-text-blueGrey200:hover {
  color: #b0bec5 !important;
}
.mm-text-blueGrey300,
.mm-hover-text-blueGrey300:hover {
  color: #90a4ae !important;
}
.mm-text-blueGrey400,
.mm-hover-text-blueGrey400:hover {
  color: #78909c !important;
}
.mm-text-blueGrey500,
.mm-hover-text-blueGrey500:hover {
  color: #607d8b !important;
}
.mm-text-blueGrey600,
.mm-hover-text-blueGrey600:hover {
  color: #546e7a !important;
}
.mm-text-blueGrey700,
.mm-hover-text-blueGrey700:hover {
  color: #455a64 !important;
}
.mm-text-blueGrey800,
.mm-hover-text-blueGrey800:hover {
  color: #37474f !important;
}
.mm-text-blueGrey900,
.mm-hover-text-blueGrey900:hover {
  color: #263238 !important;
}
.mm-text-blueGrey,
.mm-hover-text-blueGrey:hover {
  color: #607d8b !important;
}
.mm-text-grey,
.mm-hover-text-grey:hover {
  color: #9e9e9e !important;
}
.mm-text-black,
.mm-hover-text-black:hover {
  color: #000000 !important;
}
.mm-text-white,
.mm-hover-text-white:hover {
  color: #ffffff !important;
}
.mm-text-transparent,
.mm-hover-text-transparent:hover {
  color: transparent !important;
}

/* Border & Hover states */

.mm-border-amber,
.mm-hover-border-amber:hover {
  border-color: #ffc107 !important;
}
.mm-border-aqua,
.mm-hover-border-aqua:hover {
  border-color: #00ffff !important;
}
.mm-border-blue,
.mm-hover-border-blue:hover {
  border-color: #2196f3 !important;
}
.mm-border-light-blue,
.mm-hover-border-light-blue:hover {
  border-color: #87ceeb !important;
}
.mm-border-brown,
.mm-hover-border-brown:hover {
  border-color: #795548 !important;
}
.mm-border-cyan,
.mm-hover-border-cyan:hover {
  border-color: #00bcd4 !important;
}
.mm-border-blue-grey,
.mm-hover-border-blue-grey:hover,
.mm-border-blue-gray,
.mm-hover-border-blue-gray:hover {
  border-color: #607d8b !important;
}
.mm-border-green,
.mm-hover-border-green:hover {
  border-color: #4caf50 !important;
}
.mm-border-light-green,
.mm-hover-border-light-green:hover {
  border-color: #8bc34a !important;
}
.mm-border-indigo,
.mm-hover-border-indigo:hover {
  border-color: #3f51b5 !important;
}
.mm-border-khaki,
.mm-hover-border-khaki:hover {
  border-color: #f0e68c !important;
}
.mm-border-lime,
.mm-hover-border-lime:hover {
  border-color: #cddc39 !important;
}
.mm-border-orange,
.mm-hover-border-orange:hover {
  border-color: #ff9800 !important;
}
.mm-border-deep-orange,
.mm-hover-border-deep-orange:hover {
  border-color: #ff5722 !important;
}
.mm-border-pink,
.mm-hover-border-pink:hover {
  border-color: #e91e63 !important;
}
.mm-border-purple,
.mm-hover-border-purple:hover {
  border-color: #9c27b0 !important;
}
.mm-border-deep-purple,
.mm-hover-border-deep-purple:hover {
  border-color: #673ab7 !important;
}
.mm-border-red,
.mm-hover-border-red:hover {
  border-color: #f44336 !important;
}
.mm-border-sand,
.mm-hover-border-sand:hover {
  border-color: #fdf5e6 !important;
}
.mm-border-teal,
.mm-hover-border-teal:hover {
  border-color: #009688 !important;
}
.mm-border-yellow,
.mm-hover-border-yellow:hover {
  border-color: #ffeb3b !important;
}
.mm-border-white,
.mm-hover-border-white:hover {
  border-color: #fff !important;
}
.mm-border-black,
.mm-hover-border-black:hover {
  border-color: #000 !important;
}
.mm-border-grey,
.mm-hover-border-grey:hover,
.mm-border-gray,
.mm-hover-border-gray:hover {
  border-color: #9e9e9e !important;
}
.mm-border-light-grey,
.mm-hover-border-light-grey:hover,
.mm-border-light-gray,
.mm-hover-border-light-gray:hover {
  border-color: #f1f1f1 !important;
}
.mm-border-dark-grey,
.mm-hover-border-dark-grey:hover,
.mm-border-dark-gray,
.mm-hover-border-dark-gray:hover {
  border-color: #616161 !important;
}
.mm-border-pale-red,
.mm-hover-border-pale-red:hover {
  border-color: #ffe7e7 !important;
}
.mm-border-pale-green,
.mm-hover-border-pale-green:hover {
  border-color: #e7ffe7 !important;
}
.mm-border-pale-yellow,
.mm-hover-border-pale-yellow:hover {
  border-color: #ffffcc !important;
}
.mm-border-pale-blue,
.mm-hover-border-pale-blue:hover {
  border-color: #e7ffff !important;
}

.mm-border-red50,
.mm-hover-border-red50:hover {
  border-color: #ffebee !important;
}
.mm-border-red100,
.mm-hover-border-red100:hover {
  border-color: #ffcdd2 !important;
}
.mm-border-red200,
.mm-hover-border-red200:hover {
  border-color: #ef9a9a !important;
}
.mm-border-red300,
.mm-hover-border-red300:hover {
  border-color: #e57373 !important;
}
.mm-border-red400,
.mm-hover-border-red400:hover {
  border-color: #ef5350 !important;
}
.mm-border-red500,
.mm-hover-border-red500:hover {
  border-color: #f44336 !important;
}
.mm-border-red600,
.mm-hover-border-red600:hover {
  border-color: #e53935 !important;
}
.mm-border-red700,
.mm-hover-border-red700:hover {
  border-color: #d32f2f !important;
}
.mm-border-red800,
.mm-hover-border-red800:hover {
  border-color: #c62828 !important;
}
.mm-border-red900,
.mm-hover-border-red900:hover {
  border-color: #b71c1c !important;
}

.mm-border-redA100,
.mm-hover-border-redA100:hover {
  border-color: #ff8a80 !important;
}
.mm-border-redA200,
.mm-hover-border-redA200:hover {
  border-color: #ff5252 !important;
}
.mm-border-redA400,
.mm-hover-border-redA400:hover {
  border-color: #ff1744 !important;
}
.mm-border-redA700,
.mm-hover-border-redA700:hover {
  border-color: #d50000 !important;
}

.mm-border-pink50,
.mm-hover-border-pink50:hover {
  border-color: #fce4ec !important;
} 
.mm-border-pink100,
.mm-hover-border-pink100:hover {
  border-color: #f8bbd0 !important;
}
.mm-border-pink200,
.mm-hover-border-pink200:hover {
  border-color: #f48fb1 !important;
}
.mm-border-pink300,
.mm-hover-border-pink300:hover {
  border-color: #f06292 !important;
}
.mm-border-pink400,
.mm-hover-border-pink400:hover {
  border-color: #ec407a !important;
}
.mm-border-pink500,
.mm-hover-border-pink500:hover {
  border-color: #e91e63 !important;
}
.mm-border-pink600,
.mm-hover-border-pink600:hover {
  border-color: #d81b60 !important;
}
.mm-border-pink700,
.mm-hover-border-pink700:hover {
  border-color: #c2185b !important;
}
.mm-border-pink800,
.mm-hover-border-pink800:hover {
  border-color: #ad1457 !important;
}
.mm-border-pink900,
.mm-hover-border-pink900:hover {
  border-color: #880e4f !important;
}

.mm-border-pinkA100,
.mm-hover-border-pinkA100:hover {
  border-color: #ff80ab !important;
}
.mm-border-pinkA200,
.mm-hover-border-pinkA200:hover {
  border-color: #ff4081 !important;
}
.mm-border-pinkA400,
.mm-hover-border-pinkA400:hover {
  border-color: #f50057 !important;
}
.mm-border-pinkA700,
.mm-hover-border-pinkA700:hover {
  border-color: #c51162 !important;
}

.mm-border-purple50,
.mm-hover-border-purple50:hover {
  border-color: #f3e5f5 !important;
}
.mm-border-purple100,
.mm-hover-border-purple100:hover {
  border-color: #e1bee7 !important;
}
.mm-border-purple200,
.mm-hover-border-purple200:hover {
  border-color: #ce93d8 !important;
}
.mm-border-purple300,
.mm-hover-border-purple300:hover {
  border-color: #ba68c8 !important;
}
.mm-border-purple400,
.mm-hover-border-purple400:hover {
  border-color: #ab47bc !important;
}
.mm-border-purple500,
.mm-hover-border-purple500:hover {
  border-color: #9c27b0 !important;
}
.mm-border-purple600,
.mm-hover-border-purple600:hover {
  border-color: #8e24aa !important;
}
.mm-border-purple700,
.mm-hover-border-purple700:hover {
  border-color: #7b1fa2 !important;
}
.mm-border-purple800,
.mm-hover-border-purple800:hover {
  border-color: #6a1b9a !important;
}
.mm-border-purple900,
.mm-hover-border-purple900:hover {
  border-color: #4a148c !important;
}

.mm-border-purpleA100,
.mm-hover-border-purpleA100:hover {
  border-color: #ea80fc !important;
}
.mm-border-purpleA200,
.mm-hover-border-purpleA200:hover {
  border-color: #e040fb !important;
}
.mm-border-purpleA400,
.mm-hover-border-purpleA400:hover {
  border-color: #d500f9 !important;
}
.mm-border-purpleA700,
.mm-hover-border-purpleA700:hover {
  border-color: #aa00ff !important;
}

.mm-border-deeppurple50,
.mm-hover-border-deeppurple50:hover {
  border-color: #ede7f6 !important;
}
.mm-border-deeppurple100,
.mm-hover-border-deeppurple100:hover {
  border-color: #d1c4e9 !important;
}
.mm-border-deeppurple200,
.mm-hover-border-deeppurple200:hover {
  border-color: #b39ddb !important;
}
.mm-border-deeppurple300,
.mm-hover-border-deeppurple300:hover {
  border-color: #9575cd !important;
}
.mm-border-deeppurple400,
.mm-hover-border-deeppurple400:hover {
  border-color: #7e57c2 !important;
}
.mm-border-deeppurple500,
.mm-hover-border-deeppurple500:hover {
  border-color: #673ab7 !important;
}
.mm-border-deeppurple600,
.mm-hover-border-deeppurple600:hover {
  border-color: #5e35b1 !important;
}
.mm-border-deeppurple700,
.mm-hover-border-deeppurple700:hover {
  border-color: #512da8 !important;
}
.mm-border-deeppurple800,
.mm-hover-border-deeppurple800:hover {
  border-color: #4527a0 !important;
}
.mm-border-deeppurple900,
.mm-hover-border-deeppurple900:hover {
  border-color: #311b92 !important;
}

.mm-border-deeppurpleA100,
.mm-hover-border-deeppurpleA100:hover {
  border-color: #b388ff !important;
}
.mm-border-deeppurpleA200,
.mm-hover-border-deeppurpleA200:hover {
  border-color: #7c4dff !important;
}
.mm-border-deeppurpleA400,
.mm-hover-border-deeppurpleA400:hover {
  border-color: #651fff !important;
}
.mm-border-deeppurpleA700,
.mm-hover-border-deeppurpleA700:hover {
  border-color: #6200ea !important;
}

.mm-border-indigo50,
.mm-hover-border-indigo50:hover {
  border-color: #e8eaf6 !important;
}
.mm-border-indigo100,
.mm-hover-border-indigo100:hover {
  border-color: #c5cae9 !important;
}
.mm-border-indigo200,
.mm-hover-border-indigo200:hover {
  border-color: #9fa8da !important;
}
.mm-border-indigo300,
.mm-hover-border-indigo300:hover {
  border-color: #7986cb !important;
}
.mm-border-indigo400,
.mm-hover-border-indigo400:hover {
  border-color: #5c6bc0 !important;
}
.mm-border-indigo500,
.mm-hover-border-indigo500:hover {
  border-color: #3f51b5 !important;
}
.mm-border-indigo600,
.mm-hover-border-indigo600:hover {
  border-color: #3949ab !important;
}
.mm-border-indigo700,
.mm-hover-border-indigo700:hover {
  border-color: #303f9f !important;
}
.mm-border-indigo800,
.mm-hover-border-indigo800:hover {
  border-color: #283593 !important;
}
.mm-border-indigo900,
.mm-hover-border-indigo900:hover {
  border-color: #1a237e !important;
}

.mm-border-indigoA100,
.mm-hover-border-indigoA100:hover {
  border-color: #8c9eff !important;
}
.mm-border-indigoA200,
.mm-hover-border-indigoA200:hover {
  border-color: #536dfe !important;
}
.mm-border-indigoA400,
.mm-hover-border-indigoA400:hover {
  border-color: #3d5afe !important;
}
.mm-border-indigoA700,
.mm-hover-border-indigoA700:hover {
  border-color: #304ffe !important;
}

.mm-border-blue50,
.mm-hover-border-blue50:hover {
  border-color: #e3f2fd !important;
}
.mm-border-blue100,
.mm-hover-border-blue100:hover {
  border-color: #bbdefb !important;
}
.mm-border-blue200,
.mm-hover-border-blue200:hover {
  border-color: #90caf9 !important;
}
.mm-border-blue300,
.mm-hover-border-blue300:hover {
  border-color: #64b5f6 !important;
}
.mm-border-blue400,
.mm-hover-border-blue400:hover {
  border-color: #42a5f5 !important;
}
.mm-border-blue500,
.mm-hover-border-blue500:hover {
  border-color: #2196f3 !important;
}
.mm-border-blue600,
.mm-hover-border-blue600:hover {
  border-color: #1e88e5 !important;
}
.mm-border-blue700,
.mm-hover-border-blue700:hover {
  border-color: #1976d2 !important;
}
.mm-border-blue800,
.mm-hover-border-blue800:hover {
  border-color: #1565c0 !important;
}
.mm-border-blue900,
.mm-hover-border-blue900:hover {
  border-color: #0d47a1 !important;
}

.mm-border-blueA100,
.mm-hover-border-blueA100:hover {
  border-color: #82b1ff !important;
}
.mm-border-blueA200,
.mm-hover-border-blueA200:hover {
  border-color: #448aff !important;
}
.mm-border-blueA400,
.mm-hover-border-blueA400:hover {
  border-color: #2979ff !important;
}
.mm-border-blueA700,
.mm-hover-border-blueA700:hover {
  border-color: #2962ff !important;
}

.mm-border-lightblue50,
.mm-hover-border-lightblue50:hover {
  border-color: #e1f5fe !important;
}
.mm-border-lightblue100,
.mm-hover-border-lightblue100:hover {
  border-color: #b3e5fc !important;
}
.mm-border-lightblue200,
.mm-hover-border-lightblue200:hover {
  border-color: #81d4fa !important;
}
.mm-border-lightblue300,
.mm-hover-border-lightblue300:hover {
  border-color: #4fc3f7 !important;
}
.mm-border-lightblue400,
.mm-hover-border-lightblue400:hover {
  border-color: #29b6f6 !important;
}
.mm-border-lightblue500,
.mm-hover-border-lightblue500:hover {
  border-color: #03a9f4 !important;
}
.mm-border-lightblue600,
.mm-hover-border-lightblue600:hover {
  border-color: #039be5 !important;
}
.mm-border-lightblue700,
.mm-hover-border-lightblue700:hover {
  border-color: #0288d1 !important;
}
.mm-border-lightblue800,
.mm-hover-border-lightblue800:hover {
  border-color: #0277bd !important;
}
.mm-border-lightblue900,
.mm-hover-border-lightblue900:hover {
  border-color: #01579b !important;
}

.mm-border-lightblueA100,
.mm-hover-border-lightblueA100:hover {
  border-color: #80d8ff !important;
}
.mm-border-lightblueA200,
.mm-hover-border-lightblueA200:hover {
  border-color: #40c4ff !important;
}
.mm-border-lightblueA400,
.mm-hover-border-lightblueA400:hover {
  border-color: #00b0ff !important;
}
.mm-border-lightblueA700,
.mm-hover-border-lightblueA700:hover {
  border-color: #0091ea !important;
}

.mm-border-cyan50,
.mm-hover-border-cyan50:hover {
  border-color: #e0f7fa !important;
}
.mm-border-cyan100,
.mm-hover-border-cyan100:hover {
  border-color: #b2ebf2 !important;
}
.mm-border-cyan200,
.mm-hover-border-cyan200:hover {
  border-color: #80deea !important;
}
.mm-border-cyan300,
.mm-hover-border-cyan300:hover {
  border-color: #4dd0e1 !important;
}
.mm-border-cyan400,
.mm-hover-border-cyan400:hover {
  border-color: #26c6da !important;
}
.mm-border-cyan500,
.mm-hover-border-cyan500:hover {
  border-color: #00bcd4 !important;
}
.mm-border-cyan600,
.mm-hover-border-cyan600:hover {
  border-color: #00acc1 !important;
}
.mm-border-cyan700,
.mm-hover-border-cyan700:hover {
  border-color: #0097a7 !important;
}
.mm-border-cyan800,
.mm-hover-border-cyan800:hover {
  border-color: #00838f !important;
}
.mm-border-cyan900,
.mm-hover-border-cyan900:hover {
  border-color: #006064 !important;
}

.mm-border-cyanA100,
.mm-hover-border-cyanA100:hover {
  border-color: #84ffff !important;
}
.mm-border-cyanA200,
.mm-hover-border-cyanA200:hover {
  border-color: #18ffff !important;
}
.mm-border-cyanA400,
.mm-hover-border-cyanA400:hover {
  border-color: #00e5ff !important;
}
.mm-border-cyanA700,
.mm-hover-border-cyanA700:hover {
  border-color: #00b8d4 !important;
}

.mm-border-teal50,
.mm-hover-border-teal50:hover {
  border-color: #e0f2f1 !important;
}
.mm-border-teal100,
.mm-hover-border-teal100:hover {
  border-color: #b2dfdb !important;
}
.mm-border-teal200,
.mm-hover-border-teal200:hover {
  border-color: #80cbc4 !important;
}
.mm-border-teal300,
.mm-hover-border-teal300:hover {
  border-color: #4db6ac !important;
}
.mm-border-teal400,
.mm-hover-border-teal400:hover {
  border-color: #26a69a !important;
}
.mm-border-teal500,
.mm-hover-border-teal500:hover {
  border-color: #009688 !important;
}
.mm-border-teal600,
.mm-hover-border-teal600:hover {
  border-color: #00897b !important;
}
.mm-border-teal700,
.mm-hover-border-teal700:hover {
  border-color: #00796b !important;
}
.mm-border-teal800,
.mm-hover-border-teal800:hover {
  border-color: #00695c !important;
}
.mm-border-teal900,
.mm-hover-border-teal900:hover {
  border-color: #004d40 !important;
}

.mm-border-tealA100,
.mm-hover-border-tealA100:hover {
  border-color: #a7ffeb !important;
}
.mm-border-tealA200,
.mm-hover-border-tealA200:hover {
  border-color: #64ffda !important;
}
.mm-border-tealA400,
.mm-hover-border-tealA400:hover {
  border-color: #1de9b6 !important;
}
.mm-border-tealA700,
.mm-hover-border-tealA700:hover {
  border-color: #00bfa5 !important;
}

.mm-border-green50,
.mm-hover-border-green50:hover {
  border-color: #e8f5e9 !important;
}
.mm-border-green100,
.mm-hover-border-green100:hover {
  border-color: #c8e6c9 !important;
}
.mm-border-green200,
.mm-hover-border-green200:hover {
  border-color: #a5d6a7 !important;
}
.mm-border-green300,
.mm-hover-border-green300:hover {
  border-color: #81c784 !important;
}
.mm-border-green400,
.mm-hover-border-green400:hover {
  border-color: #66bb6a !important;
}
.mm-border-green500,
.mm-hover-border-green500:hover {
  border-color: #4caf50 !important;
}
.mm-border-green600,
.mm-hover-border-green600:hover {
  border-color: #43a047 !important;
}
.mm-border-green700,
.mm-hover-border-green700:hover {
  border-color: #388e3c !important;
}
.mm-border-green800,
.mm-hover-border-green800:hover {
  border-color: #2e7d32 !important;
}
.mm-border-green900,
.mm-hover-border-green900:hover {
  border-color: #1b5e20 !important;
}

.mm-border-greenA100,
.mm-hover-border-greenA100:hover {
  border-color: #b9f6ca !important;
}
.mm-border-greenA200,
.mm-hover-border-greenA200:hover {
  border-color: #69f0ae !important;
}
.mm-border-greenA400,
.mm-hover-border-greenA400:hover {
  border-color: #00e676 !important;
}
.mm-border-greenA700,
.mm-hover-border-greenA700:hover {
  border-color: #00c853 !important;
}

.mm-border-light-green50,
.mm-hover-border-light-green50:hover {
  border-color: #f1f8e9 !important;
}
.mm-border-light-green100,
.mm-hover-border-light-green100:hover {
  border-color: #dcedc8 !important;
}
.mm-border-light-green200,
.mm-hover-border-light-green200:hover {
  border-color: #c5e1a5 !important;
}
.mm-border-light-green300,
.mm-hover-border-light-green300:hover {
  border-color: #aed581 !important;
}
.mm-border-light-green400,
.mm-hover-border-light-green400:hover {
  border-color: #9ccc65 !important;
}
.mm-border-light-green500,
.mm-hover-border-light-green500:hover {
  border-color: #8bc34a !important;
}
.mm-border-light-green600,
.mm-hover-border-light-green600:hover {
  border-color: #7cb342 !important;
}
.mm-border-light-green700,
.mm-hover-border-light-green700:hover {
  border-color: #689f38 !important;
}
.mm-border-light-green800,
.mm-hover-border-light-green800:hover {
  border-color: #558b2f !important;
}
.mm-border-light-green900,
.mm-hover-border-light-green900:hover {
  border-color: #33691e !important;
}

.mm-border-light-greenA100,
.mm-hover-border-light-greenA100:hover {
  border-color: #ccff90 !important;
}
.mm-border-light-greenA200,
.mm-hover-border-light-greenA200:hover {
  border-color: #b2ff59 !important;
}
.mm-border-light-greenA400,
.mm-hover-border-light-greenA400:hover {
  border-color: #76ff03 !important;
}
.mm-border-light-greenA700,
.mm-hover-border-light-greenA700:hover {
  border-color: #64dd17 !important;
}

.mm-border-lime50,
.mm-hover-border-lime50:hover {
  border-color: #f9fbe7 !important;
}
.mm-border-lime100,
.mm-hover-border-lime100:hover {
  border-color: #f0f4c3 !important;
}
.mm-border-lime200,
.mm-hover-border-lime200:hover {
  border-color: #e6ee9c !important;
}
.mm-border-lime300,
.mm-hover-border-lime300:hover {
  border-color: #dce775 !important;
}
.mm-border-lime400,
.mm-hover-border-lime400:hover {
  border-color: #d4e157 !important;
}
.mm-border-lime500,
.mm-hover-border-lime500:hover {
  border-color: #cddc39 !important;
}
.mm-border-lime600,
.mm-hover-border-lime600:hover {
  border-color: #c0ca33 !important;
}
.mm-border-lime700,
.mm-hover-border-lime700:hover {
  border-color: #afb42b !important;
}
.mm-border-lime800,
.mm-hover-border-lime800:hover {
  border-color: #9e9d24 !important;
}
.mm-border-lime900,
.mm-hover-border-lime900:hover {
  border-color: #827717 !important;
}

.mm-border-limeA100,
.mm-hover-border-limeA100:hover {
  border-color: #f4ff81 !important;
}
.mm-border-limeA200,
.mm-hover-border-limeA200:hover {
  border-color: #eeff41 !important;
}
.mm-border-limeA400,
.mm-hover-border-limeA400:hover {
  border-color: #c6ff00 !important;
}
.mm-border-limeA700,
.mm-hover-border-limeA700:hover {
  border-color: #aeea00 !important;
}

.mm-border-yellow50,
.mm-hover-border-yellow50:hover {
  border-color: #fffde7 !important;
}
.mm-border-yellow100,
.mm-hover-border-yellow100:hover {
  border-color: #fff9c4 !important;
}
.mm-border-yellow200,
.mm-hover-border-yellow200:hover {
  border-color: #fff59d !important;
}
.mm-border-yellow300,
.mm-hover-border-yellow300:hover {
  border-color: #fff176 !important;
}
.mm-border-yellow400,
.mm-hover-border-yellow400:hover {
  border-color: #ffee58 !important;
}
.mm-border-yellow500,
.mm-hover-border-yellow500:hover {
  border-color: #ffeb3b !important;
}
.mm-border-yellow600,
.mm-hover-border-yellow600:hover {
  border-color: #fdd835 !important;
}
.mm-border-yellow700,
.mm-hover-border-yellow700:hover {
  border-color: #fbc02d !important;
}
.mm-border-yellow800,
.mm-hover-border-yellow800:hover {
  border-color: #f9a825 !important;
}
.mm-border-yellow900,
.mm-hover-border-yellow900:hover {
  border-color: #f57f17 !important;
}

.mm-border-yellowA100,
.mm-hover-border-yellowA100:hover {
  border-color: #ffff8d !important;
}
.mm-border-yellowA200,
.mm-hover-border-yellowA200:hover {
  border-color: #ffff00 !important;
}
.mm-border-yellowA400,
.mm-hover-border-yellowA400:hover {
  border-color: #ffea00 !important;
}
.mm-border-yellowA700,
.mm-hover-border-yellowA700:hover {
  border-color: #ffd600 !important;
}

.mm-border-amber50,
.mm-hover-border-amber50:hover {
  border-color: #fff8e1 !important;
}
.mm-border-amber100,
.mm-hover-border-amber100:hover {
  border-color: #ffecb3 !important;
}
.mm-border-amber200,
.mm-hover-border-amber200:hover {
  border-color: #ffe082 !important;
}
.mm-border-amber300,
.mm-hover-border-amber300:hover {
  border-color: #ffd54f !important;
}
.mm-border-amber400,
.mm-hover-border-amber400:hover {
  border-color: #ffca28 !important;
}
.mm-border-amber500,
.mm-hover-border-amber500:hover {
  border-color: #ffc107 !important;
}
.mm-border-amber600,
.mm-hover-border-amber600:hover {
  border-color: #ffb300 !important;
}
.mm-border-amber700,
.mm-hover-border-amber700:hover {
  border-color: #ffa000 !important;
}
.mm-border-amber800,
.mm-hover-border-amber800:hover {
  border-color: #ff8f00 !important;
}
.mm-border-amber900,
.mm-hover-border-amber900:hover {
  border-color: #ff6f00 !important;
}

.mm-border-amberA100,
.mm-hover-border-amberA100:hover {
  border-color: #ffe57f !important;
}
.mm-border-amberA200,
.mm-hover-border-amberA200:hover {
  border-color: #ffd740 !important;
}
.mm-border-amberA400,
.mm-hover-border-amberA400:hover {
  border-color: #ffc400 !important;
}
.mm-border-amberA700,
.mm-hover-border-amberA700:hover {
  border-color: #ffab00 !important;
}

.mm-border-orange50,
.mm-hover-border-orange50:hover {
  border-color: #fff3e0 !important;
}
.mm-border-orange100,
.mm-hover-border-orange100:hover {
  border-color: #ffe0b2 !important;
}
.mm-border-orange200,
.mm-hover-border-orange200:hover {
  border-color: #ffcc80 !important;
}
.mm-border-orange300,
.mm-hover-border-orange300:hover {
  border-color: #ffb74d !important;
}
.mm-border-orange400,
.mm-hover-border-orange400:hover {
  border-color: #ffa726 !important;
}
.mm-border-orange500,
.mm-hover-border-orange500:hover {
  border-color: #ff9800 !important;
}
.mm-border-orange600,
.mm-hover-border-orange600:hover {
  border-color: #fb8c00 !important;
}
.mm-border-orange700,
.mm-hover-border-orange700:hover {
  border-color: #f57c00 !important;
}
.mm-border-orange800,
.mm-hover-border-orange800:hover {
  border-color: #ef6c00 !important;
}
.mm-border-orange900,
.mm-hover-border-orange900:hover {
  border-color: #e65100 !important;
}

.mm-border-orangeA100,
.mm-hover-border-orangeA100:hover {
  border-color: #ffd180 !important;
}
.mm-border-orangeA200,
.mm-hover-border-orangeA200:hover {
  border-color: #ffab40 !important;
}
.mm-border-orangeA400,
.mm-hover-border-orangeA400:hover {
  border-color: #ff9100 !important;
}
.mm-border-orangeA700,
.mm-hover-border-orangeA700:hover {
  border-color: #ff6d00 !important;
}

.mm-border-deeporange50,
.mm-hover-border-deeporange50:hover {
  border-color: #fbe9e7 !important;
}
.mm-border-deeporange100,
.mm-hover-border-deeporange100:hover {
  border-color: #ffccbc !important;
}
.mm-border-deeporange200,
.mm-hover-border-deeporange200:hover {
  border-color: #ffab91 !important;
}
.mm-border-deeporange300,
.mm-hover-border-deeporange300:hover {
  border-color: #ff8a65 !important;
}
.mm-border-deeporange400,
.mm-hover-border-deeporange400:hover {
  border-color: #ff7043 !important;
}
.mm-border-deeporange500,
.mm-hover-border-deeporange500:hover {
  border-color: #ff5722 !important;
}
.mm-border-deeporange600,
.mm-hover-border-deeporange600:hover {
  border-color: #f4511e !important;
}
.mm-border-deeporange700,
.mm-hover-border-deeporange700:hover {
  border-color: #e64a19 !important;
}
.mm-border-deeporange800,
.mm-hover-border-deeporange800:hover {
  border-color: #d84315 !important;
}
.mm-border-deeporange900,
.mm-hover-border-deeporange900:hover {
  border-color: #bf360c !important;
}

.mm-border-deeporangeA100,
.mm-hover-border-deeporangeA100:hover {
  border-color: #ff9e80 !important;
}
.mm-border-deeporangeA200,
.mm-hover-border-deeporangeA200:hover {
  border-color: #ff6e40 !important;
}
.mm-border-deeporangeA400,
.mm-hover-border-deeporangeA400:hover {
  border-color: #ff3d00 !important;
}
.mm-border-deeporangeA700,
.mm-hover-border-deeporangeA700:hover {
  border-color: #dd2c00 !important;
}

.mm-border-brown50,
.mm-hover-border-brown50:hover {
  border-color: #efebe9 !important;
}
.mm-border-brown100,
.mm-hover-border-brown100:hover {
  border-color: #d7ccc8 !important;
}
.mm-border-brown200,
.mm-hover-border-brown200:hover {
  border-color: #bcaaa4 !important;
}
.mm-border-brown300,
.mm-hover-border-brown300:hover {
  border-color: #a1887f !important;
}
.mm-border-brown400,
.mm-hover-border-brown400:hover {
  border-color: #8d6e63 !important;
}
.mm-border-brown500,
.mm-hover-border-brown500:hover {
  border-color: #795548 !important;
}
.mm-border-brown600,
.mm-hover-border-brown600:hover {
  border-color: #6d4c41 !important;
}
.mm-border-brown700,
.mm-hover-border-brown700:hover {
  border-color: #5d4037 !important;
}
.mm-border-brown800,
.mm-hover-border-brown800:hover {
  border-color: #4e342e !important;
}
.mm-border-brown900,
.mm-hover-border-brown900:hover {
  border-color: #3e2723 !important;
}

.mm-border-grey50,
.mm-hover-border-grey50:hover {
  border-color: #fafafa !important;
}
.mm-border-grey100,
.mm-hover-border-grey100:hover {
  border-color: #f5f5f5 !important;
}
.mm-border-grey200,
.mm-hover-border-grey200:hover {
  border-color: #eeeeee !important;
}
.mm-border-grey300,
.mm-hover-border-grey300:hover {
  border-color: #e0e0e0 !important;
}
.mm-border-grey400,
.mm-hover-border-grey400:hover {
  border-color: #bdbdbd !important;
}
.mm-border-grey500,
.mm-hover-border-grey500:hover {
  border-color: #9e9e9e !important;
}
.mm-border-grey600,
.mm-hover-border-grey600:hover {
  border-color: #757575 !important;
}
.mm-border-grey700,
.mm-hover-border-grey700:hover {
  border-color: #616161 !important;
}
.mm-border-grey800,
.mm-hover-border-grey800:hover {
  border-color: #424242 !important;
}
.mm-border-grey900,
.mm-hover-border-grey900:hover {
  border-color: #212121 !important;
}

.mm-border-bluegrey50,
.mm-hover-border-bluegrey50:hover {
  border-color: #eceff1 !important;
}
.mm-border-bluegrey100,
.mm-hover-border-bluegrey100:hover {
  border-color: #cfd8dc !important;
}
.mm-border-bluegrey200,
.mm-hover-border-bluegrey200:hover {
  border-color: #b0bec5 !important;
}
.mm-border-bluegrey300,
.mm-hover-border-bluegrey300:hover {
  border-color: #90a4ae !important;
}
.mm-border-bluegrey400,
.mm-hover-border-bluegrey400:hover {
  border-color: #78909c !important;
}
.mm-border-bluegrey500,
.mm-hover-border-bluegrey500:hover {
  border-color: #607d8b !important;
}
.mm-border-bluegrey600,
.mm-hover-border-bluegrey600:hover {
  border-color: #546e7a !important;
}
.mm-border-bluegrey700,
.mm-hover-border-bluegrey700:hover {
  border-color: #455a64 !important;
}
.mm-border-bluegrey800,
.mm-hover-border-bluegrey800:hover {
  border-color: #37474f !important;
}
.mm-border-bluegrey900,
.mm-hover-border-bluegrey900:hover {
  border-color: #263238 !important;
}

.mm-border-black,
.mm-hover-border-black:hover {
  border-color: #000 !important;
}
.mm-border-white,
.mm-hover-border-white:hover {
  border-color: #fff !important;
}

.mm-border-transparent,
.mm-hover-border-transparent:hover {
  border-color: transparent !important;
}

.mm-border-default,
.mm-hover-border-default:hover {
  border-color: #e0e0e0 !important;
}

.mm-border-inherit,
.mm-hover-border-inherit:hover {
  border-color: inherit !important;
}

.mm-border-initial,
.mm-hover-border-initial:hover {
  border-color: initial !important;
}

.mm-border-unset,
.mm-hover-border-unset:hover {
  border-color: unset !important;
}

.mm-border-solid,
.mm-hover-border-solid:hover {
  border-style: solid !important;
}

.mm-border-dotted,
.mm-hover-border-dotted:hover {
  border-style: dotted !important;
}

.mm-border-dashed,
.mm-hover-border-dashed:hover {
  border-style: dashed !important;
}

.mm-border-double,
.mm-hover-border-double:hover {
  border-style: double !important;
}

.mm-border-groove,
.mm-hover-border-groove:hover {
  border-style: groove !important;
}

.mm-border-ridge,
.mm-hover-border-ridge:hover {
  border-style: ridge !important;
}

.mm-border-inset,
.mm-hover-border-inset:hover {
  border-style: inset !important;
}

.mm-border-outset,
.mm-hover-border-outset:hover {
  border-style: outset !important;
}

.mm-border-hidden,
.mm-hover-border-hidden:hover {
  border-style: hidden !important;
}

.mm-border-solid,
.mm-hover-border-solid:hover {
  border-style: solid !important;
}

.mm-border-dotted,
.mm-hover-border-dotted:hover {
  border-style: dotted !important;
}

.mm-border-dashed,
.mm-hover-border-dashed:hover {
  border-style: dashed !important;
}

.mm-border-double,
.mm-hover-border-double:hover {
  border-style: double !important;
}

.mm-border-groove,
.mm-hover-border-groove:hover {
  border-style: groove !important;
}

.mm-border-ridge,
.mm-hover-border-ridge:hover {
  border-style: ridge !important;
}

.mm-border-inset,
.mm-hover-border-inset:hover {
  border-style: inset !important;
}

.mm-border-outset,
.mm-hover-border-outset:hover {
  border-style: outset !important;
}

.mm-border-hidden,
.mm-hover-border-hidden:hover {
  border-style: hidden !important;
}

.mm-border-solid,
.mm-hover-border-solid:hover {
  border-style: solid !important;
}

.mm-border-dotted,
.mm-hover-border-dotted:hover {
  border-style: dotted !important;
}

.mm-border-dashed,
.mm-hover-border-dashed:hover {
  border-style: dashed !important;
}

.mm-border-double,
.mm-hover-border-double:hover {
  border-style: double !important;
}

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

    /* Text Colors */
    .text-red50 {
        color: #ffebee;
    }
    .text-red100 {
        color: #ffcdd2;
    }
    .text-red200 {
        color: #ef9a9a;
    }
    .text-red300 {
        color: #e57373;
    }
    .text-red400 {
        color: #ef5350;
    }
    .text-red500 {
        color: #f44336;
    }
    .text-red600 {
        color: #e53935;
    }
    .text-red700 {
        color: #d32f2f;
    }
    .text-red800 {
        color: #c62828;
    }
    .text-red900 {
        color: #b71c1c;
    }
    .text-redA100 {
        color: #ff8a80;
    }
    .text-redA200 {
        color: #ff5252;
    }
    .text-redA400 {
        color: #ff1744;
    }
    .text-redA700 {
        color: #d50000;
    }
    .text-pink50 {
        color: #fce4ec;
    }
    .text-pink100 {
        color: #f8bbd0;
    }
    .text-pink200 {
        color: #f48fb1;
    }
    .text-pink300 {
        color: #f06292;
    }
    .text-pink400 {
        color: #ec407a;
    }
    .text-pink500 {
        color: #e91e63;
    }
    .text-pink600 {
        color: #d81b60;
    }
    .text-pink700 {
        color: #c2185b;
    }
    .text-pink800 {
        color: #ad1457;
    }
    .text-pink900 {
        color: #880e4f;
    }

    /* Border sizes */
    .mm-border-0,
.mm-hover-border-0:hover {
  border-width: 0 !important;
}

.mm-border-1,
.mm-hover-border-1:hover {
  border-width: 1px !important;
}

.mm-border-2,
.mm-hover-border-2:hover {
  border-width: 2px !important;
}

.mm-border-3,
.mm-hover-border-3:hover {
  border-width: 3px !important;
}

.mm-border-4,
.mm-hover-border-4:hover {
  border-width: 4px !important;
}

.mm-border-5,
.mm-hover-border-5:hover {
  border-width: 5px !important;
}

.mm-border-6,
.mm-hover-border-6:hover {
  border-width: 6px !important;
}

.mm-border-7,
.mm-hover-border-7:hover {
  border-width: 7px !important;
}

.mm-border-8,
.mm-hover-border-8:hover {
  border-width: 8px !important;
}

.mm-border-9,
.mm-hover-border-9:hover {
  border-width: 9px !important;
}

.mm-border-10,
.mm-hover-border-10:hover {
  border-width: 10px !important;
}

.mm-card,
.mm-card-2 {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.mm-card-4,
.mm-hover-shadow:hover {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
}

/* Font Weights */
.mm-font-light {
  font-weight: 300 !important;
}
.mm-font-medium {
  font-weight: 500 !important;
}
.mm-font-heavy {
  font-weight: 700 !important;
}
/* Font Sizes */
.mm-font-xs {
  font-size: .75rem !important;
}
.mm-font-sm {
  font-size: 0.875rem !important;
}
.mm-font-md {
  font-size: 1rem !important;
}
.mm-font-lg {
  font-size: 1.125rem !important;
}
.mm-font-xl {
  font-size: 1.25rem !important;
}
.mm-font-2xl {
  font-size: 1.5rem !important;
}
.mm-font-3xl {
  font-size: 1.875rem !important;
}
.mm-font-4xl {
  font-size: 2.25rem !important;
}

/* button Sizes */
.mm-btn-xs {
  font-size: .75rem !important;
  padding: .5rem .75rem !important;
}
.mm-btn-sm {
  font-size: 0.875rem !important;
  padding: .75rem 1rem !important;
}
.mm-btn-md {
  font-size: 1rem !important;
  padding: 1rem 1.5rem !important;
}
.mm-btn-lg {
  font-size: 1.125rem !important;
  padding: 1.25rem 1.75rem !important;
}
.mm-btn-xl {
  font-size: 1.25rem !important;
  padding: 1.5rem 2rem !important;
}
.mm-btn-2xl {
  font-size: 1.5rem !important;
  padding: 1.75rem 2.25rem !important;
}


    


/* Additonal Hovers */
.mm-hover-red50:hover {
  background-color: #ffebee !important;
}
.mm-hover-red100:hover {
  background-color: #ffcdd2 !important;
}
.mm-hover-red200:hover {
  background-color: #ef9a9a !important;
}
.mm-hover-red300:hover {
  background-color: #e57373 !important;
}
.mm-hover-red400:hover {
  background-color: #ef5350 !important;
}
.mm-hover-red500:hover {
  background-color: #f44336 !important;
}
.mm-hover-red600:hover {
  background-color: #e53935 !important;
}
.mm-hover-red700:hover {
  background-color: #d32f2f !important;
}
.mm-hover-red800:hover {
  background-color: #c62828 !important;
}
.mm-hover-red900:hover {
  background-color: #b71c1c !important;
}

.mm-hover-pink50:hover {
  background-color: #fce4ec !important;
}
.mm-hover-pink100:hover {
  background-color: #f8bbd0 !important;
}
.mm-hover-pink200:hover {
  background-color: #f48fb1 !important;
}
.mm-hover-pink300:hover {
  background-color: #f06292 !important;
}
.mm-hover-pink400:hover {
  background-color: #ec407a !important;
}
.mm-hover-pink500:hover {
  background-color: #e91e63 !important;
}
.mm-hover-pink600:hover {
  background-color: #d81b60 !important;
}
.mm-hover-pink700:hover {
  background-color: #c2185b !important;
}
.mm-hover-pink800:hover {
  background-color: #ad1457 !important;
}
.mm-hover-pink900:hover {
  background-color: #880e4f !important;
}

.mm-hover-purple50:hover {
  background-color: #f3e5f5 !important;
}
.mm-hover-purple100:hover {
  background-color: #e1bee7 !important;
}
.mm-hover-purple200:hover {
  background-color: #ce93d8 !important;
}
.mm-hover-purple300:hover {
  background-color: #ba68c8 !important;
}
.mm-hover-purple400:hover {
  background-color: #ab47bc !important;
}
.mm-hover-purple500:hover {
  background-color: #9c27b0 !important;
}
.mm-hover-purple600:hover {
  background-color: #8e24aa !important;
}
.mm-hover-purple700:hover {
  background-color: #7b1fa2 !important;
}
.mm-hover-purple800:hover {
  background-color: #6a1b9a !important;
}
.mm-hover-purple900:hover {
  background-color: #4a148c !important;
}

.mm-hover-deeppurple50:hover {
  background-color: #ede7f6 !important;
}
.mm-hover-deeppurple100:hover {
  background-color: #d1c4e9 !important;
}
.mm-hover-deeppurple200:hover {
  background-color: #b39ddb !important;
}
.mm-hover-deeppurple300:hover {
  background-color: #9575cd !important;
}
.mm-hover-deeppurple400:hover {
  background-color: #7e57c2 !important;
}
.mm-hover-deeppurple500:hover {
  background-color: #673ab7 !important;
}
.mm-hover-deeppurple600:hover {
  background-color: #5e35b1 !important;
}
.mm-hover-deeppurple700:hover {
  background-color: #512da8 !important;
}
.mm-hover-deeppurple800:hover {
  background-color: #4527a0 !important;
}
.mm-hover-deeppurple900:hover {
  background-color: #311b92 !important;
}

.mm-hover-indigo50:hover {
  background-color: #e8eaf6 !important;
}
.mm-hover-indigo100:hover {
  background-color: #c5cae9 !important;
}
.mm-hover-indigo200:hover {
  background-color: #9fa8da !important;
}
.mm-hover-indigo300:hover {
  background-color: #7986cb !important;
}
.mm-hover-indigo400:hover {
  background-color: #5c6bc0 !important;
}
.mm-hover-indigo500:hover {
  background-color: #3f51b5 !important;
}
.mm-hover-indigo600:hover {
  background-color: #3949ab !important;
}
.mm-hover-indigo700:hover {
  background-color: #303f9f !important;
}
.mm-hover-indigo800:hover {
  background-color: #283593 !important;
}
.mm-hover-indigo900:hover {
  background-color: #1a237e !important;
}

.mm-hover-blue50:hover {
  background-color: #e3f2fd !important;
}
.mm-hover-blue100:hover {
  background-color: #bbdefb !important;
}
.mm-hover-blue200:hover {
  background-color: #90caf9 !important;
}
.mm-hover-blue300:hover {
  background-color: #64b5f6 !important;
}
.mm-hover-blue400:hover {
  background-color: #42a5f5 !important;
}
.mm-hover-blue500:hover {
  background-color: #2196f3 !important;
}
.mm-hover-blue600:hover {
  background-color: #1e88e5 !important;
}
.mm-hover-blue700:hover {
  background-color: #1976d2 !important;
}
.mm-hover-blue800:hover {
  background-color: #1565c0 !important;
}
.mm-hover-blue900:hover {
  background-color: #0d47a1 !important;
}

.mm-hover-lightblue50:hover {
  background-color: #e1f5fe !important;
}
.mm-hover-lightblue100:hover {
  background-color: #b3e5fc !important;
}
.mm-hover-lightblue200:hover {
  background-color: #81d4fa !important;
}
.mm-hover-lightblue300:hover {
  background-color: #4fc3f7 !important;
}
.mm-hover-lightblue400:hover {
  background-color: #29b6f6 !important;
}
.mm-hover-lightblue500:hover {
  background-color: #03a9f4 !important;
}
.mm-hover-lightblue600:hover {
  background-color: #039be5 !important;
}
.mm-hover-lightblue700:hover {
  background-color: #0288d1 !important;
}
.mm-hover-lightblue800:hover {
  background-color: #0277bd !important;
}
.mm-hover-lightblue900:hover {
  background-color: #01579b !important;
}

.mm-hover-cyan50:hover {
  background-color: #e0f7fa !important;
}
.mm-hover-cyan100:hover {
  background-color: #b2ebf2 !important;
}
.mm-hover-cyan200:hover {
  background-color: #80deea !important;
}
.mm-hover-cyan300:hover {
  background-color: #4dd0e1 !important;
}
.mm-hover-cyan400:hover {
  background-color: #26c6da !important;
}
.mm-hover-cyan500:hover {
  background-color: #00bcd4 !important;
}
.mm-hover-cyan600:hover {
  background-color: #00acc1 !important;
}
.mm-hover-cyan700:hover {
  background-color: #0097a7 !important;
}
.mm-hover-cyan800:hover {
  background-color: #00838f !important;
}
.mm-hover-cyan900:hover {
  background-color: #006064 !important;
}

.mm-hover-teal50:hover {
  background-color: #e0f2f1 !important;
}
.mm-hover-teal100:hover {
  background-color: #b2dfdb !important;
}
.mm-hover-teal200:hover {
  background-color: #80cbc4 !important;
}
.mm-hover-teal300:hover {
  background-color: #4db6ac !important;
}
.mm-hover-teal400:hover {
  background-color: #26a69a !important;
}
.mm-hover-teal500:hover {
  background-color: #009688 !important;
}
.mm-hover-teal600:hover {
  background-color: #00897b !important;
}
.mm-hover-teal700:hover {
  background-color: #00796b !important;
}
.mm-hover-teal800:hover {
  background-color: #00695c !important;
}
.mm-hover-teal900:hover {
  background-color: #004d40 !important;
}

.mm-hover-green50:hover {
  background-color: #e8f5e9 !important;
}
.mm-hover-green100:hover {
  background-color: #c8e6c9 !important;
}
.mm-hover-green200:hover {
  background-color: #a5d6a7 !important;
}
.mm-hover-green300:hover {
  background-color: #81c784 !important;
}
.mm-hover-green400:hover {
  background-color: #66bb6a !important;
}
.mm-hover-green500:hover {
  background-color: #4caf50 !important;
}
.mm-hover-green600:hover {
  background-color: #43a047 !important;
}
.mm-hover-green700:hover {
  background-color: #388e3c !important;
}
.mm-hover-green800:hover {
  background-color: #2e7d32 !important;
}
.mm-hover-green900:hover {
  background-color: #1b5e20 !important;
}

.mm-hover-lightgreen50:hover {
  background-color: #f1f8e9 !important;
}
.mm-hover-lightgreen100:hover {
  background-color: #dcedc8 !important;
}
.mm-hover-lightgreen200:hover {
  background-color: #c5e1a5 !important;
}
.mm-hover-lightgreen300:hover {
  background-color: #aed581 !important;
}
.mm-hover-lightgreen400:hover {
  background-color: #9ccc65 !important;
}
.mm-hover-lightgreen500:hover {
  background-color: #8bc34a !important;
}
.mm-hover-lightgreen600:hover {
  background-color: #7cb342 !important;
}
.mm-hover-lightgreen700:hover {
  background-color: #689f38 !important;
}
.mm-hover-lightgreen800:hover {
  background-color: #558b2f !important;
}
.mm-hover-lightgreen900:hover {
  background-color: #33691e !important;
}

.mm-hover-lime50:hover {
  background-color: #f9fbe7 !important;
}
.mm-hover-lime100:hover {
  background-color: #f0f4c3 !important;
}
.mm-hover-lime200:hover {
  background-color: #e6ee9c !important;
}
.mm-hover-lime300:hover {
  background-color: #dce775 !important;
}
.mm-hover-lime400:hover {
  background-color: #d4e157 !important;
}
.mm-hover-lime500:hover {
  background-color: #cddc39 !important;
}
.mm-hover-lime600:hover {
  background-color: #c0ca33 !important;
}
.mm-hover-lime700:hover {
  background-color: #afb42b !important;
}
.mm-hover-lime800:hover {
  background-color: #9e9d24 !important;
}
.mm-hover-lime900:hover {
  background-color: #827717 !important;
}

.mm-hover-yellow50:hover {
  background-color: #fffde7 !important;
}
.mm-hover-yellow100:hover {
  background-color: #fff9c4 !important;
}
.mm-hover-yellow200:hover {
  background-color: #fff59d !important;
}
.mm-hover-yellow300:hover {
  background-color: #fff176 !important;
}
.mm-hover-yellow400:hover {
  background-color: #ffee58 !important;
}
.mm-hover-yellow500:hover {
  background-color: #ffeb3b !important;
}
.mm-hover-yellow600:hover {
  background-color: #fdd835 !important;
}
.mm-hover-yellow700:hover {
  background-color: #fbc02d !important;
}
.mm-hover-yellow800:hover {
  background-color: #f9a825 !important;
}
.mm-hover-yellow900:hover {
  background-color: #f57f17 !important;
}

.mm-hover-amber50:hover {
  background-color: #fff8e1 !important;
}
.mm-hover-amber100:hover {
  background-color: #ffecb3 !important;
}
.mm-hover-amber200:hover {
  background-color: #ffe082 !important;
}
.mm-hover-amber300:hover {
  background-color: #ffd54f !important;
}
.mm-hover-amber400:hover {
  background-color: #ffca28 !important;
}
.mm-hover-amber500:hover {
  background-color: #ffc107 !important;
}
.mm-hover-amber600:hover {
  background-color: #ffb300 !important;
}
.mm-hover-amber700:hover {
  background-color: #ffa000 !important;
}
.mm-hover-amber800:hover {
  background-color: #ff8f00 !important;
}
.mm-hover-amber900:hover {
  background-color: #ff6f00 !important;
}

.mm-hover-orange50:hover {
  background-color: #fff3e0 !important;
}
.mm-hover-orange100:hover {
  background-color: #ffe0b2 !important;
}
.mm-hover-orange200:hover {
  background-color: #ffcc80 !important;
}
.mm-hover-orange300:hover {
  background-color: #ffb74d !important;
}
.mm-hover-orange400:hover {
  background-color: #ffa726 !important;
}
.mm-hover-orange500:hover {
  background-color: #ff9800 !important;
}
.mm-hover-orange600:hover {
  background-color: #fb8c00 !important;
}
.mm-hover-orange700:hover {
  background-color: #f57c00 !important;
}
.mm-hover-orange800:hover {
  background-color: #ef6c00 !important;
}
.mm-hover-orange900:hover {
  background-color: #e65100 !important;
}

.mm-hover-deeporange50:hover {
  background-color: #fbe9e7 !important;
}
.mm-hover-deeporange100:hover {
  background-color: #ffccbc !important;
}
.mm-hover-deeporange200:hover {
  background-color: #ffab91 !important;
}
.mm-hover-deeporange300:hover {
  background-color: #ff8a65 !important;
}
.mm-hover-deeporange400:hover {
  background-color: #ff7043 !important;
}
.mm-hover-deeporange500:hover {
  background-color: #ff5722 !important;
}
.mm-hover-deeporange600:hover {
  background-color: #f4511e !important;
}
.mm-hover-deeporange700:hover {
  background-color: #e64a19 !important;
}
.mm-hover-deeporange800:hover {
  background-color: #d84315 !important;
}
.mm-hover-deeporange900:hover {
  background-color: #bf360c !important;
}

.mm-hover-brown50:hover {
  background-color: #efebe9 !important;
}
.mm-hover-brown100:hover {
  background-color: #d7ccc8 !important;
}
.mm-hover-brown200:hover {
  background-color: #bcaaa4 !important;
}
.mm-hover-brown300:hover {
  background-color: #a1887f !important;
}
.mm-hover-brown400:hover {
  background-color: #8d6e63 !important;
}
.mm-hover-brown500:hover {
  background-color: #795548 !important;
}
.mm-hover-brown600:hover {
  background-color: #6d4c41 !important;
}
.mm-hover-brown700:hover {
  background-color: #5d4037 !important;
}
.mm-hover-brown800:hover {
  background-color: #4e342e !important;
}
.mm-hover-brown900:hover {
  background-color: #3e2723 !important;
}

.mm-hover-grey50:hover {
  background-color: #fafafa !important;
}
.mm-hover-grey100:hover {
  background-color: #f5f5f5 !important;
}
.mm-hover-grey200:hover {
  background-color: #eeeeee !important;
}
.mm-hover-grey300:hover {
  background-color: #e0e0e0 !important;
}
.mm-hover-grey400:hover {
  background-color: #bdbdbd !important;
}
.mm-hover-grey500:hover {
  background-color: #9e9e9e !important;
}
.mm-hover-grey600:hover {
  background-color: #757575 !important;
}
.mm-hover-grey700:hover {
  background-color: #616161 !important;
}
.mm-hover-grey800:hover {
  background-color: #424242 !important;
}
.mm-hover-grey900:hover {
  background-color: #212121 !important;
}

.mm-hover-bluegrey50:hover {
  background-color: #eceff1 !important;
}
.mm-hover-bluegrey100:hover {
  background-color: #cfd8dc !important;
}
.mm-hover-bluegrey200:hover {
  background-color: #b0bec5 !important;
}
.mm-hover-bluegrey300:hover {
  background-color: #90a4ae !important;
}
.mm-hover-bluegrey400:hover {
  background-color: #78909c !important;
}
.mm-hover-bluegrey500:hover {
  background-color: #607d8b !important;
}
.mm-hover-bluegrey600:hover {
  background-color: #546e7a !important;
}
.mm-hover-bluegrey700:hover {
  background-color: #455a64 !important;
}
.mm-hover-bluegrey800:hover {
  background-color: #37474f !important;
}
.mm-hover-bluegrey900:hover {
  background-color: #263238 !important;
}

.mm-hover-darkgrey50:hover {
  background-color: #fafafa !important;
}
.mm-hover-darkgrey100:hover {
  background-color: #f5f5f5 !important;
}
.mm-hover-darkgrey200:hover {
  background-color: #eeeeee !important;
}
.mm-hover-darkgrey300:hover {
  background-color: #e0e0e0 !important;
}
.mm-hover-darkgrey400:hover {
  background-color: #bdbdbd !important;
}
.mm-hover-darkgrey500:hover {
  background-color: #9e9e9e !important;
}
.mm-hover-darkgrey600:hover {
  background-color: #757575 !important;
}
.mm-hover-darkgrey700:hover {
  background-color: #616161 !important;
}
.mm-hover-darkgrey800:hover {
  background-color: #424242 !important;
}
.mm-hover-darkgrey900:hover {
  background-color: #212121 !important;
}

.mm-hover-lightblue50:hover {
  background-color: #e1f5fe !important;
}
.mm-hover-lightblue100:hover {
  background-color: #b3e5fc !important;
}
.mm-hover-lightblue200:hover {
  background-color: #81d4fa !important;
}
.mm-hover-lightblue300:hover {
  background-color: #4fc3f7 !important;
}
.mm-hover-lightblue400:hover {
  background-color: #29b6f6 !important;
}
.mm-hover-lightblue500:hover {
  background-color: #03a9f4 !important;
}
.mm-hover-lightblue600:hover {
  background-color: #039be5 !important;
}
.mm-hover-lightblue700:hover {
  background-color: #0288d1 !important;
}
.mm-hover-lightblue800:hover {
  background-color: #0277bd !important;
}
.mm-hover-lightblue900:hover {
  background-color: #01579b !important;
}

.mm-hover-cyan50:hover {
  background-color: #e0f7fa !important;
}
.mm-hover-cyan100:hover {
  background-color: #b2ebf2 !important;
}
.mm-hover-cyan200:hover {
  background-color: #80deea !important;
}
.mm-hover-cyan300:hover {
  background-color: #4dd0e1 !important;
}
.mm-hover-cyan400:hover {
  background-color: #26c6da !important;
}
.mm-hover-cyan500:hover {
  background-color: #00bcd4 !important;
}
.mm-hover-cyan600:hover {
  background-color: #00acc1 !important;
}
.mm-hover-cyan700:hover {
  background-color: #0097a7 !important;
}
.mm-hover-cyan800:hover {
  background-color: #00838f !important;
}
.mm-hover-cyan900:hover {
  background-color: #006064 !important;
}

.mm-hover-teal50:hover {
  background-color: #e0f2f1 !important;
}
.mm-hover-teal100:hover {
  background-color: #b2dfdb !important;
}
.mm-hover-teal200:hover {
  background-color: #80cbc4 !important;
}
.mm-hover-teal300:hover {
  background-color: #4db6ac !important;
}
.mm-hover-teal400:hover {
  background-color: #26a69a !important;
}
.mm-hover-teal500:hover {
  background-color: #009688 !important;
}
.mm-hover-teal600:hover {
  background-color: #00897b !important;
}
.mm-hover-teal700:hover {
  background-color: #00796b !important;
}
.mm-hover-teal800:hover {
  background-color: #00695c !important;
}
.mm-hover-teal900:hover {
  background-color: #004d40 !important;
}

.mm-hover-green50:hover {
  background-color: #e8f5e9 !important;
}
.mm-hover-green100:hover {
  background-color: #c8e6c9 !important;
}
.mm-hover-green200:hover {
  background-color: #a5d6a7 !important;
}
.mm-hover-green300:hover {
  background-color: #81c784 !important;
}
.mm-hover-green400:hover {
  background-color: #66bb6a !important;
}
.mm-hover-green500:hover {
  background-color: #4caf50 !important;
}
.mm-hover-green600:hover {
  background-color: #43a047 !important;
}
.mm-hover-green700:hover {
  background-color: #388e3c !important;
}
.mm-hover-green800:hover {
  background-color: #2e7d32 !important;
}
.mm-hover-green900:hover {
  background-color: #1b5e20 !important;
}

.mm-hover-lightgreen50:hover {
  background-color: #f1f8e9 !important;
}
.mm-hover-lightgreen100:hover {
  background-color: #dcedc8 !important;
}
.mm-hover-lightgreen200:hover {
  background-color: #c5e1a5 !important;
}
.mm-hover-lightgreen300:hover {
  background-color: #aed581 !important;
}
.mm-hover-lightgreen400:hover {
  background-color: #9ccc65 !important;
}
.mm-hover-lightgreen500:hover {
  background-color: #8bc34a !important;
}
.mm-hover-lightgreen600:hover {
  background-color: #7cb342 !important;
}
.mm-hover-lightgreen700:hover {
  background-color: #689f38 !important;
}
.mm-hover-lightgreen800:hover {
  background-color: #558b2f !important;
}
.mm-hover-lightgreen900:hover {
  background-color: #33691e !important;
}

.mm-hover-lime50:hover {
  background-color: #f9fbe7 !important;
}
.mm-hover-lime100:hover {
  background-color: #f0f4c3 !important;
}
.mm-hover-lime200:hover {
  background-color: #e6ee9c !important;
}
.mm-hover-lime300:hover {
  background-color: #dce775 !important;
}
.mm-hover-lime400:hover {
background-color: #d4e157 !important;
}
.mm-hover-lime500:hover {
  background-color: #cddc39 !important;
}
.mm-hover-lime600:hover {
  background-color: #c0ca33 !important;
}
.mm-hover-lime700:hover {
  background-color: #afb42b !important;
}
.mm-hover-lime800:hover {
  background-color: #9e9d24 !important;
}
.mm-hover-lime900:hover {
  background-color: #827717 !important;
}

.mm-hover-yellow50:hover {
  background-color: #fffde7 !important;
}
.mm-hover-yellow100:hover {
  background-color: #fff9c4 !important;
}
.mm-hover-yellow200:hover {
  background-color: #fff59d !important;
}
.mm-hover-yellow300:hover {
  background-color: #fff176 !important;
}
.mm-hover-yellow400:hover {
  background-color: #ffee58 !important;
}
.mm-hover-yellow500:hover {
  background-color: #ffeb3b !important;
}
.mm-hover-yellow600:hover {
  background-color: #fdd835 !important;
}
.mm-hover-yellow700:hover {
  background-color: #fbc02d !important;
}
.mm-hover-yellow800:hover {
  background-color: #f9a825 !important;
}
.mm-hover-yellow900:hover {
  background-color: #f57f17 !important;
}

.mm-hover-amber50:hover {
  background-color: #fff8e1 !important;
}
.mm-hover-amber100:hover {
  background-color: #ffecb3 !important;
}
.mm-hover-amber200:hover {
  background-color: #ffe082 !important;
}
.mm-hover-amber300:hover {
  background-color: #ffd54f !important;
}
.mm-hover-amber400:hover {
  background-color: #ffca28 !important;
}
.mm-hover-amber500:hover {
  background-color: #ffc107 !important;
}
.mm-hover-amber600:hover {
  background-color: #ffb300 !important;
}
.mm-hover-amber700:hover {
  background-color: #ffa000 !important;
}
.mm-hover-amber800:hover {
  background-color: #ff8f00 !important;
}
.mm-hover-amber900:hover {
  background-color: #ff6f00 !important;
}

.mm-hover-orange50:hover {
  background-color: #fff3e0 !important;
}
.mm-hover-orange100:hover {
  background-color: #ffe0b2 !important;
}
.mm-hover-orange200:hover {
  background-color: #ffcc80 !important;
}
.mm-hover-orange300:hover {
  background-color: #ffb74d !important;
}
.mm-hover-orange400:hover {
  background-color: #ffa726 !important;
}
.mm-hover-orange500:hover {
  background-color: #ff9800 !important;
}
.mm-hover-orange600:hover {
  background-color: #fb8c00 !important;
}
.mm-hover-orange700:hover {
  background-color: #f57c00 !important;
}
.mm-hover-orange800:hover {
  background-color: #ef6c00 !important;
}
.mm-hover-orange900:hover {
  background-color: #e65100 !important;
}

.mm-hover-deeporange50:hover {
  background-color: #fbe9e7 !important;
}
.mm-hover-deeporange100:hover {
  background-color: #ffccbc !important;
}
.mm-hover-deeporange200:hover {
  background-color: #ffab91 !important;
}
.mm-hover-deeporange300:hover {
  background-color: #ff8a65 !important;
}
.mm-hover-deeporange400:hover {
  background-color: #ff7043 !important;
}
.mm-hover-deeporange500:hover {
  background-color: #ff5722 !important;
}
.mm-hover-deeporange600:hover {
  background-color: #f4511e !important;
}
.mm-hover-deeporange700:hover {
  background-color: #e64a19 !important;
}
.mm-hover-deeporange800:hover {
  background-color: #d84315 !important;
}
.mm-hover-deeporange900:hover {
  background-color: #bf360c !important;
}

.mm-hover-brown50:hover {
  background-color: #efebe9 !important;
}
.mm-hover-brown100:hover {
  background-color: #d7ccc8 !important;
}
.mm-hover-brown200:hover {
  background-color: #bcaaa4 !important;
}
.mm-hover-brown300:hover {
  background-color: #a1887f !important;
}
.mm-hover-brown400:hover {
  background-color: #8d6e63 !important;
}
.mm-hover-brown500:hover {
  background-color: #795548 !important;
}
.mm-hover-brown600:hover {
  background-color: #6d4c41 !important;
}
.mm-hover-brown700:hover {
  background-color: #5d4037 !important;
}
.mm-hover-brown800:hover {
  background-color: #4e342e !important;
}
.mm-hover-brown900:hover {
  background-color: #3e2723 !important;
}

.mm-hover-grey50:hover {
  background-color: #fafafa !important;
}
.mm-hover-grey100:hover {
  background-color: #f5f5f5 !important;
}
.mm-hover-grey200:hover {
  background-color: #eeeeee !important;
}
.mm-hover-grey300:hover {
  background-color: #e0e0e0 !important;
}
.mm-hover-grey400:hover {
  background-color: #bdbdbd !important;
}
.mm-hover-grey500:hover {
  background-color: #9e9e9e !important;
}
.mm-hover-grey600:hover {
  background-color: #757575 !important;
}
.mm-hover-grey700:hover {
  background-color: #616161 !important;
}
.mm-hover-grey800:hover {
  background-color: #424242 !important;
}
.mm-hover-grey900:hover {
  background-color: #212121 !important;
}

.mm-hover-bluegrey50:hover {
  background-color: #eceff1 !important;
}
.mm-hover-bluegrey100:hover {
  background-color: #cfd8dc !important;
}
.mm-hover-bluegrey200:hover {
  background-color: #b0bec5 !important;
}
.mm-hover-bluegrey300:hover {
  background-color: #90a4ae !important;
}
.mm-hover-bluegrey400:hover {
  background-color: #78909c !important;
}
.mm-hover-bluegrey500:hover {
  background-color: #607d8b !important;
}
.mm-hover-bluegrey600:hover {
  background-color: #546e7a !important;
}
.mm-hover-bluegrey700:hover {
  background-color: #455a64 !important;
}
.mm-hover-bluegrey800:hover {
  background-color: #37474f !important;
}
.mm-hover-bluegrey900:hover {
  background-color: #263238 !important;
}

.mm-hover-black:hover {
  background-color: #000000 !important;
}

.mm-hover-white:hover {
  background-color: #ffffff !important;
}

.mm-hover-transparent:hover {
  background-color: transparent !important;
}

.mm-focus-red50:focus {
  background-color: #ffebee !important;
}
.mm-focus-red100:focus {
  background-color: #ffcdd2 !important;
}
.mm-focus-red200:focus {
  background-color: #ef9a9a !important;
}
.mm-focus-red300:focus {
  background-color: #e57373 !important;
}
.mm-focus-red400:focus {
  background-color: #ef5350 !important;
}
.mm-focus-red500:focus {
  background-color: #f44336 !important;
}
.mm-focus-red600:focus {
  background-color: #e53935 !important;
}
.mm-focus-red700:focus {
  background-color: #d32f2f !important;
}
.mm-focus-red800:focus {
  background-color: #c62828 !important;
}
.mm-focus-red900:focus {
  background-color: #b71c1c !important;
}

.mm-focus-pink50:focus {
  background-color: #fce4ec !important;
}
.mm-focus-pink100:focus {
  background-color: #f8bbd0 !important;
}
.mm-focus-pink200:focus {
  background-color: #f48fb1 !important;
}
.mm-focus-pink300:focus {
  background-color: #f06292 !important;
}
.mm-focus-pink400:focus {
  background-color: #ec407a !important;
}
.mm-focus-pink500:focus {
  background-color: #e91e63 !important;
}
.mm-focus-pink600:focus {
  background-color: #d81b60 !important;
}
.mm-focus-pink700:focus {
  background-color: #c2185b !important;
}
.mm-focus-pink800:focus {
  background-color: #ad1457 !important;
}
.mm-focus-pink900:focus {
  background-color: #880e4f !important;
}

.mm-focus-purple50:focus {
  background-color: #f3e5f5 !important;
}
.mm-focus-purple100:focus {
  background-color: #e1bee7 !important;
}
.mm-focus-purple200:focus {
  background-color: #ce93d8 !important;
}
.mm-focus-purple300:focus {
  background-color: #ba68c8 !important;
}
.mm-focus-purple400:focus {
  background-color: #ab47bc !important;
}
.mm-focus-purple500:focus {
  background-color: #9c27b0 !important;
}
.mm-focus-purple600:focus {
  background-color: #8e24aa !important;
}
.mm-focus-purple700:focus {
  background-color: #7b1fa2 !important;
}
.mm-focus-purple800:focus {
  background-color: #6a1b9a !important;
}


  `;

  render() {
    return html`
      <button type="button" class="${this.class}" part="button">
        ${this.text}
      </button>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "mm-btn": MMBtn;
  }
}


