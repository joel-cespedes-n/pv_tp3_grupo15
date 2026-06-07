import React from "react";
import { Typography, Card, CardContent, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido al Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aquí encontrarás un resumen general de tus proyectos y métricas.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Card sx={{ flex: 1, minWidth: "250px" }}>
          <CardContent>
            <Typography variant="h6">Total de proyectos</Typography>
            <Typography variant="h4">12</Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: "250px" }}>
          <CardContent>
            <Typography variant="h6">Proyectos en curso</Typography>
            <Typography variant="h4">5</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Dashboard;
