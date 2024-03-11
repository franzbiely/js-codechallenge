import SettingsSelector from "./components/settings/SettingsSelector";
import Modal from "react-modal";
import "./styles/styles.css";

Modal.setAppElement("#root");

function App() {
  return <SettingsSelector />;
}

export default App;
