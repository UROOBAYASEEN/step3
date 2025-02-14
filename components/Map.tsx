
"use client";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});
const Map = ({ getsource, Destination }:{ getsource: [number, number]; Destination: [number, number] }) => {
  type Coordinates = [number, number];
  const position:Coordinates = [51.505, -0.09]
  const defaultCenter: Coordinates = [51.505, -0.09];
  return <MapContainer center={position} zoom={4} scrollWheelZoom={false}
  className="h-full rounded-lg"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    <Marker position={getsource}/>
    <Marker position={Destination}/>
  
  
  
  </MapContainer>

  // return (<div className="h-96">
  //      <MapContainer
  //     center={getsource ||[51.505, -0.09] }
  //     zoom={13}
  //     scrollWheelZoom={false}
  //     className="h-full rounded-lg"
  //   >
  //     <TileLayer
  //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //     />
  //     <Marker position={[51.505, -0.09]}/>
  //     {getsource && <Marker position={getsource} />}
  //     {Destination && <Marker position={Destination} />}
  //   </MapContainer> 
  //   </div>
  
  
  // )
}

export default Map

// "use client";
// import React from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // Safely handle _getIconUrl
// (delete (L.Icon.Default.prototype as any)._getIconUrl);
// L.Icon.Default.mergeOptions({
//   iconUrl: markerIcon,
//   iconRetinaUrl: markerIcon2x,
//   shadowUrl: markerShadow,
// });

// const Map = ({
//   getsource,
//   Destination,
// }: any) => {
//   const defaultCenter: [number, number] = [51.505, -0.09];

//   return (
//     <div className="h-44">
//       <MapContainer
//         center={getsource || defaultCenter}
//         zoom={4}
//         scrollWheelZoom={false}
//         className="h-full rounded-lg"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={defaultCenter}/>
//         {/* {getsource && <Marker position={getsource} />}
//         {Destination && <Marker position={Destination} />} */}
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
