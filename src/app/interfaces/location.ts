export interface LocationItem {
    code:    number;
    message: string;
    data:   [{
        idLocations?: number;
        latitud:     string;
        longitud:    string;
}];
}