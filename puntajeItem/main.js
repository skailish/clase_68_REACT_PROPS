const root = document.getElementById('root');
const e = React.createElement

// PuntajeItem y Puntaje
// Crear un componente PuntajeItem que tome un prop tipo con los valores lleno o vacio y muestre un ícono de una estrella llena o vacía según el caso

// Crear un componente Puntaje que tome un prop puntaje que sea del 1 al 5 y renderice 5 estrellas, siendo valor de score la cantidad de PuntajeItem con tipo lleno, mientras las restantes son tipo vacio, por ejemplo: ★★★✩✩

// Pueden usar íconos de FontAwesome o emojis

// EXTRA:

// Si usan íconos, permitir cambiar el color de las estrellas
// Permitir que PuntajeItem pueda tener otra ícono (corazón por ejemplo) y pueda ser configurado mediante un prop
// Permitir que Puntaje muestre un texto con el puntaje, por ejemplo: ★★★✩✩ 2 de 5 estrellas. Se puede ocultar el elemento usando una clase de CSS con la propiedad display: none

// const Icono = ({ tipo, icono }) =>
// {
//   const type = tipo == "vacio" ? "far" : "fas";
//   const icon = icono == "corazon" ? "heart" : "star";
//   return e('i', { className: `${type} fa-${icon}` }, "");
// }


// const PuntajeItem = ({ tipo, color, icono }) =>
// {
//   return [e('span', { className: `${tipo} ${color}` }, e(Icono, { tipo: tipo, icono: icono }))]
// }

// const Puntaje = ({ puntaje, color, icono, display }) =>
// {
//   const lleno = [];
//   const vacio = [];
//   const puntos = icono === "corazon" ? "corazones" : "estrellas";

//   for (let i = 0; i < puntaje; i++) {
//     vacio.push(e(PuntajeItem, { tipo: 'lleno', color: color, icono: icono }))
//   }
//   for (let i = 0; i < (5 - puntaje); i++) {
//     vacio.push(e(PuntajeItem, { tipo: 'vacio', color: color, icono: icono }))
//   }
//   return [e('div', { className: color }, [...lleno, ...vacio, e("span", { className: `texto ${display}` }, `${puntaje} de 5 ${puntos}`)])]
// }

// const App = () =>
// {
//   return e('main', null, [
//     e(Puntaje, { puntaje: 2, color: "rojo", icono: "corazon", display: "block" }),
//     e(Puntaje, { puntaje: 4, color: "verde", icono: "estrella", display: "none" }),
//     e(Puntaje, { puntaje: 1, color: "amarillo", icono: "estrella", display: "block" }),
//   ])
// }


const PuntajeItem = ({ tipo, color, icono }) =>
{
  const type = tipo == "vacio" ? "far" : "fas";
  const icon = icono == "corazon" ? "heart" : "star";
  return <i className={`${type} fa-${icon} ${color}`} />
}


const Puntaje = ({ puntaje, color, icono, display }) =>
{
  return (
    <div>
      {Array(puntaje).fill(<PuntajeItem color={color} tipo="lleno" icono={icono} />)}
      {Array(5 - puntaje).fill(<PuntajeItem color={color} tipo="vacio" icono={icono} />)}
      <span className={`texto ${display}`}>{`${puntaje} de 5 puntos`}</span>
    </div>
  )
}

const App = () =>
{
  return (
    <div>
      <Puntaje puntaje={5} icono="corazon" color="rojo" display="block" />
      <Puntaje puntaje={3} icono="estrella" color="amarillo" display="block" />
      <Puntaje puntaje={0} icono="corazon" color="verde" display="block" />
      <Puntaje puntaje={1} icono="estrella" display="none" />
      <Puntaje puntaje={2} icono="estrella" display="block" />
    </div>
  )
}

ReactDOM.render(<App />, root)
