import axios from "axios";

import "./style.css";

const BASE_API_URL = `https://api.kontenbase.com/query/api/v1/57d41d85-788d-4b3d-a289-267f237bf13d`;

const axiosInstance = axios.create({ baseURL: BASE_API_URL });

type Currency = {
  _id: string;
  name: string;
  short_symbol: string;
};

const response = await axiosInstance.get("/currencyExchange");
const currencies: Currency[] = response.data;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div>
      ${currencies
        .map((currency) => {
          return `<div>
            <h1>${currency.name}</h1>
            <p>${currency.short_symbol}</p>
          </div>`;
        })
        .join("")}
    </div>
  </div>
`;
