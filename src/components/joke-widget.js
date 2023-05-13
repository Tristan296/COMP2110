import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class JokeWidget extends LitElement {

  static properties = {
    twopart: { type: String },
    _data: { state: true },
    visible: { type: Boolean }


  }

  static styles =
    css`
/*default styles*/
:root {
  --background: #316273;
  --darkBlue: #20315a;
  --pinkHighlight: #c52973; 
  --purpleBody: #832052;
  --white: #f6f6ff;
  --dgray: #4a4a4a;
  --lgray: #bdbdc5;
  --pinkText: #f65273;
  --cyan: #41839c;
  --gold: #a47b39;
  --hay: #decd73;
  --blue: #8bc5cd;
  }
  div {
  min-width: 150px;
  min-height: 150px;
  background-color: var(--white);
  }
  .widget-border {
    width: 200px;
    border: 6px solid var(--pinkHighlight);
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    text-align: center;
}

/*DEFAULT STYLES FINISH*/
//write override styles below


          .widget-border button { 
            background-color: white;
            color: black;
            border-radius: 20px;
            border-style: none;
            transition: ease-out 0.1s;
          }
    
          .widget-border button:hover { 
            background-color: black;
            color: white;
            transition: ease 0.3s;
            transform: scale(1.05);
          }
    
          .widget-border button:active {
            background-color: black;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
          }
        }
      `;


  constructor() {
    super();
    this._data = null;
    this.visible = false;

  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchJoke();
  }



  fetchJoke() {
    fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart`)
      .then(response => response.json())
      .then(data => {
        this._data = data;
      });
  }

//show joke
  render() {
    if (this._data) {
      return html`
      
<div class="widget-border">
  <h2>Joke!</h2>
  <p> <b> ${this._data.setup} </b> </p>
  <div ?hidden="${!this.visible}">

  <p> ${this._data.delivery} </p>
</div>
<button @click="${this.togglePunchline}">${this.visible ? 'Hide Punchline' : 'Show Punchline'}</button>

<button @click="${this.getNewJoke}">Show New Joke</button>
`      ;
    }
    else {
      return html`
    <div class="widget-border">
    <h2>Joke!</h2>
        <p>joke loading...</p>
      </div>
    `;
    }
  }


//function to call new joke (used on button click)
  getNewJoke() {
    this.fetchJoke();
  }

  //function to hide and show punchline
  togglePunchline() {
    this.visible = !this.visible;
    const text = this.shadowRoot.querySelector('div hidden');
    text.hidden = !this.visible;
  }
}


customElements.define('joke-widget', JokeWidget);
