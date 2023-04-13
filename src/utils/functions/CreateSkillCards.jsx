import SkillsCard from '../../components/cards/SkillsCard'
import { skills } from '../data';
function CreateSkillCards() {
  var cards = [];
  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];

    cards.push(
      <div key={i} tabIndex={i} >
        <SkillsCard 
          title={skill.title}
          value={skill.value}
          date={skill.date}
          img={skill.icon}
        />
      </div>
    );
  }
  return cards;
}

export default CreateSkillCards;