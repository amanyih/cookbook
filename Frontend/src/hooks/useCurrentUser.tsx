const useCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user != undefined ? JSON.parse(user) : null;
};

export default useCurrentUser;
