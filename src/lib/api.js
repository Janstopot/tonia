export const sendContactForm = async (data) => {
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return { ok: true, data: await response.json() };
        } else {
            return { ok: false, status: response.status, message: "Failed to send message." };
        }
    } catch (error) {
        return { ok: false, message: error.message };
    }
};
