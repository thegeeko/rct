interface Params {
  children?: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

const Button = (props: Params) => {
  return (
    <button
      className={
        props.className ||
        "bg-theme-accent w-36 h-12 rounded-2xl text-white font-bold text-lg shadow-lg"
      }
      type={props.type || ""}
    >
      {props.children || ""}
    </button>
  );
};

export default Button;
