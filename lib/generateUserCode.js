export function generateUserCode(prefix, fullName) {
    // 1. 한글 이름인 경우 랜덤 문자열 생성 함수
    const randomHash = () => Math.random().toString(36).substr(2, 5).toUpperCase();

    // 2. fullName이 한글인지 영어인지 확인
    const isKorean = /[가-힣]/.test(fullName);

    let nameCode;
    if (isKorean) {
        // 한글일 경우 랜덤한 문자열로 변환
        nameCode = randomHash();
    } else {
        // 영어일 경우 이름과 성의 첫 글자 추출 (예: MUKE JOHN -> MJ)
        const nameParts = fullName.split(" ");
        nameCode = nameParts.map(part => part[0].toUpperCase()).join("");
    }

    // 3. 현재 시간 정보 (시, 분, 초, 밀리초) 추출
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    // 4. 시간 데이터를 결합 (예: 100203003)
    const timeCode = `${hours}${minutes}${seconds}${milliseconds}`;

    // 5. 최종 코드 생성
    const userCode = `${prefix}-${nameCode}-${timeCode}`;

    return userCode;
}

// 함수 사용 예시
const prefix = "LFF";
const fullNameEnglish = "MUKE JOHN";
const fullNameKorean = "대우산업";

// 영어 이름일 경우
const userCodeEnglish = generateUserCode(prefix, fullNameEnglish);
console.log(userCodeEnglish); // 예시 출력: "LFF-MJ-100203003"

// 한글 이름일 경우
const userCodeKorean = generateUserCode(prefix, fullNameKorean);
console.log(userCodeKorean); // 예시 출력: "LFF-AB12C-100203003"
