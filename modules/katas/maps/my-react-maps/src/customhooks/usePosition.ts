import { useState, useEffect } from 'react'
export const usePosition = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getLocation = () => {
    navigator.geolocation.watchPosition(
      position => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setIsLoading(false)
      },
      error => setError(error.message)
    )
  }

  useEffect(() => getLocation())

  return { latitude, longitude, error, isLoading }
}
