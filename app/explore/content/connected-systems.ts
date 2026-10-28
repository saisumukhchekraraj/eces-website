
import type { Domain } from "./types";

export const connectedSystems: Domain = {
    slug: "connected-systems",
    title: "Connected Systems",
    tagline: "Communication, networks and connected devices",

    intro:
        "Connected Systems explores how information moves between devices, people, and infrastructure. It combines communication theory, signal processing, radio-frequency engineering, and networking to build reliable systems ranging from wireless networks to satellite communication.",

    problems: [
        "Transmitting information reliably over noisy and bandwidth-limited channels.",
        "Designing wireless systems that balance coverage, capacity, latency, and power consumption.",
        "Connecting large numbers of devices securely and efficiently across diverse networks.",
        "Building communication systems that operate under demanding spectrum and hardware constraints.",
    ],

    topics: [
        {
            id: "wireless-communications",
            title: "Wireless Communications",
            summary:
                "Understanding modulation, channel behaviour, antennas, and signal transmission between devices without physical connections.",
        },
        {
            id: "5g-6g-networks",
            title: "5G and 6G Networks",
            summary:
                "Exploring cellular network architecture, radio access networks, spectrum usage, and emerging approaches to high-capacity, low-latency communication.",
        },
        {
            id: "internet-of-things",
            title: "Internet of Things",
            summary:
                "Connecting sensors, embedded devices, and physical systems to collect data, communicate, and coordinate actions.",
        },
        {
            id: "computer-networks",
            title: "Computer Networks",
            summary:
                "Studying network protocols, routing, switching, addressing, and the mechanisms that enable systems to exchange data.",
        },
        {
            id: "rf-engineering",
            title: "RF Engineering",
            summary:
                "Designing and analysing radio-frequency circuits, antennas, transmission lines, and wireless signal paths.",
        },
        {
            id: "satellite-communications",
            title: "Satellite Communications",
            summary:
                "Understanding satellite links, orbital communication systems, link budgets, and connectivity over large geographic areas.",
        },
    ],

    careers: [
        {
            id: "rf-engineer",
            title: "RF Engineer",
            summary:
                "Designs and evaluates radio-frequency circuits and systems used in wireless communication.",
            responsibilities: [
                "Design and analyse RF circuits and signal paths.",
                "Evaluate antenna and transmission-line performance.",
                "Perform measurements and troubleshoot RF hardware.",
                "Assess signal integrity, interference, and link performance.",
            ],
            foundations: [
                "Electromagnetic theory",
                "Signals and systems",
                "Analog electronics",
                "Communication systems",
            ],
            skills: [
                "RF circuit analysis",
                "Impedance matching",
                "Antenna fundamentals",
                "S-parameter interpretation",
                "Measurement and debugging",
            ],
            tools: [
                "MATLAB",
                "SPICE simulators",
                "RF network analysers",
                "Electromagnetic simulation tools",
            ],
            resourceIds: [],
        },
        {
            id: "communication-systems-engineer",
            title: "Communication Systems Engineer",
            summary:
                "Develops and analyses systems that encode, transmit, receive, and recover information across communication channels.",
            responsibilities: [
                "Analyse communication system performance.",
                "Evaluate modulation and coding schemes.",
                "Model channel effects and noise.",
                "Simulate and test communication algorithms.",
            ],
            foundations: [
                "Signals and systems",
                "Probability and random processes",
                "Digital communications",
                "Digital signal processing",
            ],
            skills: [
                "Signal analysis",
                "Modulation techniques",
                "Channel modelling",
                "Digital signal processing",
                "System simulation",
            ],
            tools: [
                "MATLAB",
                "Python",
                "GNU Radio",
                "NumPy and SciPy",
            ],
            resourceIds: [],
        },
        {
            id: "iot-engineer",
            title: "IoT Engineer",
            summary:
                "Builds connected systems that combine sensors, embedded computing, communication protocols, and data services.",
            responsibilities: [
                "Integrate sensors and embedded devices.",
                "Implement device communication protocols.",
                "Develop and test connected-device firmware.",
                "Evaluate reliability, power consumption, and connectivity.",
            ],
            foundations: [
                "Embedded systems",
                "Computer networks",
                "Microcontrollers",
                "Digital electronics",
            ],
            skills: [
                "Embedded programming",
                "Sensor integration",
                "Communication protocols",
                "Hardware debugging",
                "Power optimisation",
            ],
            tools: [
                "C and C++",
                "Python",
                "MQTT",
                "Wireshark",
            ],
            resourceIds: [],
        },
        {
            id: "wireless-systems-engineer",
            title: "Wireless Systems Engineer",
            summary:
                "Works on the design, evaluation, and optimisation of wireless communication systems and networks.",
            responsibilities: [
                "Analyse wireless link performance and coverage.",
                "Evaluate interference and spectrum constraints.",
                "Simulate wireless system behaviour.",
                "Support network testing and performance optimisation.",
            ],
            foundations: [
                "Wireless communications",
                "Probability and random processes",
                "Electromagnetics",
                "Signal processing",
            ],
            skills: [
                "Wireless link analysis",
                "Propagation modelling",
                "System simulation",
                "Performance evaluation",
                "Spectrum fundamentals",
            ],
            tools: [
                "MATLAB",
                "Python",
                "GNU Radio",
                "Network simulation tools",
            ],
            resourceIds: [],
        },
    ],

    resources: [],
    editorPick: null,
    lastReviewed: "2026-10-29",
};
