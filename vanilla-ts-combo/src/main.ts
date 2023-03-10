// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
// <h1>Hello World 123</h1>`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import './style.css'

import currencyToSymbolMap from 'currency-symbol-map/map'
console.log(currencyToSymbolMap)

const inputForm = document.querySelector<HTMLDivElement>("#input-form");
const getInputElementId = document.getElementById("input-field");
const getOutputElementId = document.getElementById("output-field");
const rateCheck = document.getElementById("check-rate");
const buttonGetApi = document.getElementById("button-get-api");

// will be inside a function
inputForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  fetch("https://api.exchangerate.host/convert?from=SGD&to=IDR")
    .then((response) => response.json())
    .then((data) => console.log(data));
  const sgdToIdrConvertUrl =
    "https://api.exchangerate.host/convert?from=SGD&to=IDR";
  const response = await fetch(sgdToIdrConvertUrl);
  const data = await response.json();
  const liveRate = data.result;
  if(getInputElementId) {
    const output = getInputElementId.value * liveRate;
  }
  const outputTwoDecimalRoundUp = Number.parseFloat(output).toFixed(2);
  getOutputElementId.innerText =
    getInputElementId.value + " SGD = " + outputTwoDecimalRoundUp + " IDR";
  rateCheck.innerText = `1 SGD = ${liveRate} IDR`;
});

// test function to get API data (only applied to the optional 'Get API' button)
buttonGetApi.addEventListener("click", async () => {
  fetch("https://api.exchangerate.host/symbols")
    .then((response) => response.json())
    .then((data) => console.log(data));
  const symbolsUrl = "https://api.exchangerate.host/symbols";
  const response = await fetch(symbolsUrl);
  const dataSymbols = await response.json();
  const symbolsCode = dataSymbols.symbols;
  console.log(symbolsCode.length);
  const keys = Object.keys(symbolsCode);
  console.log(keys);
  console.log(keys.length);
  for (i = 1; i < keys.length; i++) {
    console.log(`Currency = ${keys[i]}`);
    const addSymbolsCodeIntoDropdown = document.createElement("option");
    document.select.appendChild(keys[i]);
  }
  const symbolsCodeStringified = JSON.stringify(symbolsCode);
  // const symbolsCodeStringifiedArray = [symbolsCodeStringified];
  // console.log(symbolsCode);
  // console.log(Array.isArray(symbolsCode));
  // console.log(symbolsCodeStringified);
  // console.log(symbolsCodeStringifiedArray.code);
  // console.log(symbolsCode.AED.code);
  // console.log(symbolsCode.AED.description);
});
