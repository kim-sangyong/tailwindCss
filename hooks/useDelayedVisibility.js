import { useState, useEffect } from 'react';

/**
 * 커스텀 훅: 특정 시간 이후에 상태를 true로 변경합니다.
 * @param {number} delay - 지연 시간 (밀리초)
 * @returns {boolean} - 상태 (true/false)
 */
function useDelayedVisibility(delay) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);  // 컴포넌트 언마운트 시 타이머 클리어
  }, [delay]);

  return isVisible;
}

export default useDelayedVisibility;