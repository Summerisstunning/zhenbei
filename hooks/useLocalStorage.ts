import { useState, useEffect } from 'react'

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // 获取初始值
  const readValue = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // 初始化和监听 storage 事件
  useEffect(() => {
    setStoredValue(readValue())

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        setStoredValue(JSON.parse(e.newValue))
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key])

  // 更新值的函数
  const setValue = (value: T) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value
      window.localStorage.setItem(key, JSON.stringify(newValue))
      setStoredValue(newValue)
      // 触发一个自定义事件，以便同一窗口的其他组件也能接收到更新
      window.dispatchEvent(new Event('local-storage'))
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
