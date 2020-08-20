import React from 'react';
import Header from './Header.jsx';
import Footer from './FooterComponent.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
};

export default App;





