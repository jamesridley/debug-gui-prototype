import './Terminal.css';

import React from 'react';
import { animateScroll } from 'react-scroll';

class Terminal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'terminal_pre',
      duration: 0
    });
  }

  render() {
    return (
      <div className='terminal'>
        <pre id='terminal_pre'>{this.props.content}</pre>
      </div>
    );
  }
}

Terminal.defaultProps = {
  content: 'The content prop of this component has not been set'
};

export default Terminal;
