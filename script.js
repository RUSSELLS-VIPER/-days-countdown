const endDate = "31 December 2999 23:59:59"
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    
    if (diff < 0) return;

    input[0].value = Math.floor(diff / 3600 / 24);
    //convert into days
    input[1].value = Math.floor(diff / 3600) % 24;
    //convert into hours
    input[2].value = Math.floor(diff / 60) % 60;
    //convert into seconds
    input[3].value = Math.floor(diff) % 60;
    //convert into mini seconds
    input[4].value = Math.floor(diff * 100) % 59;
}

//initial call
clock();
    
setInterval(
    () => {
        clock()
    }
)