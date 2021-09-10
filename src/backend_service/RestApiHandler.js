import axios from "axios";

const auth_configuration = {
  headers: {
    authorization: "Basic dXNlcjo3Y01fekM0Xg==",
  },
};

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

//parking_owner

export const getParkingOwners = () => {
  return instance.get("/parking_owner", auth_configuration);
};

//parking

export const getParkings = () => {
  return instance.get("/parking", auth_configuration);
};

export const createParking = (parking) => {
  return instance.post("/parking", parking, auth_configuration);
};

//feedback
export const getFeedback = () => {
  return instance.get("/feedback", auth_configuration);
};

export const createFeedback = (feedback) => {
  return instance.post("/feedback", feedback, auth_configuration);
};

export const deleteFeedback = (feedbackId) => {
  return instance.delete(`/feedback/${feedbackId}`, auth_configuration);
};
//blacklist

export const getBlacklist = () => {
  return instance.get("/blacklist", auth_configuration);
};

export const createBlacklistItem = (blacklist) => {
  return instance.post("/blacklist", blacklist, auth_configuration);
};

export const deleteBlacklistItem = (blacklistId) => {
  return instance.delete(`/blacklist/${blacklistId}`, auth_configuration);
};

//employees

export const getEmployees = () => {
  return instance.get("/employees", auth_configuration);
};

export const createEmployee = (employee) => {
  return instance.post("/employees", employee, auth_configuration);
};

export const updateEmployee = (employeeId, employee) => {
  return instance.put(`/employees/${employeeId}`, employee, auth_configuration);
};

export const deleteEmployee = (employeeId) => {
  return instance.delete(`/employees/${employeeId}`, auth_configuration);
};

//entrance_exit_log

export const getEntranceExitLogs = () => {
  return instance.get("/entrance_exit_log", auth_configuration);
};

export const createEntranceExitLog = (entranceExitLog) => {
  return instance.post("/entrance_exit_log", entranceExitLog, auth_configuration);
};

export const updateEntranceExitLog = (entranceExitLogId, entranceExitLog) => {
  return instance.put(
    `/entrance_exit_log/${entranceExitLogId}`,
    entranceExitLog,
    auth_configuration
  );
};

export const deleteEntranceExitLog = (vehicleId) => {
  return instance.delete(`/entrance_exit_log/${vehicleId}`, auth_configuration);
};

//park_area

export const getParkAreas = () => {
  return instance.get("/park_area", auth_configuration);
};

export const updateParkArea = (parkAreaId, parkArea) => {
  return instance.put(`/park_area/${parkAreaId}`, parkArea, auth_configuration);
};

//report_list

export const getReportList = () => {
  return instance.get("/report_list", auth_configuration);
};

export const createReportListItem = (reportList) => {
  return instance.post("/report_list", reportList, auth_configuration);
};

export const updateReportListItem = (reportListId, reportList) => {
  return instance.put(`/report_list/${reportListId}`, reportList, auth_configuration);
};

export const deleteReportListItem = (vehicleId) => {
  return instance.delete(`/report_list/${vehicleId}`, auth_configuration);
};

//users

export const getUsers = () => {
  return instance.get("/users", auth_configuration);
};

export const createUser = (user) => {
  return instance.post("/users", user, auth_configuration);
};

//vehicles

export const getVehicles = () => {
  return instance.get("/vehicles", auth_configuration);
};

export const createVehicle = (vehicle) => {
  return instance.post("/vehicles", vehicle, auth_configuration);
};

export const deleteVehicle = (vehicleId) => {
  return instance.delete(`/vehicles/${vehicleId}`, auth_configuration);
};
