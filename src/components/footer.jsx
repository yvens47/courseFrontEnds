function Footer(props) {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div
          className="add-button"
          style={{ postion: "absolute", bottom: "10px", right: "0px" }}
        >
          <a className="btn btn-danger rounded-circle" href="/new">
            <i class="fas fa-plus"></i>
          </a>
        </div>
        <div className="row">
          <div className="col-md-8 ">
            <p>Copyright</p>
          </div>
        </div>
        <div className="row footer-links ">
          <div className="col-md-12 border-top">
            <p>Copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
