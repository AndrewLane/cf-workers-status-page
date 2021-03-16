import { locations } from '../functions/helpers'

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
