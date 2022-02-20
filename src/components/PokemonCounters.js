import React from 'react';

import { Table, Tooltip, Avatar } from 'antd';

import pokemonData from '../data/usage-data.json';

class PokemonCounters extends React.Component {

    constructor() { 

        super();

        this.state = {
            counters: Object
        }

    }

    // special name cases:
    spriteNameFormat(name) {

        switch(name) {
            case "Tapu Lele":
            case "Tapu Fini":
            case "Tapu Koko":
                return name.replace(" ", "-");
            
            case "Mr. Mime":
            case "Mr. Rime":
            case "Mime Jr.":
                return name.replace(".","").replace(" ","-");

            case "Type: Null":
                return name.replace(":","").replace(" ","-");

            case "NidoranM": return "Nidoran-M";
            case "NidoranF": return "Nidoran-F";

            case "Farfetch'd":
            case "Sirfetch'd":
                return name.replace("'","");

            default:
                return name;
        }

    }

    async componentDidMount() {

        this.setState({counters: pokemonData[this.props.name]["checks_counters"]});

    }

    render() {

        return( 

            <>
                <h1>Checks & Counters</h1>

                    <Table columns={[
                        {
                            "title": "Opponent", 
                            "dataIndex": "opponent",
                            "render": (pokemon) => {
                                return(
                                    <><Tooltip title={pokemon} mouseLeaveDelay={1}><Avatar src={"https://img.pokemondb.net/sprites/sword-shield/icon/" + (this.spriteNameFormat(pokemon)).toLowerCase() + ".png"} size={48} /></Tooltip> <a href={"/pokemon/"+pokemon}>{pokemon}</a></>
                                )
                            }
                        },
                        {"title": "KO (%)", "dataIndex": "ko"},
                        {"title": "Switch (%)", "dataIndex": "switch"}
                    ]}

                    pagination={{ hideOnSinglePage: true }}

                    size={"small"}

                    dataSource={
                        Object.keys(this.state.counters || {}).map((v, i) => {
                            return(
                                {
                                    "key": i, 
                                    "opponent": v,
                                    "ko": this.state.counters[v].split("/")[0],
                                    "switch": this.state.counters[v].split("/")[1]
                                }
                            )
                        })
                    }/>
            </>

        )

    }



}

export default PokemonCounters;