export const generateCouponCode = (title = "", expiryDate = "") => {
  // 제목을 대문자로 변환하고 공백을 "-"로 치환
  const formattedTitle = title.toUpperCase().replace(/\s+/g, "");

  const formattedExpiryDate = expiryDate.split("-").reverse().join("");

  // 쿠폰 코드 생성
  const couponCode = `${formattedTitle}-${formattedExpiryDate}`;
  return couponCode;
};
