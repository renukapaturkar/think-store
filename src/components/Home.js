import '../css/Home.css';
import '../App.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="hero-img-container">
            
            <div className="text-overlay">
                <q>Books are a uniquely portable magic.</q>
                <div className="second-heading">Shop your favorites with Think store.</div>
                <div>
                    <Link to='/products' >
                    <button className="btn btn-primary btn-primary-custom">Shop Now</button>
                    </Link>
                
                    </div> 
            
            </div>
        </div>
    )
};

export default Home;