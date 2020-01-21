// == Initial State
const initialState = {
  data: [],    
  tempMax: 1,
  dayName: [],
  icon: '',
  sevenDays: [],
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
        data: action.weatherData,         
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
