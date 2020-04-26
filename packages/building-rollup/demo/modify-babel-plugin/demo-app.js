import { html, LitElement } from 'lit-element';

class DemoApp extends LitElement {
  render() {
    return html`
      <!-- foo -->
      <!-- bar -->
    `;
  }
}

customElements.define('demo-app', DemoApp);
