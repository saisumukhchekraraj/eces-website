
import { semiconductors } from "./semiconductor";
import { connectedSystems } from "./connected-systems";
import { intelligentHardware } from "./intelligent-hardware";
import type { Domain } from "./types";

export const allDomains: Domain[] = [
    semiconductors,
    connectedSystems,
    intelligentHardware,
];

export function getDomain(slug: string): Domain | undefined {
    return allDomains.find((domain) => domain.slug === slug);
}
