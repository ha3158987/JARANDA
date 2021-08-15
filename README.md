# 🧒 Jaranda FE Assignment

---

# 👩🏻‍💻 [개인과제] Refactoring

## 1️⃣ 변경사항

- util 재정의 및 `usePagination` custom hook 생성
- 라이브러리(lodash) 사용 부분 직접 구현
- 폴더 구조 및 import 방식 변경

## 2️⃣ 리팩토링 상세내역 보러가기

<a href="https://hyunahpark.notion.site/00b7693449284041bca5abae14bea0db" target="_blank"> Click</a> 시 Notion으로 이동

---

# 🚀 시작하기

### 설치

```
 yarn
```

### 시작

```
yarn start
```

---

# 📒 팀 로그 보러가기

### <a href="https://nr2p.notion.site/nr2p/2021-Log-bef44b60fb944793a1586fc37ced1e8b" target="_blank">➡️ Click</a>

---

# 🎉 배포주소

## 테스트계정 (Id / Password)

> 안정화 버전 배포 링크:
> https://this-is-jaranda.netlify.app

> 개발 버전 배포 링크(실행상에 문제가 있을 수 있습니다!):
> https://this-is-jaranda-develop.netlify.app/

## 어드민

| ID    | Password |
| ----- | -------- |
| admin | admin123 |

## 선생님 </br>

| ID       | Password   |
| -------- | ---------- |
| teacher1 | teacher123 |

## 부모님

| ID      | Password  |
| ------- | --------- |
| parent1 | parent123 |

---

# 📝구현목록

### 메인

- [x] GNB(GlobalnavigationBar) 구현
- [x] 역할에 따른 라우팅 처리(학무보, 선생님, 관리자)
- [x] 계정별로 볼 수 있는 메뉴 설정
- [x] 상태관리를 위한 redux-tookit 적용
- [x] 404 페이지 구현

### 로그인

- [x] 로그인 UI 구현
- [x] email, password 입력 기능
- [x] 로그인 기능 구현
- [x] 로그인 실패시 에러 메시지 노출 기능 구현

### 회원가입

- [x] 회원가입 UI 구현
- [x] 아이디, 비밀번호, 이름, 나이 입력 기능 구현
- [x] 사용자 역할 선택 기능 구현
- [x] 주소 입력 기능(팝업) 구현
- [x] 신용카드 정보 입력 기능(팝업) 구현

### 관리자 페이지

- [x] 관리자 페이지 UI 작업
- [x] DataTable 컴포넌트 구현
- [x] Pagenation 구현
- [x] 검색 기능 구현
- [x] 검색 기능 debouncing 적용
- [x] DropDown 구현
- [x] admin페이지 내 SignUp Modal 구현
- [x] 계정 정보 테이블 UI 구현
- [x] 계정 생성 기능 구현
- [x] 계정 갯수 표시

---
