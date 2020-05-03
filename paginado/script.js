const root = document.getElementById('root');
const e = React.createElement

// Paginado
// Crear un componente Pagina que tome los siguientes props:

// actual, número de la página actual
// maximo, número de la página máxima
// y renderice un paginado de la siguiente forma: [Previous] [1] [...] [5] [...] [10] [Next], es decir, la página 1, puntos suspensivos, la página actual, puntos suspensivos y la página máxima, con las palabras para avanzar y retroceder.

// Ignorar lo que sucede si la página actual es igual a la primera o a la última.



const Pagina = ({ actual, maximo }) =>
{
  return [e('div', { className: 'contenedorPaginado' }, [e('button', { className: 'prev' }, 'Previous'), e('span', { className: 'min' }, 1), e('span', { className: 'puntos' }, '...'), e('span', { className: 'actual' }, actual), e('span', { className: 'puntos' }, '...'), e('span', { className: 'max' }, maximo), e('button', { className: 'next' }, 'Next')])]
}

const App = () =>
{
  return e('main', null, [
    e(Pagina, { actual: 5, maximo: 10 }),
  ])
}

ReactDOM.render(e(App), root)
