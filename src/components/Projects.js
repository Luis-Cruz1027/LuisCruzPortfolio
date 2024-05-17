import PropTypes from 'prop-types';
import './Projects.css';


const Projects = ({sites}) => {
    return(
        <>
            <div className="site-list">
                {sites.map((site, index) => (
                    <div key={index} className="site-item">
                        <div className='site-info'>
                            <h2>{site.name}</h2>
                            <button onClick={() => window.open(site.url, '_blank')}>View Repository</button>
                            <h5>{site.description}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

Projects.propTypes = {
    sites: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Projects