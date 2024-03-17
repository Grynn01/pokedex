Esta es la tarea front-end de Examedi.

## Como ejectuar

```bash
npm install
npm run dev
```

Y luego en el navegador ir a la dirección [http://localhost:3000](http://localhost:3000).

## Comentarios

* Las debilidades de los pokemones con doble tipo podrían estar mal calculadas. La lógica que se ocupó para este cálculo es la suma de las debilidades de cada tipo.
* Cuando se vuelve de la vista de un pokemon a la lista general, la paginación comienza desde el inicio.
* En general no es buena práctica que una componente llame a una API, pero por tiempo dejé un llamado en el componente PokemonCard. Con mas tiempo esto se puede refactorizar para que ninguna componente llame a una API.
* En el caso de los test no me alcanzó el tiempo para dejar cada vista y componente con sus tests. En caso de tener mas tiempo esto se puede realizar con librerias como jest.

