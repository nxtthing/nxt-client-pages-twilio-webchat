window.addEventListener("DOMContentLoaded", () => {
  Twilio.initLogger("info");
  Twilio.initWebchat({
    deploymentKey: "CV1082ad3d577d46fd3d16edd84761ad3d"
  })
});
