# API Documentation

### Calculate ticket price(Wrapper Service) From Station Names
**Endpoint:**  
`https://district12.xyz/price/api/price/stationnames`

**Local Dev Endpoint:**  
`http://localhost:8002/api/price/stationnames`

**Method:**  
`POST`

**Body:**
```json
{
  "from_station_name": "Dhaka",
  "to_station_name": "Khulna",
}
```

**Response:**

**Status Code: 200**
```json
{
  "message": "Ticket price calculated successfully",
  "price": 400,
}
```

**Stations Not Found:**

**Status Code: 404**
```json
{
  "error": "One or both stations not found",
}
```

**Error:**

**Status Code: 500**
```json
{
  "error": "Failed to calculate ticket price. Please try again later.",
}
```