import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <h1>A játékos neve: {playerfc.nev}</h1>
    <p>A játékos életkora: {playerfc.kor}</p>
    <img src={playerfc.kep} alt="kép" />
  </div>
  )
}

export default Jatekosfc