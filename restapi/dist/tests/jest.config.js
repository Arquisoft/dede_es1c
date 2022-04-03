"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rootDir: './../',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ["api.ts", "**/*Controller.ts"],
    testTimeout: 15000,
};
//# sourceMappingURL=jest.config.js.map