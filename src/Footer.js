import logo from './Logo.svg';

export function Footer(){
    return(
        <>
        <footer>
            <img src={logo}></img>
            <section>
            <div className='FooterContent'>
                <h1>Doormat</h1>
                <h1>Navigation</h1>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Menu</a></li>
                  <li><a href="#">Order Online</a></li>
                </ul>
            </div>

            <div className='FooterContent'>
                <h1>Contact</h1>
                <ul className='Foot2'>
                  <li><a href="#">Address</a></li>
                  <li><a href="#">Phone Number</a></li>
                  <li><a href="#">Email</a></li>
                </ul>
            </div>

            <div className='FooterContent'>
                <h1>Social Media</h1>
                <h1>Links</h1>
                <ul>
                  <li><a href="#">Address</a></li>
                  <li><a href="#">Phone Number</a></li>
                  <li><a href="#">Email</a></li>
                </ul>
            </div>

            </section>

        </footer>
        </>
    )
}

export default Footer;