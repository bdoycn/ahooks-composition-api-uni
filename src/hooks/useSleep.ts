const defaultSleepTime = 1000

/**
 * 睡眠指定时间
 * @param [time=defaultSleepTime] 睡眠时间(毫秒)
 */
export default function useSleep(time: number = defaultSleepTime): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time))
}
