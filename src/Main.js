import cookie from './Cookie.jpg'
import pasta from './pasta.jpg'
import cake from './cake.jpg'
import sam from './Sam.jpg'
import mark from './Mark.jpg'

export function Main(){
    return(
        <>
        <main className="Main">
            <div className="Specials">
                <h1>Specials</h1>
                <section className="SpecialsContent">
                    <article>
                        <img src={cookie}></img>
                        <div className='SpecialsFood'>
                        <h2>Food</h2>
                        <h3>title2</h3>
                        <p>Add a button so the user can go to the order online page.</p>
                        <button>Order</button>
                        </div>
                    </article>

                    <article>
                        <img src={pasta}></img>
                        <div className='SpecialsFood'>
                        <h2>Food</h2>
                        <h3>title2</h3>
                        <p>Add a button so the user can go to the order online page.</p>
                        <button>Order</button>
                        </div>
                    </article>

                    <article>
                        <img src={cake}></img>
                        <div className='SpecialsFood'>
                        <h2>Food</h2>
                        <h3>title2</h3>
                        <p>Add a button so the user can go to the order online page.</p>
                        <button>Order</button>
                        </div>
                    </article>
                </section>
                <button className='Specialsbtn'>More</button>
            </div>

            <div className="Testimonials">
                <h1>Testimonials</h1>
                <div className='articleBox'>
                <article>
                    <img src={sam}></img>
                    <div className='articleContent'>
                        <h2>Sam Altman</h2>
                        <h3>5 Stars</h3>
                        <p>Review...</p>
                    </div>
                </article>

                <article>
                    <img src={mark}></img>
                    <div className='articleContent'>
                        <h2>Mark Zuckerberg</h2>
                        <h3>5 Stars</h3>
                        <p>Review...</p>
                    </div>
                </article>
                </div>
            </div>

            <div className="About">
                <div className='AboutImage'></div>
                <article>
                   <h1>About Us</h1>
                   <p>As the Little Lemon owners have yet to provide the written content for this section, add a text box placeholder. </p>
                </article>
            </div>

        </main>
        </>
    )
}

export default Main;