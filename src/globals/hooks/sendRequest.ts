'use client';

const sendRequest = async (
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    data?: any,
) => {
    try {
        const response = await fetch(url, {
            method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : undefined,
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Une erreur est survenue.');
        }

        if (response.ok) {
            console.log(' Succès :', result);
            return result;
        }
    } catch (error) {
        console.error(error);
    }
}

export default sendRequest;