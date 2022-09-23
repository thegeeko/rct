interface Params {
  placeHolder?: string;
  label?: string;
  className?: string;
}

const Input = (props: Params) => {
  return (
    <div className="flex flex-col w-5/6 md:w-96 gap-1">
      <span className="font-bold text-l text-left">
        {props.label && props.label}
      </span>
      <input
        className={
          props.className ||
          "px-2 md:px-4 text-xl h-11 rounded-lg bg-white shadow-lg border-2 border-gray-300"
        }
        placeholder={props.placeHolder && props.placeHolder}
        required
        name="username"
        defaultValue={localStorage.getItem("username") || ""}
      ></input>
    </div>
  );
};

export default Input;
