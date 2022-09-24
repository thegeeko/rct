interface Params {
  placeHolder?: string;
  label?: string;
  className?: string;
}

const Input = (props: Params) => {
  return (
    <div className="flex flex-col w-5/6 md:w-96 gap-1">
      <span className="font-bold text-base text-left dark:text-white ease-in-out duration-300">
        {props.label && props.label}
      </span>
      <input
        className={
          props.className ||
          "px-2 md:px-4 text-lg h-8 rounded-lg bg-white shadow-lg border-2 border-gray-300"
        }
        placeholder={props.placeHolder && props.placeHolder}
        required
        name="username"
        autoFocus={props.label ? true : false}
        defaultValue={localStorage.getItem("username") || ""}
      ></input>
    </div>
  );
};

export default Input;
