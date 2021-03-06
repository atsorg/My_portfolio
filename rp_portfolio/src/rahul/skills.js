import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
export default function Skills() {
  const skilllist = [
    {
      name: "HTML",
      rating: 80,
      icon: <FaHtml5 class="rhtmlimg"></FaHtml5>,
    },
    {
      name: "PYTHON",
      rating: 90,
      icon: <SiPython class="rpythonimg"></SiPython>,
    },
    {
      name: "CSS",
      rating: 79,
      icon: <FaCss3Alt class="rcssimg"></FaCss3Alt>,
    },
    {
      name: "JAVA SCRIPT",
      rating: 87,
      icon: <IoLogoJavascript class="rjavascriptimg"></IoLogoJavascript>,
    },
  ];

  return (
    <div className="rSkillsContainer">
      <h2>Technical Skills</h2>
      <div id="r_skills">
        {skilllist.map((s) => (
          <div class="dirpl">
            <div>
              {s.icon}
              <h2>{s.name}</h2>
            </div>
            <progress value={s.rating} max="100"></progress>
          </div>
        ))}
      </div>
    </div>
  );
}
