import education from '../assets/education.svg';

function Education({ outputInputValue, info }) {
    return (
        <div className="education">
            <h2><img src={education} alt="Education" />Education</h2>
            <form>
                <input 
                    type="text"
                    value={info[4].text}
                    placeholder="School"
                    maxLength='66'
                    autoComplete="off"
                    onChange={outputInputValue}/>
                <input 
                    type="text"
                    value={info[5].text}
                    placeholder="Degree"
                    maxLength='150'
                    autoComplete="off"
                    onChange={outputInputValue}/>
            </form>
        </div>
    );
}

export default Education;