const BillingHandler=require('./helpers/billingQueue');
async function main(){
    BillingHandler.processQueue();
}
main();