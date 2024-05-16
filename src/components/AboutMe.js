import picOfMe from '../random.jpg';
import './AboutMe.css';

function AboutMe(){

    return(
        <>
            <section class="about-me">
                <div class="container">
                    <div class="profile-pic">
                        <img src={picOfMe} alt="Luis Cruz" />
                    </div>
                    <div class="about-content font-used">
                        <h1>About Me</h1>
                        <p>Born and raised in South Texas, I graduated from the University of Texas Rio Grande Valley with a Bachelor of Science in Computer Science. I am passionate about technology and constantly exploring new advancements in the field. I enjoy working on personal projects that challenge my problem-solving skills and creativity.</p>
                        <p>Some of my interests include coding, working on video games, and learning about data structures and time complexity.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe