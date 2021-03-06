import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeRow from "../poke-row/PokeRow";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../redux/features/pokemon/pokemonSlice";
import styles from './pokemon-table.module.css'
const PokemonTable = () => {

  const {pokemons,deleted,created,edited} = useSelector(state => state.pokemon)
  const dispatch = useDispatch()
  useEffect(()=>{
    deleted === 'success' ? dispatch(getPokemons()) : null
    created === 'success' ? dispatch(getPokemons()) : null
    edited === 'success' ? dispatch(getPokemons()) : null
  },[deleted,created,edited])
  useEffect(() => {
    dispatch(getPokemons())
  }, []);

  return (
    <table className={styles.container}>
      <thead>
        <tr role={"table-header-row"}>
          <th role={"table-header-column"}>Nombre</th>
          <th role={"table-header-column"}>Imagen</th>
          <th role={"table-header-column"}>Ataque</th>
          <th role={"table-header-column"}>Defensa</th>
          <th role={"table-header-column"}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.length > 0
          ? pokemons.map((pokemon,index) => {
              return <PokeRow 
                  {...pokemon}
                  key={index}
                />
            })
          : null}
      </tbody>
    </table>
  );
};

export default PokemonTable;
