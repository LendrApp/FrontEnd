import React from 'react';
import Link from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Lendr!</h1>
      </header>
      <section>
        <div>
          <Link to = '/Login'>Login</Link>
        </div>
        <div>
          <Link to = '/Register'>Register as a New User</Link>
        </div>
      </section>
    </div>
  )
}

export default Welcome;