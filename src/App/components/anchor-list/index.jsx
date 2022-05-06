import './anchor-list.css';
/**
 * Returns component to loop over the list of locations and display the first letter
 * of the cities anchored to the list elements on the screen
 *
 * @param {anchorLinks} list of data after application of filters
 * @return {React.FunctionComponent}
 */
export const AnchorLinkList = ({anchorLinks}) => {
    return (
    <div className="anchorParent">
        <div>
            {anchorLinks.map((element) => {
            const { city: name } = element;
            const firstLetter = name.charAt(0);
            return (<div key={name}><a className="linkStyle" href={`#${name}`}>{firstLetter}</a></div>);
            })}
        </div>
    </div>)
}