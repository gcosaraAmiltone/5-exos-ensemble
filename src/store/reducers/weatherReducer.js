// == Initial State
  const initialState = {
    data: [],    
    tempMax: '',
    dayName: [],
    icon: '',
    sevenDays: [],
    };
    
  // == Types
  export const WEATHER_REQUEST = 'WEATHER_REQUEST';
  const WEATHER = 'WEATHER';
  
  // == Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case WEATHER:
        return {
          ...state,
          tempMax: 10,         
        };
  
      default:
        return state;
    }
  };
  
  // == Action Creators
  export const weatheRequest = () => ({
    type: WEATHER_REQUEST,    
  });

  export const weatheRequests = () => ({
    type: WEATHER,    
  });
  
  
  // == Selectors
  
  
  // == Export
  export default reducer;
  