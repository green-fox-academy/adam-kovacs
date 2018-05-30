'use strict'

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  private dOWarray: string[] = ['MON', 'TUE', 'WED', 'TUR', 'FRI', 'SAT', 'SUN'];
  private dOW: string;
  private bookCode: string = '';

  constructor(day: number) {
    this.dOW = this.dOWarray[day - 1];
    this.bookCode = Math.random().toString(36).substr(2, 8).toUpperCase();
  }

  getDowBooking() {
    return this.dOW;
  }

  getCodeBooking() {
    return this.bookCode;
  }
}

let bookings: Reservation[] = [];
for (let i: number = 0; i < 10; i++) {
  bookings.push(new Reservation(Math.ceil(Math.random() * 7)));
  console.log(`Booking# ${bookings[i].getCodeBooking()} for ${bookings[i].getDowBooking()}`);
}
