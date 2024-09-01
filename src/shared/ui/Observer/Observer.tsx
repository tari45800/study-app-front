import styled from 'styled-components';
import { useRef, useEffect, useState, ReactNode } from 'react';

interface ObserverContainerProps {
  isVisible: boolean;
  delay?: number;
}

const ObserverContainer = styled.div<ObserverContainerProps>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : '20px')});
  transition:
    opacity 0.5s,
    transform 0.5s;
  transition-delay: ${(props) => (props.delay ? `${props.delay}s` : '0.2s')};
`;

interface ObserverProps {
  children: ReactNode;
  delay?: number;
  id: string; // 로컬 스토리지 키로 사용할 ID
}

function Observer({ children, delay, id }: ObserverProps) {
  // 로컬 스토리지에서 초기 상태를 가져옴
  const initialVisibility = localStorage.getItem(`observer-${id}`) === 'true';
  const [isVisible, setIsVisible] = useState<boolean>(initialVisibility);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 초기 상태가 true이면 Observer를 설정하지 않음
    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            localStorage.setItem(`observer-${id}`, 'true');
          }
        });
      },
      { threshold: 0.2 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isVisible, id]);

  return (
    <ObserverContainer ref={observerRef} isVisible={isVisible} delay={delay}>
      {children}
    </ObserverContainer>
  );
}

export default Observer;
