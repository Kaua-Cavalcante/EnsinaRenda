export function decodeToken(token: string): any | null {
    try {
        const payload = token.split('.')[1];
        const decoded = atob(payload);
        return JSON.parse(decoded);
    } catch (e) {
        console.error('Erro ao decodificar token:', e);
        return null;
    }
}

export function isTokenExpired(token: string): boolean {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) return true;

    const expiryDate = decoded.exp * 1000; // em milissegundos
    const now = Date.now();

    return now > expiryDate;
}