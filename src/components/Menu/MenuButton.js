import React, { useEffect, useState } from 'react'

export default function MenuButton() {
  const [isOpen, toggle] = useState(false);

  useEffect( () => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('button.hamburger');
    menu.setAttribute('aria-expanded', isOpen);
    isOpen ? hamburger.classList.add('active') : hamburger.classList.remove('active');
  });

  return (
    <button onClick={() => toggle(isOpen ? false : true)} className="hamburger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  )
}