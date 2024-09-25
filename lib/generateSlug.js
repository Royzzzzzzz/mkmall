import slugify from "slugify";

// 한글을 초성, 중성, 종성으로 분리한 후 로마자로 변환하는 함수
function convertKoreanToRoman(str) {
  const choSeong = [
    "g",
    "kk",
    "n",
    "d",
    "tt",
    "r",
    "m",
    "b",
    "pp",
    "s",
    "ss",
    "",
    "j",
    "jj",
    "ch",
    "k",
    "t",
    "p",
    "h",
  ];
  const jungSeong = [
    "a",
    "ae",
    "ya",
    "yae",
    "eo",
    "e",
    "yeo",
    "ye",
    "o",
    "wa",
    "wae",
    "oe",
    "yo",
    "u",
    "wo",
    "we",
    "wi",
    "yu",
    "eu",
    "yi",
    "i",
  ];
  const jongSeong = [
    "",
    "g",
    "kk",
    "gs",
    "n",
    "nj",
    "nh",
    "d",
    "r",
    "rg",
    "rm",
    "rb",
    "rs",
    "rt",
    "rp",
    "rh",
    "m",
    "b",
    "bs",
    "s",
    "ss",
    "ng",
    "j",
    "ch",
    "k",
    "t",
    "p",
    "h",
  ];

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    // 한글일 경우
    if (code >= 0xac00 && code <= 0xd7a3) {
      const uniCode = code - 0xac00;

      const cho = Math.floor(uniCode / 588); // 초성
      const jung = Math.floor((uniCode - cho * 588) / 28); // 중성
      const jong = uniCode % 28; // 종성

      result += choSeong[cho] + jungSeong[jung] + jongSeong[jong];
    } else {
      // 한글이 아닌 경우 그대로 추가
      result += str[i];
    }
  }

  return result;
}

// 한글을 로마자로 변환한 후 slugify를 통해 슬러그화
export function generateSlug(title) {
  // 1. 한글을 로마자로 변환
  const romanizedTitle = convertKoreanToRoman(title);

  // 2. 변환된 문자열을 slugify로 슬러그화
  const slug = slugify(romanizedTitle, {
    lower: true, // 소문자로 변환
    strict: true, // 특수문자 제거
  });

  return slug;
}

// 함수 사용 예시
const slugEnglish = generateSlug("Hello World!");
console.log(slugEnglish); // 예시 출력: "hello-world"

const slugKorean = generateSlug("신선한 과일");
console.log(slugKorean); // 예시 출력: "sinsunhan-gwail"
