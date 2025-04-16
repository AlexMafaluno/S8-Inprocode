export interface User {
    id_user:      number;
    firebase_uid: string;
    email:        string;
    password:     string;
    name:         string;
    surname:      string;
    roles:        string[];
    photo:        null;
    created_at:   null;
    updated_at:   null;
}
