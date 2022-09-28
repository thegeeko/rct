interface Params {
  placeHolder?: string;
  label?: string;
  className?: string;
  divClassName?: string;
  onErrorRemove?(error: string): void;
}

const Input = (props: Params) => {
  const errorRemovalHandler = () => {
    if (props.onErrorRemove) props.onErrorRemove("");
  };

  return (
    <div
      className={
        "flex flex-col w-5/6 sm:w-72 md:w-96 2xl:w-[36rem] gap-1" +
        " " +
        props.divClassName
      }
    >
      {props.label && (
        <span className="font-bold text-base 2xl:text-2xl text-left dark:text-white ease-in-out duration-200">
          {props.label}
        </span>
      )}
      <input
        className={
          "px-2 md:px-4 text-lg h-8 2xl:h-14 rounded-lg 2xl:text-3xl bg-white shadow-lg" +
          " " +
          props.className
        }
        placeholder={props.placeHolder && props.placeHolder}
        required
        name="username"
        autoFocus={props.label ? true : false}
        defaultValue={localStorage.getItem("username") || ""}
        onChange={() => {
          errorRemovalHandler();
        }}
      ></input>
    </div>
  );
};

export default Input;
