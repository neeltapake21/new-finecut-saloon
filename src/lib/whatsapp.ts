interface BookingData {
  name: string;
  service: string;
  date: string;
  time: string;
}

export function generateWhatsAppLink(data: BookingData): string {
  const phoneNumber = "918999624893";
  
  const message = `Hello New Fine Cut Saloon! I would like to book an appointment.
  
*Booking Details:*
- *Name:* ${data.name}
- *Service:* ${data.service}
- *Date:* ${data.date}
- *Time:* ${data.time}

Please confirm my booking.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
