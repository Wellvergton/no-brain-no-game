import React from "react";
import GameCard from "../GameCard";

const GameList: React.FC = () => {
  return (
    <>
      <GameCard name="Game" imgSrc="https://picsum.photos/100" />
      <GameCard name="Game" imgSrc="https://picsum.photos/100" />
      <GameCard name="Game" imgSrc="https://picsum.photos/100" />
      <GameCard name="Game" imgSrc="https://picsum.photos/100" />
    </>
  );
};

export default GameList;
