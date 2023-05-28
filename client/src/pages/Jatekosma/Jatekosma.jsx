import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Jatekosma.css';


const Jatekosma = () => {
    const [playerma, setPlayerma] = useState({});
    const param = useParams();
    console.log(param);
  
    useEffect(() => {
      const data = async () => {
        try {
          const adat = await fetch("http://localhost:3500/jatekosma");
  
          if (adat.ok) {
            const jsonData = await adat.json();
            console.log(jsonData);
            let playerVal = jsonData.msg.filter((elem) => elem._id === param.id);
            console.log(playerVal);
            setPlayerma(playerVal[0]);
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
    <div className="jatekosma-container">
      <div className="jatekos">
        <h1>A játékos neve: {playerma.nev}</h1>
        <p>A játékos életkora: {playerma.kor}</p>
        <img src={playerma.kep} alt="kép" />
      </div>
  </div>
  )
}

export default Jatekosma