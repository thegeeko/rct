interface Props {
  letter: string;
  number: string;
}

const LetterIcon = (props: Props) => {
  const gLetter = (
    <>
      <text
        x="0.91501594"
        y="67.379143"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="72"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="0.91501594" y="67.379143">
          {`G${props.number}`}
        </tspan>
      </text>
    </>
  );
  const lLetter = (
    <>
      <text
        x="3.8747118"
        y="68.309799"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="72"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="3.8747118" y="68.309799">
          {`L${props.number}`}
        </tspan>
      </text>
    </>
  );
  const iLetter = (
    <>
      <text
        x="14.972663"
        y="68.309799"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="72"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="14.972663" y="68.309799">
          {`I${props.number}`}
        </tspan>
      </text>
    </>
  );
  const rLetter = (
    <>
      <text
        x="-2.2961321"
        y="68.309799"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="72"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="-2.2961321" y="68.309799">
          {`R${props.number}`}
        </tspan>
      </text>
    </>
  );
  const nLetter = (
    <>
      <text
        x="-5.3098001"
        y="68.309799"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="72"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="-5.3098001" y="68.309799">
          {`N${props.number}`}
        </tspan>
      </text>
    </>
  );
  const wcLetter = (
    <>
      <text
        x="-2.0316602e-05"
        y="64.914017"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="72"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="-2.0316602e-05" y="64.914017">
          WC
        </tspan>
      </text>
    </>
  );
  const ecLetter = (
    <>
      <text
        x="6.4069424"
        y="67.425232"
        id="text236"
        transform="scale(1.0085108,0.99156103)"
        fontSize="72"
        fontWeight="bold"
      >
        <tspan id="tspan234" x="6.4069424" y="67.425232">
          EC
        </tspan>
      </text>
    </>
  );

  let content;
  let fill;
  switch (props.letter) {
    case "g":
      content = gLetter;
      fill = "#609abf";
      break;
    case "l":
      content = lLetter;
      fill = "#9cd345";
      break;
    case "i":
      content = iLetter;
      fill = "#ff709b";
      break;
    case "r":
      content = rLetter;
      fill = "#b204f9";
      break;
    case "n":
      content = nLetter;
      fill = "#fe01ff";
      break;
    case "wc":
      content = wcLetter;
      fill = "#f67f06";
      break;
    case "ec":
      content = ecLetter;
      fill = "#fabd4b";
      break;
    default:
      content = gLetter;
      fill = "#609abf";
  }

  return (
    <svg
      width="125"
      height="48"
      viewBox="0 0 67.733334 67.733334"
      version="1.1"
      id="svg5"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <defs id="defs2" />
      <g id="layer1">{content}</g>
    </svg>
  );
};

export default LetterIcon;
