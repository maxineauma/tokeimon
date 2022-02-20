import React from 'react';

import pokemonData from '../data/usage-data.json';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import PokemonHeader from '../components/PokemonHeader';

import { Layout, Divider } from 'antd';
const { Header, Content } = Layout; 

export default function Home () { 

        return( 

            <>
                <Layout>
                    <Header>
                        <Navbar/>
                    </Header>
                </Layout>

                <Layout style={{
                    padding: "2rem",
                    width: "auto",
                    minHeight: "100vh"
                }}>
                    <Content style={{
                        padding: "3rem",
                        backgroundColor: "#1F1F1F"
                    }}>

                        <center>
                            <h1>Pok&eacute;mon &mdash; Usage Statistics Viewer</h1>
                        </center>

                        <Divider />
                        <Searchbar placeholder="Search for a Pok&eacute;mon!"/>
                        <Divider />

                        <h3>Top Three Threats</h3>

                        <Divider />
                        <PokemonHeader name={Object.keys(pokemonData)[0]} /> <Divider />
                        <PokemonHeader name={Object.keys(pokemonData)[1]} /> <Divider />
                        <PokemonHeader name={Object.keys(pokemonData)[2]} /> 
                        <Divider />

                    </Content>
                </Layout>  
            </>

        )

}