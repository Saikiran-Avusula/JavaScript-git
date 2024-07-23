//Promises 

const cart = ["Shoes", "Paints"];

// two more apis

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId); //
// }); //return order Id

// crateOrder(cart,(orderId)=>{
// proceedToPayment(orderId)
// })
// what if not called back, calling twice

// now comes promises 

// general format
createOrder(cart, function (orderId) {
    proceedTopayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance()
        })
    })
})

// using promises creates promises chaining 
createOrder(cart).then((orderId) => {
    return proceedTopayment(orderId)
}).then((paymentInfo) => {
    return showOrderSummary(paymentInfo)
}).then((paymentInfo) => {
    return updateWalletBalance(paymentInfo)
})

