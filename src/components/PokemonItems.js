import React from "react";

import { Table, Tooltip, Avatar } from "antd";

import pokemonData from "../data/usage-data.json";

class PokemonItems extends React.Component {
  constructor() {
    super();

    this.state = {
      items: Object,
    };
  }

  async componentDidMount() {
    this.setState({ items: pokemonData[this.props.name]["items_percent"] });
  }

  render() {
    return (
      <>
        <h1>Item Usage</h1>

        <Table
          columns={[
            {
              title: "Item",
              dataIndex: "item",
              render: (item) => {
                return (
                  <>
                    <Tooltip title={item} mouseLeaveDelay={1}>
                      {item === "Other" || item === "Nothing" ? (
                        ""
                      ) : (
                        <Avatar
                          src={
                            "https://img.pokemondb.net/sprites/items/" +
                            item.replace(" ", "-").toLowerCase() +
                            ".png"
                          }
                          size={32}
                        />
                      )}
                    </Tooltip>{" "}
                    {item}
                  </>
                );
              },
            },
            { title: "Usage (%)", dataIndex: "usage" },
          ]}
          pagination={{ hideOnSinglePage: true }}
          size={"small"}
          dataSource={Object.keys(this.state.items || {}).map((v, i) => {
            return { key: i, item: v, usage: this.state.items[v] + "%" };
          })}
        />
      </>
    );
  }
}

export default PokemonItems;