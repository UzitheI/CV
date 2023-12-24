import gears from '../assets/gears.svg';
import bin from '../assets/bin.svg';

function Skills({
    skills,
    addNewSkill,
    removeSkill,
    outputInputValue
}) {
    return (
        <div className="skills">
            <h2><img src={gears} alt="Skills" />Skills</h2>
            <form>
                {skills.map((skill, index) => {
                    return (
                        <div className="skill" key={skill.id}>
                            <input 
                                id={skill.id}
                                type="text" 
                                value={skill.name}
                                placeholder="Language or Technology"
                                autoComplete="off"
                                onChange={outputInputValue}/>

                            {skills.length > 1 && 
                                <button 
                                    type="button" 
                                    className="imgHolder"
                                    onClick={() => removeSkill(index)}>
                                    <img src={bin} alt="Bin" />
                                </button>
                            }
                        </div>
                    )
                })}
            </form>
            {skills.length < 12 && 
                <button 
                    type='submit'
                    className="newBtn" 
                    onClick={addNewSkill}>
                        + New
                </button>
            }
        </div>
    );
}

export default Skills;