import SessionConfig from './SessionConfig';

interface Session {
    sessionID: string;

    adminID: string;

    sessionConfig: SessionConfig;
}

export default Session;
