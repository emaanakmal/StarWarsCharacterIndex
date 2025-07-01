import starWarsLogo from '../assets/star-wars.png'

export default function Header() {
    return <header>
        <img src= {starWarsLogo} alt = "Star Wars Text" />
        <h1>Character Index</h1>
    </header>;
}