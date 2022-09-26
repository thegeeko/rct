interface Props {
  setErrorState(error: string): void;
}

import { useSearchParams, Navigate } from "react-router-dom";

const Stats = (props: Props) => {
  // TODO: Show loading sceen

  // Get data from URL search parameters
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const platform = searchParams.get("platform");
  
  // Redirect to home if parameters are not provided
  if (!username || !platform) {
    props.setErrorState("Please input username and platform")
    return <Navigate to="/" />;
  }

  // TODO: Fetch data

  // TODO: Reroute to home if user not found
  return (
    <div className="mt-10 dark:text-white">
      {username} {platform}
    </div>
  );
};

export default Stats;
