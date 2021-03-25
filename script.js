const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");

const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");


let ticketPrice = +movieSelect.value;


function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice",moviePrice);
}

//update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatIndex = [...selectedSeats].map((seat)=>{
        return [...seats].indexOf(seat);
    })

    localStorage.setItem("selectedSeats",JSON.stringify(seatIndex));


    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
}


//movie Select event
movieSelect.addEventListener("change", e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// seat click event listener
container.addEventListener("click", e => {
    if(e.target.classList.contains("seat") && 
    !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
})