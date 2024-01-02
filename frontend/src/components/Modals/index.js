import Add from './Add.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';

const modals = {
  addChannel: Add,
  removeChannel: Remove,
  renameChannel: Rename,
};
// по типу окна вызываем необходимое модальное окно
const getModal = (type) => modals[type];

const getModalComponent = (type) => {
  if (type === null) return null;
  // if (!type) return null;

  const ModalComponent = getModal(type);

  return <ModalComponent />;
};

export default getModalComponent;
