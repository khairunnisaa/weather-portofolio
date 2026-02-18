export const fetchCapitalByCountry = async (
  country: string
): Promise<string | null> => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    if (!res.ok) return null;

    const data = await res.json();

    return data[0]?.capital?.[0] || null;
  } catch {
    return null;
  }
};