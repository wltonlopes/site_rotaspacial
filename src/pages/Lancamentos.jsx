import React from 'react';
import Card from 'react-bootstrap/Card';


class Lancamentos extends React.Component{

  constructor(){
    super();
    this.state = {
      lista:[],
    };
  }

  componentDidMount() {
    fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
    .then(res=>res.json())
    .then(res=>{
      this.setState( {lista: res.result});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return(
      <div>
        <h2>Lancamentos</h2>
        { this.state.lista.map((i)=>(
          <Card className="text-center">
            <Card.Header>{i.name}</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
              {i.launch_description}
              </Card.Text>
              <Card.Text>
                <h4>Veiculo: </h4>
                <p>{i.vehicle.name}</p>
              </Card.Text>
              <Card.Text>
              <h4>Local: </h4>
              <p>{i.pad.location.country}</p>
              <p>{i.pad.location.name}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">...</Card.Footer>
          </Card>
        ))}
      </div>
    );
  }
}

export default Lancamentos;
