import { useToast } from 'vue-toastification';
const toast = useToast();

const onlineListener = () => {
  window.addEventListener('online', () => {
    return toast.success('Online', {
      timeout: 2000,
      closeOnClick: true,
    });
  });
  window.addEventListener('offline', () => {
    return toast.error('Offline', {
      timeout: 2000,
      closeOnClick: true,
    });
  });
};

export default onlineListener;
