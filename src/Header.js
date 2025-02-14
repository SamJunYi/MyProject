import greeksalab from './greeksalad.jpg';

function Header(){
    return(
        <>
        <header className="Hero">

            <article className="HeroContent">
                <h1>Home</h1>
                <h2>title2</h2>
                <p>In relation to the latter item, put this in the content block as a button, so that, once clicked, the user is brought to another page where they can carry this task out.</p>
                <button>Button</button>
            </article>

            <div className="HeroImage">
               <img src={greeksalab}></img>
            </div>
            
        </header>
        </>
    )
}

export default Header;