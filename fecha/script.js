const root = document.getElementById('root');
const e = React.createElement

// Fecha
// Crear un componente Fecha que tenga un prop fecha que tome un objeto de tipo Date, y renderice un elemento p con la fecha formateada, por ejemplo: miércoles, 29 de abril de 2020

// Investigar Intl.DateTimeFormat



const Fecha = ({ fecha }) =>
{
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return [e('p', null, new Intl.DateTimeFormat('es-ES', options).format(fecha))]
}

const App = () =>
{
  return e('main', null, [
    e(Fecha, { fecha: new Date() }),
    e(Fecha, { fecha: new Date(2018, 4, 9) }),
    e(Fecha, { fecha: new Date(2020, 2, 17) }),
    e(Fecha, { fecha: new Date(1982, 8, 20) }),
  ])
}

ReactDOM.render(e(App), root)
