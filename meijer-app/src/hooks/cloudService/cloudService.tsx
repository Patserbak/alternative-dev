import './cloudService.scss';

interface CloudServiceProps {
    classNameAdded: string;
}

const CloudService = ({classNameAdded = ''}: CloudServiceProps): JSX.Element => {
    return (
        <div className={`cloudService ${classNameAdded}`}>
            <div className="cloudService__textWrapper">
                <h2>Fascinated about the Cloud?</h2>
                <span> We are fascinated about the Cloud and it's possibilities. Helping organisations to make use of this potential is what we want to do.</span> 
            </div>
        </div>
    );
}

export default CloudService;