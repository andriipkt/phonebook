import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';

const Modal = ({ toggle, contactId }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyEsc = event => {
      if (event.code === 'Escape') {
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyEsc);
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return 'invalid name';
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name || number) {
      const updatedContact = {};
      if (name) {
        updatedContact.name = name;
      }
      if (number) {
        updatedContact.number = number;
      }

      dispatch(
        editContact({
          contactId,
          body: updatedContact,
        })
      );

      setName('');
      setNumber('');
      toggle();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="modal fade show"
      style={{
        display: 'block',
        backdropFilter: 'blur(5px)',
      }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Edit menu</h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={toggle}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <label htmlFor="ModalNameInput" className="form-label">
                Edited name
              </label>
              <input
                className="form-control"
                style={{ marginBottom: '16px' }}
                id="ModalNameInput"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleChange}
                value={name}
              />
              <label htmlFor="ModalNumberInput" className={`form-label`}>
                Edited number
              </label>
              <input
                className="form-control"
                style={{ marginBottom: '20px' }}
                id="ModalNumberInput"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleChange}
                value={number}
              />
              {name || number ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ display: 'block', marginLeft: 'auto' }}
                >
                  Edit Contact
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ display: 'block', marginLeft: 'auto' }}
                  disabled
                >
                  Edit Contact
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#popup-root')
  );
};

export default Modal;
