import React from 'react';

function ReceiptModal({ receipt, onClose }) {
  if (!receipt) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Checkout Successful!</h2>
        <div className="receipt-details">
          <p><strong>Receipt ID:</strong> {receipt.receiptId}</p>
          <p><strong>Name:</strong> {receipt.user.name}</p>
          <p><strong>Email:</strong> {receipt.user.email}</p>
          <p><strong>Timestamp:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
          <hr />
          <h3>Items:</h3>
          <ul>
            {receipt.items.map(item => (
              <li key={item.id}>
                {item.name} (x{item.qty}) - ${(item.price * item.qty).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${receipt.total}</h3>
        </div>
        <div className="modal-actions">
          <button type="button" className="btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ReceiptModal;