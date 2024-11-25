import styles from "./ButtonContainer.module.css";

const ButtonCantainer = ({ onButtonClicked }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonCantainer}>
      {buttonName.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClicked(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonCantainer;
