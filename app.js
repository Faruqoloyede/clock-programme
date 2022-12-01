const label = document.getElementById("label");

update();
setInterval(update, 1000);
function update(){
    let date = new Date();
    label.innerHTML = formatdate(date);

    function formatdate(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatzero(hours);
        minutes = formatzero(minutes);
        seconds = formatzero(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }
    function formatzero(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}