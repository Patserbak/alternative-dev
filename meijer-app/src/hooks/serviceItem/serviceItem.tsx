import './serviceItem.scss';

interface ServiceItemProps {
    classNameAdded: string;
    title: JSX.Element;
    text: JSX.Element;
}

const ServiceItem = ({classNameAdded = '', title = <></>, text = <></>}: ServiceItemProps): JSX.Element => {

    return (
        <div className={`serviceItem ${classNameAdded}`}>
            <div className="serviceItem__textWrapper">
                <h2>{title}</h2>
                <div>{text}</div> 
            </div>
        </div>
    );
}

export default ServiceItem;