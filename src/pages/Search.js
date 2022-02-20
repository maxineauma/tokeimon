import React from "react";
import { useParams } from "react-router";

import pokemonData from "../data/usage-data.json";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import PokemonHeader from "../components/PokemonHeader";

import { Layout, Divider } from "antd";
const { Header, Content } = Layout;

const closest_match = require("closest-match");

export default function Search() {
  const { name } = useParams();

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
          <h1>Search results for "{name}"...</h1>

          <Divider />

          <Searchbar placeholder={name} />

          <Divider />

          {closest_match
            .closestMatch(name, Object.keys(pokemonData), true)
            .map((v) => {
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