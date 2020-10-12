class CustomButton extends HTMLElement {
  render(primaryColor) {
    const secondaryColor = adjustColor((primaryColor || '#000000'), -150);
    return `
    <style>
      :host {
          border: 1px solid ${primaryColor};
          border-radius: 5px;
          background: ${secondaryColor};
          color: ${primaryColor};
          font-family: sans-serif;
          padding: 5px;
          cursor: pointer
      }
    </style>
    Hi. I\'m a custom button.
  `
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.render(this.getAttribute('data-primary-color'));
  }
}

customElements.define('custom-button', CustomButton);