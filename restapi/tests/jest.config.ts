export default {
    rootDir: './../',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/tests/*.test.ts"],
    collectCoverage: true,
    collectCoverageFrom:["api.ts", "**/*Controller.ts"],
    testTimeout: 15000,
}