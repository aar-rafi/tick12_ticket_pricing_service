# API Endpoints Documentation

### Book Ticket

- **Endpoint**: `http://localhost:8000/api/price/stationids`
- **Method**: `POST`

#### Request Body

```json
{
  "from_station_name": "Dhaka",
  "to_station_name": "Khulna",
}
```

#### Response
```json
{
    "message": "Ticket price calculated successfully",
    "price": 100
}
```