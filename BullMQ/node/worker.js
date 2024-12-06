const {Worker} = require("bullmq");

const sendEmail = (email) => new Promise((resolve) => setTimeout(resolve, 5000));

const worker = new Worker("email-queue",async (job) => {
    console.log(`Message recieved td : ${job.id}`);
    console.log("Processing message...");
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail(job.data.email);
    console.log("Email sent successfully");
},{
    connection: {
        host:"127.0.0.1",
        port: '6379'
    }
});

