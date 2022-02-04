import DrawX from "./DrawX";
import DrawO from "./DrawO";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export default function Square({ value, onClick }) {

  const { height, width } = useWindowDimensions();

  const buttonSize = {
    width: `${width/ 3}px`,
    height: `${height/ 3}px`,
    backgroundColor: 'transparent'
  }

  return (
    <div>
    <button style={buttonSize} className="square" onClick={onClick}>
      {value === "" ? value :
        value === "X" ? <DrawX height={height}/> :
        value === "O" ? <DrawO height={height}/>
        : null}
    </button>
    </div>
  );
}