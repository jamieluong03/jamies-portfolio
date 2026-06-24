export interface Contact {
    email: string;
    github: string;
    linkedin: string;
}

export interface Work {
    title: string;
    link: string;
};

export interface ExperienceEntry {
    company: string,
    title: string;
    dates: string;
    details: string[];
    work?: Work[];
    active: boolean;
}

export type Experience = ExperienceEntry[];

export interface Projects {
    name: string;
    image: string;
    link: string;
    app?: string;
    details: string;
    technologies: string[];
    live: boolean;
};

export type Project = Projects[];

export interface Categories {
    id: number;
    title: string;
    thumb: string;
    brands: string;
    description: string;
    count: number;
    images: string[];
}

export type Category = Categories[];