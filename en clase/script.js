const root = document.getElementById('root');
const e = React.createElement

// Hacer un Button
// size: small, medium, large -> medium por default
// rounded: true o false -> border-radius o cuadrado 'flat' -> false por default
// text: el contenido del boton// clase base


const Button = ({ size, rounded, text }) =>
{
  const buttonSize = size ? size : "medium";
  const buttonShape = rounded ? "rounded" : "";
  return e('button', { className: `${buttonSize} ${buttonShape}` }, text);
}


const App = () =>
{
  return e('main', null, [
    e(Button, { size: "small", text: "Pequeño" }),
    e(Button, { rounded: "true", text: "Redondeado" }),
    e(Button, { size: "large", text: "Grande" }),
  ])
}

ReactDOM.render(e(App), root)
