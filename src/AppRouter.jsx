import { Routes, Route } from 'react-router-dom'
import App from './App'
import DynamicBalancing from './pages/DynamicBalancing'
import VibrationAnalysis from './pages/VibrationAnalysis'
import LaserShaftAlignment from './pages/LaserShaftAlignment'
import ConditionMonitoring from './pages/ConditionMonitoring'
import Thermography from './pages/Thermography'
import HeavyMachining from './pages/HeavyMachining'
import ShaftGrinding from './pages/ShaftGrinding'
import MotorRotorBalancing from './pages/MotorRotorBalancing'
import MarinePropellerBalancing from './pages/MarinePropellerBalancing'
import FanBalancing from './pages/FanBalancing'
import BlowerBalancing from './pages/BlowerBalancing'
import PumpBalancing from './pages/PumpBalancing'
import CompressorBalancing from './pages/CompressorBalancing'
import TurbineRotorBalancing from './pages/TurbineRotorBalancing'
import AlternatorRotorBalancing from './pages/AlternatorRotorBalancing'
import RollBalancing from './pages/RollBalancing'
import HighSpeedRotorBalancing from './pages/HighSpeedRotorBalancing'
import MarineIndustry from './pages/MarineIndustry'
import NavalDefenceIndustry from './pages/NavalDefenceIndustry'
import PowerPlantsIndustry from './pages/PowerPlantsIndustry'
import OilGasIndustry from './pages/OilGasIndustry'
import PetrochemicalIndustry from './pages/PetrochemicalIndustry'
import SteelPlantsIndustry from './pages/SteelPlantsIndustry'
import ManufacturingIndustry from './pages/ManufacturingIndustry'
import DynamicBalancingNaviMumbai from './pages/DynamicBalancingNaviMumbai'
import DynamicBalancingMumbai from './pages/DynamicBalancingMumbai'
import VibrationAnalysisNaviMumbai from './pages/VibrationAnalysisNaviMumbai'
import RotorBalancingMaharashtra from './pages/RotorBalancingMaharashtra'
import DynamicBalancingThane from './pages/DynamicBalancingThane'
import DynamicBalancingPune from './pages/DynamicBalancingPune'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/services/dynamic-balancing/"
        element={<DynamicBalancing />}
      />
      <Route
        path="/services/vibration-analysis/"
        element={<VibrationAnalysis />}
      />
      <Route
        path="/services/laser-shaft-alignment/"
        element={<LaserShaftAlignment />}
      />
      <Route
        path="/services/condition-monitoring/"
        element={<ConditionMonitoring />}
      />
      <Route
        path="/services/thermography/"
        element={<Thermography />}
      />
      <Route
        path="/services/heavy-machining/"
        element={<HeavyMachining />}
      />
      <Route
        path="/services/shaft-grinding/"
        element={<ShaftGrinding />}
      />
      <Route
        path="/balancing-solutions/motor-rotor-balancing/"
        element={<MotorRotorBalancing />}
      />
      <Route
        path="/balancing-solutions/marine-propeller-balancing/"
        element={<MarinePropellerBalancing />}
      />
      <Route
        path="/balancing-solutions/fan-balancing/"
        element={<FanBalancing />}
      />
      <Route
        path="/balancing-solutions/blower-balancing/"
        element={<BlowerBalancing />}
      />
      <Route
        path="/balancing-solutions/pump-balancing/"
        element={<PumpBalancing />}
      />
      <Route
        path="/balancing-solutions/compressor-balancing/"
        element={<CompressorBalancing />}
      />
      <Route
        path="/balancing-solutions/turbine-rotor-balancing/"
        element={<TurbineRotorBalancing />}
      />
      <Route
        path="/balancing-solutions/alternator-rotor-balancing/"
        element={<AlternatorRotorBalancing />}
      />
      <Route
        path="/balancing-solutions/roll-balancing/"
        element={<RollBalancing />}
      />
      <Route
        path="/balancing-solutions/high-speed-rotor-balancing/"
        element={<HighSpeedRotorBalancing />}
      />
      <Route
        path="/industries/marine/"
        element={<MarineIndustry />}
      /> 
      <Route
        path="/industries/naval-defence/"
        element={<NavalDefenceIndustry />}
      /> 
      <Route
        path="/industries/power-plants/"
        element={<PowerPlantsIndustry />}
      />
      <Route
        path="/industries/oil-gas/"
        element={<OilGasIndustry />}
      />
      <Route
        path="/industries/petrochemical/"
        element={<PetrochemicalIndustry />}
      />
      <Route
        path="/industries/steel-plants/"
        element={<SteelPlantsIndustry />}
      />
      <Route
        path="/industries/manufacturing/"
        element={<ManufacturingIndustry />}
      />
      <Route
        path="/locations/dynamic-balancing-navi-mumbai/"
        element={<DynamicBalancingNaviMumbai />}
      />
      <Route
        path="/locations/dynamic-balancing-mumbai/"
        element={<DynamicBalancingMumbai />}
      />
      <Route
        path="/locations/vibration-analysis-navi-mumbai/"
        element={<VibrationAnalysisNaviMumbai />}
      />
      <Route
        path="/locations/rotor-balancing-maharashtra/"
        element={<RotorBalancingMaharashtra />}
      />
      <Route
        path="/locations/dynamic-balancing-thane/"
        element={<DynamicBalancingThane />}
      />
      <Route
        path="/locations/dynamic-balancing-pune/"
        element={<DynamicBalancingPune />}
      />
    </Routes>
  )
}
