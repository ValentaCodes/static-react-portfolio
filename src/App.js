import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
// import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import './index.css'

function App() {
  return (
    <div>
      <div className="wrapper">
      <Sidebar />
      <Profile/>
      <Skills />
      {/* <Projects /> */}
    </div>
    </div>
  );
}

export default App;
