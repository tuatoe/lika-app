import React from 'react';
import logo from './imgs/LIKA_1cl.png';
import './App.css';

// import firebase from './firebase'

// firebase.firestore().collection('customers').add({
//   "email": "john.doe@gmail.com",

// })

const handler = async (event, context) => {

  const redirectUrl = 'https://google.com'

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({})
  }
}

function App() {

  // const db = firebase.firestore();

  // const usersRef = db.collection('customers');

  // const [email, setEmail] = useState('');

  // const handleSubmit = (e) => {

  //   e.preventDefault()

  //   usersRef.add({
  //     "email": email
  //   })
  //     .then(() => {
  //       setEmail('')
  //     })
  // }
  return (
    <div className="App">
      <div className="wrapper">
        <form name="customers" action="POST" method="POST" data-netlify="true" className="sign-up">
          <img className="logo" src={logo} alt="lika app logo" />
          <h1>SOMETHING AWESOME IS COMING</h1>
          <p>It's going to be amazing! Sign up to find our when it's ready.</p>
          <div className="row email">
            <div className="col-12">
              <label>
                <span className="sr-only">Email address, is required</span>
                <input id="email" name="email" placeholder="Email address" className="form-control" type="email" required />
              </label>
              <button type="submit" className="btn btn-danger sign-up__button">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
