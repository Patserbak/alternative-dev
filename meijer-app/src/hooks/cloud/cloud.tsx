import './cloud.scss';

const Cloud = (): JSX.Element => {

    return (
        <div id="cloudService" className="cloud">
            <div className="cloud__wrapper">
                <div className="cloud__wrapper__wrapperText">
                    <div className="cloud__wrapper__wrapperText__title">Cloud</div>
                    <div className="cloud__wrapper__wrapperText__text"><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</span></div>
                </div>
                <div className="cloud__wrapper__animation">
                    <div className="cloud__wrapper__animation__cloudAnimation">
                        <div className="cloud__wrapper__animation__cloudAnimation__center"></div>
                    </div>
                </div>
            </div>
            <a href="#appService" className="cloud__arrow"></a>
        </div>
    );
}

export default Cloud;