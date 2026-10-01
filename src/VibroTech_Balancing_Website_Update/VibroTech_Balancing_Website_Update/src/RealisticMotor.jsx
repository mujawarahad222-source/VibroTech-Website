import './RealisticMotor.css'

export default function RealisticMotor({
  rpm = 3000,
  vibration = 2.14,
  status = 'NORMAL',
}) {
  return (
    <div className="realistic-motor-stage">
      <div className="realistic-motor-grid" />

      <div className="realistic-motor-tech-ring realistic-motor-ring-a" />
      <div className="realistic-motor-tech-ring realistic-motor-ring-b" />

      <div className="realistic-motor-label realistic-motor-label-top">
        <span>HV INDUCTION MOTOR</span>
        <strong>MTR-001</strong>
      </div>

      <div className="realistic-motor-label realistic-motor-label-left">
        <span>ROTATIONAL SPEED</span>
        <strong>{Number(rpm).toFixed(0)} RPM</strong>
      </div>

      <div className="realistic-motor-label realistic-motor-label-right">
        <span>VIBRATION</span>
        <strong>{Number(vibration).toFixed(2)} mm/s RMS</strong>
      </div>

      <div className="realistic-motor-image-wrap">
        <img
          className="realistic-motor-image"
          src="/motor-realistic.png"
          alt="Realistic industrial induction motor"
        />
        <div className="realistic-motor-scan" />
        <div className="realistic-motor-pulse" />
      </div>

      <div className={`realistic-motor-status realistic-motor-status-${String(status).toLowerCase()}`}>
        <i />
        {status}
      </div>

      <div className="realistic-motor-bottom">
        <span>NDE</span>
        <span>SHAFT</span>
        <span>DE</span>
      </div>
    </div>
  )
}

