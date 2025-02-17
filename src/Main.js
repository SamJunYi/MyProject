import cookie from './Cookie.jpg'
import pasta from './pasta.jpg'
import cake from './cake.jpg'
import sam from './Sam.jpg'
import mark from './Mark.jpg'
import Booking from './Booking'
import { useReducer, useEffect} from "react";
import { useNavigate } from 'react-router'
import {fetchAPI, submitAPI} from "./Api"

// Initialize available times
const initializeTimes = async() => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    return await fetchAPI(today);
};

//Create the reducer function
const updateTimes = (state, action) => {
    switch(action.type){
        case "UPDATE_TIMES":
            return action.payload; // Use new available times from API
        default:
            return state;
    }
}

export function Main(){
    //Use useReducer instead of useState
    const [availableTimes, dispatch] = useReducer(updateTimes, [])
    const navigate = useNavigate();

    // Fetch initial times when component mounts
    useEffect(()=>{
        fetchAPI(new Date()).then((times) => {
            dispatch({type: "UPDATES_TIMES", payload: times})
        });
    }, []);

    // Handle form submission
    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success){
            navigate("/confirmation");
        }else{
            alert("Booking failed. Please try again.");
        }
    }

    return(
        <>
        <main className="Main">
            <div className='BookingTable'>
                <h1>Booking</h1>
                {/* Pass availableTimes and dispatch function as props */}
                <Booking availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
            </div>


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