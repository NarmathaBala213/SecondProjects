export default {
  default: {
    require: [
      "features/support/*.js",          // ✅ ADD THIS
      "features/step-definitions/*.js"
    ],
    paths: ["features/*.feature"],
    format: ["progress"],
    timeout: 60000
  }
};