const MESSAGE = {
    RETRY : "다시 입력하세요.",
    SELECTPROGRAM : "실행할 항목을 입력하세요 \n 1. 입금 \n 2. 출금 \n 3. 잔고 확인 \n 4. 환전 \n 5. 종료 \n: ",
    EXIT: "외환 거래 프로그램을 종료합니다.",
    INVALID_AMOUNT : "0보다 큰 수를 입력하세요.",
    DEPOSIT: {
        INPUT_CURRENCY : "입금할 통화를 입력하세요: ",
        SUCCESS : "입금이 완료되었습니다.",
        INPUT_AMOUNT : "입금할 금액을 입력하세요: "
    },
    WITHDRAW: {
        INPUT_CURRENCY : "출금할 통화를 입력하세요: ",
        INPUT_AMOUNT: "출금할 금액을 입력하세요: ",
        SUCCESS : "출금이 완료되었습니다.",
        LOW_MONEY : "잔고가 부족합니다."

    },
    INQUIRY: {
        INPUT_ACCOUNT_NUMBER: "조회할 계좌를 입력하세요:",
        NO_ACCOUNT : "계좌가 존재하지 않습니다.",
        SUCCESS : "계좌 확인되었습니다.",
        WRONG_ACCOUNT : "다시 계좌번호를 입력하세요."

    },
    EXCHANGE: {
        SELECT_SECTION : "실행할 항목을 선택하세요 \n 1. 환율 확인 \n 2. 환전 \n 3. 종료 \n: ",
        TO : "환전받을 통화를 입력하세요: ",
        FROM : "환전할 통화를 입력하세요: ",
        AMOUNT : "환전할 금액을 입력하세요 \n 환전시에는 10%의 수수료가 붙습니다 \n: ",
        SAME_CURRENCY : "같은 통화는 환전할 수 없습니다.",
        INPUT_MAIN_CURRENCY : "환율을 확인할 통화를 입력하세요: ",
        SELECT_EXCHANGE_OR_OTHER : "실행할 항목을 선택하세요 \n 1. 다른 환율 확인 \n 2. 환전 \n 3. 종료 \n: ",
        NOT_ENOUGH : "환전할 금액이 부족합니다.",
        SUCCESS : "환전이 완료되었습니다.",

    }

}

export {MESSAGE};