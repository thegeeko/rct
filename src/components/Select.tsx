interface Params extends React.HTMLProps<HTMLSelectElement> {
  label?: string;
  className?: string;
  divClassName?: string;
  onErrorRemove?(error: string): void;
}

const Select = ({divClassName, onErrorRemove, ...props}: Params) => {
  const errorRemovalHandler = () => {
    if (onErrorRemove) onErrorRemove("");
  };

  return (
    <div
      className={
        "flex flex-col w-5/6 sm:w-72 md:w-96 2xl:w-[36rem] gap-1" +
        " " +
        divClassName
      }
    >
      {props.label && (
        <span className="font-bold text-base 2xl:text-2xl text-left dark:text-white ease-in-out duration-200">
          {props.label}
        </span>
      )}

      <select
        className={
          "px-2 md:px-4 text-lg h-8 2xl:h-14 2xl:text-3xl bg-white border outline-none hover:border-theme-accent ease-in-out duration-200"
        }
        name="platform"
        id="platform"
        required
        onChange={() => {
          errorRemovalHandler();
        }}
        {...props}
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
