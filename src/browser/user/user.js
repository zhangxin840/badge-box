import utils from '../common/utils';
import React from 'react';
import ReactDOM from 'react-dom';

import s from './user.scss';

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

ReactDOM.render(<Hello />, document.getElementById('test'));
