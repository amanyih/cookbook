import { useState } from "react";
import { Button, Modal, Input, SectionTitle } from "../../../../components";
import useHttp from "../../../../hooks/useHttp";
import useInput from "../../../../hooks/useInput";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import { changePasswordAction } from "../../../../store/profile/actions";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../../../store";
import { AnyAction } from "redux";

const ChangePasswordModal = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const user = useCurrentUser();
  const { sendRequest: changePassword } = useHttp();
  const dispatch = useDispatch();
  const {
    value: curPassword,
    onChange: setcurPassword,
    error: curPasswordError,
    errorMessage: curPasswordErrorMessage,
  } = useInput(
    "",
    (value) =>
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const {
    value: newPassword,
    onChange: setNewPassword,
    error: newPasswordError,
    errorMessage: newPasswordErrorMessage,
  } = useInput("", (value) => {
    return (
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
    );
  });

  const {
    value: confirmPassword,
    onChange: setConfirmPassword,
    error: confirmPasswordError,
    errorMessage: confirmPasswordErrorMessage,
  } = useInput("", (value) => {
    return (
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined &&
      value === newPassword
    );
  });

  const saveChanges = async (event: any) => {
    event.preventDefault();
    const body = {
      curPassword,
      newPassword,
    };

    dispatch(
      changePasswordAction(changePassword, body) as unknown as AnyAction
    );
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <SectionTitle title="Change Password" />
        <form
          className=" w-full flex flex-col justify-between items-center  px-10 py-10 mb-10"
          action=""
        >
          <Input
            value={curPassword}
            onChange={setcurPassword}
            type="password"
            placeholder="Current Password"
            error={curPasswordError}
            errorMessage={curPasswordErrorMessage}
            maxLength={20}
            min={4}
          />
          <Input
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            placeholder="Confirm Password"
            error={confirmPasswordError}
            errorMessage={confirmPasswordErrorMessage}
            maxLength={20}
            min={4}
          />
          <Input
            value={newPassword}
            onChange={setNewPassword}
            type="password"
            placeholder="New Password"
            error={newPasswordError}
            errorMessage={newPasswordErrorMessage}
            maxLength={20}
            min={4}
          />

          <Button className="self-end" onClick={saveChanges}>
            Change Password
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
