interface Props {
  number: string;
  rank: string;
}

const NumberIcon = (props: Props) => {
  const Number1 = (
    <>
      <text
        x="11.002275"
        y="68.309799"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="84"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="11.002275" y="68.309799">
          1
        </tspan>
      </text>
    </>
  );
  const Number2 = (
    <>
      <text
        x="6.3607469"
        y="68.309784"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="84"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="6.3607469" y="68.309784">
          2
        </tspan>
      </text>
    </>
  );
  const Number3 = (
    <>
      <text
        x="7.0085502"
        y="67.440224"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="84"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="7.0085502" y="67.440224">
          3
        </tspan>
      </text>
    </>
  );
  const Number4 = (
    <>
      <text
        x="6.2186756"
        y="68.309799"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="84"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="6.2186756" y="68.309799">
          4
        </tspan>
      </text>
    </>
  );
  const Number5 = (
    <>
      <text
        x="6.4069424"
        y="67.425232"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="84"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="6.4069424" y="67.425232">
          5
        </tspan>
      </text>
    </>
  );

  let content;
  switch (props.number) {
    case "1":
      content = Number1;
      break;
    case "2":
      content = Number2;
      break;
    case "3":
      content = Number3;
      break;
    case "4":
      content = Number4;
      break;
    case "5":
      content = Number5;
      break;
    default:
      content = Number1;
  }

  let fill;
  switch (props.rank) {
    case "g":
      fill = "#609abf";
      break;
    case "l":
      fill = "#9cd345";
      break;
    case "i":
      fill = "#ff709b";
      break;
    case "r":
      fill = "#b204f9";
      break;
    case "n":
      fill = "#fe01ff";
      break;
    default:
      fill = "#609abf";
  }

  return (
    <svg
      width="256"
      height="256"
      viewBox="0 0 67.733334 67.733334"
      version="1.1"
      id="svg5"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-[${fill}] h-5 w-5`}
    >
      <defs id="defs2" />
      <g id="layer1">{content}</g>
    </svg>
  );
};

export default NumberIcon;
