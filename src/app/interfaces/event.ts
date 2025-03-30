export interface Event {
    idEvents?:    number;
    event_name:  string;
    description: string;
    date?:        Date;
    time_start:  string;
    people: number;

}

export interface EventItem {
    code:    number;
    message: string;
    data:    Event;
}