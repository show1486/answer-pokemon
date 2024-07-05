import React from "react";
import { fetchPokemonData } from "@/apis/pokemon";
import Image from "next/image";
import Link from "next/link";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await fetchPokemonData(params.id);
  console.log(pokemon);
  return (
    <div>
      <div>
        <h2>{pokemon.korean_name}</h2>
        <p>No. {pokemon.id}</p>
      </div>
      <div>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          width={96}
          height={96}
        />
        <p>이름: {pokemon.korean_name}</p>
        <div>
          <p>키: {pokemon.height / 10}m</p>
          <p>무게: {pokemon.weight / 10}kg</p>
        </div>
        <div>
          <p>기술:</p>
          <div>
            {pokemon.moves.map((move: any) => (
              <div key={move.move.name}>{move.move.korean_name}</div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link href="/">뒤로 가기</Link>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
