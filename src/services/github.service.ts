import { GithubIssuePayload, GithubStarPayload, GithubWatchPayload } from "../interfaces";

export class GithubService {
    constructor() {}
    onStar(payload: GithubStarPayload): string {
        const {action, sender, repository, starred_at} = payload;
        let message: string;
        if (starred_at) {
            message = `User ${sender.login} ${action} star on ${repository.full_name}`
        } else {
            message = `User ${sender.login} ${action} star on ${repository.full_name}`
        }
        return message;
    }
    onIssue(payload: GithubIssuePayload): string {
        const {action, issue} = payload;
        let message: string;
        if (action === 'opened') {
            message = `An issue was opened with this title ${issue.title}`;
        } else if (action === 'reopened') {
            message = `An issue was reopened by ${issue.user.login}`;
        } else if (action === 'closed') {
            message = `An issue was closed with this title ${issue.title}`;
        } else {
            message = `Unhandled action for the issue event ${action}`;
        }
        return message;
    }
    onWatch(payload: GithubWatchPayload): string {
        const {action, sender, repository} = payload;
        let message: string;
        if (action === 'started') {
            message = `${sender.login} ${action} watching ${repository.full_name}`;;
        } else {
            message = `Unhandled action for the issue event ${action}`;
        }
        return message;
    }
}