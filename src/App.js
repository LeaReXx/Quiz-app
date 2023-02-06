import Main from "./quiz-main/main";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./App.css";
import "./fonts.css";
library.add(fas,far,fab);
function App() {
  return (
    <div className="app">
      <div className="bg-image"></div>
      <Main />
    </div>
  );
}

export default App;
