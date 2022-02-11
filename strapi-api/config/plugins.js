module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "ap-south-1",
      params: {
        Bucket: "yatri-store",
      },
    },
  },
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "no-reply@yatrimotorcycles.com",
    },
  },
});
