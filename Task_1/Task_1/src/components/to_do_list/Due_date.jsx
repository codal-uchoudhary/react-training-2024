import moment from "moment";

const DueDate=(props)=>{
    let month = props.date.format('MMMM')
    let year = props.date.format('YYYY')
    let day = props.date.format('Do')
    let time = props.date.format('h:mm a')

    return(
        <div className="w-[150px] bg-neutral-800 rounded-[10px] text-white">
            <div className="text-[30px] font-bold">{day}</div>
            <div className="text-[18px] font-semibold">{month+"-"+year}</div>
            <div className="text-[18px] font-semibold">{time}</div>
        </div>
    )
}
export default DueDate