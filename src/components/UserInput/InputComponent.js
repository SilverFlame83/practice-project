import { useState } from "react";
import Button from "../../UI/Buton";
import styles from "./InputComponent.module.css";

const InputComponent = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsVlaid] = useState(true);

  const userInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsVlaid(true);
    }
    setEnteredValue(event.target.value);
  };
  const ageInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsVlaid(true);
    }
    setEnteredAge(event.target.value);
  };

  const inputHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsVlaid(false);
      console.log("All fields are required!");
      return;
    }
    const enteredContent = {
      username: enteredValue,
      age: enteredAge,
    };
    props.onAddUser(enteredContent);

    setEnteredValue("");
    setEnteredAge("");
  };
  return (
    <form onSubmit={inputHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label >Username</label>
        <input value={enteredValue} type="text" onChange={userInputHandler} />
        <label>Age</label>
        <input type="number" value={enteredAge} onChange={ageInputHandler}></input>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default InputComponent;
