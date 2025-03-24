export interface EventItem {
    idEvents:    number;
    event_name:  string;
    description: string;
    date:        Date;
    time_start:  string;

}

export interface Event {
    code:    number;
    message: string;
    data:    EventItem[];
}