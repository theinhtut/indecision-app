import React from 'react';

const Action = props => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should I do?
    </button>
  </div>
);
  
  // class Action extends React.Component {
  //   // handlePick() {
  //   //   alert('handlePick');
  //   // }
  //   render() {
  //     return (
  //       <div>
  //         <button
  //           onClick={this.props.handlePick}
  //           disabled={!this.props.hasOptions}
  //         >
  //           What should I do?
  //         </button>
  //       </div>
  //     );
  //   }
  // }

  export default Action;