import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'
import { Pokemon } from './pokemon';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  // pokemonList = ['Bulbizarre', 'Salameche', 'TotoTiti'];
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon|undefined;


  ngOnInit(): void {
    // console.table(this.pokemonList);
    // console.log(POKEMONS[2]);
    console.log(this.pokemonList);
    //  this.selectPokemon(this.pokemonList[8]);
  }

  // selectPokemon(event: MouseEvent){
  selectPokemon(pokemonId: string){
    // const nombre = event.target.tagName;
    // const nombre = +(event.target as HTMLInputElement).value;
    // console.log(nombre=8);
    // const index: number = +(event.target as HTMLInputElement).value;
    const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id === id);
    if(pokemon){
      console.log(`Vous avez demandé le Pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log('Pokemon inexistant!');
      this.pokemonSelected = pokemon;
    }
  }

}
