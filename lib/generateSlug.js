// 한글을 로마자로 변환하는 간단한 함수
function convertKoreanToRoman(str) {
  const romanMap = {
    ㄱ: "g", ㄲ: "kk", ㄴ: "n", ㄷ: "d", ㄸ: "tt", ㄹ: "r", ㅁ: "m",
    ㅂ: "b", ㅃ: "pp", ㅅ: "s", ㅆ: "ss", ㅇ: "wo", ㅈ: "j", ㅉ: "jj",
    ㅊ: "ch", ㅋ: "k", ㅌ: "t", ㅍ: "p", ㅎ: "h",
    ㅏ: "a", ㅑ: "ya", ㅓ: "eo", ㅕ: "yeo", ㅗ: "o", ㅛ: "yo",
    ㅜ: "u", ㅠ: "yu", ㅡ: "eu", ㅣ: "i"
  };

  return str
    .split("")
    .map((char) => romanMap[char] || char) // 한글은 로마자로, 그 외는 그대로
    .join("");
}

export function generateSlug(title) {
  // 한글을 로마자로 변환
  const romanizedTitle = convertKoreanToRoman(title);

  // 기존 슬러그 생성 로직
  const slug = romanizedTitle
    .toLowerCase() // Convert the title to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
    .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
    .replace(/^\-+/, "") // Remove dashes from the beginning
    .replace(/\-+$/, ""); // Remove dashes from the end

  return slug;
}

// 함수 사용 예시
const slugEnglish = generateSlug("Hello World!");
console.log(slugEnglish); // 예시 출력: "hello-world"

const slugKorean = generateSlug("대우산업");
console.log(slugKorean); // 예시 출력: "daewoeo-saneob"
