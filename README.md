# Javascript Framework 테스트
React, Angular 2, Vue, Ember, Backbone로 간단하게 만들어 본 예제.

## 기능
- Dropbox API 인증 토큰 가져와서 로컬스토리지에 저장
- Dropbox API를 사용해서 디렉토리를 가져와서 리스트에 표시

## 프로젝트 가져오기

```bash
git clone https://github.com/jkcjkc82/js-framework.git
```

프로젝트를 가져온 후 각 프레임워크로 구분된 서브디렉토리에 있는 README.md 파일을 참고한다.

## 드롭박스 설정
각 프레임워크 디렉토리에서 login 액션이 있는 뷰 파일의 client_id를 자신에게 맞게 설정한다.

```javascript
        const para = {
            response_type: 'token',
            client_id: 'x2adb4mzqfp868e', // here
            redirect_uri: 'http://localhost:3000'
        };
```

클라이언트 키를 바꿨으면 드롭박스 앱 관리 페이지에서 Redirect URIs를 적절히 추가한다. 위와 같은 경우 http://localhost:3000를 추가하면 된다.