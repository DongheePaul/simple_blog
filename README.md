React와 Node.js, AWS RDS(Mysql)로 만든 블로그입니다.

구현된 기능으로는

1. 회원가입, 회원 삭제.
2. 로그인, 로그아웃 - JWT 토큰 사용
3. 게시판 - 게시글 작성, 게시글 삭제, 게시글 수정
4. JWT auth 미들웨어화
5. jsonschema 패키지을 사용한 데이터 포맷, 값의 validation
6. TypeScript로 마이그레이션 진행 중 - Node.js 완료.

이 있습니다.

추후 업데이트 내용으로는

1. React 프로젝트의 코드들을 Typescript로 마이그레이션
2. Rate limiter 적용
3. mocha, chai를 활용한 테스트코드
4. EC2, CodePipeline를 활용한 클라우드에서의 CI/CD

등이 있습니다.

이 프로젝트는 제가 백엔드 개발자로서 실무를 하며 배우고 성장한 것들을 좀 더 직관적으로 전달하고자 함에 목적이 있습니다.

그래서 React, UI, 빠른 기능구현보다 Node.js Best practice에 따른 디렉토리 구조와 코드 스타일, 코드 모듈화(비지니스 로직과 DB 로직의 분리, 반복 코드 제거와 함수화 등) 등

실제 운영과 유지, 보수를 염두에 둔 포인트들을 지향하고 있습니다. 물론 더 배우고 적용해야할 것들이 많이 있지만 참고해주시면 감사하겠습니다.
