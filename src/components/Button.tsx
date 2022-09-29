interface Params {
  children?: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

const Button = (props: Params) => {
  return (
    <button
      className={
        "bg-theme-accent hover:bg-theme-accent-dark ease-in-out duration-200 w-36 h-12 2xl:h-16 2xl:w-48 rounded-xl text-white font-bold text-3xl 2xl:text-4xl shadow-lg" +
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
