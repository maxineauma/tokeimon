import React from 'react';
import { useParams } from 'react-router';

import Navbar from '../components/Navbar';
import PokemonOverview from '../components/PokemonOverview';

import { Layout } from 'antd';
const { Header, Content } = Layout; 

export default function Pokemon () { 

        const { id } = useParams();

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

                        <PokemonOverview name={id} />

                    </Content>
                </Layout>
            </>

        )

}