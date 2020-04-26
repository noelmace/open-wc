/* eslint-disable class-methods-use-this, import/no-extraneous-dependencies */
import { css, html, LitElement } from 'lit-element';

class DemoComponent extends LitElement {
  static get styles() {
    return css`
      p {
        color: blue;
      }
    `;
  }

  render() {
    return html` <p>Demo component</p> `;
  }
}

customElements.define('demo-component', DemoComponent);
