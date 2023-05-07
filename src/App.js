import { Route,Routes,Link } from 'react-router-dom';
import './App.css';
import Page1 from './pages/page1/Page1';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';


const projects = [
  {id:0, title:'Gaming streaming portal', img: '/01.svg'},
  {id:1, title:'Video service', img: '/02.svg'},
  {id:2, title:'Video portal', img: '/03.svg'},
  {id:3, title:'Dating app', img: '/04.svg'},
  {id:4, title:'Landing', img: '/05.svg'},
  {id:5, title:'Gaming community', img: '/06.svg'},
]

function App() {
  return (
    <div className="App">
      
<header>
  <div className='container'>
    <div className='header'>
    <h1 className='logo'><Link to='/'><span className='logo-big'>Freelancer </span>portfolio</Link></h1>
    <ul className='row'>
      <li> <Link to='/'>Projects</Link></li>
      <li> <Link to='/skills'>Skills</Link></li>
      <li> <Link to='/contacts'>Contacts</Link></li>
    </ul>
    </div>
  </div>
</header>
<Routes>
        <Route path='/' element={<Page1 projects={projects}/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/project/:id' element={<Projects projects={projects}/>}/>
      </Routes>
<footer>
  <div className='container'>
    <div className='footer'>
      <img src='/img/ICONS.svg' alt='' />
      <p>© 2022 frontend-dev.com</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
