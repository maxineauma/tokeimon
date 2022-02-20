import React from "react";

import pokemonData from "../data/usage-data.json";
import Navbar from "../components/Navbar";
import PokemonHeader from "../components/PokemonHeader";

import { Layout, Divider } from "antd";
const { Header, Content } = Layout;

export default function Ranking() {
  return (
    <>
      <Layout>
        <Header>
          <Navbar />
        </Header>
      </Layout>

      <Layout
        style={{
          padding: "2rem",
          width: "auto",
          minHeight: "100vh",
        }}
      >
        <Content
          style={{
            padding: "3rem",
            backgroundColor: "#1F1F1F",
          }}
        >
          <h1>Ranking Board</h1>

          <Divider />

          {Object.keys(pokemonData).map((v, i) => {
            return (
              <>
                <PokemonHeader name={v} />
                <Divider />
              </>
            );
          })}
        </Content>
      </Layout>
    </>
  );
}