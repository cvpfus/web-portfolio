export const sections = ["About", "Career", "Achievements", "Projects"] as const;

export type SectionsPosY = {
    [Key in typeof sections[number]]: number;
}