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
  calcInput: '',
  calcMemory: '',
  calcAdd: false,
  calcSubstract: false,
  calcDivis: false,

  };
  
// == Types
const CLEAR = 'CLEAR';
const DO_ADD = 'DO_ADD';
const DO_DIVIS = 'DO_DIVIS';
const DO_SUBSTARCT = 'DO_SUBSTARCT';
const EQUAL = 'EQUAL';
const PUT_INPUT = 'PUT_INPUT';
const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const WEATHER_REQUEST = 'WEATHER_REQUEST';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        calcInput: '',
        calcMemory: '',
      };
    case DO_ADD:
      const memoAdd = state.calcMemory === '' ? state.calcInput : parseInt(state.calcMemory)+parseInt(state.calcInput)
      return{
        ...state,
        calcMemory: memoAdd, 
        calcInput: '',
        calcAdd: true,
        calcSubstract: false,
        calcDivis: false,
      }; 
    case DO_DIVIS:
      const memoDiv = state.calcMemory === '' ? state.calcInput : parseInt(state.calcMemory)+parseInt(state.calcInput)
      return{
        ...state,
        calcMemory: memoDiv, 
        calcInput: '',
        calcDivis: true,
        calcAdd: false,
        calcSubstract: false,
      };
    case DO_SUBSTARCT:
    const memoSub = state.calcMemory === '' ? state.calcInput : parseInt(state.calcMemory)+parseInt(state.calcInput);

    return {
      ...state,
      calcMemory: memoSub, 
      calcInput: '',
      calcSubstract: true,
      calcAdd: false,
      calcDivis: false,     
    };
    case EQUAL:
      
        if(state.calcAdd) {
          const result = parseInt(state.calcMemory)+parseInt(state.calcInput);
          console.log('result =>', result);      
          return {
            ...state,
            calcInput: result,
          };
        };
    
        if(state.calcSubstract) {
          const result = parseInt(state.calcMemory)-parseInt(state.calcInput);
          console.log('result =>', result);      
          return {
            ...state,
            calcInput: result,
          };
        }
    
        if(state.calcDivis) {
          const result = parseInt(state.calcMemory)/parseInt(state.calcInput);
          console.log('result =>', result);      
          return {
            ...state,
            calcInput: result
          };      
    
      };
    case PUT_INPUT:
      return {
        ...state,
        calcInput: state.calcInput + action.number,
      };
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
export const add = () => ({
  type: DO_ADD,
});
export const clear = () => ({
  type: CLEAR,
});
export const divis = () => ({
  type: DO_DIVIS,
});
export const equal = () => ({
  type: EQUAL,  
});
export const substract = () => ({
  type: DO_SUBSTARCT,  
});
export const putInput = (number) => ({
  type: PUT_INPUT,
  number,
  
});
export const setWeatherData = (weatherData) => ({
  type: SET_WEATHER_DATA,
  weatherData,  
});
export const weatherRequest = () => ({
  type: WEATHER_REQUEST,    
});



// == Selectors


// == Export
export default reducer;
