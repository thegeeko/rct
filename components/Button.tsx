interface Params {
  children?: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

const Button = (props: Params) => {
  return (
    <button
      className={
        "bg-theme-accent hover:bg-theme-accent-dark ease-in-out duration-200 rounded-md text-white font-bold text-xl 2xl:text-2xl shadow-lg" +
        " " +
        props.className
      }
      type={props.type || ""}
    >
      {props.children || ""}
    </button>
  );
};

export default Button;
