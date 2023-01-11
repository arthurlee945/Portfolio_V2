export function debounce(callback: (...args: unknown[]) => void, delay = 500) {
  let timeout: NodeJS.Timeout;

  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export function throttle(callback: (...args: unknown[]) => void, delay = 500) {
  let waiting = false;
  let waitingArgs: unknown[] | null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      waiting = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: unknown[]) => {
    if (waiting) {
      waitingArgs = args;
      return;
    }

    callback(...args);
    waiting = true;

    setTimeout(timeoutFunc, delay);
  };
}

export function basicThrottle(callback: (...args: unknown[]) => void, delay = 500) {
  let waiting = false;

  return (...args: unknown[]) => {
    if (waiting) return;

    callback(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}
