  
import axios from 'axios';

import { WEATHER_REQUEST, setWeatherData } from './reducer';

const logMiddleware = store => next => (action) => {
  console.log('MIdleware');
  next(action);
  
  switch (action.type) {

    case WEATHER_REQUEST:
      axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=Niort,FR&&days=7&key=0fb9ad1c5ada4c879e5689c10a997019`
        //'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=c43cdb00d4e5df5c5224beeb49b93999'
      )
        .then(response => {  
          console.log("res =>", response.data.data);
          
          const weatherData = {
            data: response.data.data,
          };
          const actionSaveUser = setWeatherData(response.data.data);
          store.dispatch(actionSaveUser);
          
          
       // console.log(state.sevenDays);
        
          })
        .catch(error => {
          //console.log("error =>", error)),
         
        })
          
      .finally(function () {
        // always executed
      });

    // case AUTHENTICATE:
    //   store.dispatch(load());
    //   axios.get('https://api.github.com/user', {
    //     headers: {
    //       Authorization: `token ${store.getState().userReducer.token}`,
    //     },
    //   })
    //     .then((response) => {
    //       const user = {
    //         avatar: response.data.avatar_url,
    //         name: response.data.login,
    //       };
    //       const actionSaveUser = saveUser(user);
    //       store.dispatch(actionSaveUser);
    //       // store.dispatch(
    //       //   saveUser({
    //       //     avatar: response.avatar_url,
    //       //     name: response.login,
    //       //   }),
    //       // );
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .finally(() => {
    //       store.dispatch(finishLoad());
    //     });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
