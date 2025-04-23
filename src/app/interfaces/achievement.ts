export interface Achievement {
    id: number;
    description: string;
    icon: string;
    type: string;
    threshold?: number;
    hidden?: boolean;
    revealedDescription?: string;
}
