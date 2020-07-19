import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Helmet>
      <title>Quiz App - Home</title>
    </Helmet>
    <div id='home'>
      <section>
        <div style={{ textAlign: 'center' }}>
          <span className='mdi mdi-cube-outline cube'></span>
        </div>
        <h1>Quiz App</h1>
        <div className='play-button-container'>
          <ul>
            <li style={{ listStyle: 'none' }}>
              <Link to='/play/instructions/' className='play-button'>
                Play
              </Link>
            </li>
          </ul>
        </div>
        <div className='auth-container'>
          <Link to='/login' className='auth-buttons' id='login-button'>
            Login
          </Link>
          <Link to='/register' className='auth-buttons' id='signup-button'>
            Sign up
          </Link>
        </div>
      </section>
    </div>
  </>
);

export default Home;
