import { envs } from "../config";

export class DiscordService {
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;
    constructor() {}
    async notify(message: string) {
        const body = {
            content: message,
        };
        const res = await fetch(
            this.discordWebhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            }
        );
        if (!res.ok) {
            console.log('Error delivering message to discord');
            return false;
        }
        return true;
    }
}