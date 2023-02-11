import axios from 'axios';

axios.get('https://api.kontenbase.com/query/api/v1/57d41d85-788d-4b3d-a289-267f237bf13d/currencyExchange')
.then(response => {
    console.log(response.data)
}).catch(error => { console.log(error);})

