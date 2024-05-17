import PropTypes from 'prop-types';
import './Projects.css';

const Projects = ({ sites }) => {
    return (
        <>
            <div className="site-list">
                {sites.map((site, index) => (
                    <div key={index} className="site-item">
                        <img class='background' src={site.background} />
                        <div className='site-info'>
                            <h2 className='title'>{site.name}</h2>
                            <button onClick={() => window.open(site.url, '_blank')}>View Repository</button>
                            <h5 className='site-description'>{site.description}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <div className="more-on-the-way-container">
                <div className="more-on-the-way-card">
                    <p>More projects on the way!</p>
                </div>
            </div>
        </>
    );
};

Projects.propTypes = {
    sites: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Projects;
