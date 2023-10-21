// import Calender from "../Calender/calender";
import Month from "../Month/month";
import orderList from "../../lib/orderList";
import { useState } from "react"
import image from "../../assets/download/Frame.png"
import image2 from "../../assets/download/downloads.png"
function Order() {


    const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const [day, setDay] = useState(() => DAYS[new Date().getDay()])
    const handleBrandChange = (event) => {
        setDay(event.target.value);
    }

    return (
        <section>
            <div className="flex gap-1.5 border-b border-gray-300 p-2.5 items-center md:flex md:justify-between md:pl-8 md:pr-8" >

                <img className="w-6" src={image} alt="" />

                <h1 className="text-base text-gray-800 font-bold">Order summary</h1>
            </div>

            <Month />


            {/* section to set day of the week starts */}

            <div className="bg-red-50  p-2.5 flex flex-col gap-[8px] mt-[5px] md:ml-7 md:mr-7">
                <select className="outline-none" onChange={handleBrandChange} id="" value={day}>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
            </div>
            {/* section to set day of the week ends*/}

            {/* section for map starts*/}
            <div className="pl-[10px] pr-[10px] flex flex-col gap-[20px] mt-[20px] md:ml-5 md:mr-5">
                {
                    orderList
                        .filter((order) => order.orderDay.toLowerCase() === day.toLowerCase())
                        .map((list, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-red-50  p-2.5 flex flex-col gap-[8px] shadow-md"
                                >
                                    <div className="border-b border-white text-sm font-bold flex  items-center justify-between">
                                        <span>Order ID:</span>
                                        <h1>{list.orderId}</h1>
                                    </div>
                                    <div className="border-b border-white text-sm font-bold flex  items-center justify-between">
                                        <span>Order day:</span>
                                        <h1>{list.orderDay}</h1>
                                    </div>

                                    {list.orderedItems.map((type, index) => {
                                        return (
                                            <div key={index} className="border-b border-white text-sm font-bold flex  items-center justify-between">
                                                <span>Order item:</span>
                                                <h1>{type.item}</h1><span>{type.quantity}</span>
                                            </div>
                                        );
                                    })}

                                    <div className="border-b border-white text-sm font-bold flex items-center justify-between ">
                                        <span>Customer's:</span>
                                        <h1>{list.customerName}</h1>
                                    </div>
                                    <div className="border-b border-white text-sm font-bold flex items-center justify-between">
                                        <span>Restaurant:</span>
                                        <p>{list.restaurant}</p>
                                    </div>

                                    <div className="border-b border-white text-sm font-bold flex items-center justify-between">
                                        <span>OrderDate:</span>
                                        <p>{list.orderDate}</p>
                                    </div>
                                    <div className="border-b border-white text-sm font-bold flex items-center justify-between">
                                        <span className="text-black">Status:</span>{" "}
                                        <span className={list.status === 'delivered' ? "text-green-400" : list.status === 'pending' ?
                                            "text-red-500" : "text-green-200"} >

                                            <p>{list.status}</p>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}


            </div>
            {/* section for map ends*/}


            {/* section for download starts*/}
            <div className="flex items-center space-x-2 p-2 mt-4 pl-8">
                <img src={image2} alt="" />
                <p className="font-bold">Download order summary</p>
            </div>
            {/* section for download ends*/}
        </section>
    );
}
export default Order;
