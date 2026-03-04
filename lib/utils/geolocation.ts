// BNC Builders - Geolocation Utility for Dynamic City Insertion

'use client';

import { useState, useEffect } from 'react';

const SERVICE_AREAS = [
  'Escondido',
  'Carlsbad',
  'Poway',
  'San Marcos',
  'Vista',
  'Rancho Bernardo',
  'Encinitas',
  'Oceanside',
] as const;

const DEFAULT_CITY = 'Escondido';

export type ServiceArea = typeof SERVICE_AREAS[number];

interface GeolocationData {
  city: string;
  region: string;
  country: string;
}

/**
 * Detects user's city using IP-based geolocation
 * Falls back to default city if detection fails or city not in service area
 */
export async function detectUserCity(): Promise<string> {
  try {
    // Use ipapi.co for free IP geolocation (no API key needed for basic usage)
    const response = await fetch('https://ipapi.co/json/', {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.warn('Geolocation API failed, using default city');
      return DEFAULT_CITY;
    }

    const data: GeolocationData = await response.json();

    // Check if detected city is in our service area
    if (data.city && SERVICE_AREAS.includes(data.city as ServiceArea)) {
      return data.city;
    }

    // Default to Escondido if not in service area
    return DEFAULT_CITY;
  } catch (error) {
    console.warn('Geolocation detection failed:', error);
    return DEFAULT_CITY;
  }
}

/**
 * Client-side city detection hook
 */
export function useUserCity() {
  const [city, setCity] = useState<string>(DEFAULT_CITY);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCity() {
      try {
        // Use ipapi.co client-side
        const response = await fetch('https://ipapi.co/json/');

        if (response.ok) {
          const data: GeolocationData = await response.json();

          if (data.city && SERVICE_AREAS.includes(data.city as ServiceArea)) {
            setCity(data.city);
          }
        }
      } catch (error) {
        console.warn('Client-side geolocation failed:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCity();
  }, []);

  return { city, isLoading };
}

export { SERVICE_AREAS, DEFAULT_CITY };
