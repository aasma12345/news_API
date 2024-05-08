"use state"
import React from 'react';
import './page.css'
import Header from './header';
import Search from './search';
import Raw from './container';
import Footer from './footer';
export default function Home() {
    return (
      <>
        <Header/>
        <Search/>
        <Raw/>
        <Footer/>
        
      </>
  
    );
  };