interface AlertProps{
  onClose: ()=> void;
}
function Alert({onClose}: AlertProps) {

  return (
    <div className="alert alert-warning alert-dismissible" > Alert
      <button type="button" className="btn-close" onClick={onClose} ></button>
    </div>
  );
}

export default Alert;
