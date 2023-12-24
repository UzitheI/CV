function SkillsPrev({ skills }) {
    return(
        <div className="skillsSection">
            <h2>SKILLS</h2>
            <div className="skills">
                {skills.map(skill => {
                    return <p key={skill.id}>{skill.name}</p>
                })}
            </div>
        </div>
    );
}

export default SkillsPrev;