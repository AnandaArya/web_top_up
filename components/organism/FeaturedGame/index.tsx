import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { GameItemTypes } from "../../../services/data-types";
import { getFeaturedGame } from "../../../services/player";
import GameItem from "../../molecules/GameItem"

export default function FeaturedGame() {

  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }

  useEffect(() => {
    getFeatureGameList();
  // }, [getFeaturedGame]);
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => {
            return (
              <GameItem 
                key={item._id} 
                title={item.name} 
                category={item.category.name} 
                thumbnail={`${API_IMG}/${item.thumbnail}`}
                id={item._id}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}


  // benar tapi ada warning
  // const getFeatureGameList = useCallback(async() => {
  //   const data = await getFeaturedGame();
  //   setGameList(data)
  // }, [])

  // useEffect(() => {
  //   getFeatureGameList()
  // }, []);


  // ini kode yang benar
  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/v1/players/landingpage')
  //     .then(response => {
  //       console.log(response.data)
  //       setGameList(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);