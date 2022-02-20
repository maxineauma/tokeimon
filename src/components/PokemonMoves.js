import React from 'react';

import { Table } from 'antd';

import pokemonData from '../data/usage-data.json';

class PokemonMoves extends React.Component {

    constructor() { 

        super();

        this.state = {
            moves: Object
        }

    }

    async componentDidMount() {

        this.setState({moves: pokemonData[this.props.name]["common_moves"]});

    }

    render() {

        return( 

            <>
                <h1>Commonly Used Moves</h1>

                <Table columns={[
                    {"title": "Move", "dataIndex": "move"},
                    {"title": "Usage (%)", "dataIndex": "usage"}
                ]}

                pagination={{ hideOnSinglePage: true }}

                size={"small"}

                dataSource={
                    Object.keys(this.state.moves || {}).map((v, i) => {
                        return({"key": i, "move": v, "usage": this.state.moves[v] + "%"})
                    })
                }/>
            </>

        )

    }



}

export default PokemonMoves;