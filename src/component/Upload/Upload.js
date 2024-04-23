import React from "react";
import axios from "axios";
import Api, { USER_API_URL } from "../../Data/Api";
import { Link } from "react-router-dom";

class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
      caption: "",
      responseArray: [],
      imagesList: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeCap = this.handleInputChangeCap.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files,
      responseArray: [],
    });
  }
  handleInputChangeCap(event) {
    this.setState({
      caption: event.target.value,
    });
  }

  onSubmit() {
    if (!this.state.selectedFile) {
      alert("Please select a file!");
      return false;
    }
    const data = new FormData();

    // for (let i = 0; i < this.state.selectedFile.length; i++) {
    //   data.append("file[]", this.state.selectedFile[i]);
    //   data.append("caption", "testing");
    // }

    console.log("this.state.selectedFile[0]", this.state.selectedFile[0]);
    data.append("file[]", this.state.selectedFile[0]);
    data.append("Cpa", this.state.caption);

    axios
      .post(`${USER_API_URL}/up.php`, data, {
        // receive two parameter endpoint url ,form data
      })
      .then(
        (res) => {
          // then print response status
          this.setState({ responseArray: res.data });
          //   this.resetFile();
          console.log("res.data", res.data[0]);
          if (res.data[0].status == "success") {
            let dataV = {
              Link: res.data[0].name,
              caption: this.state.caption,
            };
            Api.saveUpload(dataV).then((res) => {
              console.log(res.data);
            });
          }
        },
        (error) => {
          alert(error);
        }
      );
    window.location.reload();
  }
  componentDidMount() {
    this.getAppoitDate();
  }

  async getAppoitDate() {
    await Api.getImage().then((res) => {
      console.log("res.data ", res.data);
      if (res.data == "No data") {
        this.setState({ imagesList: [] });
      } else {
        this.setState({ imagesList: res.data });
      }
    });
  }
  async DeleteImg(a) {
    await Api.DelImg(a).then((res) => {
      // console.log("res.data ", res.data);
      this.getAppoitDate();
    window.location.reload();

    });
  }
  render() {
    return (
      <div>
        <div className="container" align="center">
          <div className=" ">
            <h2>Manage Community Images</h2>

            <Link to="/">Home</Link> |
            <Link to="/Admin"> Admin</Link>

            <div className="row">
              <div className="col">
                <label className="text-white">Select File</label>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col">
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="text"
                  placeholder="Image caption"
                  onChange={this.handleInputChangeCap}
                />
              </div>

              <div className="col">
                <br />

                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={() => this.onSubmit()}
                  style={{ marginTop: "10px" }}
                >
                  Store
                </button>
              </div>
            </div>

            <br />
            <br />
            <br />
            <div className={" "}>
              {this.state.imagesList.length > 0 ? (
                this.state.imagesList.map((res, i) => (
                  <div>
                    <br />
                    <div className="row">
                      <div className="col">{i}</div>
                      <div className="col-5">{res.caption}</div>
                      <div className="col">
                        <img
                          src={`${USER_API_URL}/` + res.Link}
                          style={{ width: "50px" }}
                        />
                      </div>
                      <div className="col">
                        <label onClick={() => this.DeleteImg(res.Id)}>
                          Delete
                        </label>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))
              ) : (
                <span>No images</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
