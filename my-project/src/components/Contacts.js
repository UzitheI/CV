import contacts from '../assets/contacts.svg';

function Contacts({ outputInputValue, info }) {
    return (
        <div className="personalData">
            <h2><img src={contacts} alt="passport" />Contacts</h2>
            <form>
                <input 
                    type="text"
                    value={info[6].text}
                    placeholder="Address"
                    maxLength='80'
                    autoComplete="off"
                    onChange={outputInputValue}/>
                <div className="contactsSection">
                    <input 
                        type="text"
                        value={info[7].text}
                        placeholder="E-Mail"
                        maxLength='80'
                        autoComplete="off"
                        onChange={outputInputValue}/>
                    <input 
                        type="tel"
                        value={info[8].text}
                        placeholder="Phone number"
                        maxLength='15'
                        autoComplete="off"
                        onChange={outputInputValue}/>
                </div>
                <input 
                    type="link"
                    value={info[9].text}
                    placeholder="Link to portfolio"
                    maxLength='80'
                    autoComplete="off"
                    onChange={outputInputValue}/>
            </form>
        </div>
    );
}

export default Contacts;