import { HiOutlineIdentification } from "react-icons/hi2";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useUser } from "../features/authentication/useUser";

function Account() {
  const {
    user: { id },
  } = useUser();
  const demoAcc = id === "fb245617-2ff5-40e4-afce-2f54b0b900f0";

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">
          <span>
            <HiOutlineIdentification />
          </span>
          {demoAcc
            ? "Update your account (⚠️THIS FEATURES IS NOT ALLOW FOR DEMO ACC)"
            : "Update your account"}
        </Heading>
      </Row>

      <Row type="form">
        <Heading as="h2">Update user data</Heading>
      </Row>
      <UpdateUserDataForm />

      <Row type="form">
        <Heading as="h2">Update password</Heading>
      </Row>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
