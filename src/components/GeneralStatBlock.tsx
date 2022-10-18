import FanIcon from "./FanIcon";
import TimeIcon from "./TimeIcon";

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
                let letter = "G";
                let number = "1";
                let fill = "#609abf";
                if (e.value != "N/A") {
                  const srValue = Number(e.value.replace(",", ""));

                  if (srValue >= 1100 && srValue < 1600) {
                    letter = "G";
                    fill = "#609abf";
                    number = "1";
                    if (srValue >= 1200) number = "2";
                    if (srValue >= 1300) number = "3";
                    if (srValue >= 1400) number = "4";
                    if (srValue >= 1500) number = "5";
                  } else if (srValue >= 1600 && srValue < 2100) {
                    letter = "L";
                    fill = "#9cd345";
                    number = "1";
                    if (srValue >= 1700) number = "2";
                    if (srValue >= 1800) number = "3";
                    if (srValue >= 1900) number = "4";
                    if (srValue >= 2000) number = "5";
                  } else if (srValue >= 2100 && srValue < 2600) {
                    letter = "I";
                    fill = "#ff709b";
                    number = "1";
                    if (srValue >= 2200) number = "2";
                    if (srValue >= 2300) number = "3";
                    if (srValue >= 2400) number = "4";
                    if (srValue >= 2500) number = "5";
                  } else if (srValue >= 2600 && srValue < 3200) {
                    letter = "R";
                    fill = "#b204f9";
                    number = "1";
                    if (srValue >= 2800) number = "2";
                    if (srValue >= 3000) number = "3";
                  } else if (srValue >= 3200 && srValue < 4400) {
                    letter = "N";
                    fill = "#fe01ff";
                    number = "1";
                    if (srValue >= 3600) number = "2";
                    if (srValue >= 4000) number = "3";
                  } else if (srValue >= 4400 && srValue < 5000) {
                    letter = "WC";
                    fill = "#f67f06";
                    number = "";
                  } else if (srValue >= 5000) {
                    letter = "EC";
                    fill = "#fabd4b";
                    number = "";
                  }
                } else {
                  letter = "";
                  number = "";
                }
                icon = (
                  <span style={{ color: fill }}>
                    {letter}
                    {number}
                  </span>
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
                  <div className="flex flex-row items-center font-bold text-2xl">
                    {icon}
                  </div>
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
