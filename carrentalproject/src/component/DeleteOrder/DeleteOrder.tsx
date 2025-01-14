import React from 'react';
import { IOrder } from "../Entities/Entities.type";
import 'bootstrap/dist/css/bootstrap.min.css';

interface DeleteOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  order: IOrder;
}

const DeleteOrderModal = ({ isOpen, onClose, onDelete, order }: DeleteOrderModalProps) => {
  if (!isOpen) return null;


  return (
    <div className="modal show" tabIndex={-1} style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Order</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete the order for {order.Car.Name}?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
