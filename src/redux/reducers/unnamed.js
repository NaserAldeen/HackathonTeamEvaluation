const initialState = {
  semesters: [],
  criteria: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_SEMESTERS":
      return { ...state, semesters: payload };
    case "GET_CRITERIA": {
      console.log(payload);
      return { ...state, criteria: payload };
    }
    case "ADD_CRITERION": {
      console.log(payload);
      return { ...state, criteria: [...state.criteria, payload] };
    }
    case "ADD_TEAM": {
      console.log(payload);
      return { ...state };
    }
    case "ADD_SEMESTER": {
      return { ...state, semesters: [payload, ...state.semesters] };
    }
    case "ADD_PROJECT": {
      return { ...state, semesters: payload };
    }

    default:
      return state;
  }
};
