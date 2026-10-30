yooexport const timezoneCatalog = {
  
  "Asia/Kolkata": { city: "Kolkata", label: "India", offset: "+05:30" },
  "Europe/London": { city: "London", label: "United Kingdom", offset: "+00:00" },
  "America/New_York": { city: "New York", label: "United States", offset: "-04:00" },
  "Asia/Tokyo": { city: "Tokyo", label: "Japan", offset: "+09:00" },
  "Australia/Sydney": { city: "Sydney", label: "Australia", offset: "+10:00" },
  "Europe/Paris": { city: "Paris", label: "France", offset: "+01:00" },
  "Asia/Dubai": { city: "Dubai", label: "UAE", offset: "+04:00" },
  "America/Los_Angeles": { city: "Los Angeles", label: "United States", offset: "-07:00" },
  "UTC": { city: "UTC", label: "Universal Time", offset: "+00:00" }

};

export function getCurrentTimeParts(zone = "Asia/Kolkata") {
  const now=new Date();
  const parts=new Intl.DateTimeFormat("en-GB",{
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(now);

  const map = {};
  for (const part of parts) {
    if (part.type !== "literal") map[part.type] = part.value;
  }

  return {
    hour: Number(map.hour || 0),
    minute: Number(map.minute || 0),
    second: Number(map.second || 0),
    date: `${map.day}/${map.month}/${map.year}`,
    iso: `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}:${map.second}`
  };
}
