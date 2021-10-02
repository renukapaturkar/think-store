import '../css/Home.css';
import '../App.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="hero-img-container">
            <img className="hero-img" src="https://images.unsplash.com/photo-1602722053020-af31042989d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="img"/>
            
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