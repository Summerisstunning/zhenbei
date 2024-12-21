import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

export interface EmotionRecord {
  id: string;
  userId: string;
  date: string;
  emotion: string;
  intensity: number;
  trigger: string;
  thoughts: string;
  bodyFeelings: string;
  behaviors: string;
  createdAt: string;
}

const STORAGE_KEY = 'emotion_records';
const MAX_DAYS = 365;

export const useEmotionRecords = () => {
  const { userId } = useAuth();
  const [records, setRecords] = useState<EmotionRecord[]>([]);

  // 加载数据
  useEffect(() => {
    if (!userId) return;

    const loadRecords = () => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const allRecords: EmotionRecord[] = JSON.parse(storedData);
        // 只加载当前用户的记录，并且只保留365天内的数据
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - MAX_DAYS);
        
        const filteredRecords = allRecords.filter(record => 
          record.userId === userId && 
          new Date(record.createdAt) > cutoffDate
        );
        
        setRecords(filteredRecords);
      }
    };

    loadRecords();
    // 监听其他标签页的变化
    window.addEventListener('storage', loadRecords);
    return () => window.removeEventListener('storage', loadRecords);
  }, [userId]);

  // 添加新记录
  const addRecord = (newRecord: Omit<EmotionRecord, 'id' | 'userId' | 'createdAt'>) => {
    if (!userId) return;

    const record: EmotionRecord = {
      ...newRecord,
      id: Math.random().toString(36).substr(2, 9),
      userId,
      createdAt: new Date().toISOString(),
    };

    const storedData = localStorage.getItem(STORAGE_KEY);
    const allRecords: EmotionRecord[] = storedData ? JSON.parse(storedData) : [];
    
    // 添加新记录
    const updatedRecords = [...allRecords, record];
    
    // 清理超过365天的数据
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - MAX_DAYS);
    const cleanedRecords = updatedRecords.filter(
      record => new Date(record.createdAt) > cutoffDate
    );

    // 保存到localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanedRecords));
    
    // 更新状态
    setRecords(prev => [...prev, record]);
  };

  // 获取指定日期范围的记录
  const getRecordsByDateRange = (startDate: Date, endDate: Date) => {
    return records.filter(record => {
      const recordDate = new Date(record.createdAt);
      return recordDate >= startDate && recordDate <= endDate;
    });
  };

  return {
    records,
    addRecord,
    getRecordsByDateRange,
  };
};
