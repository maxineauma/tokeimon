import React from "react";

import { Table, Tooltip, Avatar } from "antd";

import pokemonData from "../data/usage-data.json";

class PokemonTeammates extends React.Component {
  constructor() {
    super();

    this.state = {
      teammates: Object,
    };
  }

  // special name cases:
  spriteNameFormat(name) {
    switch (name) {
      case "Tapu Lele":
      case "Tapu Fini":
      case "Tapu Koko":
        return name.replace(" ", "-");

      case "Mr. Mime":
      case "Mr. Rime":
      case "Mime Jr.":
        return name.replace(".", "").replace(" ", "-");

      case "Type: Null":
        return name.replace(":", "").replace(" ", "-");

      case "NidoranM":
        return "Nidoran-M";
      case "NidoranF":
        return "Nidoran-F";

      case "Farfetch'd":
      case "Sirfetch'd":
        return name.replace("'", "");

      default:
        return name;
    }
  }

  async componentDidMount() {
    this.setState({
      teammates: pokemonData[this.props.name]["common_teammates"],
    });
  }

  render() {
    return (
      <>
        <h1>Teammates</h1>

        <Table
          columns={[
            {
              title: "Teammate",
              dataIndex: "teammate",
              render: (pokemon) => {
                return (
                  <>
                    <Tooltip title={pokemon} mouseLeaveDelay={1}>
                      <Avatar
                        src={
                          "https://img.pokemondb.net/sprites/sword-shield/icon/" +
                          this.spriteNameFormat(pokemon).toLowerCase() +
                          ".png"
                        }
                        size={48}
                      />
                    </Tooltip>{" "}
                    <a href={"/pokemon/" + pokemon}>{pokemon}</a>
                  </>
                );
              },
            },
            { title: "Usage (%)", dataIndex: "usage" },
          ]}
          pagination={{ hideOnSinglePage: true }}
          size={"small"}
          dataSource={Object.keys(this.state.teammates || {}).map((v, i) => {
            return {
              key: i,
              teammate: v,
              usage: this.state.teammates[v] + "%",
            };
          })}
        />
      </>
    );
  }
}

export default PokemonTeammates;