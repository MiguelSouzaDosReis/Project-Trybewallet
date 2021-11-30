import React from 'react';
import Forms from '../componets/Froms';
import Header from '../componets/Header';
import Tabela from '../componets/Tabela';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Tabela />
      </div>
    );
  }
}

export default Wallet;
