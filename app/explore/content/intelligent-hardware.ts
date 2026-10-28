
import type { Domain } from "./types";

export const intelligentHardware: Domain = {
    slug: "intelligent-hardware",
    title: "Intelligent Hardware",
    tagline: "Embedded computing, robotics and hardware-accelerated intelligence",

    intro:
        "Intelligent Hardware explores how digital electronics, processors, embedded software, and control systems work together to build intelligent physical systems. It covers everything from low-level firmware and programmable logic to robotics and specialised hardware for efficient computation.",

    problems: [
        "Building reliable embedded systems under strict memory, timing, power, and cost constraints.",
        "Designing digital hardware that meets throughput, latency, and resource requirements.",
        "Integrating sensors, actuators, computation, and control into robotic systems.",
        "Accelerating computational workloads while balancing performance, energy consumption, and hardware cost.",
    ],

    topics: [
        {
            id: "embedded-systems",
            title: "Embedded Systems",
            summary:
                "Designing computing systems that interact with physical devices under resource, timing, and reliability constraints.",
        },
        {
            id: "fpga-design",
            title: "FPGA Design",
            summary:
                "Implementing digital circuits and parallel hardware architectures using programmable logic and hardware description languages.",
        },
        {
            id: "robotics",
            title: "Robotics",
            summary:
                "Combining sensing, actuation, computation, and control to build systems that interact with their environment.",
        },
        {
            id: "edge-ai",
            title: "Edge AI",
            summary:
                "Deploying machine-learning inference close to sensors and users while managing latency, memory, compute, and power constraints.",
        },
        {
            id: "computer-architecture",
            title: "Computer Architecture",
            summary:
                "Understanding processor organisation, instruction execution, memory hierarchies, parallelism, and system performance.",
        },
        {
            id: "hardware-accelerators",
            title: "Hardware Accelerators",
            summary:
                "Designing specialised hardware to execute computational workloads more efficiently than general-purpose processors in suitable applications.",
        },
    ],

    careers: [
        {
            id: "embedded-software-engineer",
            title: "Embedded Software Engineer",
            summary:
                "Develops software that runs on microcontrollers and embedded processors to control and coordinate electronic systems.",
            responsibilities: [
                "Develop firmware for embedded devices.",
                "Interface with sensors and peripherals.",
                "Debug timing, memory, and hardware-software integration issues.",
                "Test reliability and real-time behaviour.",
            ],
            foundations: [
                "C and C++",
                "Digital electronics",
                "Microcontrollers",
                "Computer architecture",
            ],
            skills: [
                "Firmware development",
                "Peripheral interfacing",
                "Interrupts and timers",
                "Serial communication protocols",
                "Hardware debugging",
            ],
            tools: [
                "GCC",
                "GDB",
                "Git",
                "Microcontroller development tools",
            ],
            resourceIds: [],
        },
        {
            id: "fpga-engineer",
            title: "FPGA Engineer",
            summary:
                "Designs and verifies digital circuits that execute directly in programmable hardware.",
            responsibilities: [
                "Develop RTL using Verilog or VHDL.",
                "Create simulation testbenches and verify functionality.",
                "Analyse synthesis and timing reports.",
                "Implement and debug designs on FPGA hardware.",
            ],
            foundations: [
                "Digital logic design",
                "Finite-state machines",
                "Computer architecture",
                "Timing analysis",
            ],
            skills: [
                "Verilog or VHDL",
                "RTL design",
                "Simulation and verification",
                "Synthesis",
                "Static timing analysis",
            ],
            tools: [
                "Vivado",
                "Verilator",
                "Icarus Verilog",
                "GTKWave",
            ],
            resourceIds: [],
        },
        {
            id: "hardware-design-engineer",
            title: "Hardware Design Engineer",
            summary:
                "Develops digital hardware architectures and logic for processors, controllers, interfaces, and electronic systems.",
            responsibilities: [
                "Translate system requirements into hardware architecture.",
                "Design and integrate digital logic blocks.",
                "Verify functionality and interface behaviour.",
                "Evaluate timing, area, and power constraints.",
            ],
            foundations: [
                "Digital electronics",
                "Computer architecture",
                "Boolean algebra",
                "Hardware description languages",
            ],
            skills: [
                "RTL design",
                "Microarchitecture",
                "Interface design",
                "Verification",
                "Timing analysis",
            ],
            tools: [
                "Verilog",
                "Vivado",
                "ModelSim or compatible simulators",
                "Git",
            ],
            resourceIds: [],
        },
        {
            id: "robotics-engineer",
            title: "Robotics Engineer",
            summary:
                "Integrates software, sensors, actuators, control algorithms, and computation to develop robotic systems.",
            responsibilities: [
                "Integrate sensors and actuators.",
                "Develop motion and control algorithms.",
                "Implement communication between robotic components.",
                "Simulate and test robotic behaviour.",
            ],
            foundations: [
                "Control systems",
                "Embedded systems",
                "Linear algebra",
                "Programming",
            ],
            skills: [
                "Sensor integration",
                "Control fundamentals",
                "Robotics software",
                "System debugging",
                "Simulation",
            ],
            tools: [
                "ROS 2",
                "Python",
                "C++",
                "Gazebo",
            ],
            resourceIds: [],
        },
    ],

    resources: [],
    editorPick: null,
    lastReviewed: "2026-10-29",
};
