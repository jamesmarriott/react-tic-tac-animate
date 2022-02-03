import DrawX from "./DrawX";
import DrawO from "./DrawO";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export default function Square({ value, onClick }) {
  
  const { height } = useWindowDimensions();

  const styleSize = {
    width: `${height/ 5}px`,
    height: `${height/ 5}px`,
    borderLeft: `${height/ 150}px solid black`,
    borderBottom: `${height/ 150}px solid black`,
  }

  return (
    <button style={styleSize} className="square" onClick={onClick}>
      {value === "" ? value :
        value === "X" ? <DrawX height={height}/> :
        value === "O" ? <DrawO height={height}/>
        : null}
        </button>
  );
}