/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true, // 빌드 중 ESLint 오류 무시
        rules: {
            // react/no-unescaped-entities 규칙 비활성화
            "react/no-unescaped-entities": "off",
        },
    },
}

module.exports = nextConfig
