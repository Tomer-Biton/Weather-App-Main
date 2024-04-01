export const getWeatherKeyword = (weatherText: string): string => {
  if (weatherText.toLowerCase().includes('rain')) {
    return 'Rain';
  } else if (weatherText.toLowerCase().includes('sun')) {
    return 'Sunny';
  } else if (weatherText.toLowerCase().includes('snow')) {
    return 'Snow';
  } else {
    return 'Other';
  }
};