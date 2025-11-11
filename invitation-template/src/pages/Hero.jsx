import HeroStyles from '../pages/Hero.module.scss'
import CalendarLight from '../pages/calendar-light.svg'
import CalenderDark from '../pages/calendar-dark.svg'
import Avatar from '../pages/avatar2.svg'
import {useState, useEffect} from 'react';

function Hero(){
    const[thema, setThema]= useState();

    useEffect(()=>{
       const res =  localStorage.getItem('theme');
       const data = JSON.parse(res)
       setThema(data)
    },[])

    return (<>
        <section className={HeroStyles.hero}>
            <div className='container'>
                <div className={thema? HeroStyles['hero-wrapper-light']:HeroStyles['hero-wrapper-dark'] }>
                    <button className={thema? HeroStyles['hero-wrapper-light-button-style']: HeroStyles['hero-wrapper-dark-button-style']} onClick={()=> {
                        if( thema){
                            setThema(false)
                            localStorage.setItem('theme', JSON.stringify(false))
                        } else{
                            setThema(true)
                            localStorage.setItem('theme', JSON.stringify(true))
                        }
                        }} >
                        {thema? 'DARK': 'LIGHT'}</button>
                    <div className={HeroStyles['hero-wrapper-light-description']}>
                        <h1 style={{color: thema? 'rgba(178, 75, 0, 1)': 'rgba(29, 164, 251, 1)'}}>
                            Invitation 
                            Template
                        </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className={HeroStyles['hero-wrapper-light-description-data']}>
                            <div className='img'>
                                <img src={thema? CalendarLight : CalenderDark}></img>
                            </div>
                            <h2>23 Jan 2022</h2>
                        </div>
                            <button className={thema? HeroStyles['hero-wrapper-light-button-style']: HeroStyles['hero-wrapper-dark-button-style']}>Join Now!</button>
                    </div>
                    <div className={HeroStyles['hero-wrapper-light-avatar']}>
                        <div className={HeroStyles['hero-wrapper-light-avatar-img']}>
                            <img src={Avatar}></img>
                        </div>
                        <div className={HeroStyles['hero-wrapper-light-avatar-information']}>
                            <h3 >
                                Farrukh Mumtaz
                            </h3>
                            <p>
                                Graphic Designer
                                Follow me on Instagram
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>)
}

export default Hero;