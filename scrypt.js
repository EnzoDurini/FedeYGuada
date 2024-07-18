document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvpForm');
    const reserveForm = document.getElementById('reserveForm');
    
    let guestList = [];
    let reservationList = [];
    
    rsvpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const attendance = event.target.attendance.value;
        
        guestList.push({ name, email, attendance });
        alert('Gracias por confirmar tu asistencia!');
        
        rsvpForm.reset();
        
        console.log('Lista de Invitados:', guestList);
    });
    
    reserveForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nameReserve = event.target.nameReserve.value;
        const emailReserve = event.target.emailReserve.value;
        const roomType = event.target.roomType.value;
        
        reservationList.push({ name: nameReserve, email: emailReserve, roomType });
        alert('Habitación reservada con éxito!');
        
        reserveForm.reset();
        
        console.log('Lista de Reservas:', reservationList);
    });
});
