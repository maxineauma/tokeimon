import React from 'react';

import { 
    PageHeader, Statistic, Row, Col
} from 'antd';

import { PercentageOutlined, NumberOutlined } from '@ant-design/icons';

import pokemonData from '../data/usage-data.json';

class PokemonHeader extends React.Component {

    constructor() { 

        super();

        this.state = {
            sprite: String,
            style: "home",
            rank: "-",
            usage_p: "-",
            usage_r: "-"
        };

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

        this.setState({

            sprite: "https://img.pokemondb.net/sprites/" + this.state.style + "/normal/"+ (this.spriteNameFormat(this.props.name)).toLowerCase() +".png",
            rank: JSON.stringify(pokemonData[this.props.name]["rank"]),
            usage_p: parseFloat(JSON.stringify(pokemonData[this.props.name]["usage_percent"])).toFixed(2),
            usage_r: JSON.stringify(pokemonData[this.props.name]["usage_raw"])

        });
    }


    render() {

        return( 

            <>
                <PageHeader 
                    title={<a href={"/pokemon/"+this.props.name}>{this.props.name}</a>}
                    subTitle={["Rank #", this.state.rank]}
                    avatar={{'src': this.state.sprite, 'size': 64 }}
                ></PageHeader>

                <Row>
                    <Col span={12}>
                        <Statistic title="Usage (%)" value={this.state.usage_p} suffix={<PercentageOutlined />}/>
                    </Col>

                    <Col span={12}>
                        <Statistic title="Usage (Raw)" value={this.state.usage_r} prefix={<NumberOutlined />}/>
                    </Col>
                </Row>
            </>

        )

    }


}

export default PokemonHeader;