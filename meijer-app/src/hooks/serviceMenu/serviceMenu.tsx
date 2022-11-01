import AiService from '../aiService/aiService';
import AppService from '../appService/appService';
import CloudService from '../cloudService/cloudService';
import EnterpriseService from '../new/new';
import WebService from '../webService/webService';
import './serviceMenu.scss';

const ServiceMenu = (): JSX.Element => {

    return (
        <>
            <div className="serviceMenu">
                <input type="radio" name="slider" id="slide-1" />
                <input type="radio" name="slider" id="slide-2" />
                <input type="radio" name="slider" id="slide-3" />
                <input type="radio" name="slider" id="slide-4" />
                <input type="radio" name="slider" id="slide-5" />
                <div className="serviceMenu__labels">
                    <label className="serviceMenu__labels__label" htmlFor="slide-1" id="item-1">
                        <img src="https://source.unsplash.com/random/?web,service"
                            alt="item" />
                            {/* <WebService /> */}
                    </label>
                    <label className="serviceMenu__labels__label" htmlFor="slide-2" id="item-2">
                        <img src="https://source.unsplash.com/random/?app"
                            alt="item" />
                            {/* <AppService /> */}
                    </label>
                    <label className="serviceMenu__labels__label" htmlFor="slide-3" id="item-3">
                        <img src="https://source.unsplash.com/random/?cloud,service"
                            alt="item" />
                            {/* <CloudService /> */}
                    </label>
                    <label className="serviceMenu__labels__label" htmlFor="slide-4" id="item-4">
                        <img src="https://source.unsplash.com/random/?AI"
                            alt="item"/>
                            {/* <AiService /> */}
                    </label>
                    <label className="serviceMenu__labels__label" htmlFor="slide-5" id="item-5">
                        <img src="https://source.unsplash.com/random/?unknown"
                            alt="item" />
                            {/* <EnterpriseService /> */}
                    </label>
                    <div id="background-1" className="serviceMenu__labels__background">Web</div>
                    <div id="background-2" className="serviceMenu__labels__background">App</div>
                    <div id="background-3" className="serviceMenu__labels__background">Cloud</div>
                    <div id="background-4" className="serviceMenu__labels__background">AI</div>
                    <div id="background-5" className="serviceMenu__labels__background">Unknown</div>
                </div>
            </div>
        </>
    );
}

export default ServiceMenu;
