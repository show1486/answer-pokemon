"use client";

import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);
  return (
    <div>
      {pokemons.length === 0 ? (
        <div>
          <p>로딩 중입니다.</p>
        </div>
      ) : (
        <div>
          {pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={96}
                  height={96}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호: {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
