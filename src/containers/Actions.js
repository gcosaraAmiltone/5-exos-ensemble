// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Actions from '../components/Calculator/Actions/Actions';

// Action Creators
import { substract, equal, add, divis } from '../store/reducer';;


const mapStateToProps = (state, ownProps) => ({
  memory: state.calcMemory,
  input: state.calcInput,
});


const mapDispatchToProps = (dispatch, state) => ({
  add: () => {     
    dispatch(add());
  },
  divis: () => {     
    dispatch(divis());
  },
  equal: () => {     
    dispatch(equal());
  },
  substract: () => {     
    dispatch(substract());
  },
});

// Container
const ActionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Actions);

// == Export
export default ActionsContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Actions);
*/
