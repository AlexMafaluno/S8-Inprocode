export interface ScapeRoomItem {
    id?: number;
    title?: string;
    director?: string;
    poster?: string;
    genre?: string;
}

export interface Scaperoom {
    code: number;
    message: string;
    data: ScapeRoomItem[]; // ✅ Ahora `data` es un array de objetos dinámico
}


