export interface Welcome {
    code:    number;
    message: string;
    data:    Location[];
}

export interface Location {
    idLocations: number;
    latitud:     string;
    longitud:    string;
}