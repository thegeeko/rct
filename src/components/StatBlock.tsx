interface Item {
  name: string;
  value: string | number;
}

interface Props {
  title: string;
  data: Item[];
  list?: Boolean;
  info?: { title: string; subtitle: string };
}

const StatBlock = (props: Props) => {
  // Convert console to name
  let consoleName = "PC";
  if (props.info?.subtitle == "psn") consoleName = "Playstation";
  else if (props.info?.subtitle == "xbl") consoleName = "Xbox";
  else if (props.info?.subtitle == "switch") consoleName = "Switch";

  return !props.list ? (
    <div className="w-60 md:w-96 xl:w-3/4">
      <div className="rounded-t-md h-6 bg-theme-accent px-3 font-bold !text-white">
        {props.title}
      </div>
      <div className="flex flex-col">
        {props.info && (
          <div className="flex flex-col px-8 pt-4 bg-theme-bg-accent-light dark:bg-theme-bg-accent-dark">
            <div className="text-md font-semibold">{props.info.title}</div>
            <div className="text-sm text-gray-400">{consoleName}</div>
          </div>
        )}
        <div className="select-text bg-theme-bg-accent-light dark:bg-theme-bg-accent-dark p-6 rounded-b-md grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {props.data.map((e: Item) => {
            return (
              <div
                key={e.name}
                className="text-center w-full flex flex-col justify-center bg-white dark:bg-theme-bg-dark rounded-md p-2"
              >
                <div className="font-semibold text-xs">{e.name}</div>
                <div className="text-xs">{e.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-60 md:w-96 xl:w-3/4">
      <div className="rounded-t-md h-6 bg-theme-accent px-3 font-bold !text-white">
        {props.title}
      </div>
      <div className="select-text bg-theme-bg-accent-light dark:bg-theme-bg-accent-dark p-6 rounded-b-md grid gap-4 grid-cols-1 text-left">
        {props.data.map((e: Item, i) => {
          if (i % 2 == 1) {
            return (
              <div
                key={e.name}
                className="w-full flex flex-row justify-between items-center"
              >
                <div className="font-semibold text-xs mx-2">{e.name}</div>
                <div className="text-xs mx-2">{e.value}</div>
              </div>
            );
          } else {
            return (
              <div
                key={e.name}
                className="w-full flex flex-row justify-between bg-white dark:bg-theme-bg-dark rounded-md py-1"
              >
                <div className="font-semibold text-xs mx-2">{e.name}</div>
                <div className="text-xs mx-2">{e.value}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default StatBlock;
