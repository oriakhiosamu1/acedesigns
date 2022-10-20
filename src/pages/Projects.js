import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { products } from './Data'
import Skills from '../Components/Skills'
import '../Components/Projects.css';
import Works from '../Components/Works'

const Projects = () => {
  return (
    <div>
       {/* <div>
        <NavBar />
       </div>
      <h1>Project Page</h1>
      <p>Hello world, this is another page</p>

      {products.map((product)=>{
        // const{id, name}=product;
        return(
            <div key={product.id}>
                <p>{product.name}</p>
                <Link to={`/Projects/${product.id}`}>More</Link>
            </div>
        );
      })} */}

      <NavBar />

      <main>
        <Works />
      </main>

      <footer>
        <Skills/>
      </footer>
     

    </div>
  )
}

export default Projects
