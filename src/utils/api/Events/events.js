import httpClient from "../httpClient";

const getEvents = () => {
  return httpClient.get("events");
};

const getEvent = eventId => {
  return httpClient.get("event/" + eventId);
};

const getEventsTicketTypes = eventId => {
  return httpClient.get(`ticket-types/events/${eventId}`);
};

const registerForEvent = data => {
  return httpClient.post(`orders`, data);
};

const registerForFreeEvent = (data, eventId) => {
  return httpClient.post(`events/${eventId}/register`, data);
};

export {
  getEvent,
  getEvents,
  getEventsTicketTypes,
  registerForEvent,
  registerForFreeEvent
};
