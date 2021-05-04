import { ListGroup, Button } from 'react-bootstrap';
import Tags from '../UI/Tags';
import Link from 'next/link';
import Style from '../../styles/results.module.css';
import PropTypes from 'prop-types';

const ItemResult = ({ title, description, tags, version, favorite, onClickFavorite, filename }) => {

    const icon = favorite ? "fa fa-bookmark fa-sm fa-2x text-warning" : "fa fa-bookmark-o fa-sm fa-2x"
    const action = favorite ? "delete" : "add";
    return (
        <ListGroup.Item className={[Style.bgCardColor, Style.borderGrey].join(" ")}>
            <button onClick={() => onClickFavorite(action, filename, { title, description, tags })} style={{ backgroundColor: "transparent" }} className="border-0 text-white float-right" >
                <span className={[" fa-sm fa-2x", icon].join(" ")} aria-hidden="true"></span>
            </button>
            <h4>
                <Link href={`/${filename}`}>
                    {title}
                </Link>
            </h4>
            <Tags tags={tags} />
            <p>{description}</p>
            <Button variant="outline-light" size="sm" disabled> DB  {version}</Button>
        </ListGroup.Item>
    )
}

ItemResult.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    version: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
};

export default ItemResult;

