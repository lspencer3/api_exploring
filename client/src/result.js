import React, { Component } from "react";
import { Section, Container, Title, SubTitle, Input, Button, Hero, Card, Content, Icon} from 'reactbulma'


class Saves extends Component {

    constructor(props) {
        super(props)        
    }

    render() {
        return (
            this.props.results.map(results => {
                return (
                    <div style={{display:"inline-block", width:"40%", margin:"5%" }}>
                        <Card>
                            <Card.Image src={results.poster}  />
                            <Card.Header>
                                <Card.Header.Title>
                                    <a target="_blank" href={results.website}>
                                    <SubTitle>{results.title}</SubTitle></a>
                                </Card.Header.Title>
                            </Card.Header>
                            <p>
                            {results.rated}
                            {results.year}
                            {results.genre}
                            {results.actors}
                            </p>
                            <P>
                            ratings: {results.ratings[1]}
                        </Card>
                    </div>
                )
            })
        )
    }
};

export default Saves;
