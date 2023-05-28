import { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";

const Jatekosokfc = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const data = async () => {
          try {
            const adat = await fetch("http://localhost:3500/jatekosfc");
    
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
        {players.map((playerfc) => (
          <div className="jatekos-container" key={playerfc._id}>
            <Link
              to={{
                pathname: "/jatekosfc/" + playerfc._id,
              }}
            >
            <img src={playerfc.kep} alt="kép" /> 
              <h1>{playerfc.nev}</h1>
            </Link>
            <p>Kor: {playerfc.kor}</p>
          </div>
        ))}
        </div>
        <div className="gombDiv">
      <button type="button" class="btn btn-info"><Link to="/ujjatekosfc" className='uj-gomb'>Új játékos felvétele:</Link></button>
      </div>
      </div>
    )
}

export default Jatekosokfc