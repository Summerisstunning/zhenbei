import { useState, useEffect } from 'react';

// 生成唯一的用户ID
const generateUserId = () => {
  return 'user_' + Math.random().toString(36).substr(2, 9);
};

export const useAuth = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // 从localStorage获取已存在的userId
    let storedUserId = localStorage.getItem('userId');
    
    // 如果没有userId，创建一个新的
    if (!storedUserId) {
      storedUserId = generateUserId();
      localStorage.setItem('userId', storedUserId);
    }
    
    setUserId(storedUserId);
  }, []);

  return { userId };
};
