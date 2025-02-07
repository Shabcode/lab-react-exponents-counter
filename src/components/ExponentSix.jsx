const ExponentSix = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">
        {count}<sup>6</sup> = <span className="total">{Math.pow(count, 6)}</span>
      </p>
    </div>
  );
};

export default ExponentSix;









