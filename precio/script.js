const root = document.getElementById('root');
const e = React.createElement

// Precio
// Crear un componente Precio que tenga los props:

// valor, que toma un número
// moneda, que tome un string con el tipo de moneda (ARS, USD, EUR, etc.)
// y que renderice el precio formateado con el símbolo de la moneda adelante



const Precio = ({ valor, moneda }) =>
{
  return [e('div', null, [e('span', null, moneda), e('span', null, valor)])]
}

const App = () =>
{
  return e('main', null, [
    e(Precio, { valor: 10, moneda: 'ARS' }),
    e(Precio, { valor: 100, moneda: 'USD' }),
    e(Precio, { valor: 1000, moneda: 'EUR' }),
  ])
}

ReactDOM.render(e(App), root)
