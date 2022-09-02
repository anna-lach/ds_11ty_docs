import {LitElement, html, css} from 'lit';

class DemoGreeter extends LitElement {
    static styles = css`
    b { color: #041c52; }
  `;

    static properties = {
        name: {},
    };

    render() {
        return html`Hello <b>${this.name}<slot></slot></b>!`;
    }
}
customElements.define('demo-greeter', DemoGreeter);
