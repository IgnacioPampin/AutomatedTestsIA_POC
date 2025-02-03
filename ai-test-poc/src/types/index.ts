export interface TestCase {
    id: string;
    description: string;
    steps: string[];
    expectedResult: string;
}

export interface TestReport {
    testCaseId: string;
    status: 'passed' | 'failed';
    duration: number;
    errorMessage?: string;
}

export interface SlackMessage {
    channel: string;
    text: string;
    attachments?: Array<{ title: string; text: string }>;
}