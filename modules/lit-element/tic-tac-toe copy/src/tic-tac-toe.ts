import { customElement, LitElement } from './node_modules/lit-element'
import { html } from './node_modules/lit-html'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  render() {
    return html`<h1>Hello world</h1>`
  }
}
