import './aiService.scss';

interface AiServiceProps {
    classNameAdded: string;
}

const AiService = ({classNameAdded}: AiServiceProps): JSX.Element => {
    return (
        <div className={`aiService ${classNameAdded}`}>
            <div className="aiService__textWrapper">
                <h2>Artificial intelligence</h2>
                <span>We help organisations use the full potential of all it's data by using AI. Is your organisation ready for it?</span> 
            </div>
        </div>
    );
}

export default AiService;
