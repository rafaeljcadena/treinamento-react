import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       <h1 className=''>Olá</h1>
//       <p>Mundo!</p>
//       <span>Olalalalla</span>
//     </div>
//   );
// }
const Header = () => {
  return <h1 className="">Olá</h1>
}

const App = () => {
  return (
    <div>
      <Header />
      <p>Mundo!</p>
      <span>Olalalalla</span>
    </div>
  );
}

// export const teste = 'Rafael';

export default App;
