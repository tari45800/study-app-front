import styled from 'styled-components';

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <div className="loginPageContent">
        <h1>로그인 페이지</h1>
        <div>준비 중 입니다:&#41;</div>
      </div>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  padding: var(--spacing-small);
  width: 100%;
  display: flex;
  justify-content: center;

  .loginPageContent {
    width: 100%;
    max-width: var(--desktop);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
