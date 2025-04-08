export interface ScapeRoom {
    id: number;
    title: string;
    director: string;
    poster?: string;
    genre?: string;
    imageUrl?: string;
}

export interface ScapeRoomItem {
    map(arg0: (scaperoom: any) => any): any;
    code: number;
    message: string;
    data: ScapeRoom; // ✅ Ahora `data` es un array de objetos dinámico
}


