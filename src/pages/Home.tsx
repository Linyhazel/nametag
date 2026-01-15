import Lanyard from '../components/Lanyard'

export default function HomePage() {
  return (
    <div className="absolute inset-0 z-0">
      <Lanyard position={[0, 0, 17]} gravity={[0, -40, 0]} fov={25} />
    </div>
  )
}
