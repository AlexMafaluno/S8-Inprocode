export interface ScapeRoom {
  id: number;
  title?: string;
  director?: string;
  poster?: string;
  genre?: string;
  imageUrl?: string;
  type?: string;
}

export interface ScapeRoomItem {
  map(arg0: (scaperoom: any) => any): any;

  pagination: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
    perPage: number;
    hasMore: boolean;
  };
  code?: number;
  message?: string;
  data: ScapeRoom[]; // ✅ Ahora `data` es un array de objetos dinámico
}
