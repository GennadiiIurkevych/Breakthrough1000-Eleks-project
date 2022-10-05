import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header";
import Image from "next/image";
import Moon from '../public/Moon.png';
import Fire from '../public/Fire.gif';
import Fitness from '../public/Fitness.png';
import styless from "../styles/home.module.scss";
import { useState } from "react";
import Pulse from "../public/Pulse.png";
import Timer from "../public/Timer2.gif";
import stylesss from "../styles/dairyCard.module.scss";

// import LoginButton from "../src/components/login";
// import LogoutButton from "../src/components/logout";
// import { useEffect } from "react";
// import { gapi } from "gapi-script";

// const clientId =
//     "1013011122550-bv212pstd93h8ccikq8t9rokvp27sng4.apps.googleusercontent.com";

export default function Home({ cards }) {
    // const todayDate = formatDate(new Date());
    // const [date, setDate] = useState(todayDate);
    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId: clientId,
    //             scope: "",
    //         });
    //     }
    //     gapi.load("client:auth2", start);
    // });

    return (
        <>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>Breakthrough1000</title>
                    <link rel="icon" href="/beating-heart.gif" />  
                </Head>
                <div className={styless.mainBlock}>
                    <div className={styless.blockFitness}>
                        <input
                            type="date"
                            className={` ${styless.form2__input} ${styless.form2__inputText} `}
                            width={300}
                            placeholder=" "
                            // value={date}
                            // onChange={(e) => {
                            //     setDate(e.target.value);
                            // }}
                        />
                        <label for="" className={stylesss.form2__label}>
                            DATE
                        </label>
                        <div className={styless.fitness}>
                           <Image src={Fitness} alt="fitness"/> 
                        </div>
                        
                    </div>
                    <div className={styless.blockPictures}>
                        <Image className={styless.pulse} width={380} height={300} src={Pulse} alt="pulse" />
                        <Image className={styless.timer} width={200} height={350} src={Timer} alt="timer" />
                        <Image className={styless.fire} width={300} height={200} src={Fire} alt="fire"/> 
                    </div>
                    <div className={styless.blockButtons}>
                        <button className={` ${styless.form2__input} ${styless.form2__inputText} ${styless.buttons} `}>PULSE</button>
                        <button className={` ${styless.form2__input} ${styless.form2__inputText} ${styless.buttons} `}>TIMER</button>
                        <button className={` ${styless.form2__input} ${styless.form2__inputText} ${styless.buttons2} `} >BURNED TODAY KCAL</button>
                       
                    </div>
                    <div className={styless.moon}>
                        <Image className={styless.moon} width={500} height={500} src={Moon} alt="moon"/>
                    </div>
                      
                </div>
            </div>
            
            {/* <LoginButton />
            <LogoutButton /> */}
        </>
    );
}

