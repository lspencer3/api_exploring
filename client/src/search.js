import React, { Component } from 'react';
import { Section, Container, Title, SubTitle, Input, Button, Hero, Card } from 'reactbulma'
import $ from "jquery";
import API from "./apisearch.js";


class Search extends Component {

    constructor(props) {
        super(props)
        this.state={
            results: [],
        }
    }



  render() {
    return (
        <div>
            <div style={{display:"flex", height:"100%"}}>

                <Section style={{height:"100vh", width:"35%", backgroundImage:"url(https://vignette.wikia.nocookie.net/total-movies/images/2/23/Songs_from_Movies.jpg/revision/latest?cb=20131122153346)", backgroundPosition:"center", backgroundRepeat:"None", backgroundSize:"cover", position:"relative"}}>

                    <Hero style={{position:"absolute", bottom:"40%", background:"rgba(255,255,255,0.9)", width:"75%"}}>
                        <Hero.Body >
                            <Container style={{ width:"100%", textAlign:"center"}}>
                            <Title >
                                Ultimate Entertainment Search Engine
                            </Title>
                            <SubTitle>
                                Enter a Title or Name to search any Movie or Song on the Right.
                            </SubTitle>
                            </Container>
                        </Hero.Body>
                    </Hero>

                </Section>

                <Section style={{height:"100vh", width:"35%"}}>

                    <Container style={{width:"90%",bottom:"-30%", textAlign:"center"}}>
                        <form  onSubmit={this.handleSubmitMovie}>

                            <div>
                                <h2>Enter a movie to search</h2>
                                <Input style={{marginBottom:"2%"}} warning medium id="moviename" placeholder="name"/>
                            </div>
                            <div>
                                <Button  type="submit" primary>Search</Button>
                            </div>

                        </form>
                    </Container>

                    <Container style={{width:"90%",bottom:"-40%", textAlign:"center"}}>
                        <form  onSubmit={this.handleSubmitSong}>
                            <div>
                                <h2>Enter a song to search</h2>
                                <Input style={{marginBottom:"2%"}} warning medium id="songname" placeholder="name"/>
                            </div>
                            <div>
                                <Button  type="submit" primary>Search</Button>
                            </div>
                        </form>
                    </Container>
                    </Section>

                    <Section style={{height:"100vh", width:"105%"}}>

                    <Container style={{textAlign:"center"}}>

                          <div style={{display:"inline-block", width:"20%", margin:"3%" }}>
                              <Card>
                                  <Card.Image src={this.state.results.Poster} square='4by3' />
                                  <Card.Header>
                                      <Card.Header.Title>
                                          {this.state.results.Title}
                                          <br></br>
                                      </Card.Header.Title>
                                  </Card.Header>
                                  <a  target="_blank" href={this.state.results.Website}>View Website</a>
                                  <p>
                            {this.state.results.Rated}
                            {this.state.results.Year}
                            {this.state.results.Genre}
                            {this.state.results.Actors}
                            </p>
                              </Card>
                          </div>
                </Container>


        </Section>
                </div>
            </div>
        )
    }



    handleSubmitMovie = (e) => {
        e.preventDefault();
        //On click of submit button, grab user data and push to firebase.
        const movie = $("#moviename").val().trim();
        API.getMovie(movie)
            .then(res => {
                console.log(res.data)
                this.setState({results:res.data})


            }).catch(err => console.log(err));
    }

    handleSubmitSong = (e) => {
            e.preventDefault();
            //On click of submit button, grab user data and push to firebase.
            const song = $("#songname").val().trim();
            API.getSong(song)
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err));

    }

}

export default Search;
