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

const solution = (name, whatItIs, signs) => [
  {
    q: "What is " + name + "?",
    a: whatItIs,
  },
  {
    q: "What are the signs that this equipment needs balancing?",
    a: signs,
  },
  {
    q: "Which standard is used to set balance quality?",
    a: "ISO 21940-11 gives procedures and tolerances for balancing rigid rotors, including balance quality grades. The grade used depends on the rotor type, its operating speed and the equipment specification.",
  },
  {
    q: "How can I request " + name + " from VibroTech Balancing?",
    a: "Call " + phone + " or email vibrotechbalancing@gmail.com with the rotor type, approximate weight, dimensions and operating speed. We operate from " + address + ".",
  },
]

const solutions = {
  "/balancing-solutions/motor-rotor-balancing/": solution("motor rotor balancing", "Motor rotor balancing measures and corrects uneven mass distribution in an electric motor rotor so it runs with low vibration and reduced bearing load.", "Typical signs are high vibration at running speed, noise, warm or worn bearings and vibration that increases with speed, often after rewinding or repair."),
  "/balancing-solutions/marine-propeller-balancing/": solution("marine propeller balancing", "Marine propeller balancing measures and corrects unbalance in a propeller so it turns smoothly on the shaft and reduces vibration transmitted to the vessel.", "Typical signs are hull or shaft vibration that changes with propeller speed, noise, and vibration after repair, blade dressing or damage."),
  "/balancing-solutions/fan-balancing/": solution("fan balancing", "Fan balancing corrects uneven mass in a fan impeller or wheel so it runs smoothly and puts less load on its bearings and supports.", "Typical signs are strong vibration at running speed, noise, loosening fasteners and vibration after dust build-up, wear or blade repair."),
  "/balancing-solutions/blower-balancing/": solution("blower balancing", "Blower balancing corrects unbalance in a blower rotor or impeller to reduce vibration and extend bearing life.", "Typical signs are vibration at running speed, noise, hot bearings and vibration after deposit build-up, wear or repair."),
  "/balancing-solutions/pump-balancing/": solution("pump impeller balancing", "Pump impeller balancing corrects uneven mass in a pump impeller or rotating assembly to reduce vibration and seal and bearing wear.", "Typical signs are vibration at running speed, seal or bearing failures and vibration after impeller wear, erosion or repair."),
  "/balancing-solutions/compressor-balancing/": solution("compressor rotor balancing", "Compressor rotor balancing corrects unbalance in a compressor rotor so it runs with lower vibration and mechanical loading.", "Typical signs are vibration at running speed, bearing wear and vibration after fouling, wear or overhaul."),
  "/balancing-solutions/turbine-rotor-balancing/": solution("turbine rotor balancing", "Turbine rotor balancing corrects unbalance in a turbine rotor so it runs within the required vibration limits at its operating speed.", "Typical signs are vibration at running speed, rising bearing temperatures and vibration after blade repair or overhaul."),
  "/balancing-solutions/alternator-rotor-balancing/": solution("alternator rotor balancing", "Alternator rotor balancing corrects unbalance in an alternator or generator rotor to reduce vibration and bearing loads.", "Typical signs are vibration at running speed, bearing wear and vibration after rewinding or repair."),
  "/balancing-solutions/roll-balancing/": solution("roll balancing", "Roll balancing corrects unbalance in industrial rolls and long rotating shafts so they run smoothly and protect the machine and product quality.", "Typical signs are vibration at running speed, surface marking on the product and vibration after regrinding, repair or wear."),
  "/balancing-solutions/high-speed-rotor-balancing/": solution("high-speed rotor balancing", "High-speed rotor balancing corrects unbalance in rotors that operate at high speeds, where small residual unbalance produces large forces, so tighter balance tolerances apply.", "Typical signs are vibration that rises sharply with speed, bearing wear and vibration after repair or assembly."),
}
export default {
  ...solutions,
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