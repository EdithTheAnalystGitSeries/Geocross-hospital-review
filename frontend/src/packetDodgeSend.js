const API_URL = 'http://16.52.83.209:3001';

export async function packetDodgeSend(endpoint, method = 'GET', body = null, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : null
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
