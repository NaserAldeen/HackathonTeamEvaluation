const initialState = {
  semesters: [],
  criteria: [],
  currentProject: {},
  notes: {}
};

export default (state = initialState, { type, payload, team, notes }) => {
  switch (type) {
    case "GET_SEMESTERS":
      return { ...state, semesters: payload };
    case "GET_CRITERIA": {
      console.log(payload);
      return { ...state, criteria: payload };
    }
    case "GET_PROJECT": {
      return { ...state, currentProject: payload };
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
    case "SET_NOTES": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
