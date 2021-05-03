import React from 'react';
import Web from "../src/images/student.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

function Home() {
  return (
    <>
    	<Common 
    	name="Pace up learning with"
    	imgsrc={Web}
    	visit="/services"
    	btnname="Get Started"
    	/>
    </>
  );
}

export default Home;
