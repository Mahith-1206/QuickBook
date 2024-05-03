import Queue from "bull";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "geallapallymahithkumar@gmail.com",
    pass: "bjfvflfydwjahdbr",
  },
});

async function run() {
  const messageQueue = new Queue("messageQueue");

  messageQueue.process(async (job) => {
    console.log("Processing : " + job.id);
    console.log("Processing data : " + job.data.name);

    const name = job.data.name;
    const email = job.data.email;
    const eventName = job.data.eventName;
    const eventDate = job.data.eventDate;

    const mailOptions = {
      from: "geallapallymahithkumar@gmail.com",
      to: email,
      subject: "Event Booking Confirmation",
      text: `Dear ${name},\n\nThank you for booking the event "${eventName}" on ${eventDate}. We look forward to seeing you there!\n\nBest regards,\nYour Event Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    return;
  });
}
run().catch(console.dir);
