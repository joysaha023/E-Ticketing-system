const seatSelectId = document.getElementById('seatSelectid');
const selectBtn = document.getElementsByClassName('selectBtn');
const appendSection = document.getElementById('appended-section');
const couponBtn = document.getElementById('couponBtn');
const nextBtn = document.getElementById('nextBtn');


let seatNum = 0;
// let totalPrice = 0;

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
            // seat.setAttribute('disabled')

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


            //total price
            totalPrice = seatNum * ticketPrice
            setInnerTxtByvalue('calculate-price', totalPrice)
            const grandFinal = totalPrice
            setInnerTxtByvalue('calculate-grand-total', grandFinal)

            // apply btn enabled
            if(seatNum === 4){
                couponBtn.removeAttribute('disabled')
            }
        }
        else{
            alert("You reach out your 4 seat limit!!!")
        }
    })
}

const hideCoupon = document.getElementById('hide-input')
couponBtn.addEventListener('click', function(){
    const new15 = document.getElementById('new15').innerText
    const couple20 = document.getElementById('couple20').innerText
    const inputCoupon = getInValueFromId('input-coupon')
    if (inputCoupon === new15){
        const grand15 = totalPrice * 0.15
        const grandFinal = totalPrice - grand15
        setInnerTxtByvalue('calculate-grand-total', grandFinal)
        hideCoupon.classList.add('hidden')
    }
    else if(inputCoupon === couple20){
        const grand20 = totalPrice * 0.20
        const grandFinal = totalPrice - grand20
        setInnerTxtByvalue('calculate-grand-total', grandFinal)
        hideCoupon.classList.add('hidden')
    }
    else{
        alert("Your Coupon is not valid")
    }
})


function popUp(){

    const PhNum = document.getElementById('phoneNumber').value;
    if(seatNum >= 1 && PhNum.length >= 1){
        hideElementbyId('header1')
        hideElementbyId('main1')
        hideElementbyId('footer1')
        showElementById('success-modal')
        
    }
    else{
        alert('Please Enter Your Phone number')
    }

}

function backWebsite(){
    showElementById('header1')
    showElementById('main1')
    showElementById('footer1')
    hideElementbyId('success-modal')
}