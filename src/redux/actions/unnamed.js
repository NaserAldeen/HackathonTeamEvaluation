import instance from "./instance";

export const getSemesters = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/semester/");
      const semesters = res.data;
      dispatch({ type: "GET_SEMESTERS", payload: semesters });
    } catch (err) {
      console.error(err);
    }
  };
};
export const getCriteria = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/criterion/");
      const criteria = res.data;

      dispatch({ type: "GET_CRITERIA", payload: criteria });
    } catch (err) {
      console.error(err);
    }
  };
};
export const getProject = projectID => {
  return async dispatch => {
    try {
      const res = await instance.get(`/project/${projectID}/`);
      const project = res.data;

      dispatch({ type: "GET_PROJECT", payload: project });
    } catch (err) {
      console.error(err);
    }
  };
};
export const addSemester = semester => {
  return async dispatch => {
    try {
      const res = await instance.post("/semester/", { name: semester });
      const semesters = res.data;
      console.log(semesters);
      dispatch({ type: "ADD_SEMESTER", payload: semesters });
    } catch (err) {
      console.error(err);
    }
  };
};

export const addTeam = (name, teamMembers, projectID) => {
  return async dispatch => {
    try {
      const res = await instance.post("/team/create/", {
        name: name,
        team_members: teamMembers,
        project_id: projectID
      });
      const team = res.data;
      console.log(team);
      dispatch({ type: "ADD_TEAM", payload: team });
      dispatch(getSemesters());
    } catch (err) {
      console.error(err);
    }
  };
};

export const addCriterion = (name, weight) => {
  return async dispatch => {
    try {
      const res = await instance.post("/criterion/", {
        name: name,
        weight: +weight
      });
      const criterion = res.data;
      console.log(criterion);
      dispatch({ type: "ADD_CRITERION", payload: criterion });
    } catch (err) {
      console.error(err);
    }
  };
};

export const addProject = (
  semesterID,
  projectName,
  projectWeight,
  criteria
) => {
  return async dispatch => {
    try {
      const newCriteriaIDs = criteria.map(cri => +cri);

      const res = await instance.post("/project/", {
        semester: +semesterID,
        name: projectName,
        weight: +projectWeight,
        criteria: newCriteriaIDs
      });
      const project = res.data;
      console.log(project);
      dispatch({ type: "ADD_PROJECT", payload: project });
      dispatch(getSemesters());
    } catch (err) {
      console.error(err);
    }
  };
};
