"use client";

import { useState } from "react";

export default function CheckoutButton({ cartItems,}: { cartItems: any[] }) {
  const [loading, setLoading] = useState(false);

  console.log(cartItems)
  const handleCheckout = async () => {
    setLoading(true);
    console.log( "let me check",cartItems)
   
  
    
        const res = await fetch("/api/users/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: cartItems }),
          });
      
          const data = await res.json()
          if (data.url) window.location.href = data.url
          setLoading(false);
   
          
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-blue-600 text-white p-3 rounded-md"
    >
      {loading ? "Processing..." : "Checkout"}
    </button>
  );
}
