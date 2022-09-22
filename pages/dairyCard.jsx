import styles from "../styles/dairyCard.module.scss";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Pulse from "../public/Pulse.png";
import Timer from "../public/Timer.png";
import Avatar from "@mui/material/Avatar";
import Minuts from "./timer";
import { useState } from "react";
import { useUserContext } from "../src/contexts/UserContext";
import { Typography } from "@mui/material";
import LinearBuffer from '../pages/download.jsx';


export default function DairyCard() {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);
    const todayDate = formatDate(new Date());
    const [date, setDate] = useState(todayDate);

    const { user } = useUserContext();

    const zoneCoef1 = 7.5;
    const zoneCoef2 = 10;
    const zoneCoef3 = 12.5;
    const zoneCoef4 = 15;
    
    const sumOfKCal =
        1000 +
        number1 * zoneCoef1 +
        number2 * zoneCoef2 +
        number3 * zoneCoef3 +
        number4 * zoneCoef4;

    return (
        <div className={styles.userContainer}>
            
                <div className={styles.name}>
                    {user ? <Typography variant="h3">
                        { user?.name }
                    </Typography> : <LinearBuffer /> }    
                </div>
                <div>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            className={styles.photo}
                            alt="User"
                            src={user?.picture}
                        />
                    </Stack>
                </div>

            <div className={styles.diary}>
                <div className={styles.lForm2}>
                    <div
                        className={`${styles.form2__div1} ${styles.form2__div} `}
                    >
                        <input
                            type="date"
                            className={` ${styles.form2__input} ${styles.form2__inputText} `}
                            placeholder=" "
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                        />
                        <label for="" className={styles.form2__label}>
                            DATE
                        </label>
                    </div>
                    <div
                        className={`${styles.form2__div2} ${styles.form2__div}`}
                    >
                        <input
                            type="text"
                            className={`${styles.form2__input} ${styles.form2__inputWeigth}`}
                            placeholder="KG"
                        />
                        <label for="" className={styles.form2__label}>
                            BODY WEIGHT
                        </label>
                    </div>
                    <div
                        className={`${styles.form2__div3} ${styles.form2__div}`}
                    >
                        <input
                            type="text"
                            className={styles.form2__input}
                            placeholder=" "
                            value={sumOfKCal}
                        ></input>
                        <label for="" className={styles.form2__label}>
                            {" "}
                            KCAL BURNED TODAY
                        </label>
                    </div>
                </div>

                <div className={styles.zonesBlock}>
                    <div className={styles.imageBlock}>
                        <div className={styles.pulse}>
                            <Image src={Pulse} alt="pulse" />
                        </div>
                        <div className={styles.timer}>
                            <Image src={Timer} alt="timer" />
                        </div>
                    </div>

                    <div>
                        <div className={styles.spanZone}>
                            <span className={styles.span}>100-120</span>
                            <span className={styles.span}>120-140</span>
                            <span className={styles.span}>140-160</span>
                            <span className={styles.span}>160-180</span>
                        </div>
                        
                        <Minuts
                            handleNumber1Change={setNumber1}
                            handleNumber2Change={setNumber2}
                            handleNumber3Change={setNumber3}
                            handleNumber4Change={setNumber4}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}

function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join("-");
}


// import React, { Component } from 'react';
// import Fcomponent from "./Cards";
// import Fncomponent from '../pages/api/data/cards'

// export default class Ccomponent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         // date: "today"
//         // inputValue: ''
//         name: "Button not press"
//       };
//     //   this.handleChange = this.handleChange.bind(this);
//         this.updateData = this.updateData.bind(this);
    
//     }
    
//     // handleChange(event) {
//     //     this.setState({
//     //         inputValue: event.target.value
//     //     })
//     // }

//     updateData = (value) => {
//         this.setState({
//            name: value
//         })
//     }
   
//     render() {
//         return (
//             <div>
//                 {/* <p>Get {this.state.date} (Ccomponent)</p> */}
//                 {/* тут передаємо значення date, а не стан. А в пропс (після дорівнює) передається його стан */}
//                 {/* <Fcomponent 
//                 input={this.state.inputValue}
//                 handleChange={this.handleChange} /> */}
//                 <p>State: {this.state.name}</p>

//                 <Fcomponent updateData={this.updateData} />

//                 {/* <Fncomponent input={this.state.inputValue} /> */}
//             </div>
//         );
//     }
// }

