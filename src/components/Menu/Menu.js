import './Menu.css'
import MenuButton from './MenuButton.js'
import logo from '../../logo.svg'

export default function Menu() {
  const pages = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/about',
      title: 'About'
    },
    {
      link: '/news',
      title: 'News'
    },
    {
      link: '/contact',
      title: 'Contact'
    }
  ]

  return (
    <div className="menu">
        <a href="/">
          <img src={logo} width={75} className="logo" alt="KAV Logo"/>
        </a>

      <MenuButton />
      
      <nav>
        {pages.map((page, index) => { 
          return <a key={index} aria-label={page.title} href={page.link}>{page.title}</a>
        })}
      </nav>
    </div>
  )
}