import { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";
import './Jatekosokma.css';

const Jatekosokma = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const data = async () => {
          try {
            const adat = await fetch("http://localhost:3500/jatekosma");
    
            if (adat.ok) {
              const jsonData = await adat.json();
              setPlayers(jsonData.msg);
            } else {
              const jsonData = await adat.json();
              console.log(jsonData);
            }
          } catch (error) {
            console.log(error);
          }
        };

        data();
    }, []);


  return (
    <div className="minden-container">
      <div className="univerzalis-container">
      {players.map((playerma) => (
        <div className="jatekos-container" key={playerma._id}>
          <Link
            to={{
              pathname: "/jatekosma/" + playerma._id,
            }}
          >
          <img src={playerma.kep} alt="kép" /> 
            <h1>{playerma.nev}</h1>
          </Link>
          <p>Kor: {playerma.kor}</p>
        </div>
      ))}
      </div>
      <div className="gombDiv">
      <button type="button" class="btn btn-info"><Link to="/ujjatekosma" className='uj-gomb'>Új játékos felvétele:</Link></button>
      </div>
    </div>
  )
}

export default Jatekosokma