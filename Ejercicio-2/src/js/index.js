import { values, json } from './data.js';

// Declaración del nuevo objeto vacio
const nuevObjeto = {};

//Cruzar los datos de json y values
Object.entries(json.data).forEach(([key, value]) => {
  nuevObjeto[key] = {
    ...value,
    over: {
      carrier: values[value.over_carrier_service_id].carrier,
      service: values[value.over_carrier_service_id].service,
    },
    under: {
      carrier: values[value.under_carrier_service_id].carrier,
      service: values[value.under_carrier_service_id].service,
    },
  };
});

// Se muestra en consola el nuevo objeto
console.log(nuevObjeto);

// Entramos y recorremos el nuevo objeto, para luego pintarlo en el HTML
Object.entries(nuevObjeto).map((entry) => {
  const [key, value] = entry;
  const item = document.createElement('div');
  item.className = 'card';
  item.innerHTML = `
  <div class="card-body">
  <h5 class="card-title">${key}</h5>
  <h6 class="card-subtitle mb-2 text-muted">Limited: ${value.limit}</h6>
  <ul class="list-group">
    <strong class="subtitle">Over:</strong>  
    <li class="list-group-item"><strong>Carrier:</strong>${value.over.carrier}</li>
    <li class="list-group-item"><strong>Service:</strong>${value.over.service}</li>
    </ul>
    <ul class="list-group">
    <strong class="subtitle">Under:</strong>  
    <li class="list-group-item"><strong>Carrier:</strong>${value.under.carrier}</li>
    <li class="list-group-item"><strong>Service:</strong>${value.under.service}</li>
    </ul>
    </div>`;
  document.getElementById('resultados').appendChild(item);
});
