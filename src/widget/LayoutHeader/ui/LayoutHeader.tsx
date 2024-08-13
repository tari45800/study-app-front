import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useThemeStore } from '../../../app/appStore';

export const LayoutHeader = () => {
  // useThemeStore를 훅처럼 호출하여 상태와 함수를 가져옵니다.
  const { toggleDarkMode } = useThemeStore((state) => ({
    toggleDarkMode: state.toggleDarkMode,
  }));

  const removeCite = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <LayoutHeaderContainer>
      <div className="layoutHeaderContent">
        <Link to={'/'}>
          <div className="headerIcon headerIconLeft">
            <FontAwesomeIcon
              className="faPlaneDeparture"
              icon={faPlaneDeparture}
            />
            타이머
          </div>
        </Link>

        <div className="headerFeatureContauner">
          <Link className="headerIcon" to={'/login'}>
            <div>로그인</div>
          </Link>
          <Link className="headerIcon" to={'/notice'}>
            <div>알림</div>
          </Link>
          <div className="headerIcon darkModeIcon" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className="HeaderButtonBox">
            <Button theme="icon" onClick={removeCite}>
              값 삭제
            </Button>
          </div>
        </div>
      </div>
    </LayoutHeaderContainer>
  );
};

const LayoutHeaderContainer = styled.div`
  padding: var(--spacing-small);
  display: flex;
  justify-content: center;
  align-items: center;

  .layoutHeaderContent {
    flex: 1;
    max-width: var(--desktop);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerFeatureContauner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;
    width: 15rem;
  }

  .HeaderButtonBox {
    flex: 1;
  }

  .headerIcon {
    color: var(--header-icon-color);
    font-size: 1rem;
    font-weight: bold;
  }

  .headerIconLeft {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }

  .faPlaneDeparture {
    font-size: 1.7rem;
    margin-right: 0.5rem;
  }

  .darkModeIcon {
    cursor: pointer;
  }
`;
