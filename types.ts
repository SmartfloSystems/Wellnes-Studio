export interface NavItem {
    id: string;
    label: string;
    icon: string;
}

export interface Practice {
    id: string;
    label: string;
    icon: string;
}

export interface ClassSession {
    id: string;
    title: string;
    time: string;
    isPrimary?: boolean;
}