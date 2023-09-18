import { imageActions } from "..";
import { uiActions } from "../../ui";

const uploadImageAction = (uploadImage: any, image: FormData) => {
  return async (dispatch: any) => {
    dispatch(imageActions.resetImage());
    dispatch(imageActions.imageLoading());
    const upload = async () => {
      const res = await uploadImage({
        url: "/image",
        method: "POST",
        body: image,
      });
      if (res["status"] != "success")
        throw new Error("Error while uploading image");
      return res;
    };
    try {
      const res = await upload();
      dispatch(imageActions.image(res["data"]["image"]));
    } catch (err) {
      dispatch(imageActions.imageError());
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Error while uploading image. Please try again later.",
          duration: 5000,
        })
      );
    }
  };
};

export default uploadImageAction;
