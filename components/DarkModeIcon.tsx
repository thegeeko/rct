const Icon = () => {
  let darkCheck = false;
  if (typeof window !== "undefined") {
    darkCheck = localStorage.getItem("darkMode") == "true";
  }
  return (
    <svg
      width="256"
      height="256"
      viewBox="0 0 67.733332 67.733333"
      version="1.1"
      id="svg5"
      xmlns="http://www.w3.org/2000/svg"
      className="ease-in-out duration-200 fill-white dark:fill-black md:hover:fill-slate-400 h-7 w-7"
    >
      <defs id="defs2" />
      <g id="layer1">
        {darkCheck ? (
          <>
            <path
              id="path234"
              d="M 33.866667,22.492983 A 11.373697,11.373697 0 0 0 22.492983,33.866667 11.373697,11.373697 0 0 0 33.866667,45.24035 11.373697,11.373697 0 0 0 45.24035,33.866667 11.373697,11.373697 0 0 0 33.866667,22.492983 Z m 0,4.460096 a 6.9134241,6.9134241 0 0 1 6.913587,6.913588 6.9134241,6.9134241 0 0 1 -6.913587,6.913587 6.9134241,6.9134241 0 0 1 -6.913588,-6.913587 6.9134241,6.9134241 0 0 1 6.913588,-6.913588 z"
            />
            <rect
              id="rect399"
              width="6.3933811"
              height="14.456163"
              x="30.669975"
              y="2.752913"
              rx="1.636364"
              ry="2.365721"
            />
            <rect
              id="rect547"
              width="6.3933811"
              height="14.456163"
              x="30.669975"
              y="50.524258"
              rx="1.636364"
              ry="2.365721"
            />
            <rect
              id="rect549"
              width="6.3933811"
              height="14.456163"
              x="30.669977"
              y="-64.980423"
              rx="1.636364"
              ry="2.365721"
              transform="rotate(90)"
            />
            <rect
              id="rect551"
              width="6.3933811"
              height="14.456163"
              x="30.669977"
              y="-17.209076"
              rx="1.636364"
              ry="2.365721"
              transform="rotate(90)"
            />
            <rect
              id="rect553"
              width="6.3933811"
              height="14.456163"
              x="44.698009"
              y="-31.113754"
              rx="1.636364"
              ry="2.365721"
              transform="rotate(45)"
            />
            <rect
              id="rect555"
              width="6.3933811"
              height="14.456163"
              x="44.698009"
              y="16.657593"
              rx="1.636364"
              ry="2.365721"
              transform="rotate(45)"
            />
            <rect
              id="rect557"
              width="6.3933811"
              height="14.456163"
              x="-3.1966896"
              y="-79.008453"
              rx="1.636364"
              ry="2.365721"
              transform="rotate(135)"
            />
            <rect
              id="rect559"
              width="6.3933811"
              height="14.456163"
              x="-3.1966896"
              y="-31.237108"
              rx="1.636364"
              ry="2.365721"
              transform="rotate(135)"
            />
          </>
        ) : (
          <path
            id="path236"
            d="M 24.112223 3.7656616 A 31.798237 31.798237 0 0 0 2.1807454 33.978805 A 31.798237 31.798237 0 0 0 33.978805 65.776864 A 31.798237 31.798237 0 0 0 61.688224 49.553564 A 31.619173 31.619173 0 0 1 51.440271 51.282658 A 31.619173 31.619173 0 0 1 19.821012 19.663916 A 31.619173 31.619173 0 0 1 24.112223 3.7656616 z "
          />
        )}
      </g>
    </svg>
  );
};

export default Icon;
