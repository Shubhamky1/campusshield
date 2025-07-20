import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    category: '',
    message: '',
    trackingId: '',
    status: 'Submitted',
  });

  const [submitted, setSubmitted] = useState(false);
  const categories = ['Harassment', 'Ragging', 'Mental Health', 'Infrastructure', 'Discrimination'];

  const generateTrackingId = () => {
    return 'CS-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateTrackingId();
    setForm({ ...form, trackingId: id });
    setSubmitted(true);
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
      }}
    >
      <div className="card shadow-lg w-100" style={{ maxWidth: '700px', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <div className="card-body">
          <h2 className="card-title mb-4">CampusShield – Anonymous Reporting Tool</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Issue Category</label>
                <select
                  className="form-select"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Describe Your Issue</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your concern..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit Anonymously
              </button>
            </form>
          ) : (
            <div className="alert alert-success">
              <p>Your report has been submitted anonymously.</p>
              <p>
                <strong>Tracking ID:</strong> {form.trackingId}
              </p>
              <p>
                <strong>Status:</strong> {form.status}
              </p>
              <button
                className="btn btn-secondary mt-3"
                onClick={() => {
                  setForm({ category: '', message: '', trackingId: '', status: 'Submitted' });
                  setSubmitted(false);
                }}
              >
                Submit Another Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
