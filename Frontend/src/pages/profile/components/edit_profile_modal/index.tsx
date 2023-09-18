import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  SectionTitle,
  TextArea,
} from "../../../../components";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import useInput from "../../../../hooks/useInput";
import useHttp from "../../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../store";
import { updateProfileAction } from "../../../../store/profile/actions";
import { AnyAction } from "redux";

interface EditProfileMoalProps {
  onClose: () => void;
  open: boolean;
}

const EditProfileMoal = ({ onClose, open }: EditProfileMoalProps) => {
  const user = useCurrentUser();
  const { profile, error, loading } = useSelector(
    (state: StateInterface) => state.profile
  );
  const dispatch = useDispatch();
  const { value: email, onChange: setEmail } = useInput(
    user.email ?? "",
    (value) =>
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const { value: name, onChange: setName } = useInput(
    user.profile.name ?? "",
    (value) =>
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const [bio, setBio] = useState<string>(user.profile.bio ?? "");
  const { sendRequest: updateProfile } = useHttp();

  const saveChanges = async (event: any) => {
    event.preventDefault();

    const body = {
      email: email != user.email ? email : undefined,
      name: name != user.profile.name ? name : undefined,
      bio: bio != user.profile.bio ? bio : undefined,
    };

    dispatch(
      updateProfileAction(updateProfile, {
        id: user.id,
        profile: body,
      }) as unknown as AnyAction
    );
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <SectionTitle title="Edit Profile" />
      <form
        className=" w-full flex flex-col justify-between items-center px-10 py-10 mb-10"
        action=""
      >
        <Input value={email} onChange={setEmail} placeholder="Email" />
        <Input value={name} onChange={setName} placeholder="Name" />
        <TextArea value={bio} onChange={(e) => setBio(e!.target.value)} />
        <Button className="self-end" onClick={saveChanges}>
          Save Changes
        </Button>
      </form>
    </Modal>
  );
};

export default EditProfileMoal;
