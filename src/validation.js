export function validateForm({date, time, guests}){
    let errors = {};
    if(!date)errors.date = "Please select a date.";
    if(!time)errors.time = "Please select a time.";
    if (guests < 1 || guests > 10) errors.guests = "Guests must be between 1 and 10.";
  
    return errors;
}