// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from '../components/Header/Header';

// Action Creators
import { weatherRequest } from '../store/reducer';


const mapStateToProps = (state) => ({
});


const mapDispatchToProps = (dispatch) => ({
    doRequest: () => {
        dispatch(weatherRequest());
    },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;





