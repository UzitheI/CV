import tools from '../assets/experience.svg';
import bin from '../assets/bin.svg'

function Experience({
    experiences,
    addNewExperience,
    removeExperience,
    outputInputValue
}) {
    return (
        <div className="experience">
            <h2><img src={tools} alt="Experience" />Work Experience</h2>

            {experiences.map((experience, index) => {
                return (
                    <div key={experience.id}>
                        {experiences.length > 1 &&
                            <div className='experience-quantity'>
                                <h3>Experience #{index + 1}</h3>
                                <button 
                                    className='imgHolder' 
                                    onClick={() => removeExperience(index)}>
                                        <img src={bin} alt="Bin" />
                                </button>
                            </div>
                        }

                        <form>
                            <input
                                id={experience.id}
                                name='position'
                                type="text"
                                placeholder="Position"
                                maxLength='38'
                                autoComplete="off"
                                value={experience.position}
                                onChange={outputInputValue}/>
                            <input 
                                id={experience.id}
                                name='company'
                                type="text"
                                placeholder="Company"
                                maxLength='30'
                                autoComplete="off"
                                value={experience.company}
                                onChange={outputInputValue}/>
                            <input
                                id={experience.id}
                                name='start'
                                type="text"
                                placeholder="Start date of employment"
                                maxLength='12'
                                autoComplete="off"
                                value={experience.start}
                                onChange={outputInputValue}/>
                            <input
                                id={experience.id}
                                name='end'
                                type="text"
                                placeholder="End date of employment"
                                maxLength='12'
                                autoComplete="off"
                                value={experience.end}
                                onChange={outputInputValue}/>
                            <textarea 
                                id={experience.id}
                                name='dailyWork'
                                placeholder="Your main occupation, 
                                             daily tasks and work field"
                                maxLength='400'
                                autoComplete="off"
                                value={experience.dailyWork}
                                onChange={outputInputValue}/>
                        </form>
                    </div>
                );
            })}

            {experiences.length < 2 && 
                <button 
                    className="newBtn"
                    onClick={addNewExperience}>
                        + New
                </button>
            }
        </div>
    );
}

export default Experience;