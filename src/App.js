import React from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import cards from "./images.json";

//this.state.cards
class App extends React.Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  wrongClick = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! Play again! \nYour Score: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickObj = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.wrongClick();
        }
      }
    });
  }


  //Render each card object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore}>Clicky Game</Navbar>
        <Banner/>
        {this.state.cards.map(card =>
          (
            <Card
              clickObj={this.clickObj}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
      </Wrapper>

    );
  }
}

export default App;