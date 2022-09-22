import styles from "../styles/archive.module.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import LinearBuffer from "./download.jsx";
import { useUserContext } from "../src/contexts/UserContext";

const Cards = ({ cards }) => {
    const { user } = useUserContext();

    if (!cards) {
        return null;
    }

    return (
        <>
            <div className={styles.userBlock}>
                <div className={styles.name}>
                    {user ? (
                        <Typography variant="h3">{user?.name}</Typography>
                    ) : (
                        <LinearBuffer />
                    )}
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
            </div>
            <div>
                {cards &&
                    cards.map(({ id }) => (
                        <div className={styles.diary}>
                            <div key={id}>
                                <div className={styles.lForm2}>
                                    <div
                                        className={`${styles.form2__div1} ${styles.form2__div} `}
                                    >
                                        <input 
                                            className={` ${styles.form2__input} ${styles.form2__inputText} `}
                                        >
                                            
                                        </input>
                                        <label
                                            for=""
                                            className={styles.form2__label}
                                        >
                                            DATE
                                        </label>
                                    </div>
                                    <div
                                        className={`${styles.form2__div2} ${styles.form2__div}`}
                                    >
                                        <input
                                            className={`${styles.form2__input} ${styles.form2__inputWeigth}`}
                                        />
                                        <label
                                            for=""
                                            className={styles.form2__label}
                                        >
                                            BODY WEIGHT
                                        </label>
                                    </div>
                                    <div
                                        className={`${styles.form2__div3} ${styles.form2__div}`}
                                    >
                                        <input
                                            className={styles.form2__input}
                                        />
                                        <label
                                            for=""
                                            className={styles.form2__label}
                                        >
                                            KCAL BURNED TODAY
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Cards;


// export default class Fcomponent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name: 'Button pressed'
//       }
//     }
//   render() {
//     return (
//       <div>
//         {/* <h1>Input: {this.props.date} (Fcomponent)</h1>
//         <input value={this.props.input} onChange={this.props.handleChange} /> */}

//         <button onClick={() => {this.props.updateData(this.state.name)}}>Press button</button>
//       </div>
//     )
//   }
// }
