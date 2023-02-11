import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import * as math from 'mathjs'
import axios from 'axios';

// write to innerHTML with div ID = app @ the index.html
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="../vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
const num1 = 10000;
const log = 10;


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const BASE_API_URL = `https://api.kontenbase.com/query/api/v1/57d41d85-788d-4b3d-a289-267f237bf13d/currencyExchange`

const axiosInstance = axios.create({baseURL: BASE_API_URL})

type Post = {
  _id: string;
  name: string;
  short_symbol: string;
}

const response = await axiosInstance.get('posts')
const posts: Post[] = response.data;


document.querySelector<HTMLDivElement>('#mathjs')!.innerHTML = `10,000 log by 10 equals to ${math.log(num1,log)}
<div>
${posts.map((post) => {return `<div>${post.name}</div>`})}</div>`

// const axiosFunction = 

// axios.get('https://api.kontenbase.com/query/api/v1/57d41d85-788d-4b3d-a289-267f237bf13d/currencyExchange')
// .then(response => {
//     console.log(response.data)
// }).catch(error => { console.log(error);})

