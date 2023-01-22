import React, { useState } from 'react';
import s from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/images/global/globalSvgSelector";
import {useTheme} from '../../hooks/useTheme';
import {Theme} from "../../context/ThemeContext";


interface Props {

}

export const Header = () => {
    const theme = useTheme()




function changeTheme (){
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
}

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
            </div>
            <div className={s.logo}>
                <GlobalSvgSelector id="header-logo"/>
            </div>
            <div className={s.title}>
               REACT WEATHER
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme"/>
                </div>
                {/*<Select defaultValue={options[0]} styles={colourStyles} options={options}/>*/}
            </div>
        </header>
    )
}