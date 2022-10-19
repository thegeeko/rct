import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "../components/LoadingScreen";
import NavBar from "../components/Navbar";
import { motion } from "framer-motion";
import Axios from "axios";
import DataSchema from "../components/DataSchema";
import StatBlock from "../components/StatBlock";
import format from "format-number";
import GeneralStatBlock from "../components/GeneralStatBlock";

interface Props {
  setErrorState(error: string): void;
}

interface Item {
  name: string;
  value: string | number;
}

const Stats = (props: Props) => {
  const localeFormat = format();

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({ title: "Loading", subtitle: "Loading" });

  const [generalData, setGeneralData] = useState<Item[]>([
    { name: "LOADING", value: "LOADING" },
  ]);
  const [statistics, setStatistics] = useState<Item[]>([
    { name: "LOADING", value: "LOADING" },
  ]);
  const [allData, setAllData] = useState<Item[]>([
    { name: "LOADING", value: "LOADING" },
  ]);
  const [arenaData, setArenaData] = useState<Item[]>([
    { name: "LOADING", value: "LOADING" },
  ]);

  const [rawData, setRawData] = useState(DataSchema);
  const [viewMode, setViewMode] = useState("Ranked");

  const router = useRouter();

  // Get data from URL search parameters
  const searchParams = router.query;
  const username = searchParams["username"];
  const platform = searchParams["platform"];

  // Redirect to home if parameters are not provided
  if (!username || !platform) {
    props.setErrorState("Please input username and platform");
    router.push("/");
  }

  useEffect(() => {
    // Fetch data
    setIsLoading(true);
    setViewMode("Ranked");
    const fetchData = async () => {
      if (process.env.API_URL) {
        Axios.get(process.env.API_URL, {
          params: { username: username, platform: platform },
        })
          .then((response) => {
            setInfo(response.data.info);
            setRawData(response.data.stats);
          })
          .catch((error) => {
            props.setErrorState(error.response.data.error);
            router.push("/");
          });
      }
    };
    if (process.env.API_URL) fetchData();
  }, [username, platform, props, router]);

  useEffect(() => {
    // Init vars
    let generalDataRaw = [];
    let statisticsRaw = [];
    let allDataRaw = [];

    if (rawData) {
      // Feed data for first block (general)
      generalDataRaw.push(
        {
          name: "SKILL RATING",
          value: localeFormat(Number(rawData.tsrmeandef?.value)) || "N/A",
        },
        {
          name: "TOTAL FANS",
          value:
            localeFormat(Number(rawData.progressionTotalFans?.value)) || "N/A",
        },
        {
          name: "TOTAL PLAYTIME",
          value:
            `${Math.round(
              Number(rawData.playtimeAbsolute?.value) / 3600
            )} Hrs` || "N/A",
        }
      );

      // Assign variable stats
      let mmrName =
        viewMode == "Ranked"
          ? ("tsrmeandef" as keyof typeof rawData)
          : ("tsmeandef" as keyof typeof rawData);

      let distanceName;
      let matchName;
      let resultWinName;
      let resultDrawName;

      let goalName;
      let onePointName;
      let threePointName;
      let fivePointName;

      let dodgeName;
      let emoteName;
      let gateName;
      let passName;
      let stunName;
      let tackleName;
      let playtimeName;

      // Cosmetic collection
      let collectName = "progressionCollection" as keyof typeof rawData;

      // Contracts completed
      let contractName =
        "progressionSponsorContractsCompletion.stopreason.Completion" as keyof typeof rawData;

      // Total fans
      let fanName = "progressionTotalFans" as keyof typeof rawData;

      // Adjust keys according to selected viewMode
      if (viewMode == "Global") {
        distanceName = "progressionDistanceGlobal" as keyof typeof rawData;
        matchName = "MatchPlayed" as keyof typeof rawData;
        resultWinName = "MatchResult.endreason.Win" as keyof typeof rawData;
        resultDrawName = "MatchResult.endreason.Draw" as keyof typeof rawData;

        goalName = "progressionGoalsGlobal" as keyof typeof rawData;
        onePointName = "progression1ptGoalGlobal" as keyof typeof rawData;
        threePointName = "progression3ptGoalGlobal" as keyof typeof rawData;
        fivePointName = "progression5ptGoalGlobal" as keyof typeof rawData;

        dodgeName = "performanceDodge" as keyof typeof rawData;
        emoteName = "performanceEmote" as keyof typeof rawData;
        gateName = "progressionGatesGlobal" as keyof typeof rawData;
        passName = "progressionPassGlobal" as keyof typeof rawData;
        stunName = "performanceStun" as keyof typeof rawData;
        tackleName = "progressionTacklesGlobal" as keyof typeof rawData;
        playtimeName = "playtimeAbsolute" as keyof typeof rawData;
      } else {
        distanceName =
          `performanceDistanceGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        matchName =
          `MatchPlayedGamemode.gamemode.${viewMode}` as keyof typeof rawData;
        resultWinName =
          `MatchResultGamemode.gamemode.${viewMode}.endreason.Win` as keyof typeof rawData;
        resultDrawName =
          `MatchResultGamemode.gamemode.${viewMode}.endreason.Draw` as keyof typeof rawData;

        goalName =
          `performanceGoalsGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        onePointName =
          `performance1ptGoalGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        threePointName =
          `performance3ptGoalGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        fivePointName =
          `performance5ptGoalGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;

        dodgeName =
          `performanceDodgeGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        emoteName =
          `performanceEmoteGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        gateName =
          `performanceGatesGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        passName =
          `performancePassGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        stunName =
          `performanceStunGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        tackleName =
          `performanceTacklesGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
        playtimeName =
          `progressionPlaytimeGamemode.gamemodeid.${viewMode}` as keyof typeof rawData;
      }

      // Feed data for second block (averages)
      statisticsRaw.push(
        {
          name: "WINRATE",
          value:
            `${Math.round(
              (Number(rawData[resultWinName]?.value) /
                Number(rawData[matchName]?.value)) *
                100
            )}%` || "N/A",
        },
        {
          name: "PASSES PER GAME",
          value:
            `${Math.round(
              Number(rawData[passName]?.value) /
                Number(rawData[matchName]?.value)
            )}` || "N/A",
        },
        {
          name: "TACKLES PER GAME",
          value:
            `${Math.round(
              Number(rawData[tackleName]?.value) /
                Number(rawData[matchName]?.value)
            )}` || "N/A",
        },
        {
          name: "POINTS PER GAME",
          value:
            `${Math.round(
              (Number(rawData[onePointName]?.value) +
                3 * Number(rawData[threePointName]?.value) +
                5 * Number(rawData[fivePointName]?.value)) /
                Number(rawData[matchName]?.value)
            )}` || "N/A",
        },
        {
          name: "DODGES PER GAME",
          value:
            `${Math.round(
              Number(rawData[dodgeName]?.value) /
                Number(rawData[matchName]?.value)
            )}` || "N/A",
        },
        {
          name: "GATES PASSED PER GAME",
          value:
            `${Math.round(
              Number(rawData[gateName]?.value) /
                Number(rawData[matchName]?.value)
            )}` || "N/A",
        }
      );

      // Feed data for third block (other)
      allDataRaw.push(
        {
          name: "MMR",
          value: localeFormat(Number(rawData[mmrName]?.value)) || "N/A",
        },
        {
          name: "PLAYTIME",
          value:
            `${Math.round(Number(rawData[playtimeName]?.value) / 3600)} Hrs` ||
            "N/A",
        },
        {
          name: "COSMETIC ITEMS",
          value: rawData[collectName]?.value || "N/A",
        },
        {
          name: "SPONSER CONTRACTS COMPLETED",
          value: rawData[contractName]?.value || "N/A",
        },
        {
          name: "MATCHES PLAYED",
          value: localeFormat(Number(rawData[matchName]?.value)) || "N/A",
        },
        {
          name: "MATCHES WON",
          value: localeFormat(Number(rawData[resultWinName]?.value)) || "N/A",
        },
        {
          name: "MATCHES LOST",
          value:
            localeFormat(
              Number(
                Number(rawData[matchName]?.value) -
                  Number(rawData[resultWinName]?.value) -
                  Number(rawData[resultDrawName]?.value || "0")
              )
            ) || "N/A",
        },
        {
          name: "DRAWS",
          value: localeFormat(Number(rawData[resultDrawName]?.value)) || "N/A",
        },
        {
          name: "GOALS",
          value: localeFormat(Number(rawData[goalName]?.value)) || "N/A",
        },
        {
          name: "1PT GOALS",
          value: localeFormat(Number(rawData[onePointName]?.value)) || "N/A",
        },
        {
          name: "3PT GOALS",
          value: localeFormat(Number(rawData[threePointName]?.value)) || "N/A",
        },
        {
          name: "5PT GOALS",
          value: localeFormat(Number(rawData[fivePointName]?.value)) || "N/A",
        },
        {
          name: "SUCCESSFUL PASSES",
          value: localeFormat(Number(rawData[passName]?.value)) || "N/A",
        },
        {
          name: "SUCCESSFUL TACKLES",
          value: localeFormat(Number(rawData[tackleName]?.value)) || "N/A",
        },
        {
          name: "DODGES",
          value: localeFormat(Number(rawData[dodgeName]?.value)) || "N/A",
        },
        {
          name: "STUNS (TACKLES RECEIVED)",
          value: localeFormat(Number(rawData[stunName]?.value)) || "N/A",
        },
        {
          name: "EMOTES DONE",
          value: localeFormat(Number(rawData[emoteName]?.value)) || "N/A",
        },
        {
          name: "GATES PASSED",
          value: localeFormat(Number(rawData[gateName]?.value)) || "N/A",
        },
        {
          name: "DISTANCE TRAVELLED",
          value: localeFormat(Number(rawData[distanceName]?.value)) || "N/A",
        }
      );

      // Feed data for fourth block (arenas)
      // Matches played in arenas
      interface IArenaData {
        name: string;
        value: string;
      }
      let arenaDataRaw: IArenaData[] = [];
      Object.keys(rawData)
        .filter((key) =>
          key.startsWith("progressionEnvironmentPlayedSpecific.map.Arena_")
        )
        .forEach((e) => {
          let name = e.substring(47);
          if (name == "8") name = "Arena 8";

          let value = rawData[e as keyof typeof rawData]?.value || "N/A";

          arenaDataRaw.push({ name: name, value: value });
        });

      setGeneralData(generalDataRaw);
      setStatistics(statisticsRaw);
      setAllData(allDataRaw);
      setArenaData(arenaDataRaw);

      let timer: ReturnType<typeof setTimeout>;
      if (rawData?.isDummy?.value != "true") {
        timer = setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }

      return () => clearTimeout(timer);
    }
  }, [rawData, viewMode, localeFormat]);

  // Show loading sceen
  if (isLoading) {
    return (
      <>
        <NavBar />
        <LoadingScreen />
      </>
    );
  }

  const changeViewMode = (mode: string) => {
    setViewMode(mode);
  };

  return (
    <div>
      {" "}
      <Head>
        <title>{`RCT - ${username}`}</title>
        <meta
          name="Roller Champions Tracker"
          content="Stats tracker for Roller Champions"
        />
        <meta property="og:title" content="Roller Champions Tracker" />
        <meta
          property="og:image"
          content="https://rctgg.vercel.app/cover.png"
        />
        <meta
          property="og:description"
          content="Stats tracker for Roller Champions"
        />
        <meta property="og:url" content="https://rctgg.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/skate.svg" />
      </Head>
      <NavBar searchBar />
      <motion.div
        className="mt-[5.5rem] md:mt-12 xl:mt-14 mb-16 dark:text-white select-none flex flex-col md:flex-row justify-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="w-full basis-1/3 flex flex-col items-center">
          <GeneralStatBlock title="GENERAL" data={generalData} info={info} />
        </div>
        <div className="basis-2/3  flex flex-col gap-5 items-center">
          <StatBlock
            title="STATISTICS"
            data={statistics}
            chart={[
              allData.find((o) => o.name == "MATCHES WON"),
              allData.find((o) => o.name == "MATCHES PLAYED"),
            ]}
          />
          <StatBlock title="ALL DATA" data={allData} />
          <StatBlock title="GAMES PLAYED IN ARENA" data={arenaData} list />
        </div>

        <div className="self-center fixed flex flex-row justify-evenly bg-black dark:bg-gray-300 text-white dark:text-black shadow-lg gap-2 p-1 rounded-md ease-in-out duration-200 top-[92%] h-9 md:h-8 md:top-[90%] w-60 text-xs md:w-72 md:text-sm">
          <button
            className={
              viewMode == "Global"
                ? "ease-in-out duration-200 px-1 bg-theme-accent rounded-md text-white font-bold"
                : ""
            }
            onClick={() => {
              changeViewMode("Global");
            }}
          >
            GLOBAL
          </button>
          <button
            className={
              viewMode == "Ranked"
                ? "ease-in-out duration-200 px-1 bg-theme-accent rounded-md text-white font-bold"
                : ""
            }
            onClick={() => {
              changeViewMode("Ranked");
            }}
          >
            RANKED
          </button>
          <button
            className={
              viewMode == "QuickMatch"
                ? "ease-in-out duration-200 px-1 bg-theme-accent rounded-md text-white font-bold"
                : ""
            }
            onClick={() => {
              changeViewMode("QuickMatch");
            }}
          >
            QUICK
          </button>
          <button
            className={
              viewMode == "Exotic"
                ? "ease-in-out duration-200 px-1 bg-theme-accent rounded-md text-white font-bold"
                : ""
            }
            onClick={() => {
              changeViewMode("Exotic");
            }}
          >
            SPECIAL
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;
