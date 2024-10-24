# API Endpoints Documentation

### Book Ticket

- **Endpoint**: `http://localhost:8000/api/price/stationids`
- **Method**: `POST`

#### Request Body

```json
{
  "from_station_id": "Dhaka",
  "to_station_id": "Khulna",
}
```

#### Response
```json
{
    "message": "Ticket price calculated successfully",
    "price": 100
}
```