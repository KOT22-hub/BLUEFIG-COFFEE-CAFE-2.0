
Key Features
Modern & Responsive UI: The website adapts seamlessly to all screen sizes, from desktop to mobile, providing an excellent user experience.

Dynamic Menu Display: A clean and organized presentation of the restaurant's offerings.

Nodemailer Integration: The contact form is fully functional, using Nodemailer to send emails directly to the restaurant's inbox, ensuring a reliable line of communication with customers.

Upgraded & Optimized Codebase: This version of the site features improved performance, cleaner code, and a more modular structure for easier maintenance and future enhancements.

Technologies Used
Node.js & npm: The core server-side environment and package manager.



Nodemailer: Used for sending emails from the contact form.

HTML5, CSS3, & JavaScript (ES6+): For the front-end structure, styling, and interactivity.

Getting Started
Follow these simple steps to get the project up and running on your local machine.

Prerequisites



Installation

Clone the repository:

git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
cd your-repository-name

Install dependencies:

npm install

Set up environment variables for Nodemailer:
Create a file named .env in the root directory of the project. This file will store your email credentials and should never be committed to Git. Add the following lines to your .env file, replacing the placeholder values with your actual email service credentials:

EMAIL_USER=your_email_address@example.com
EMAIL_PASS=your_email_password_or_app_specific_password

Note: If you are using Gmail, you may need to set up an "App Password" instead of your regular account password. Consult your email provider's documentation for details.

Usage

To start the local development server, run the following command:

npm start

The website should now be live at http://localhost:3000 (or the port specified in your server file). Open your browser and navigate to this address to view it.
