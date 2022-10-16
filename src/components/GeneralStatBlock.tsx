import FanIcon from "./FanIcon";
import TimeIcon from "./TimeIcon";
import LetterIcon from "./LetterIcon";

interface Item {
  name: string;
  value: string | number;
}

interface Props {
  title: string;
  data: Item[];
  info?: { title: string; subtitle: string };
}

const GeneralStatBlock = (props: Props) => {
  // Convert console to name
  let consoleName = "PC";
  if (props.info?.subtitle == "psn") consoleName = "Playstation";
  else if (props.info?.subtitle == "xbl") consoleName = "Xbox";
  else if (props.info?.subtitle == "switch") consoleName = "Switch";

  return (
    <div className="w-11/12">
      <div className="rounded-t-md h-6 bg-theme-accent px-3 font-bold !text-white">
        {props.title}
      </div>
      <div className="flex flex-col">
        {props.info && (
          <div className="flex flex-col px-8 pt-4 bg-gray-200 dark:bg-theme-bg-accent-dark select-text">
            <div className="text-md font-semibold">{props.info.title}</div>
            <div className="text-sm text-gray-400">{consoleName}</div>
          </div>
        )}
        <div className="select-text bg-gray-200 dark:bg-theme-bg-accent-dark p-6 rounded-b-md flex flex-col gap-4">
          <div className="grid gap-4 grid-cols-1">
            {props.data.map((e: Item) => {
              let icon;
              if (e.name == "SKILL RATING" && typeof e.value == "string") {
                const srValue = Number(e.value.replace(",", ""));

                let letter = "g";
                let number = "1";
                if (srValue >= 2600 && srValue < 3200) {
                  letter = "r";
                  if (srValue < 2800) number = "1";
                  if (srValue >= 2800) number = "2";
                  if (srValue >= 3000) number = "3";
                } else if (srValue >= 5000) {
                  letter = "ec";
                }
                icon = (
                  <>
                    <LetterIcon letter={letter} number={number} />
                  </>
                );
              } else if (e.name == "TOTAL FANS") {
                icon = <FanIcon />;
              } else if (e.name == "TOTAL PLAYTIME") {
                icon = <TimeIcon />;
              }
              return (
                <div
                  key={e.name}
                  className="text-center w-full flex flex-row justify-evenly bg-white dark:bg-theme-bg-accent-dark-alt rounded-md p-2 "
                >
                  <div className="flex flex-row items-center">{icon}</div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-xs">{e.name}</div>
                    <div className="text-xs">{e.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStatBlock;
