/*
* 1. helper, service, repository 레이어 다시 분리
*    - exchangeComparing 등
* 2. exchange 함수 service layer -> controller layer로 수정
* 3. selectProgram 에서 sub-controller 수행 로직 추가
* 4. showExchangeRate, exchangeCurrency service 파일 분리
* 5. updateRepository 입력값 수정
*    - await updateRepository({ KRW : 30000, USD : 100 })
* 7. random 함수 변경 적용 crypto, bcrypto
* 8. checkCurrency 입력값 수정
*    - await checkCurrency(["KRW", "USD"])

## 에러상황
입력에서 출금할 금액이 튀어나옴




---------------------------------FINISH------------------------------------
* 6. repository 함수명 수정
*    - get, find, create, delete, update
*    - updateRepository -> updateAccount/
*    - findRepository -> findAccount/   
* */ 
