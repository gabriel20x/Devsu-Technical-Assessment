import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const API_ROUTE = `https://pokemon-pichincha.herokuapp.com/pokemons/`

export const editPokemon = createAsyncThunk(
    'pokemon/editPokemon',
    async ({id,pokemonData}) => {
        try{
            const poke = await axios.put(API_ROUTE+id,pokemonData)
            return poke.data
          } catch (err) {
            console.error(err)
          } 
    }
)

export const extraEditPokemon = {
    [editPokemon.pending]: (state) => {
        state.edited = 'loading'
    },
    [editPokemon.fulfilled]: (state, action) => {
        state.edited = 'success'
        state.form = false
    },
    [editPokemon.rejected]: (state) => {
        state.edited = 'failed'
    },
}