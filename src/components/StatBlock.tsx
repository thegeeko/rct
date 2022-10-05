interface Item {
  name: string;
  value: string | number;
}

interface Props {
  title: string;
  data: Item[];
  list?: Boolean;
}

// TODO: Style as list if requested
// TODO: Stylize borders

const StatBlock = (props: Props) => {
  return (
    <div className="w-60 md:w-96 xl:w-3/4">
      <div className="rounded-t-md h-6 bg-theme-accent px-3 font-bold !text-white">
        {props.title}
      </div>
      <div className="select-text bg-theme-bg-accent-light dark:bg-theme-bg-accent-dark p-6 rounded-b-md grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {props.data.map((e: Item) => {
          return (
            <div
              key={e.name}
              className="text-center w-full flex flex-col justify-center"
            >
              <div className="font-semibold text-sm">{e.name}</div>
              <div>{e.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatBlock;
