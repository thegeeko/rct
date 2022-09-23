interface Params {
  label?: string;
  className?: string;
}

const Select = (props: Params) => {
  return (
    <div className="flex flex-col w-5/6 md:w-96 gap-1">
      <span className="font-bold text-l text-left">
        {props.label && props.label}
      </span>
      <select
        className={
          props.className ||
          "px-2 md:px-4 text-xl h-11 rounded-lg bg-white shadow-lg border-2 border-gray-300"
        }
        name="platform"
        id="platform"
        required
        defaultValue={localStorage.getItem("platform") || "uplay"}
      >
        <option value="uplay">PC</option>
        <option value="psn">PS4</option>
        <option value="xbl">Xbox</option>
        <option value="switch">Switch</option>
      </select>
    </div>
  );
};

export default Select;
