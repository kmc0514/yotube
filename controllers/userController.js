import routes from "../routes";

export const getJoin = (req, res) => res.render("join", { pageName: "Join" });

export const postJoin = (req, res) => {
  const {
    body: { name, email, password1, password2 },
  } = req;
  if (password1 !== password2) {
    res.status(400);
    res.render("join", { pageName: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageName: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageName: "Users" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageName: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageName: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageName: "Change Password" });
