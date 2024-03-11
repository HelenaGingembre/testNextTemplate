import clients from "./clients.json";
import type { Client } from "../../../types";
import { delayed } from "./project";

const clientsList: Client[] = clients;

export default function getClientsList() {
  try {
    return delayed(clientsList, { timeout: 500 });
  } catch (error: any) {
    return error.message;
  }
}
