const Queue = require("bull");
const BillingProvider = require("./provider/billingProvider");
const BillingQueue = new Queue("BillingQueue");
BillingQueue.process(async (job, jobDone) => {
    await BillingProvider.process(job.data)
        .then(() => {
            jobDone();
        })
        .catch((err) => {
            console.log(err);
            jobDone();
        });

    console.log("RequestBillingQueue job processed");
    jobDone();
});
