const BillingHandler=require('../servera/helpers/billingQueue');
async function main(){
    console.log('worker is running')
    BillingHandler.processQueue();
}
main();