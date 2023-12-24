import React from "react";

function EducationPrev({ info }) {
    return(
        <div className="educationSection">
            <h2>EDUCATION</h2>
            <div className="education">
                <p className="universityName">{info[4].text.toUpperCase()}</p>
                <p>{info[5].text}</p>
            </div>
        </div>
    );
}

export default EducationPrev;