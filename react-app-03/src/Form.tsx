import { FC, useEffect, useRef } from "react";

export const Form: FC<{}> = () => {
  const firstNameRef = useRef<HTMLInputElement | null>(null);

  const checkButtonRef = useRef<HTMLButtonElement | null>(null);
  //   const [secondName, setSecondName] = useState("");
  console.log("rendering");

  useEffect(() => {
    console.log(checkButtonRef.current?.innerText);
    checkButtonRef.current?.focus();
  }, []);

  return (
    <div>
      <div>
        <span>First Name: </span>
        <input ref={firstNameRef} placeholder={"First name"} />

        <button
          ref={checkButtonRef}
          onClick={() => {
            console.log(`First Name is ${firstNameRef.current?.value}`);
          }}
        >
          Check
        </button>
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
    </div>
  );
};
