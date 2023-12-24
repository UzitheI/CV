import location from '../../assets/location.svg';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import portfolio from '../../assets/portfolio.svg';

function NameAndPitch({ info, fileSrc }) {
    return(
        <div>
            <div className="head">
                <div>
                    <h1 className="firstName">{info[0].text.toUpperCase()}</h1>
                    <h1 className="lastName">{info[1].text.toUpperCase()}</h1>
                    <div className="developer">{info[2].text}</div>
                </div>
                <div className="picture"><img src={fileSrc}/></div>
            </div>
            <p className="pitch">{info[3].text}</p>
            <hr />
        </div>
    );
}

function Contacts({ info }) {
    return(
        <>
        <hr />
        <div className="contacts">
            <div className="location-mail">
                <div>
                    <div className="imgHolder">
                        <img src={location} alt="Location" />
                    </div>
                    <p>{info[6].text}</p>
                </div>
                <div>
                    <div className="imgHolder">
                        <img src={mail} alt="E-Mail" />
                    </div>
                    <p>{info[7].text}</p>
                </div>
            </div>
            <div className="number-portfolio">
                <div>
                    <div className="imgHolder">
                        <img src={phone} alt="" />
                    </div>
                    <p>{info[8].text}</p>
                </div>
                <div>
                    <div className="imgHolder">
                        <img src={portfolio} alt="Portfolio" />
                    </div>
                    <p>{info[9].text}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export { NameAndPitch, Contacts};