const ticketSelectors = document.querySelectorAll('.ticket-amount');
for (let ticket of ticketSelectors) {
    ticket.addEventListener('input', updateTotal);
}
const total = document.querySelector('h2.total')

function updateTotal(){
    const adultTickets= document.querySelector('#adult-tickets').value;
    const childTickets= document.querySelector('#child-tickets').value;
    const discountTickets= document.querySelector('#discount-tickets').value;
    let sum = (adultTickets*15) + (childTickets*10) + (discountTickets*12);
    total.textContent=`Subtotal: $${sum}`
}

