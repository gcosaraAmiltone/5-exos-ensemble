// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CalcInput from '../components/Calculator/Input/Input';

// Action Creators
//import { doSomething } from 'src/store/reducer';


const mapStateToProps = (state, ownProps) => ({
  value: state.calcInput,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  // doSomething: () => {
  //   dispatch(doSomething('Coucou'));
  // },
});

// Container
const CalcInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalcInput);

// == Export
export default CalcInputContainer;


