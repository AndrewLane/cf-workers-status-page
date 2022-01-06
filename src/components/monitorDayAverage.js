import { locations } from '../functions/locations'

export default function MonitorDayAverage({ location, avg, samples }) {
  return (
    <>
      <br />
      <small>
        {locations[location] || location}: {avg}ms, {samples} samples
      </small>
    </>
  )
}
