import authRoute from "./auth.route";

const mountRoutes = (app: any) => {
  // Middleware to handle authentication routes
  app.use("/api/v1/auth", authRoute);
};

export default mountRoutes;
