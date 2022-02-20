import React from "react";

import { Table } from "antd";

import pokemonData from "../data/usage-data.json";

class PokemonStats extends React.Component {
  constructor() {
    super();

    this.state = {
      stats: Object,
    };
  }

  async componentDidMount() {
    this.setState({ stats: pokemonData[this.props.name]["stat_spreads"] });
  }

  render() {
    return (
      <>
        <h1>Stat Spreads</h1>

        <Table
          columns={[
            { title: "Nature", dataIndex: "nature" },
            { title: "Usage (%)", dataIndex: "usage" },
          ]}
          pagination={{ hideOnSinglePage: true }}
          size={"small"}
          expandable={{
            expandedRowRender: (spread) => (
              <p>
                <b>HP: </b> {spread.description.split("/")[0]},&nbsp;
                <b>Attack: </b> {spread.description.split("/")[1]},&nbsp;
                <b>Defense: </b> {spread.description.split("/")[2]},&nbsp;
                <b>Special Attack: </b> {spread.description.split("/")[3]}
                ,&nbsp;
                <b>Special Defense: </b> {spread.description.split("/")[4]}
                ,&nbsp;
                <b>Speed: </b> {spread.description.split("/")[5]}
              </p>
            ),

            rowExpandable: (spread) => spread.nature !== "Other",
          }}
          dataSource={Object.keys(this.state.stats || {}).map((v, i) => {
            return {
              key: i,
              nature: v.split(":")[0],
              usage: this.state.stats[v] + "%",
              description: String(v.split(":")[1]),
            };
          })}
        />
      </>
    );
  }
}

export default PokemonStats;