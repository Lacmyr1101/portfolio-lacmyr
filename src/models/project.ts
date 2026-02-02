export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl?: string;
    videoUrl?: string;
    technologies: string[];
}