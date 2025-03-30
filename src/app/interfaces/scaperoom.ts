export interface ScapeRoom {
    id?: number;
    title: string;
    director: string;
    poster?: string;
    genre?: string;
}

export interface ScapeRoomItem {
    code: number;
    message: string;
    data: ScapeRoom; // ✅ Ahora `data` es un array de objetos dinámico
}


