function generateCouponCode(title, expiryDate) {
    // 제목을 대문자로 변환하고 공백을 "-"로 치환
    const formattedTitle = title.toUpperCase().replace(/\s+/g, "-");

    // 만약 expiryDate가 문자열이라면, Date 객체로 변환
    const date = new Date(expiryDate);
    const day = String(date.getDate()).padStart(2, '0'); // 일자 2자리
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 2자리 (0부터 시작하므로 +1)
    const year = date.getFullYear(); // 연도

    // 쿠폰 코드 생성
    const couponCode = `${formattedTitle}-${day}${month}${year}`;

    return couponCode;
}
