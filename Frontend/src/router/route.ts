class Routes {
  public static readonly HOME = "/";
  public static readonly LOGIN = "login";
  public static readonly REGISTER = "register";
  public static readonly CATEGORIES = "categories";
  public static readonly CATEGORY = "category/:id";
  public static readonly NEW_RECIPE = "recipe";
  public static readonly RECIPE = "recipe/:id";
  public static readonly SEARCH = "search";
  public static readonly SEARCH_RESULT = "search/:query";
  public static readonly USER = "user/:id";
  public static readonly ABOUT = "about";
  public static readonly PROFILE = "profile";
  public static readonly FAVORITE = "favorite";
  public static readonly USER_RECIPE = "user-recipe";
  public static readonly USER_COMMENT = "user-comment";
  public static readonly USER_LIKES = "user-likes";
  public static readonly NOT_FOUND = "404";
}

export default Routes;
