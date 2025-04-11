export interface PhotoItem {
    code:    number;
    message: string;
    data:    Photo;
}

export interface Photo {
    id:           number;
    user_id:      number;
    scaperoom_id: number;
    photoURL:     string;
    played_at:    null;
    uploaded_at:  Date;
}