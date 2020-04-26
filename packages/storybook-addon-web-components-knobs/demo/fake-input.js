/* eslint-disable import/no-extraneous-dependencies */
import { html, LitElement } from 'lit-element';

// @ts-ignore
export class FakeInput extends LitElement {
  static get properties() {
    return {
      focused: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.focused = false;
  }

  _requestUpdate(name, oldValue) {
    // @ts-ignore
    super._requestUpdate(name, oldValue);

    if (name === 'focused') {
      this.dispatchEvent(new Event('focused-changed'));
    }
  }

  focusin() {
    this.focused = true;
  }

  focusout() {
    this.focused = false;
  }

  render() {
    return html` <input type="text" @focusin=${this.focusin} @focusout=${this.focusout} /> `;
  }
}

customElements.define('fake-input', FakeInput);
