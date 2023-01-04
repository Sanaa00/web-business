import React from "react";
import style from "../Style";
import { airbnb, binance, coinbase, dropbox } from "../assets";
function Clients() {
  const clients = [
    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
  ];

  return (
    <section className={`${style.flexCenter} my-4`}>
      <div className={`${style.flexCenter} flex-wrap w-full `}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${style.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
