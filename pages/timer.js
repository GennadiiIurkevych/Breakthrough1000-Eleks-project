import React from "react";
import styles from "../styles/users.module.scss";
import Kardio from "../public/Pulse2.gif";
import Image from "next/image";

export const Minuts = ({
    handleNumber1Change,
    handleNumber2Change,
    handleNumber3Change,
    handleNumber4Change,
}) => {
    return (
        <div className={styles.buttonTime}>
            <div className={styles.lForm}>
                <div className={`${styles.form__div1} ${styles.form__div}`}>
                    <input
                        type="number"
                        className={styles.form__input}
                        placeholder="min"
                        onChange={(e) => handleNumber1Change(e.target.value)}
                    />
                    <label for="" className={styles.form__label}>
                        TIME
                    </label>
                </div>
                <div className={`${styles.form__div2} ${styles.form__div}`}>
                    <input
                        type="number"
                        className={styles.form__input}
                        placeholder="min"
                        onChange={(e) => handleNumber2Change(e.target.value)}
                    />
                    <label for="" className={styles.form__label}>
                        TIME
                    </label>
                </div>
                {/* <MinutsInput onhangHandler={handleNumber2Change} style={}></MinutsInput> */}
                <div className={`${styles.form__div3} ${styles.form__div}`}>
                    <input
                        type="number"
                        className={styles.form__input}
                        placeholder="min"
                        onChange={(e) => handleNumber3Change(e.target.value)}
                    />
                    <label for="" className={styles.form__label}>
                        TIME
                    </label>
                </div>
                <div className={`${styles.form__div4} ${styles.form__div}`}>
                    <input
                        type="number"
                        className={styles.form__input}
                        placeholder="min"
                        onChange={(e) => handleNumber4Change(e.target.value)}
                    />
                    <label for="" className={styles.form__label}>
                        TIME
                    </label>
                </div>
            </div>
            <div className={styles.kardio}>
                <Image src={Kardio} alt="kardio" />
            </div>
        </div>
    );
};

// const MinutsInput = (onChangeHandler, styles) => {
//     return (
//         <div className={styles.form__div4}>
//             <input
//                 type="number"
//                 className={styles.form__input}
//                 placeholder="min"
//                 onChange={(e) => onChangeHandler(e.target.value)}
//             />
//             <label for="" className={styles.form__label}>
//                 TIME
//             </label>
//         </div>
//     );
// };

export default Minuts;
