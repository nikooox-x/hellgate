// src/utils/sendWebhook.ts
export async function sendBreakoutAlert(webhookUrl: string) {
  const payload = {
    content: "@CoruscantGuardPersonnel",
    embeds: [
      {
        title: "🚨 Prison Breakout Detected",
        description:
          "```diff\n- A breakout attempt is in progress!\n+ Immediate lockdown protocol engaged.\n! All units report to containment zones.\n```",
        color: 15158332 // red color
      }
    ]
  };

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
}
