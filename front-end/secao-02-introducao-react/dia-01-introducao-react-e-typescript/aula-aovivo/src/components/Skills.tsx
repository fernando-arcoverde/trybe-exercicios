import './Skills.css';

function Skills() {
  const skills = ['JS', 'TS', 'CSS', 'REACT'];
  return (
    <div className="skill">
      <h2>Skills</h2>
      <span>{skills[0]}</span>
      <span>{skills[1]}</span>
      <span>{skills[2]}</span>
      <span>{skills[3]}</span>
    </div>
  );
}

export default Skills;
