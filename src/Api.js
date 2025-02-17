// Simulating the API script from Coursera
export const fetchAPI = (date) => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return new Promise((resolve) => {
        setTimeout(() => resolve(times), 1000); //Simulate API delay
    })
}

export const submitAPI = (formData) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000); // Simulate API success
    })
}