const resultadoNumerosPrimos = () => {
  // Declaración de variables(inputs y array vacio)
  let inputInicial = document.getElementById('numeroInicial').value;
  let numeroInicial = Number(inputInicial);
  let inputFinal = document.getElementById('numeroFinal').value;
  let numeroFinal = Number(inputFinal);
  let numerosPrimos = [];

  //Verificación si los inputs estan vacios
  if (numeroInicial === 0 || numeroFinal === 0) {
    alert('Debe completar todos los campos');
  } else if (numeroInicial > numeroFinal) {
    alert('Número inicial no puede ser mayor al número final');
  } else {
    function primo(numero) {
      for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return numero !== 1;
    }
    for (; numeroInicial < numeroFinal; numeroInicial++) {
      if (primo(numeroInicial)) {
        numerosPrimos.push(numeroInicial);
      }
    }
    // Muestra los resultados en consola
    console.log(numerosPrimos);

    // Pintando el HTML
    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.innerHTML = `${numerosPrimos}`;
    document.getElementById('resultados').appendChild(item);

    //Limpiando inputs
    document.getElementById('numeroInicial').value = '';
    document.getElementById('numeroFinal').value = '';
  }
};
