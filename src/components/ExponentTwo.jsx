const ExponentTwo = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {count}<sup>2</sup> = <span className="total">{Math.pow(count, 2)}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;