import GreetHeader from "../components/GreetHeader/GreetHeader";
import WorkoutType from "../components/WorkoutType/WorkoutType";
import styles from "./homePage.module.css";
import chest from "../assets/icons/chest.png";
import pull from "../assets/icons/pull.png";
import squat from "../assets/icons/squat.png";
import { Link } from "react-router-dom";
import { WorkoutEnum } from "../SetService/Setservice";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GreetHeader />
      </div>
      {/* 3 workout types */}
      <div className={styles.workoutTypeSelector}>
        <Link to="/workout/upper-chest">
          <WorkoutType type={WorkoutEnum.UPPER_CHEST} icon={chest} />
        </Link>
        <Link to="/workout/upper-back">
          <WorkoutType type={WorkoutEnum.UPPER_BACK} icon={pull} />
        </Link>
        <Link to="/workout/legs">
          <WorkoutType type={WorkoutEnum.LEGS} icon={squat} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
