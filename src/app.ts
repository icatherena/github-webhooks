import { envs } from "./config";
import express from 'express';
import { GithubController } from "./presentation/github/controller";

(() => {
    main();
})();

function main() {
    const app = express();
    const controller = new GithubController();
    
    app.use(express.json());
    app.post('/api/github', controller.webhookHandler);

    app.listen( envs.PORT, () => {
        console.log(`App running on port ${envs.PORT}`);
    })
}