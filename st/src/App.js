import './App.css';
import photo from './la.jpg'

import React, { Component } from 'react'
export class App extends Component {

  constructor(props){
  super(props)
    this.state={
      fullName:"ELghorez Lamjed",
      profession:"Web Developper",   
      imgSrc: photo,
      bio:"Développeur web passionné, j'aime tout ce qui a trait à la technologie et suis toujours à l'affût des nouvelles technologies et des nouvelles idées novatrices dans le monde entier. J'adore le sport et suis toujours un mode de vie sain. Je me considère ouverte d'esprit, Je suis un ancien membre d'une association (Mashhad) et je respecte toujours les autres idées et pensées et je suis prêt à donner tout ce que je peux pour terminer mon travail de manière professionnelle et créative",
      show:false,
      counter:0,
      };
  }

 
    handelClique=()=>{
    this.setState({
      ...this.state,
      show:!this.state.show
    }
    )
  }
  timer() {
    this.setState({
      counter: this.state.counter + 1,
    });
    
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  
    render() {
        return (
          <div className="bd" >
          {this.state.show && (<div className="profile">
        
        <h1 className="title">{this.state.fullName}</h1>
        <img className="image" src={this.state.imgSrc }alt="photoprofile"/>  
      <p className="paragraphe">{this.state.profession}</p>
        <p className="paragraphe">{this.state.bio}</p>
        <p > Time:{this.state.counter}</p>
      </div>)}
          
      <button className="btn" onClick={this.handelClique} >show</button>
          </div>
     
    );
  }
}

export default App


