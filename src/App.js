import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { connect, Provider } from 'react-redux';


import { combineReducers, createStore } from 'redux';
import reducer from './store/reducer';
import reducerv2 from './store/reducerv2';

const globalReducers = combineReducers({
    one: reducer,
    two: reducerv2
});

const store = createStore(globalReducers);

class App extends Component {


        render() {

          return (
            <div className="App">
              <header className="App-header">
                  <div onClick={ this.props.onAgeUp }  className="Button">Addz ++ <span></span></div>
                  <div className="age">{this.props.one.age}</div>
                  <div  onClick={ this.props.onAgeDown }  className="Button">Substractz -- <span></span></div>
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


const ConnectedApp = connect(mapStateToProps, mapDispachToProps)(App);



// export default connect(mapStateToProps, mapDispachToProps)(App);


export default function() {

     return <Provider store={store} ><ConnectedApp /></Provider>

}
