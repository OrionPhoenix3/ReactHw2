import React from 'react';
import User from '../components/busyness/User';
import Form from '../components/busyness/Form';
import LifecycleMethods from '../components/busyness/LifecycleMethods';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <section>
            <h3>React Homework 2.1</h3>
              <User></User>
          </section>
          <section>
            <h3>React Homework 2.2</h3>
              <Form></Form>
          </section>
          <section>
            <h3>React Homework 2.3</h3>
              <LifecycleMethods></LifecycleMethods>
          </section>
      </div>
    );
  }
}

