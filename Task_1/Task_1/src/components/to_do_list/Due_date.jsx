import moment from "moment";

const DueDate=(props)=>{
    let month = props.date.format('MMMM')
    let year = props.date.format('YYYY')
    let day = props.date.format('Do')
    let time = props.date.format('h:mm a')

    return(
        <div className="w-40 bg-neutral-800 rounded-2xl text-white pb-2">
            <div className="text-4xl font-bold pt-2">{day}</div>
            <div className=" font-semibold">{month+"-"+year}</div>
            <div className=" font-semibold">{time}</div>
        </div>
    )
}
export default DueDate