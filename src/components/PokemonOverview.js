import React from "react";

import { Divider } from "antd";

import PokemonHeader from "./PokemonHeader";
import PokemonAbilities from "./PokemonAbilities";
import PokemonItems from "./PokemonItems";
import PokemonMoves from "./PokemonMoves";
import PokemonStats from "./PokemonStats";
import PokemonTeammates from "./PokemonTeammates";
import PokemonCounters from "./PokemonCounters";
import Searchbar from "../components/Searchbar";

class PokemonOverview extends React.Component {
  render() {
    return (
      <>
        <Searchbar placeholder="Search for a Pok&eacute;mon!" />
        <Divider />

        <PokemonHeader name={this.props.name} />

        <Divider />
        <PokemonAbilities name={this.props.name} />

        <Divider />
        <PokemonItems name={this.props.name} />

        <Divider />
        <PokemonMoves name={this.props.name} />

        <Divider />
        <PokemonStats name={this.props.name} />

        <Divider />
        <PokemonTeammates name={this.props.name} />

        <Divider />
        <PokemonCounters name={this.props.name} />
      </>
    );
  }
}

export default PokemonOverview;