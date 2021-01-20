import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserInfos() {
    return service
      .get("/api/users/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser(data) {
    return service
      .patch("/api/users/me", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  lesson(lessonInfo) {
    return service
      .post("/api/lessons/create", lessonInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  event(eventInfo) {
    return service
      .post("/api/events/create", eventInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllUsers() {
    return service
      .get("/api/users")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllLessons() {
    return service
      .get("/api/lessons")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneLesson(lessonId) {
    return service
      .get(`/api/lessons/${lessonId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
