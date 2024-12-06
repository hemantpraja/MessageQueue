const  {Queue} =  require("bullmq");

const notificationQueue = new Queue("email-queue",{
    connection: {
        host:"127.0.0.1",
        port: '6379'
    }
});

async function producer() {
    const res = await notificationQueue.add("email to hemant",{
        email:"hemant@email.com",
        subject : "hello world",
        body : "Hey hemant, how are you?"
    });
    console.log("Job added to queue",res.id);
}

producer();