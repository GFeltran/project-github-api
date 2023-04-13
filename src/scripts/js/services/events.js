import { baseUrl } from '../variables.js';

async function getEventData(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`);
    return response.json();
}

async function getEvent(userName){
    const data = await getEventData(userName);
    let events = data.filter(event =>  event.type === 'CreateEvent' | event.type === 'PushEvent');
    events = events.splice(0, 10);

    return events;
}

export { getEvent }