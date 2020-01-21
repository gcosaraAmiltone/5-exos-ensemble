// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Numbers from '../components/Calculator/Numbers/Numbers';

// Action Creators
import { clear, putInput } from '../store/reducer';;


const mapStateToProps = (state, ownProps) => ({
  input: state.calcInput,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  clear: () => {
    dispatch(clear());
  },
  putInput: (number) => () => {
    dispatch(putInput(number));
  },
});

// Container
const NumbersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Numbers);

// == Export
export default NumbersContainer;


