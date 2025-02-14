"use client"




import React, { useEffect, useRef, useState } from 'react'

const SelectField = ({ label, placeholder, list, setvalue ,setplace}: any) => {
  const [optiondata, setoptiondata] = useState<string>()

  useEffect(() => {
    if (optiondata) {
      const convertinarry = optiondata.split(",");
      const abc = [parseFloat(convertinarry[0]), parseFloat(convertinarry[1])];

      setvalue(abc);
      setplace(convertinarry[2]);
    }
  }, [optiondata,setvalue,setplace]);
  

  
  

  return (
    <div className="border border-black py-3 text-center mt-10">
      <label htmlFor="options">{label}</label>
      <select
        id="options"
        name="option"
      

onChange={(e)=>{
const data=e.target.value


setoptiondata(data)

}}
        className="px-3 py-2"
      >
        <option value="">{placeholder}</option>
        {list.map((val: any, ind: number) => (
          <option
            className="px-6 py-3"
            key={ind}
            value={([`${val.latitude},${val.longitude}`,`${val.name}`])}
             
            
              
            
          >
            {val.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
