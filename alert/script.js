const root = document.getElementById('root');
const e = React.createElement

// Alert
// Crear un componente Alert que

// tenga como props status y message
// message es el mensaje de la alert
// status es un string con alguno de los siguientes valores:
// danger
// success
// warning
// info


const Alert = ({ status, mensaje }) =>
{
  return e('p', { className: `${status}` }, mensaje);
}


const App = () =>
{
  return e('main', null, [
    e(Alert, { status: "danger", mensaje: "Peligro peligro!!!" }),
    e(Alert, { status: "success", mensaje: "Éxito absoluto" }),
    e(Alert, { status: "warning", mensaje: "Cuidáu pescáu" }),
    e(Alert, { status: "info", mensaje: "Esto es un mensaje informativo" }),
  ])
}

ReactDOM.render(e(App), root)
