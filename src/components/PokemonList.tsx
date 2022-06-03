import { usePokemonsQuery } from "../lib/generated/graphql-types";

export const PokemonList = () => {
  const [result] = usePokemonsQuery({
    variables: {
      first: 10,
    },
  });

  const { data } = result;

  return (
    <ul>
      {data?.pokemons?.map((pokemon) => (
        <li key={pokemon?.id}>
          {pokemon?.number} - {pokemon?.name}
        </li>
      ))}
    </ul>
  );
};
