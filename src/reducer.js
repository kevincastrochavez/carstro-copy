export const initialState = {
  showFilters: false,
  carsResults: [],
  brandsFilters: [],
  modelYearsFilters: [],
  tireSize: [],
  colors: [],
  minMaxPrice: [0, 0],
  minMaxMileage: [0, 0],
  showChat: false,
  singleBrand: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS':
      return {
        ...state,
        showFilters: action.showFilters,
      };
    case 'SHOW_CHAT':
      return {
        ...state,
        showChat: action.showChat,
      };
    case 'SET_CARS_RESULTS':
      return {
        ...state,
        carsResults: action.carsResults,
      };
    case 'SET_BRAND_FILTER':
      return {
        ...state,
        brandsFilters: [...state.brandsFilters, action.brandsFilters],
      };
    case 'REMOVE_BRAND_FILTER':
      return {
        ...state,
        brandsFilters: state.brandsFilters.filter(
          (item) => item !== action.brandsFilters
        ),
      };
    case 'SET_MODEL_YEAR_FILTER':
      return {
        ...state,
        modelYearsFilters: [
          ...state.modelYearsFilters,
          action.modelYearsFilters,
        ],
      };
    case 'REMOVE_MODEL_YEAR_FILTER':
      return {
        ...state,
        modelYearsFilters: state.modelYearsFilters.filter(
          (item) => item !== action.modelYearsFilters
        ),
      };
    case 'SET_TIRE_SIZE_FILTER':
      return {
        ...state,
        tireSize: [...state.tireSize, action.tireSize],
      };
    case 'REMOVE_TIRE_SIZE_FILTER':
      return {
        ...state,
        tireSize: state.tireSize.filter((item) => item !== action.tireSize),
      };
    case 'SET_COLOR_FILTER':
      return {
        ...state,
        colors: [...state.colors, action.colors],
      };
    case 'REMOVE_COLOR_FILTER':
      return {
        ...state,
        colors: state.colors.filter((item) => item !== action.colors),
      };
    case 'SET_MIN_MAX_PRICE_FILTER':
      return {
        ...state,
        minMaxPrice: action.minMaxPrice,
      };
    case 'SET_MIN_MAX_MILEAGE_FILTER':
      return {
        ...state,
        minMaxMileage: action.minMaxMileage,
      };
    case 'SET_SINGLE_BRAND':
      return {
        ...state,
        singleBrand: action.singleBrand,
      };
    case 'REMOVE_SINGLE_BRAND':
      return {
        ...state,
        singleBrand: undefined,
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        brandsFilters: [],
        modelYearsFilters: [],
        tireSize: [],
        colors: [],
      };
    default:
      return state;
  }
};

export default reducer;
