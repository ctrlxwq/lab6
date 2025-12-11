module.exports = {
    testEnvironment: "node",
    reporters: [
        "default",
        [ "jest-junit", { outputDirectory: ".", outputName: "junit.xml" } ] // <-- Генерація junit.xml
    ],
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            branches: 50, // <-- Перевірка ліміту 50%
            functions: 50,
            lines: 50,
            statements: 50
        }
    }
};
