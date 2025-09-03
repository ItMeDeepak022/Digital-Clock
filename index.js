
 let Displaytime=()=>{
    let currdate=new Date();
    let hour=currdate.getHours();
    let mintues=currdate.getMinutes();
    let second=currdate.getSeconds();

    let currenthour=(hour>12) ? hour-12  : hour ;
    let currh=(currenthour<10) ? "0"+currenthour  : currenthour ;
    let currmintes = (mintues<10) ? "0"+mintues : mintues;
    let currsecond = (second<10) ? "0"+second : second;
    let ampm=(hour>12) ? "PM":"AM";

    let inner=document.querySelector("h2")
    inner.innerHTML=`${currh} : ${currmintes} : ${currsecond } ${ampm}`;
}

 Displaytime();
 setInterval(Displaytime, 1000);