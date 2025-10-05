// This function runs on Cloudflare's servers, not in the user's browser.
// It securely reads the environment variables you set in the dashboard.
export function onRequest(context) {
  // context.env contains the environment variables
  const secrets = {
    ADMIN_USERNAME: context.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: context.env.ADMIN_PASSWORD,
    ACCESS_TOKEN: context.env.ACCESS_TOKEN,
  };

  // Basic check to ensure variables are set
  if (!secrets.ADMIN_USERNAME || !secrets.ADMIN_PASSWORD || !secrets.ACCESS_TOKEN) {
    return new Response(JSON.stringify({ error: 'One or more secrets are not configured in Cloudflare Pages environment variables.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Send the secrets as a JSON response to the front-end index.html
  return new Response(JSON.stringify(secrets), {
    headers: { 'Content-Type': 'application/json' },
  });
}

