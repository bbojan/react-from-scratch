import { FC, useState } from "react";

export const Form: FC<{}> = () => {
  const [password, setPassword] = useState("");
  // const firstNameRef = useRef<HTMLInputElement | null>(null);
  // const checkButtonRef = useRef<HTMLButtonElement | null>(null);
  // //   const [secondName, setSecondName] = useState("");
  // console.log("rendering");

  // useEffect(() => {
  //   console.log(checkButtonRef.current?.innerText);
  //   checkButtonRef.current?.focus();
  // }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // fetch("/user/create", { body: {} });
      }}
    >
      <div>
        <span>First Name: </span>
        <input name={"firstName"} placeholder={"First name"} />
      </div>
      <div>
        <span>Second Name: </span>
        <input name={"secondName"} placeholder={"Second name"} />
      </div>
      <div>
        <span>Password: </span>
        <input
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          value={password}
          onChange={(e) => {
            const newPass = e.target.value;
            // validate(newPass)
            setPassword(newPass);
          }}
        />
      </div>
      {/* <div>
        <span>Second Name: </span>
        <input
          placeholder={"Second name"}
          value={secondName}
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
        />
        <span>Second Name is: {secondName} </span>
      </div> */}
      <button type={"submit"}>Submit</button>
    </form>
  );
};
