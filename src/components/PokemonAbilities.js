import React from "react";

import { Table } from "antd";

import pokemonData from "../data/usage-data.json";

class PokemonAbilities extends React.Component {
  constructor() {
    super();

    this.state = {
      abilities: Object,
    };
  }

  async componentDidMount() {
    this.setState({
      abilities: pokemonData[this.props.name]["abilities_percent"],
    });
  }

  render() {
    return (
      <>
        <h1>Common Abilities</h1>
        <Table
          columns={[
            { title: "Ability", dataIndex: "ability" },
            { title: "Usage (%)", dataIndex: "usage" },
          ]}
          pagination={{ hideOnSinglePage: true }}
          size={"small"}
          dataSource={Object.keys(this.state.abilities || {}).map((v, i) => {
            return { key: i, ability: v, usage: this.state.abilities[v] + "%" };
          })}
        />
      </>
    );
  }
}

export default PokemonAbilities;