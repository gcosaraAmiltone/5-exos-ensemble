// == Initial State
const initialState = {
  weatherData: [],
  socialCardData: [
    {
      pseudo: '@dccedia', 
      firstname: 'Dave', 
      lastname: 'Ceddia'
    },
    {
      pseudo: '@gcosara', 
      firstname: 'Guéna', 
      lastname: 'Cosara'
    },
    {
      pseudo: '@ttata', 
      firstname: 'Toto', 
      lastname: 'Tata'
    },    
  ],
  };
  
// == Types
export const WEATHER_REQUEST = 'WEATHER_REQUEST';
const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.weatherData,         
      };

    default:
      return state;
  }
};

// == Action Creators
export const weatherRequest = () => ({
  type: WEATHER_REQUEST,    
});

export const setWeatherData = (weatherData) => ({
  type: SET_WEATHER_DATA,
  weatherData,
  
});


// == Selectors


// == Export
export default reducer;
