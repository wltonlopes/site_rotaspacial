import React from "react";

class Home extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        nome: '',
        email: '',
      };

    this.handleChange=this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    const{ nome, email}=this.props;
    return(
      <>
      <h2>Home</h2>
      <form>
        <label>
          Nome:
          <input type='text' value={ nome } name='nome' onChange={this.handleChange}/>
        </label>
        <label>
          Email:
          <input type='email' value={ email } name='email' onChange={this.handleChange}/>
        </label>
        <button type='submit'>Enviar</button>
      </form>
      <section>
        <article>
          Home
        </article>
      </section>
      </>
    );
  }
}

export default Home;