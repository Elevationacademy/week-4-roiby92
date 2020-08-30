const consts = require('./consts')


const handleComplaints = function (complaint) {
    if (complaint.type == consts.FINANCE) {
        console.log("Money doesn't grow on trees, you know.");
    }
    else if (complaint.type === consts.EMOTIONS) {
        console.log("It is the way of nature. Not much to be done.");
    }
    else if (complaint.type === consts.WEATHER) {
        console.log("It'll pass, as all things do, with time.");
    }





    // if (complaint.type === "finance") {
    //     console.log("Money doesn't grow on trees, you know.");
    // } else if (complaint.type === "weather") {
    //     console.log("It is the way of nature. Not much to be done.");
    // } else if (complaint.type === "emotions"){
    //     console.log("It'll pass, as all things do, with time.");
    // }
}

module.exports=(handleComplaints)