import React from "react";
import { NameAndPitch, Contacts } from "./PersonalPreview";
import ExperiencePrev from "./ExperiencePreview";
import EducationPrev from "./EducationPreview";
import SkillsPrev from "./SkillsPreview";
import '../../styles/cv_preview.css'

class CVPreview extends React.Component {
    render() {
        const { 
            info,
            skills,
            experiences,
            borderRadius,
            fileSrc } = this.props 
        return (
            <div className="cvPreview" style={{borderRadius: borderRadius}}>
                <NameAndPitch 
                    info={info}
                    fileSrc={fileSrc}/>
                <ExperiencePrev 
                    experiences={experiences}/>
    
                <div className="education-skills">
                    <EducationPrev 
                        info={info}/>
                    <SkillsPrev 
                        skills={skills}/>
                </div>
                
                <Contacts 
                    info={info}/>
            </div>
        );
    }
}

export default CVPreview;