import './App.css';
import logo from './logo.jpg'
import { BsInstagram,BsLinkedin,BsTwitter,BsDiscord,BsGithub } from 'react-icons/bs';

function App() {
  return (
    <div className="content">
      
      <div className="box">
        
        <div className="lt">
          <img src={logo} alt="logo" />
          <h1>LOGIC PLAY</h1>
        </div>

        <div className="links">
          <div className="link insta">
            <label><BsInstagram /></label>
            <a href="https://instagram.com/logic_play?igshid=ZDdkNTZiNTM=">Instagram</a>
          </div>
          <div className="link LinkedIn">
          <label><BsLinkedin /></label>
          <a href="https://www.linkedin.com/company/logic-play/">LinkedIn</a>
          </div>
          <div className="link Twitter">
            <label><BsTwitter /></label>
            <a href="https://twitter.com/logicplay3?t=odBajzzPFMWJglkMvETmpw&s=09">Twitter</a>
          </div>
          <div className="link Discord">
          <label><BsDiscord /></label>
            <a href="https://discord.gg/tqjGf9uE">Discord</a>
          </div>
          <div className="link Github">
          <label><BsGithub /></label>
            <a href="https://github.com/LOGIC-PLAY">Github</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
