import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Jatekosfc.css";

const Jatekosfc = () => {
    const [playerfc, setPlayerfc] = useState({});
    const param = useParams();
    console.log(param);
  
    useEffect(() => {
      const data = async () => {
        try {
          const adat = await fetch("http://localhost:3500/jatekosfc");
  
          if (adat.ok) {
            const jsonData = await adat.json();
            console.log(jsonData);
            let playerVal = jsonData.msg.filter((elem) => elem._id === param.id);
            console.log(playerVal);
            setPlayerfc(playerVal[0]);
          } else {
            const jsonData = await adat.json();
            console.log(jsonData);
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      data();
    }, [param.id]);
  return (
    <div className="jatekosfc-container">
      <table>
        <tbody>
          <tr>
          <td><h1>A játékos neve: {playerfc.nev}</h1></td>
          </tr>
          <tr>
          <td><p>A játékos életkora: {playerfc.kor}</p></td>
          </tr>
          <tr>
          <td><img src={playerfc.kep} alt="kép" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Jatekosfc