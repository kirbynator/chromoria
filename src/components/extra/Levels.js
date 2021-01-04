import React from 'react'

//Levels
import Menu from "../stage/Menu";
import Begin from "../stage/white/Begin";
import CourageStone from "../stage/white/Coragestone";
import OutsideHome from "../stage/white/OutsideHeroHouse";
import HomeUvillage from "../stage/white/Home2Villiage";
import Village1 from "../stage/white/Village1";
import Village1nside from "../stage/white/Village1nside";
import HomePvillage from "../stage/green/HomePvilliage";
import HomeQvillage from "../stage/green/HomeQvilliage";
import DesireStone from "../stage/green/Desirestone";

const setLocalStorage = color => {
    localStorage.setItem('myData',
        `${color.stage},${color.started},${color.life},${color.maxLife}`
    )
}

const Levels = (color, loader, savecode) => {
    switch (color.stage) {
        case "menu":
            return <Menu saveload={savecode} loader={loader}></Menu>;
            break;
        case "begin":
            setLocalStorage(color)
            return <Begin loader={loader} color={color}></Begin>;
            break;
        case "couragestone":
            setLocalStorage(color)
            return (
                <CourageStone loader={loader} color={color}></CourageStone>
            );
            break;
        case "desirestone":
            setLocalStorage(color)
            return (
                <DesireStone loader={loader} color={color}></DesireStone>
            );
            break;
        case "outsidehome":
            setLocalStorage(color)
            return (
                <OutsideHome loader={loader} color={color}></OutsideHome>
            );
            break;
        case "home2village":
            setLocalStorage(color)
            return (
                <HomeUvillage loader={loader} color={color}></HomeUvillage>
            );
            break;
        case "homePvillage":
            setLocalStorage(color)
            return (
                <HomePvillage loader={loader} color={color}></HomePvillage>
            );
            break;
        case "homeQvillage":
            setLocalStorage(color)
            return (
                <HomeQvillage loader={loader} color={color}></HomeQvillage>
            );
            break;
        case "village1":
            setLocalStorage(color)
            return <Village1 loader={loader} color={color}></Village1>;
            break;
        case "village1nside":
            setLocalStorage(color)
            return <Village1nside loader={loader} color={color} ></Village1nside>
            break;
    }


}

export default Levels