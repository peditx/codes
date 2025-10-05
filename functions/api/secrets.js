// --- DEBUG VERSION ---
// This code will tell us exactly which secrets are missing.
export function onRequest(context) {
  // context.env contains the environment variables
  const secrets = {
    ADMIN_USERNAME: context.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: context.env.ADMIN_PASSWORD,
    ACCESS_TOKEN: context.env.ACCESS_TOKEN,
  };

  const found = [];
  const missing = [];

  // Check each secret individually
  Object.keys(secrets).forEach(key => {
    if (secrets[key]) {
      found.push(key);
    } else {
      missing.push(key);
    }
  });

  // If any secret is missing, return a detailed error
  if (missing.length > 0) {
    const errorMessage = `Secrets check failed. Found: [${found.join(', ')}]. Missing: [${missing.join(', ')}]. Please check these variable names in your Cloudflare dashboard.`;
    
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // If all secrets are found, proceed as normal
  return new Response(JSON.stringify(secrets), {
    headers: { 'Content-Type': 'application/json' },
  });
}

