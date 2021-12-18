import { useEffect } from "react";

const useDisableScroll = (active: boolean) => {
  useEffect(() => {
    if (active) {
      blockScroll();
    } else {
      unblockScroll();
    }
  }, [active]);

  const blockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unblockScroll = () => {
    document.body.style.overflow = 'auto';
  }
}

export default useDisableScroll;