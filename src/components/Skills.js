import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import skillsBg from "../assets/img/skills-img.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h4>Here are a few technologies that I have worked with.</h4>
                        <span className="navbar-text">
                          <div className="tech-icon">
                            <a  ><i class="devicon-nodejs-plain-wordmark"></i></a>
                            <a  ><i class="devicon-php-plain"></i></a>
                            <a  ><i class="devicon-csharp-plain"></i></a>
                            <span></span>
                            <a  ><i class="devicon-javascript-plain"></i></a>
                            <a  ><i class="devicon-html5-plain"></i></a>
                            <a  ><i class="devicon-css3-plain"></i></a>
                            <a  ><i class="devicon-bootstrap-plain"></i></a>
                            <a  ><i class="devicon-materialui-plain"></i></a>
                            <span></span>
                            <a  ><i class="devicon-laravel-plain-wordmark"></i></a>
                            <a  ><i class="devicon-react-original"></i></a>
                            <a  ><i class="devicon-redux-original"></i></a>
                            <span></span>
                            <a  ><i class="devicon-git-plain"></i></a>
                            <a  ><i class="devicon-github-original-wordmark"></i></a>
                            <a  ><i class="devicon-bitbucket-original-wordmark"></i></a>
                            <span></span>
                            <a  ><i class="devicon-mysql-plain-wordmark"></i></a>
                            <a  ><i class="devicon-mongodb-plain-wordmark"></i></a>
                            <span></span>
                            <a  ><i class="devicon-firebase-plain-wordmark"></i></a>
                            <a  ><i class="devicon-amazonwebservices-plain-wordmark"></i></a>
                            <span></span>
                            <a  ><i class="devicon-illustrator-plain"></i></a>
                            <a  ><i class="devicon-photoshop-plain"></i></a>
                            <a  ><i class="devicon-xd-plain"></i></a>
                            <a  ><i class="devicon-figma-plain"></i></a>
                            <a  ><i class="devicon-canva-original"></i></a>
                          </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
