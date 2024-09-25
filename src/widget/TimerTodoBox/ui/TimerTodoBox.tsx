import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { Observer } from '../../../shared/ui/Observer/Observer';
import { TodoBox } from '../../TodoBox';
import { TimerPostModal } from '../../../shared/lib/TimerPostModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { PostDatasTyoe } from '../../../shared/model/type';

interface Props {
  postDatas: PostDatasTyoe;
}

export const TimerTodoBox = ({ postDatas }: Props) => {
  return (
    <TimerTodoBoxContainer>
      <div className="timerLeftAbsoluteBox">
        <Observer id="timerPageBottomBackGround" delay={0.5}>
          <BackGround>
            <div className="timerPageBottom">
              {/* 투두 박스 */}
              <div className="todoBox">
                <div></div>
                <TodoBox />
              </div>

              {/* 타이머 종료버튼 */}
              <TimerPostModal to="/resultPage" postDatas={postDatas}>
                <FontAwesomeIcon
                  className="resetTimeIcon"
                  icon={faCircleXmark}
                />
              </TimerPostModal>
            </div>
          </BackGround>
        </Observer>
      </div>
    </TimerTodoBoxContainer>
  );
};

const TimerTodoBoxContainer = styled.div``;
