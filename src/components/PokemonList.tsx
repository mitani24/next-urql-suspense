import { usePokemonsQuery } from "../lib/generated/graphql-types";

export const PokemonList = () => {
  const [result, executeQuery] = usePokemonsQuery({
    variables: {
      first: 10,
    },
  });

  const refresh = () => {
    executeQuery({ requestPolicy: "network-only" });
  };

  const { data, fetching } = result;

  return (
    <>
      <p>fetching: {fetching.toString()}</p>
      <ul>
        {data?.pokemons?.map((pokemon) => (
          <li key={pokemon?.id}>
            {pokemon?.number} - {pokemon?.name}
          </li>
        ))}
      </ul>
      <button onClick={refresh}>refresh</button>
    </>
  );
};
