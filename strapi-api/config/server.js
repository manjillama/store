module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3006),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "15db3c83c0ffe6e6fa047b689da52174"),
    },
  },
});
