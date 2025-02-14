import { FaArrowRightArrowLeft } from "react-icons/fa6";

export default function RentalSearch() {
    return (
      <div className="flex flex-col md:flex-row gap-4 p-4  rounded-lg shadow-lg">
        {/* First Div - Pick-up */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm">Pick-up Location</label>
            <select className="border p-2 rounded-md w-full">
              <option value="">Select Location</option>
              <option value="newyork">New York</option>
              <option value="losangeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm">Date</label>
            <select className="border p-2 rounded-md w-full">
              <option value="">Select Date</option>
              <option value="2025-02-01">Feb 1, 2025</option>
              <option value="2025-02-02">Feb 2, 2025</option>
              <option value="2025-02-03">Feb 3, 2025</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm">Time</label>
            <select className="border p-2 rounded-md w-full">
              <option value="">Select Time</option>
              <option value="08:00">08:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="18:00">06:00 PM</option>
            </select>
          </div>
         
         
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white py-3 px-3 text-center mt-4">
          <FaArrowRightArrowLeft />
          </div>
  
        {/* Second Div - Drop-off */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm">Drop-off Location</label>
            <select className="border p-2 rounded-md w-full">
              <option value="">Select Location</option>
              <option value="newyork">New York</option>
              <option value="losangeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm">Date</label>
            <select className="border p-2 rounded-md w-full">
              <option value="">Select Date</option>
              <option value="2025-02-01">Feb 1, 2025</option>
              <option value="2025-02-02">Feb 2, 2025</option>
              <option value="2025-02-03">Feb 3, 2025</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm">Time</label>
            <select className="border p-2 rounded-md w-full">
              <option value="">Select Time</option>
              <option value="08:00">08:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="18:00">06:00 PM</option>
            </select>
          </div>
        
        
        </div>
      </div>
    );
  }
  