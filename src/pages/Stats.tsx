import { useState, useEffect } from "react";
import { useSearchParams, Navigate, useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import NavBar from "../components/Navbar";
import { motion } from "framer-motion";
import Axios from "axios";
import DataSchema from "../components/DataSchema";

interface Props {
  setErrorState(error: string): void;
}

const Stats = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [rawData, setRawData] = useState(DataSchema);
  const [viewMode, setViewMode] = useState(localStorage.getItem("viewMode") || "ranked");

  const navigate = useNavigate();

  // Get data from URL search parameters
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const platform = searchParams.get("platform");

  // Redirect to home if parameters are not provided
  if (!username || !platform) {
    props.setErrorState("Please input username and platform");
    return <Navigate to="/" />;
  }

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      Axios.get(import.meta.env.VITE_API_URL, {
        params: { username: username, platform: platform },
      })
        .then((response) => {
          setRawData(response.data.stats);
        })
        .catch((error) => {
          props.setErrorState(error.response.data.error);
          navigate("/");
        });
    };
    fetchData();
  }, [username, platform]);

  useEffect(() => {
    if (rawData) {
      // Init vars
      let generalData = [];
      let statistics = [];
      let allData = [];

      // Feed data for first block (general)
      generalData.push(
        {
          name: "SKILL RATING",
          value: rawData.tsrmeandef.value.toLocaleString() || "N/A",
        },
        {
          name: "TOTAL FANS",
          value: rawData.progressionTotalFans.value.toLocaleString(),
        },
        {
          name: "TOTAL PLAYTIME",
          value: `${Math.round(
            Number(rawData.playtimeAbsolute.value) / 3600
          )} Hrs`,
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
      statistics.push(
        {
          name: "WINRATE",
          value: `${Math.round(
            (Number(rawData[resultWinName].value) /
              Number(rawData[matchName].value)) *
              100
          )}%`,
        },
        {
          name: "PASSES PER GAME",
          value: `${Math.round(
            Number(rawData[passName].value) / Number(rawData[matchName].value)
          )}`,
        },
        {
          name: "TACKLES PER GAME",
          value: `${Math.round(
            Number(rawData[tackleName].value) / Number(rawData[matchName].value)
          )}`,
        },
        {
          name: "POINTS PER GAME",
          value: `${Math.round(
            (Number(rawData[onePointName].value) +
              3 * Number(rawData[threePointName].value) +
              5 * Number(rawData[fivePointName].value)) /
              Number(rawData[matchName].value)
          )}`,
        },
        {
          name: "DODGES PER GAME",
          value: `${Math.round(
            Number(rawData[dodgeName].value) / Number(rawData[matchName].value)
          )}`,
        },
        {
          name: "GATES PASSED PER GAME",
          value: `${Math.round(
            Number(rawData[gateName].value) / Number(rawData[matchName].value)
          )}`,
        }
      );

      // Feed data for third block (other)
      allData.push(
        {
          name: "MMR",
          value: rawData[mmrName].value.toLocaleString(),
        },
        {
          name: "PLAYTIME",
          value: `${Math.round(
            Number(rawData[playtimeName].value) / 3600
          )} Hrs`,
        },
        {
          name: "COSMETIC ITEMS",
          value: rawData[collectName].value.toLocaleString(),
        },
        {
          name: "SPONSER CONTRACTS COMPLETED",
          value: rawData[contractName].value.toLocaleString(),
        },
        {
          name: "MATCHES PLAYED",
          value: rawData[matchName].value.toLocaleString(),
        },
        {
          name: "MATCHES WON",
          value: rawData[resultWinName].value.toLocaleString(),
        },
        {
          name: "MATCHES LOST",
          value: (
            Number(rawData[matchName].value) -
            Number(rawData[resultWinName].value) -
            Number(rawData[resultDrawName]?.value || "0")
          ).toLocaleString(),
        },
        {
          name: "DRAWS",
          value: rawData[resultDrawName]?.value.toLocaleString() || "N/A",
        },
        {
          name: "GOALS",
          value: rawData[goalName].value.toLocaleString(),
        },
        {
          name: "1PT GOALS",
          value: rawData[onePointName].value.toLocaleString(),
        },
        {
          name: "3PT GOALS",
          value: rawData[threePointName].value.toLocaleString(),
        },
        {
          name: "5PT GOALS",
          value: rawData[fivePointName].value.toLocaleString(),
        },
        {
          name: "SUCCESSFUL PASSES",
          value: rawData[passName].value.toLocaleString(),
        },
        {
          name: "SUCCESSFUL TACKLES",
          value: rawData[tackleName].value.toLocaleString(),
        },
        {
          name: "DODGES",
          value: rawData[dodgeName].value.toLocaleString(),
        },
        {
          name: "STUNS (TACKLES RECEIVED)",
          value: rawData[stunName].value.toLocaleString(),
        },
        {
          name: "EMOTES DONE",
          value: rawData[emoteName].value.toLocaleString(),
        },
        {
          name: "GATES PASSED",
          value: rawData[gateName].value.toLocaleString(),
        },
        {
          name: "DISTANCE TRAVELLED",
          value: rawData[distanceName].value.toLocaleString(),
        }
      );

      // Feed data for fourth block (arenas)
      // Matches played in arenas
      interface IArenaData {
        name: string;
        value: string;
      }
      let arenaData: IArenaData[] = [];
      Object.keys(rawData)
        .filter((key) =>
          key.startsWith("progressionEnvironmentPlayedSpecific.map.Arena_")
        )
        .forEach((e) => {
          let name = e.substring(47);
          if (name == "8") name = "Arena 8";

          let value = rawData[e as keyof typeof rawData].value;

          arenaData.push({ name: name, value: value });
        });

        console.log(generalData, statistics, allData, arenaData);

      setIsLoading(false);
    }
  }, []);

  // Show loading sceen
  if (isLoading) {
    return (
      <>
        <NavBar />
        <LoadingScreen />
      </>
    );
  }

  return (
    <div>
      <NavBar searchBar />
      <motion.div
        className="mt-20 md:mt-11 xl:mt-12 dark:text-white select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* TODO: Pass data down to stat viewers */}
      </motion.div>
      {/* TODO: Mode button */}
    </div>
  );
};

export default Stats;
