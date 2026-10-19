const phone = "+91 84549 87213"
const address = "R-269, T.T.C Industrial Area, Rabale, Navi Mumbai 400701, Maharashtra"

const balancing = [
  {
    q: "What is dynamic balancing?",
    a: "Dynamic balancing is the process of measuring and correcting uneven mass distribution in a rotating part while it spins, so that it runs smoothly. Correction is normally made in two or more planes, which removes both force and couple unbalance and reduces vibration and bearing loads.",
  },
  {
    q: "What causes rotor unbalance?",
    a: "Common causes include manufacturing tolerances, uneven material, wear, corrosion, deposit build-up, damaged or missing parts, and repairs such as rewinding or re-blading that change the mass distribution.",
  },
  {
    q: "What is the difference between static and dynamic balancing?",
    a: "Static balancing corrects unbalance in a single plane and does not need the rotor to spin. Dynamic balancing measures the rotor while it rotates and corrects in two or more planes, so it also corrects couple unbalance. Longer rotors usually need dynamic balancing.",
  },
  {
    q: "Which standard defines balance quality?",
    a: "ISO 21940-11 gives procedures and tolerances for balancing rigid rotors, including balance quality grades such as G6.3 and G2.5. ISO 21940-12 covers flexible rotors. The grade used depends on the rotor type, its operating speed and the equipment specification.",
  },
  {
    q: "How do I know my rotor needs balancing?",
    a: "Typical signs are high vibration at running speed, noise, premature bearing or seal wear, loosening fasteners and vibration that rises as speed increases. A vibration measurement helps confirm whether unbalance is the cause.",
  },
  {
    q: "How can I request a balancing quote?",
    a: "Call " + phone + " or email vibrotechbalancing@gmail.com with the rotor type, approximate weight, dimensions and operating speed, and we will respond with the next steps.",
  },
]

const vibration = [
  {
    q: "What is vibration analysis?",
    a: "Vibration analysis measures machine vibration with sensors and examines the signal, usually as a frequency spectrum, to identify faults such as unbalance, misalignment, looseness and bearing defects before they cause failure.",
  },
  {
    q: "Which faults can vibration analysis detect?",
    a: "It is widely used to detect rotor unbalance, shaft misalignment, mechanical looseness, bearing defects, gear problems and resonance in motors, pumps, fans, blowers, gearboxes and compressors.",
  },
  {
    q: "What is the difference between vibration analysis and balancing?",
    a: "Vibration analysis finds the cause of abnormal vibration. Balancing corrects one specific cause, which is rotor unbalance. Analysis first helps confirm that balancing is the right fix.",
  },
  {
    q: "How often should vibration measurements be taken?",
    a: "It depends on how critical the machine is and its operating history. Critical machines are monitored more frequently than non-critical ones, and the interval is usually reduced when a fault trend appears.",
  },
  {
    q: "How can I request a vibration analysis?",
    a: "Call " + phone + " or email vibrotechbalancing@gmail.com with the machine type, location and the problem you are seeing.",
  },
]

const alignment = [
  {
    q: "What is laser shaft alignment?",
    a: "Laser shaft alignment uses a laser measuring system to measure the offset and angular misalignment between two coupled shafts, and guides the corrections needed to bring them into line.",
  },
  {
    q: "Why is laser alignment preferred over a straight edge or dial gauge?",
    a: "A laser system gives quantified, repeatable readings and live correction values, which makes alignment more accurate and faster than manual methods.",
  },
  {
    q: "What problems does shaft misalignment cause?",
    a: "Misalignment can cause vibration, heat, premature bearing, seal and coupling wear, and higher energy use in motors, pumps, compressors and gearboxes.",
  },
  {
    q: "How can I request laser alignment?",
    a: "Call " + phone + " or email vibrotechbalancing@gmail.com with the machine type and location.",
  },
]

const place = (name, dest) => [
  {
    q: "Do you provide dynamic balancing in " + name + "?",
    a: "Yes. VibroTech Balancing operates from Rabale, Navi Mumbai and provides balancing support for industrial customers in " + name + " and across Maharashtra. Call " + phone + " to discuss your requirement.",
  },
  {
    q: "Where is VibroTech Balancing located?",
    a: "Our address is " + address + ".",
  },
  ...balancing.slice(0, 3),
]

export default {
  "/services/dynamic-balancing/": balancing,
  "/services/vibration-analysis/": vibration,
  "/services/laser-shaft-alignment/": alignment,
  "/locations/dynamic-balancing-navi-mumbai/": place("Navi Mumbai"),
  "/locations/dynamic-balancing-mumbai/": place("Mumbai"),
  "/locations/dynamic-balancing-thane/": place("Thane"),
  "/locations/dynamic-balancing-pune/": place("Pune"),
  "/locations/rotor-balancing-maharashtra/": place("Maharashtra"),
  "/locations/vibration-analysis-navi-mumbai/": vibration,
}