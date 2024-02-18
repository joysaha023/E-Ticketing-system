const seatSelectId = document.getElementById('seatSelectid');
const selectBtn = document.getElementsByClassName('selectBtn');
const appendSection = document.getElementById('appended-section');
const couponBtn = document.getElementById('couponBtn');


let seatNum = 0;
for(const seat of selectBtn){
    seat.addEventListener('click', function(event){
        if(seatNum < 4){

            // Update seat number
            seatNum += 1;
            const seatNumUpdate = document.getElementById('selected-seat-num')
            seatNumUpdate.innerText = seatNum;

            //Decrease seat left
            const remainSeat = document.getElementById('remain-seat').innerText;
            const innerElement = parseInt(remainSeat);
            const updateDecrees = innerElement - 1;
            setInnerTxtByvalue('remain-seat', updateDecrees)
            // console.log(updateDecrees)

            // select seat and set background color
            seat.classList.add('bg-[#1DD100]')
            seat.classList.add('text-white')
            seat.classList.remove('bg-[#F7F8F8]')

            // Display the ticket details in list
            const elementLi = document.createElement('li')
            const ticketPrice = getInnerTxtByvalue('ticket-price');
            console.log(ticketPrice)
            const p0 = document.createElement('p');
            const serealNum = seat.innerText;
            p0.innerText = serealNum;

            const p1 = document.createElement('p')
            p1.innerText = 'Economoy';

            const p2 = document.createElement('p')
            p2.innerText = ticketPrice;

            elementLi.append(p0, p1, p2);
            appendSection.appendChild(elementLi);
        }
        else{
            alert("You reach out your 4 seat limit!!!")
        }
    })
}
