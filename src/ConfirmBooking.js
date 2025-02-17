import { Link } from 'react-router'
import React from 'react'

function ConfirmedBooking(){
    return(
        <div className='ConfirmedTable'>
            <h1>Your Booking is Confirmed!</h1>
            <p>Thank for the reservation.</p>
            <Link to="/">
                <button>Return</button>
            </Link>
        </div>
    )
}

export default ConfirmedBooking;