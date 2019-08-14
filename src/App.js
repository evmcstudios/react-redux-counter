import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

    /*   state = {

           age: 21

       }




       onAgeDown = () => {

        this.setState({
                       ...this.state,
                       age: --this.state.age

                   });


       }
       */


        render() {

          return (
            <div className="App">
              <header className="App-header">
                  <div onClick={ this.props.onAgeUp }  className="Button">Addition + <span></span></div>
                  <div className="age">{this.props.one.age}</div>
                  <div  onClick={ this.props.onAgeDown }  className="Button">Substraction - <span></span></div>
              </header>
            </div>
          );
        }

}

const mapStateToProps = (state) => {

    return {

         ...state

    }



}


const mapDispachToProps = (dispach) => {
    return {

        onAgeUp: () => dispach({ type: 'AGE_UP' }),
        onAgeDown: () => dispach({ type: 'AGE_DOWN' })

    }
}


export default connect(mapStateToProps, mapDispachToProps)(App);
