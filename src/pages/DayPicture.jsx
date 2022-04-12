import React from 'react';
import Card from 'react-bootstrap/Card';

class DayPicture extends React.Component {
    state = {
        imagemDia: [],
    };

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=Vm6NPNxINDVGQlBiqFPIckn85UPoIAZ1ubnqF4HF')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    imagemDia: res
                });
            });
    }

    render() {
        return (

            <>
            <Card>
                <Card.Img variant="top" src={this.state.imagemDia.url} alt={this.state.imagemDia.title} />
                <Card.Body>
            <h1>Imagem do dia</h1>
                <Card.Text>
                    <h2>{this.state.imagemDia.title}</h2>
                    <h3>{this.state.imagemDia.copyright}</h3>
                    <p>{this.state.imagemDia.date}</p>
                    <article>{this.state.imagemDia.explanation}</article>
                </Card.Text>
                </Card.Body>
            </Card>
            </>
        );
    }
}

export default DayPicture;
