import { Dispatch } from "redux";
import RequestInfo from "../../../types/models/requestinfo";
import { categoryActions } from "..";

const getAllOriginsAction = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(categoryActions.getOriginsLoading());
    const getOrinis = async () => {
      const response = await sendRequest({
        url: "/category/origin",
        method: "GET",
      });
      if (response["status"] != "success")
        throw new Error("Something went wrong!");

      return response;
    };
    try {
      const response = await getOrinis();
      dispatch(categoryActions.getOrigins(response["data"]["origins"]));
    } catch (error: any) {
      dispatch(categoryActions.getOriginsFailed(error.message));
    }
  };
};

const getAllMealCoursesAction = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(categoryActions.getMealCoursesLoading());
    const getMealCourses = async () => {
      const response = await sendRequest({
        url: "/category/mealcourse",
        method: "GET",
      });
      if (response["status"] != "success")
        throw new Error("Something went wrong!");

      return response;
    };
    try {
      const response = await getMealCourses();
      dispatch(categoryActions.getMealCourses(response["data"]["mealcourses"]));
    } catch (error: any) {
      dispatch(categoryActions.getMealCoursesFailed(error.message));
    }
  };
};

const getAllDishtypesAction = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(categoryActions.getDishTypesLoading());
    const getDishtypes = async () => {
      const response = await sendRequest({
        url: "/category/dishtype",
        method: "GET",
      });
      if (response["status"] != "success")
        throw new Error("Something went wrong!");

      return response;
    };
    try {
      const response = await getDishtypes();
      dispatch(categoryActions.getDishTypes(response["data"]["dishtypes"]));
    } catch (error: any) {
      dispatch(categoryActions.getDishTypesFailed(error.message));
    }
  };
};

const getAllDietTypesAction = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(categoryActions.getDietLoading());
    const getDietTypes = async () => {
      const response = await sendRequest({
        url: "/category/diet",
        method: "GET",
      });
      if (response["status"] != "success")
        throw new Error("Something went wrong!");

      return response;
    };
    try {
      const response = await getDietTypes();
      dispatch(categoryActions.getDiet(response["data"]["diets"]));
    } catch (error: any) {
      dispatch(categoryActions.getDietFailed(error.message));
    }
  };
};

export {
  getAllOriginsAction,
  getAllMealCoursesAction,
  getAllDishtypesAction,
  getAllDietTypesAction,
};
