import React, { Component } from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
import Header from "./Header";
import cards from "./cards.json";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends Component {
  // Setting the initial state of the Counter component
  state = {
    cards,
    score: 0,
    highscore: 0
  };
  //ends the game if score > highscore
  itsGameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    } this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game over!!! \nscore: ${this.state.score}`)
    this.setState.score({ score: 0 });
    return true;
  };

  // clickcounter handles the counting of the cards and the game operation
  clickCounter = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
            this.state.cards.sort(() => Math.random() - 0.5)
            return true;
          });
        } else {
          this.itsGameOver();
          return false;
        }
      };
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Llamma Try?</Header>
        {this.state.cards.map(card => (
          <Card
            clickCounter={this.clickCounter}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Counter;
