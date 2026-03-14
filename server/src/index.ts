import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'vehicle-rental-api' });
});

// Placeholder routes - to be implemented
// app.use('/api/vehicles', vehicleRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
