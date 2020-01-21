// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SocialCard from '../components/SocialCard/SocialCard';

// Action Creators


const mapStateToProps = (state, ownProps) => ({
  app: state.socialCardData,
});


const mapDispatchToProps = {};

// Container
const SocialCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocialCard);

// == Export
export default SocialCardContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocialCard);
*/
