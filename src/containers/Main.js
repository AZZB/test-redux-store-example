import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';


const Main = (props) => {

  return (
    <div>
      <App />
    </div>
  );
}


function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({} , dispatch);
}

export default connect()(Main);
