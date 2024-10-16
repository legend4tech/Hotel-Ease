# **HotelEase**

https://hotel-ease.vercel.app/

**HotelEase** is a comprehensive web application designed for hotel employees to efficiently manage cabins, bookings, and guest information. The app ensures streamlined operations for hotel staff by providing features like cabin management, booking handling, and guest data updates, with a focus on ease of use and security.

---

## **Features**

### **User Authentication and Management**

- **Login:** Only hotel employees can log in to perform tasks within the application.
- **Sign-up:** New users can only be signed up within the app to ensure that only authorized employees have access.
- **User Profiles:** Employees can upload an avatar, change their name, and update their password.

### **Cabin Management**

- **Cabin Table View:** Displays all cabins with details including photo, name, capacity, price, and any active discounts.
- **Cabin Operations:** Users can create, update, or delete cabin information, including uploading photos for each cabin.

### **Booking Management**

- **Booking Table View:** Displays all bookings with relevant details such as arrival and departure dates, booking status, paid amount, and guest information.
- **Booking Status:** Bookings can have the following statuses:
  - _Unconfirmed_ (booked but not yet checked in)
  - _Checked In_
  - _Checked Out_
- **Booking Actions:** Users can delete bookings, check in guests, or check them out upon their arrival and departure.
- **Payment Confirmation:** Users can confirm whether payment has been received during the check-in process (payment happens outside the app).
- **Breakfast Options:** During check-in, guests can add breakfast to their stay if they haven't already.

### **Guest Information**

- **Guest Data:** Includes full name, email, national ID, nationality, and country flag for quick identification.

### **Dashboard**

- **Guest Check-ins/Check-outs:** Displays a list of guests checking in or out for the current day, with quick actions available to users.
- **Statistics:** Provides data on recent bookings, sales, check-ins, and occupancy rates for the last 7, 30, or 90 days.
  - **Daily Sales Chart:** Displays total hotel sales and extras (currently breakfast sales).
  - **Stay Duration Chart:** Displays metrics on guest stay durations.

### **Application Settings**

- Users can define application-wide settings such as:
  - Breakfast price
  - Minimum and maximum number of nights per booking
  - Maximum number of guests per booking

### **Dark Mode**

- The app includes a dark mode for better user experience during nighttime or in low-light environments.

---

## **Setup and Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository/hotelease.git
   ```

2. Navigate into the project directory:

   ```bash
   cd hotelease
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

---

## **Technologies Used**

- React.js for the front end
- **Supabase** for the back end
- **Tailwind** CSS for styling
- **React Query** for remote state management
- **ReChart** for generating the statistics and sales charts

---

## **View Web App Live**

- 👉[Hotel Ease](https://hotel-ease.vercel.app)

## **Possible Future Enhancements**

- Editing bookings after check-in
- Adding support for multiple hotels or branches
- Payment gateway integration for direct payment processing within the app
- Multi-language support for international hotel chains

---

## **Copyright**

&copy; 2024 [Legend4tech](https://github.com/legend4tech). All rights reserved.
