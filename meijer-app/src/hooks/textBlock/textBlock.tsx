import './textBlock.scss';

interface TextBlockProps {
    title: JSX.Element;
    text: JSX.Element;
}

const TextBlock = ({title = <></>, text = <></>}: TextBlockProps): JSX.Element => {
    return (
        <div className="textBlock">
            <div className="textBlock__title">{title}</div>
            <div className="textBlock__text">{text}</div>
        </div>
    );
}

export default TextBlock;
