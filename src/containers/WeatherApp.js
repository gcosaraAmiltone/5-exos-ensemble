// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import WeatherApp from '../components/WeatherApp/WeatherApp';

// Action Creators
//import { doRequest } from '../store/reducers/weatherReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  data: state.weatherData,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  // doRequest: () => {
  //   dispatch(doRequest());
  // },
});

// Container
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherApp);

// == Export
export default ExampleContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherApp);
*/
