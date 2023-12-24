function ExperiencePrev({ experiences }) {
    return(
        <div>
            <h2>EXPERIENCE</h2>
            <div className="experience">
                {experiences.map(experience => {
                    return (
                        <div key={experience.id}>
                            <p className="position">{experience.position}</p>
                            <p>{experience.company}<span>| {experience.start} - {experience.end}</span></p>
                            <p>{experience.dailyWork}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ExperiencePrev;