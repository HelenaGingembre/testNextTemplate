"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// import axios from "axios";
import { Client } from "../../../types";
import "../../styles/clients.css";
import getClientsList from "../../app/(server)/client";

const ListClients = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getClientsList();
        setClients(response);
      } catch (error: any) {
        return error.message;
      }
    }

    fetchData();
  }, []);

  return (
    <ul className="customer-list">
      {clients.map((client) => {
        return (
          <li key={client.id} className="customer-list__item">
            <a
              href={client.link}
              target="_blank"
              className="customer-list__link"
            >
              <Image
                src={client.img}
                alt={client.title}
                width={50}
                height={50}
                className="customer-list__icon"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListClients;
