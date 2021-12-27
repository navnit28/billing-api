const BillingHandler=require('./helpers/billingQueue');
async function main(){
    console.log('worker is running')
    BillingHandler.processQueue();
}
main();