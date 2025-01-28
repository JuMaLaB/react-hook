import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SpeakerDetail from "./SpeakerDetail";
import {
  SpeakersDataContext,
  SpeakersDataProvider,
} from "../contexts/SpeakersDataContext";

export default function Speaker({ id }) {
  const { darkTheme } = useContext(ThemeContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  return speakerRec ? (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}
